import { Subject } from "rxjs";
import { pluck, shareReplay, tap } from "rxjs/operators";
import { description, output, subscription, title } from "../../App";

title("shareReplay");

description(
  `Аналогично share. Если подписка произошла после испускания значения, то новый подписчик при использовании share не получит значение, а shareReply как ReplySubject испускает прошлые значения, но как и share без побочных эффектов`
);

// simulate url change with subject
const routeEnd = new Subject();
// grab url and share with subscribers
const lastUrl = routeEnd.pipe(
  tap((_) => output("executed")),
  pluck("url"),
  // defaults to all values so we set it to just keep and replay last one
  shareReplay(1)
);
// requires initial subscription
const initialSubscriber = lastUrl.subscribe(subscription);
// simulate route change
// logged: 'executed', 'my-path'
routeEnd.next({ data: {}, url: "my-path" });
// logged: 'my-path'
const lateSubscriber = lastUrl.subscribe(subscription);
