import { interval, animationFrameScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";
import { description, title } from "../../App";

title("observeOn");

description(
  `Указывает планировщик, когда он будет испускать уведомления для операторов`
);

const someDiv = document.querySelector(".alert");
const intervals = interval(100); // Intervals are scheduled
// with async scheduler by default...
intervals
  .pipe(
    observeOn(animationFrameScheduler) // ...but we will observe on animationFrame
  ) // scheduler to ensure smooth animation.
  .subscribe((val) => {
    someDiv.style.height = val + "px";
  });
