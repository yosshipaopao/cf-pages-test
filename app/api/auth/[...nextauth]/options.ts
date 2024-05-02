import NextAuth from "next-auth";
import type {NextAuthConfig} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const authOptions: NextAuthConfig = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    })
  ]
};

export default authOptions;