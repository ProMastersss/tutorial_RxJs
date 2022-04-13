import { defer, fromEvent, interval } from "rxjs";
import { description, subscription, title } from "../../App";

title("defer");

description(
  `Создает фабрику observable. При запуске, в зависимости от рандома создается тот или иной observable одноразово`
);

const clicksOrInterval = defer(function () {
  return Math.random() > 0.5 ? fromEvent(document, "click") : interval(1000);
});

clicksOrInterval.subscribe(subscription);
