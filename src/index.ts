import { ChannelType, Client } from "discord.js";

const client = new Client({intents: []});
const channel = client.channels.cache.get("");
if (channel?.isTextBased() && channel.type === ChannelType.GuildText) {
  // `channel` must be of type `TextChannel` (discord.js class) because of type guards up
  `should not fail: ${channel.toString()}`;
  // Fails with :
  // 'channel' may evaluate to '[object Object]' when stringified @typescript-eslint/no-base-to-string
}