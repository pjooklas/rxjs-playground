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
// const observer = {
//   next: value => console.log('value', value)
// }
// someObservable$.subscribe(observer)
var subscription = someObservable$.subscribe(function (value) { return console.log(value); });
setTimeout(function () {
    console.log('unsubscirbe');
    subscription.unsubscribe();
}, 3000);
