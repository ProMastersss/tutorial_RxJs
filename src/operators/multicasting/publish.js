import { interval } from "rxjs";
import { publish, tap } from "rxjs/operators";
import { description, output, title } from "../../App";

title("publish");

description(
  `Запустить стрим методом connect и начать транслировать данные подписчикам`
);

const source = interval(1000);
const example = publish()(source.pipe(tap((_) => output("Do Something!"))));

const subscribe = example.subscribe((val) => output(`Subscriber One: ${val}`));
const subscribeTwo = example.subscribe((val) =>
  output(`Subscriber Two: ${val}`)
);

setTimeout(() => {
  example.connect();
}, 5000);
