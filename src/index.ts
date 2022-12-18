import { Observable } from 'rxjs';

const someObservable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000); 
  setTimeout(() => subscriber.next('Charlie'), 4000); 
  // subscriber.complete();
});

// const observer = {
//   next: value => console.log('value', value)
// }

// someObservable$.subscribe(observer)
const subscription = someObservable$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('unsubscirbe');

  subscription.unsubscribe()}, 3000);
 