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
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          const newUser = await User.create({
            name: user.name,
            username: username.split("@")[0],
          });
        } else {
          user.name = currentUser.username;
        }
      }
      return true;
    },
    callbacks: {
      async session({ session, token, user }) {
       const currentUser = await User.findOne({ email: session.user.email });
       console.log(currentUser);
       session.user.name = currentUser.username;
        return session;
      },
    },
  },
};

export { authOptions as GET, authOptions as POST };
