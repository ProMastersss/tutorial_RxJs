import { interval } from "rxjs";
import { description, subscription, title } from "../../App";

title("interval");

description(
  `Испускает от 0 до бесконечности целые числа каждое указанное время`
);

interval(1000).subscribe(subscription);
