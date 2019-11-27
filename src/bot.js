const Agent = require('socks-proxy-agent');
const Telegraf = require('telegraf')
const config = require('./config')

let bot;
if (config.proxy) {
    bot = new Telegraf(config.tgToken, {
        telegram: {
            agent: new Agent(config.proxy),
        },
    });
} else {
    bot = new Telegraf(config.tgToken);
}
module.exports = { bot };