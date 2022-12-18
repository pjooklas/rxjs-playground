import { Observable } from 'rxjs';

const someObservable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000); 
  setTimeout(() => subscriber.next('Charlie'), 4000); 
  // subscriber.complete();
});

console.log('Subscription 1 starts');
const subscription = someObservable$.subscribe(value => console.log('Subscription 1:',value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  const subscription = someObservable$.subscribe(value => console.log('Subscription 2:',value));
}, 1000);
 