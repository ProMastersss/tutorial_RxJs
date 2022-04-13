import { throwError } from "rxjs";
import { description, subscription, title } from "../../App";

title("throwError");

description(`Испускает ошибку`);

throwError("ошибка :(").subscribe(subscription);
