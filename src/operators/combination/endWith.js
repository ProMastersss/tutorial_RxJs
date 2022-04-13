import { endWith, of } from "rxjs";
import { description, subscription, title } from "../../App";

title("endWith");

description(`По завершению стрима выдать переданное значение`);

of(1, 2, 3, 4, 5).pipe(endWith("Конец")).subscribe(subscription);
