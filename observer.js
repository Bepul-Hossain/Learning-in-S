class Observer {

    subscribers=[];

    subscription(subscriber){
        this.subscribers.push(subscriber);
    }

    unsubscription(subscriber){
        this.subscribers = this.subscribers.filter(function (item) {
            if (item !== subscriber) {
                return item;
            }
        })
    }

    notify(event){
        this.subscribers.forEach(function(subscriber){
            subscriber(event)
        })
    }
}

const subscriber1 = function(event){
    console.log("subscriber 1 "+event);
}

const subscriber2 = function(event){
    console.log("subscriber 2 "+event);
}

const subscriber3 = function(event){
    console.log("subscriber 3 "+event);
}


const p = new Observer();

p.subscription(subscriber1);
p.subscription(subscriber2);
p.notify("event no #1");
p.unsubscription(subscriber1);
p.notify('event no #2');
p.subscription(subscriber3);
p.notify('event no #3');