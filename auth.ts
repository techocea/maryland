import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],

  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.email = user.email;

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,

  pages: {
    signIn: "/sign-in",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
});
