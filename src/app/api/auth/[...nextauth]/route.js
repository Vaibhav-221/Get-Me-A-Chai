import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/app/Model/User";
import connectDB from "@/app/db/connectdb";

const buildGithubUserData = (user, profile) => {
  const email =
    user?.email ||
    profile?.email ||
    `${profile?.login || user?.name || "github-user"}@github.local`;

  const usernameBase =
    (user?.name || profile?.login || "github-user")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "github-user";

  return {
    name: user?.name || profile?.login || "GitHub User",
    email,
    username: usernameBase,
  };
};

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        await connectDB();

        const githubUser = buildGithubUserData(user, profile);
        let currentUser = await User.findOne({
          $or: [{ email: githubUser.email }, { username: githubUser.username }],
        });

        if (!currentUser) {
          currentUser = await User.create({
            name: githubUser.name,
            email: githubUser.email,
            username: githubUser.username,
          });
        } else {
          currentUser.name = currentUser.name || githubUser.name;
          currentUser.email = currentUser.email || githubUser.email;
          currentUser.username = currentUser.username || githubUser.username;
          await currentUser.save();
        }

        user.email = currentUser.email;
        user.name = currentUser.username || currentUser.name;
      }

      return true;
    },

    async session({ session }) {
      if (!session?.user?.email) return session;

      const dbUser = await User.findOne({ email: session.user.email });
      if (!dbUser) return session;

      session.user.name = dbUser.username || dbUser.name;
      return session;
    },
  },
};

const handler = NextAuth(authOptions); // handler is now a function
export { handler as GET, handler as POST };
