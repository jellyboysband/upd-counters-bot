require('dotenv').config()
const config = {
  port: +process.env.PORT || 3000,
  channel: process.env.CHANNEL,
  tgToken: process.env.TELEGRAM_TOKEN,
  proxy: process.env.PROXY || false,
  redisPrefix: process.env.REDIS_PREFIX,
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: +process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || false
  }

};

module.exports = config;
