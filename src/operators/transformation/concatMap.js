import { of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";
import { description, output, title } from "../../App";

title("conacatMap");

description(
  `Синхронно отрабатывает. Ожидает завершение пришедшего события и обрабатывает следующее поочереди. MergeMap - асинхронный. Первое пришедшее событие, обрабатывается первым. concatMap, mergeMap используется, когда приходят observable. Они извлекают из наблюдаемых значения и передают подпискчикам`
);

const source = of(3000, 2000, 1000);

source
  .pipe(concatMap((val) => of(`Задержка на: ${val}ms`).pipe(delay(val))))
  .subscribe((val) => output(`concatMap: ${val}`));

source
  .pipe(
    delay(6000),
    mergeMap((val) => of(`Задержка на: ${val}ms`).pipe(delay(val)))
  )
  .subscribe((val) => output(`mergeMap: ${val}`));
