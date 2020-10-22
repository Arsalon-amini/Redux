import { addBug, bugAdded } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  it("should handle the addBug action", async () => {
    //dispatch (addbug) => look at store (ignore implementation details)
    const store = configureStore(); //real store object with middleware, etc (don't care about)
    const bug = { description: "a" };
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toHaveLength(1); //matcher (check bugs array has 1)
  });
});

//Solidarity test (poor way)
// describe("bugsSlice", () => {
//   describe("action creators", () => {
//     it("addBug", () => {
//       const bug = { description: "a" };
//       const result = addBug(bug); //calling our test function
//       const expected = {
//         type: apiCallBegan.type, //API middlware return
//         payload: {
//           url: "/bugs",
//           method: "post",
//           data: bug,
//           onSuccess: bugAdded.type,
//         },
//       };
//       expect(result).toEqual(expected);
//     });
//   });
// });
