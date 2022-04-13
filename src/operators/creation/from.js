import { from } from "rxjs";
import {} from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("from");

description(
  `Превратите массив, обещание или итерабельную переменную в наблюдаемую переменную`
);

from([1, 2, 3, 4, 5]).subscribe(subscription);
from("Hello world").subscribe(subscription);
from(new Promise((resolve) => resolve("Hello World!"))).subscribe(subscription);

const map = new Map();
map.set(1, "Hi");
map.set(2, "Bye");
from(map).subscribe(subscription);
