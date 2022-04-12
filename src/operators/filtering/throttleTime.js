import { interval } from "rxjs";
import { take, throttleTime } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("throttleTime");

description(`То же самое, что throttle. Сокращенная запись`);

interval(500).pipe(throttleTime(2000), take(5)).subscribe(subscription);
