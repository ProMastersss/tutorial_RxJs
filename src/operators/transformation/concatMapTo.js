import { of } from "rxjs";
import { concatMapTo } from "rxjs/operators";
import { description, output, title } from "../../App";

title("concatMapTo");

description(`Подмешивает другой observable`);

const source = of(3000, 2000, 1000);

source
  .pipe(
    concatMapTo(of(500), (val, constant) => {
      output(`${val}, ${constant}`);
      return val + 500;
    })
  )
  .subscribe((val) => output(`concatMap: ${val}`));
