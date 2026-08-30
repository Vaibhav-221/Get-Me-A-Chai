import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/app/Model/User";
import connectDB from "@/app/db/connectdb";
import GoogleProvider from "next-auth/providers/google";

const buildUserData = (user, profile, provider) => {
  const email =
    user?.email ||
    profile?.email ||
    `${profile?.login || user?.name || `${provider}-user`}@${provider}.local`;

  const usernameBase =
    (user?.name || profile?.login || `${provider}-user`)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || `${provider}-user`;

  return {
    name: user?.name || profile?.login || `${provider} User`,
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

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github" || account?.provider === "google") {
        await connectDB();

        const providerUser = buildUserData(user, profile, account.provider);

        let currentUser = await User.findOne({
          $or: [
            { email: providerUser.email },
            { username: providerUser.username },
          ],
        });

        if (!currentUser) {
          currentUser = await User.create({
            name: providerUser.name,
            email: providerUser.email,
            username: providerUser.username,
          });
        } else {
          currentUser.name = currentUser.name || providerUser.name;

          currentUser.email = currentUser.email || providerUser.email;

          currentUser.username = currentUser.username || providerUser.username;

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
