import { Observable } from 'rxjs';

var observable = Observable.create((observer: any) => {
  observer.next('Hello World');
  observer.next('Hello Again');
  observer.complete();
  observer.next('Bay');
});

observable.subscribe(
  (response: any) => {
    logItem(response, 1);
  },
  (error: any) => logItem('Error ' + error, 1),
  () => logItem('Completed', 1)
);

function logItem(value: any, column: number) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(value);
  node.appendChild(textNode);
  if (column === 2) {
    document.getElementById('list2').appendChild(node);
  } else if (column === 1) {
    document.getElementById('list1').appendChild(node);
  }

}