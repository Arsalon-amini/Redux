import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addBug, bugAdded } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  //dispatch (addbug) => look at store (ignore implementation details)
  it("should handle the addBug action", async () => {
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };

    const fakeAxios = new MockAdapter(axios);
    fakeAxios.onPost("/bugs").reply(200, savedBug);

    const store = configureStore();
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toContainEqual(savedBug);
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
