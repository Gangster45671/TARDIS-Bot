//test for cleverbot.io API


// Configure logger settings
var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
//clever bot stuff
var cleverbot = require("cleverbot.io"),
cbot = new cleverbot("zMdX2z3gGforjdFO", "VIUFZsQDr44Y6nhTW9muJ5hkxN14o3qq");
cbot.setNick("Jack");

cbot.create(function (err, session) {
	logger.info('Debug: '+err+' / '+session);
  // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
  logger.info("cbot created")
  // Woo, you initialized cleverbot.io.  Insert further code here
cbot.ask("hello!", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});

});