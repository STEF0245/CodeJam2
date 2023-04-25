const { Client, Intents, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: 3276799,
});

// Custom bad words list
const badWordsList = ['4r5e', ' 5h1t', ' 5hit', ' a55', ' anal', ' anus', ' ar5e', ' arrse', ' arse', ' ass', ' ass-fucker', ' asses', ' assfucker', ' assfukka', ' asshole', ' assholes', ' asswhole', ' a_s_s', ' b!tch', ' b00bs', ' b17ch', ' b1tch', ' ballbag', ' balls', ' ballsack', ' bastard', ' beastial', ' beastiality', ' bellend', ' bestial', ' bestiality', ' bi+ch', ' biatch', ' bitch', ' bitcher', ' bitchers', ' bitches', ' bitchin', ' bitching', ' bloody', ' blow job', ' blowjob', ' blowjobs', ' boiolas', ' bollock', ' bollok', ' boner', ' boob', ' boobs', ' booobs', ' boooobs', ' booooobs', ' booooooobs', ' breasts', ' buceta', ' bugger', ' bum', ' bunny fucker', ' butt', ' butthole', ' buttmuch', ' buttplug', ' c0ck', ' c0cksucker', ' carpet muncher', ' cawk', ' chink', ' cipa', ' cl1t', ' clit', ' clitoris', ' clits', ' cnut', ' cock', ' cock-sucker', ' cockface', ' cockhead', ' cockmunch', ' cockmuncher', ' cocks', ' cocksuck', ' cocksucked', ' cocksucker', ' cocksucking', ' cocksucks', ' cocksuka', ' cocksukka', ' cok', ' cokmuncher', ' coksucka', ' coon', ' cox', ' crap', ' cum', ' cummer', ' cumming', ' cums', ' cumshot', ' cunilingus', ' cunillingus', ' cunnilingus', ' cunt', ' cuntlick', ' cuntlicker', ' cuntlicking', ' cunts', ' cyalis', ' cyberfuc', ' cyberfuck', ' cyberfucked', ' cyberfucker', ' cyberfuckers', ' cyberfucking', ' d1ck', ' damn', ' dick', ' dickhead', ' dildo', ' dildos', ' dink', ' dinks', ' dirsa', ' dlck', ' dog-fucker', ' doggin', ' dogging', ' donkeyribber', ' doosh', ' duche', ' dyke', ' ejaculate', ' ejaculated', ' ejaculates', ' ejaculating', ' ejaculatings', ' ejaculation', ' ejakulate', 'f u c k', 'f u c k e r', 'f4nny', 'fag', 'fagging', 'faggitt', 'faggot', 'faggs', 'fagot', 'fagots', 'fags', 'fanny', 'fannyflaps', 'fannyfucker', 'fanyy', 'fatass', 'fcuk', 'fcuker', 'fcuking', 'feck', 'fecker', 'felching', 'fellate', 'fellatio', 'fingerfuck', 'fingerfucked', 'fingerfucker', 'fingerfuckers', 'fingerfucking', 'fingerfucks', 'fistfuck', 'fistfucked', 'fistfucker', 'fistfuckers', 'fistfucking', 'fistfuckings', 'fistfucks', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker', 'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme', 'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuk', 'fuker', 'fukker', 'fukkin', 'fuks', 'fukwhit', 'fukwit', 'fux', 'fux0r', 'f_u_c_k', 'gangbang', 'gangbanged', 'gangbangs', 'gaylord', 'gaysex', 'goatse', 'god', 'god-dam', 'god-damned', 'goddamn', 'goddamned', 'hardcoresex', 'hell', 'heshe', 'hoar', 'hoare', 'hoer', 'homo', 'hore', 'horniest', 'horny', 'hotsex', 'jack-off', 'jackoff', 'jap', 'jerk-off', 'jism', 'jiz', 'jizm', 'jizz', 'kawk', 'knob', 'knobead', 'knobed', 'knobend', 'knobhead', 'knobjocky', 'knobjokey', 'kock', 'kondum', 'kondums', 'kum', 'kummer', 'kumming', 'kums', 'kunilingus', 'l3i+ch', 'l3itch', 'labia', 'lust', 'lusting', 'm0f0', 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'masochist', 'master-bate', 'masterb8', 'masterbat*', 'masterbat3', 'masterbate', 'masterbation', 'masterbations', 'masturbate', 'mo-fo', 'mof0', 'mofo', 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked', 'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'muff', 'mutha', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'n1gga', 'n1gger', 'nazi', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers', 'nob', 'nob jokey', 'nobhead', 'nobjocky', 'nobjokey', 'numbnuts', 'nutsack', 'orgasim', 'orgasims', 'orgasm', 'orgasms', 'p0rn', 'pawn', 'pecker', 'penis', 'penisfucker', 'phonesex', 'phuck', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'pigfucker', 'pimpis', 'piss', 'pissed', 'pisser', 'pissers', 'pisses', 'pissflaps', 'pissin', 'pissing', 'pissoff', 'poop', 'porn', 'porno', 'pornography', 'pornos', 'prick', 'pricks', 'pron', 'pube', 'pusse', 'pussi', 'pussies', 'pussy', 'pussys', 'rectum', 'retard', 'rimjaw', 'rimming', 's hit', 's.o.b.', 'sadist', 'schlong', 'screwing', 'scroat', 'scrote', 'scrotum', 'semen', 'sex', 'sh!+', 'sh!t', 'sh1t', 'shag', 'shagger', 'shaggin', 'shagging', 'shemale', 'shi+', 'shit', 'shitdick', 'shite', 'shited', 'shitey', 'shitfuck', 'shitfull', 'shithead', 'shiting', 'shitings', 'shits', 'shitted', 'shitter', 'shitters', 'shitting', 'shittings', 'shitty', 'skank', 'slut', 'sluts', 'smegma', 'smut', 'snatch', 'son-of-a-bitch', 'spac', 'spunk', 's_h_i_t', 't1tt1e5', 't1tties', 'teets', 'teez', 'testical', 'testicle', 'tit', 'titfuck', 'tits', 'titt', 'tittie5', 'tittiefucker', 'titties', 'tittyfuck', 'tittywank', 'titwank', 'tosser', 'turd', 'tw4t', 'twat', 'twathead', 'twatty', 'twunt', 'twunter', 'v14gra', 'v1gra', 'vagina', 'viagra', 'vulva', 'w00se', 'wang', 'wank', 'wanker', 'wanky', 'whoar', 'whore', 'willies', 'willy', 'xrated', 'xxx'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    const content = message.content.toLowerCase(); // Convert message content to lowercase
    const author = message.author;
    const channel = message.channel;

    // Function to send log message as an embed
    const sendLogMessage = async (logContent) => {
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Inappropriate Content Detected')
            .setDescription(logContent)
            .setTimestamp();

        // Find the log channel
        const logChannel = message.guild.channels.cache.find(channel => channel.name === 'mod-logs');
        if (logChannel) {
            // Send log message
            await logChannel.send({ embeds: [embed] });
        }
    };

    // Function to delete original message
    const deleteOriginalMessage = async () => {
        await message.delete();
    };

    // Function to check for bad words
    const checkForBadWords = () => {
        const foundBadWords = badWordsList.filter(word => content.includes(word));
        return foundBadWords;
    };

    // Check for bad words
    const foundBadWords = checkForBadWords();

    if (foundBadWords.length > 0) {

        // Delete original message
        await deleteOriginalMessage();

        // Send warning message as an embed
        const warningContent = `${author}, your message contains inappropriate content and has been deleted.`;
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Inappropriate Content Warning')
            .setDescription(warningContent)
            .setTimestamp();
        await channel.send({ embeds: [embed] });

        // Send log message with found bad words, author, and channel information as an embed
        const logContent = `**Found Bad Words: **` + '`' + `${foundBadWords.join(', ')}` + '`' + `\n` +
            `**Author:** ${author} (*${author.id}*)\n` +
            `**Channel:** ${channel.name} (*${channel.id}*)\n` +
            '```\n' + `${message.content}` + '```';
        await sendLogMessage(logContent);
    }

    // Check if message is sent in #words channel
    if (channel.name === 'words') {
        // Extract words from "word1", "word2", "word3" format
        const wordsString = content.replace(/"/g, '').split(', '); // Replace double quotes (") with empty string ('') and split by commas

        // Wrap each word with single quotes ('), replace double quotes (") with single quotes ('), and join with commas
        const wrappedWords = wordsString.map(word => `'${word.replace(/"/g, "'")}'`).join(', ');

        // Send the wrapped words as a reply back to the same channel
        await channel.send(`Wrapped words: ${wrappedWords}`);
    }
});

const discordBotToken = process.env.DISCORD_BOT_TOKEN;

client.login(discordBotToken);