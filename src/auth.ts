
import { SvelteKitAuth } from "@auth/sveltekit"
import DiscordProvider from "@auth/sveltekit/providers/discord"
import {SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private" 

export const { handle } = SvelteKitAuth({
  secret: SECRET,
  providers: [
    DiscordProvider({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      authorization: {
        params: { scope: 'identify email guilds' },
      },
    })
  ],
}) 