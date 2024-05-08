
import { SvelteKitAuth } from "@auth/sveltekit"
import DiscordProvider from "@auth/sveltekit/providers/discord"
import {SECRET, DISCORD_ID,DISCORD_SECRET } from "$env/static/private" 

export const { handle } = SvelteKitAuth({
  secret: SECRET,
  providers: [
    DiscordProvider({
      clientId: DISCORD_ID,
      clientSecret: DISCORD_SECRET,
      authorization: {
        params: { scope: 'identify email guilds' },
      },
    })
  ],
}) 