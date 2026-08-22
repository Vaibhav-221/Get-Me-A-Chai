import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/app/Model/User";
import Payment from "@/app/Model/payment";
import connectDB from "@/app/db/connectdb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = await User.create({
            name: user.name,
            username: user.email.split("@")[0],
          });
        } else {
          user.name = currentUser.username;
        }
      }
      return true;
    },
  },
  callbacks: {
    async session({ session, token, user }) {
      const dbUser = await User.findOne({ email: session.user.email });
      console.log(dbUser);
      session.user.name = dbUser.username;
      return session;
    },
  },
};

const handler = NextAuth(authOptions); // handler is now a function
export { handler as GET, handler as POST };
