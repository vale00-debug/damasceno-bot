const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const risposte = {
  "ciao": "Pace a te, figlio della verità. In che posso aiutarti?",
  "chi sei": "Io sono Giovanni, detto il Damasceno. Difensore delle icone e servo del Verbo incarnato.",
  "icone": "Le icone non sono idoli, ma finestre sul Cielo. Rappresentano il Verbo fatto carne.",
  "islam": "L'Islam nega la divinità di Cristo e proibisce le immagini sacre. Lo combattiamo con la verità.",
  "maometto": "Maometto fu un falso profeta che negò l'incarnazione del Figlio di Dio.",
  "citazione": "«Non adoro la materia, ma il Creatore della materia, che per me divenne carne.»",
  "eresia": "L'iconoclastia è un grave errore: chi rifiuta le icone, nega il Cristo incarnato.",
  "preghiera": "O Cristo, immagine del Padre invisibile, illumina i nostri cuori e rafforza la fede.",
  "cristo": "Il Verbo si fece carne per la nostra salvezza. La sua immagine è degna di venerazione.",
};

client.once("ready", () => {
  console.log("San Giovanni Damasceno è online.");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const contenuto = message.content.toLowerCase();

  for (const chiave in risposte) {
    if (contenuto.includes(chiave)) {
      message.reply(risposte[chiave]);
      return;
    }
  }

  message.reply("Sono San Giovanni Damasceno. Chiedimi di eresie, icone, Islam, Cristo o fede.");
});

client.login(process.env.DISCORD_TOKEN);
