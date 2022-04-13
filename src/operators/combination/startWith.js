import { startWith, of } from "rxjs";
import { description, subscription, title } from "../../App";

title("startWith");

description(`В начале стрима выдать переданное значение`);

of(1, 2, 3, 4, 5).pipe(startWith("Начало")).subscribe(subscription);
