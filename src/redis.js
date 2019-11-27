const redis = require("async-redis");

const { redis: config } = require('./config')

client = redis.createClient(config)

client.on("error", function (err) {
  console.log("Error " + err);
});

module.exports = client;