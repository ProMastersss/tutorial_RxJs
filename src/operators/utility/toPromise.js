import { of } from "rxjs";
import { description, output, title } from "../../App";

title("toPromise");

description(
  `Из observable делает Promise. toPromise не выдает события, как observable, а разово исполняется`
);

of(1, 2, 3)
  .toPromise()
  .then(
    (event) => output(event),
    (err) => console.log(err)
  );
