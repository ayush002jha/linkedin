import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb";

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.JWT_SECRET, // JSON Web TOken
    // Custom SignIn Page
    pages:{
        signIn: "/dashb"
    },
    // We are using the JWT to store the User Session
    session:{
        strategy: "jwt",
        maxAge: 3600 // When to expire the JWT access token and signout 
    },
    providers: [
        GoogleProvider({
            // Get these id and secret from GCP
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
})

export { handler as GET, handler as POST }