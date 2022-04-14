import { of } from "rxjs";
import { single } from "rxjs/operators";
import { description, subscription, title } from "../../App";

title("single");

description(
  `Возвращает найденный элемент по условию и если только он удовлетворяет условию, иначе ошибка`
);

const source1 = of(
  { name: "Ben" },
  { name: "Tracy" },
  { name: "Laney" },
  { name: "Lily" }
);

source1.pipe(single((x) => x.name.startsWith("B"))).subscribe(subscription);

const source2 = of(
  { name: "Ben" },
  { name: "Tracy" },
  { name: "Bradley" },
  { name: "Lincoln" }
);

source2.pipe(single((x) => x.name.startsWith("B"))).subscribe(subscription);

const source3 = of(
  { name: "Laney" },
  { name: "Tracy" },
  { name: "Lily" },
  { name: "Lincoln" }
);

source3.pipe(single((x) => x.name.startsWith("B"))).subscribe(subscription);
