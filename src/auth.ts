import { SvelteKitAuth } from '@auth/sveltekit';
import type {SvelteKitAuthConfig} from "@auth/sveltekit";
import DiscordProvider from '@auth/sveltekit/providers/discord';

const authOptions: SvelteKitAuthConfig = {
  secret: process.env.SECRET,
  trustHost: true,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: { scope: 'identify email guilds' },
      },
    })
  ]
};

export const { handle } = SvelteKitAuth(authOptions);