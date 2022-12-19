import { Observable } from 'rxjs';

const observable$ = new Observable<string>(sub => {
  console.log('Observable executed');
  sub.next('Alice');
  sub.next('Ben');
  setTimeout(() => sub.next('Charlie'), 2000);
  setTimeout(() => sub.error(new Error('Failure')), 4000);

  return () => {
    console.log('Teardown');
  }
});

console.log('Before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('complete'),
});
console.log('After subscribe');