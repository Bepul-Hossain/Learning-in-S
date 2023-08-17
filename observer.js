class Observer {
    constructor(){
        this.subscribers=[];
    }

    sub(subscriber){
        this.subscribers.push(subscriber);
    }

    unsub(subscriber){
        this.subscribers = this.subscribers.filter(function (item) {
            if (item !== subscriber) {
                return item;
            }
        })
    }

    notify(event){
        this.subscribers.forEach(function(subscriber){
            subscriber.call("",event)
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

p.sub(subscriber1);
p.sub(subscriber2);
p.notify("event no #1");
p.unsub(subscriber1);
p.notify('event no #2');
p.sub(subscriber3);
p.notify('event no #3');