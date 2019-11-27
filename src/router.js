const Router = require('koa-router');
const config = require('./config');
const { bot } = require('./bot');
const Markup = require('telegraf/markup');
const redis = require('./redis')

const router = new Router();

router.post('/click', async (ctx) => {
  const { clicks, hash } = ctx.request.body;
  const count = clicks >= 1000 ? `${(t / 1000).toFixed(1)}k` : clicks
  const messageData = JSON.parse(await redis.get(`${config.redisPrefix}${hash}`));
  await bot.telegram.editMessageReplyMarkup(messageData.channelId, messageData.messageId, messageData.inlineMessageId, Markup.inlineKeyboard([Markup.urlButton(`🔥КУПИТЬ🔥 ${count}`, messageData.url)]))

  if (!messageId) {
    ctx.throw(404, 'not found');
  } else {

  }

});


module.exports = router.routes();
