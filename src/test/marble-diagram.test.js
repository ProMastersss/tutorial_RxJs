import { merge, mapTo, startWith, scan } from "rxjs";
import { TestScheduler } from "rxjs/testing";

const observable = ({ up$, down$ }) =>
  merge(
    up$.pipe(
      mapTo((state) => ({
        count: state.count + 1
      }))
    ),
    down$.pipe(
      mapTo((state) => ({
        count: state.count - 1
      }))
    )
  ).pipe(
    startWith({ count: 0 }),
    scan((state, fn) => fn(state))
  );

test("Test observable", () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected);
  });

  testScheduler.run((helpers) => {
    const { expectObservable, hot, flush } = helpers;

    const up$ = hot("  --x----x--x---");
    const down$ = hot("----x-------x-");
    const expected = " a-b-a--b--c-b-";

    const expectedStateMap = {
      a: { count: 0 },
      b: { count: 1 },
      c: { count: 2 }
    };

    const state$ = observable({ up$, down$ });

    expectObservable(state$).toBe(expected, expectedStateMap);

    flush();
  });
});
