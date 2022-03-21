import { map, of, tap } from "rxjs";

const contetn = `Постучать / сделать - используется для ведения лога, получает событие, остальные по цепочке передадутся дальше`;

export const info = () => {
  document.getElementsByClassName("content")[0].innerHTML = contetn;
};

export function bootstrap() {
  console.clear();
  const source = of(1, 2, 3, 4, 5);

  const example = source.pipe(
    tap((value) => console.log("К " + value + " прибавить 10")),
    map((value) => value + 10),
    tap((value) => console.log("получаем " + value))
  );

  example.subscribe((value) => console.log(value));
}
