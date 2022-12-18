"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var someObservable$ = new rxjs_1.Observable(function (subscriber) {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(function () { return subscriber.next('Ben'); }, 2000);
    setTimeout(function () { return subscriber.next('Charlie'); }, 4000);
    // subscriber.complete();
});
console.log('Subscription 1 starts');
var subscription = someObservable$.subscribe(function (value) { return console.log('Subscription 1:', value); });
setTimeout(function () {
    console.log('Subscription 2 starts');
    var subscription = someObservable$.subscribe(function (value) { return console.log('Subscription 2:', value); });
}, 1000);
