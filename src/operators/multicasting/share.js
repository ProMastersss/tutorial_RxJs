import { timer } from "rxjs";
import { tap, mapTo, share } from "rxjs/operators";
import { description, output, title } from "../../App";

title("share");

description(
  `Испускает значение подписчикам подписанных на shared без повторения выполнения операторов у observable, лишь разовов выполняются. Подписчикам подписанных до share значение проходит по всем операторам`
);

const source = timer(1000);
const example = source.pipe(
  tap(() => output("***SIDE EFFECT***")),
  mapTo("***RESULT***")
);

/*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
*/
const subscribe = example.subscribe((val) => output(val));
const subscribeTwo = example.subscribe((val) => output(val));

//share observable among subscribers
const sharedExample = example.pipe(share());
/*
  ***SHARED, один раз выполняются операторы, остальным подписчикам рассылается это значение***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/
const subscribeThree = sharedExample.subscribe((val) => output(val));
const subscribeFour = sharedExample.subscribe((val) => output(val));
