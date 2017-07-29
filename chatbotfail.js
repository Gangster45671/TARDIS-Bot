// THIS IS TOTAL BULLSHIT
//NOTHING MAKES SENSE!


var Discord = require('discord.io');
var auth = require('./auth.json');
// Configure logger settings
var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

//clever bot stuff
var cleverbot = require("cleverbot.io"),
cbot = new cleverbot("zMdX2z3gGforjdFO", "VIUFZsQDr44Y6nhTW9muJ5hkxN14o3qq");
cbot.setNick("Jack");

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

	cbot.create(function (err, session) {
		logger.info('bot created');
  		// session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
 		// Woo, you initialized cleverbot.io.  Insert further code here
 		bot.on('message', function (user, userID, channelID, message, evt) {
 			if (user !== bot.username) {
 				logger.info('request made ('+message+')');
 				logger.info('Debug: '+err+' / '+session);
 				cbot.ask(message, function (err, response) {
  				logger.info(message+' -> '+response);
  					bot.sendMessage({
            		    to: channelID,
            		    message: response
            		});
            		if (err) {
            			logger.info('bot crashed!');
            		}
				});
 			}
		});
	});

