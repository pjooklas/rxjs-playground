import { Observable } from 'rxjs';

const observable$ = new Observable<number>(sub => {
  console.log('Observable executed');
  let i = 0; 

  const intervalId = setInterval(() => {
    console.log('emitted', i);
    sub.next(i++)
  }, 2000);

  return () => {
    clearInterval(intervalId);
  }
});

console.log('Before subscribe');
const subscritption = observable$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('complete'),
});
console.log('After subscribe');

setTimeout(() => {
  console.log('Unsubscribe')  
  subscritption.unsubscribe()
} , 7000);