import { range } from "rxjs";
import { description, subscription, title } from "../../App";

title("range");

description(`генерирует числа. Первый аргумент - ОТ, второй - ДО`);

range(1, 10).subscribe(subscription);
