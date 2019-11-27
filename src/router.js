const Router = require('koa-router');
const config = require('./config');
const { bot } = require('./bot');
const Markup = require('telegraf/markup');
const redis = require('./redis')

const router = new Router();

router.post('/click', async (ctx) => {
  const { clicks, hash } = ctx.request.body;
  const count = clicks >= 1000 ? `${((clicks + 1) / 1000).toFixed(1)}k` : (clicks + 1)
  const messageData = JSON.parse(await redis.get(`${config.redisPrefix}${hash}`));
  try {
    await bot.telegram.editMessageReplyMarkup(messageData.channelId, messageData.messageId, messageData.inlineMessageId, Markup.inlineKeyboard([Markup.urlButton(`🔥КУПИТЬ🔥 ${count}`, messageData.url)]))
  } catch (err) {
    console.error(err)
  }
});


module.exports = router.routes();
