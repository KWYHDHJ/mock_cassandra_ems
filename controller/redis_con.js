const redis = require('redis');
//用于操作redis数据
const redisClient = redis.createClient("redis://" + "192.168.21.4" + ":" + 6380, {
  auth_pass: "Fx123456",
});
//用于publish 
const redisClientSub = redis.createClient("redis://" + "192.168.21.4" + ":" + 6380, {
  auth_pass: "Fx123456",
});
redisClient.on('connect', function () {
  console.log('Connected to Redis server');
});

redisClient.on('error', function (err) {
  console.error('Error connecting to Redis server:', err);
});

module.exports = {
  redisClient,
  redisClientSub
};