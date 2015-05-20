var redis = require("redis")
  , subscriber = redis.createClient()
  , publisher  = redis.createClient();

subscriber.auth(1234);
subscriber.on("message", function(channel, message) {
  console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
});
 
subscriber.subscribe("test");

publisher.auth(1234);
publisher.publish("test", "haaaaai");
publisher.publish("test", "kthxbai");
