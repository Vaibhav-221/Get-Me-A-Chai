import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

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
    const client = await mongoose.connect(process.env.MONGO_URI)
  }
    return true
  }
}

}




export { authOptions as GET, authOptions as POST }