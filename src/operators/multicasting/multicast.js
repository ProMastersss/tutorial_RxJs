import { Subject, interval, ReplaySubject } from "rxjs";
import { take, tap, multicast, mapTo } from "rxjs/operators";
import { description, output, title } from "../../App";

title("multicast");

description(
  `Запустить стрим методом connect и начать транслировать данные подписчикам, назвачив провайдера в функции. В примере это Subject`
);

const source = interval(2000).pipe(take(5));

const example = source.pipe(
  tap(() => output("Side Effect #1")),
  mapTo("Result!")
);

const multi = example.pipe(multicast(() => new ReplaySubject(5)));
const subscriberOne = multi.subscribe((val) => output(val));
const subscriberTwo = multi.subscribe((val) => output(val));

multi.connect();

setTimeout(() => {
  const subscriber = multi.subscribe((val) =>
    output("Третий подписчик: " + val)
  );
}, 5000);
