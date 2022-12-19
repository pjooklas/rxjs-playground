"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (sub) {
    console.log('Observable executed');
    var i = 0;
    var intervalId = setInterval(function () {
        console.log('emitted', i);
        sub.next(i++);
    }, 2000);
    return function () {
        clearInterval(intervalId);
    };
});
console.log('Before subscribe');
var subscritption = observable$.subscribe({
    next: function (value) { return console.log(value); },
    error: function (err) { return console.log(err.message); },
    complete: function () { return console.log('complete'); }
});
console.log('After subscribe');
setTimeout(function () {
    console.log('Unsubscribe');
    subscritption.unsubscribe();
}, 7000);
