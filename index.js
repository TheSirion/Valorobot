require("dotenv").config();
const Discord = require("discord.js");
const valorantApi = require("./valorantApi");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login(process.env.BOT_TOKEN || secrets.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!";

client.once("ready", () => {
  console.log("I'm online and ready!");
});

client.on("messageCreate", msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "card") {
      const uuid = args.shift();
      valorantApi.getPlayerCardByUuid(uuid).then(card => {
        msg.reply(
          `${card.name} (${card.player_name}) - ${card.level} - ${card.kd}`
        );
      });
    }
  }
});
