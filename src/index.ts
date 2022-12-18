import { Observable } from 'rxjs';

const observable$ = new Observable<string>(sub => {
  console.log('Observable executed');
  sub.next('Alice');
  sub.next('Ben');
  setTimeout(() => {
      sub.next('Charlie'),
     sub.complete()
  }, 2000);

  return () => {
    console.log('Teardown');
  }
});

console.log('Before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('complete'),
});
console.log('After subscribe');