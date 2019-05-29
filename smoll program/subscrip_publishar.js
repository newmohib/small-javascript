var subscribers = [];

var publisher = {
    subscribe: function(callback){
        subscribers.push(callback);
    },
    publish: function(data){
        console.log('Publishing ......');
        for(var i = 0; i < subscribers.length; i++){
            var currentSubscriber = subscribers[i];
            if(typeof currentSubscriber == 'function'){
                currentSubscriber(data);
            }
        }
    },
};

publisher.subscribe(function(dataFromPublusher){
   console.log("Im sub 1", dataFromPublusher); 
});

publisher.subscribe(function(dataFromPublusher){
   console.log("Im sub 2", dataFromPublusher); 
});

publisher.publish("Button confirmed click");


//extra

var dataFromServer = yield readDataFromServer(200);
console.log("Im the last");

