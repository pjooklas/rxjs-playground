"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (sub) {
    console.log('Observable executed');
    sub.next('Alice');
    sub.next('Ben');
    setTimeout(function () {
        sub.next('Charlie'),
            sub.complete();
    }, 2000);
    return function () {
        console.log('Teardown');
    };
});
console.log('Before subscribe');
observable$.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('complete'); }
});
console.log('After subscribe');
