import { merge, mapTo, startWith, scan } from "rxjs";
const { TestScheduler } = require("rxjs/testing");

const model = ({ up$, down$ }) =>
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

test("Test Model", () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected);
  });

  // mock streams
  const upMarbles = "--x----x--x---";
  const downMarbles = "----x-------x-";
  const expected = "a-b-a--b--c-b-";

  const expectedStateMap = {
    a: { count: 0 },
    b: { count: 1 },
    c: { count: 2 }
  };

  // mock up$ and down$ events
  const up$ = testScheduler.createHotObservable(upMarbles);
  const down$ = testScheduler.createHotObservable(downMarbles);

  const state$ = model({ up$, down$ });

  // assertion
  testScheduler.expectObservable(state$).toBe(expected, expectedStateMap);

  // run tests
  testScheduler.flush();
});
