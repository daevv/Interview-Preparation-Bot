import 'dotenv/config.js';
import { Bot } from "grammy";

const bot = new Bot(process.env.BOT_API_KEY);


bot.command('start', async (ctx) => {
  console.log(ctx);
  await ctx.reply('Привет!');
});

bot.start();