import { interval } from "rxjs";
import { ignoreElements, take } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("ignoreElements");

description(`Игнорирует все испускания, кроме complete и error`);

interval(500).pipe(take(10), ignoreElements()).subscribe(subscription);
