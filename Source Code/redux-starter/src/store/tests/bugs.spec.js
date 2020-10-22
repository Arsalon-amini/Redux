import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addBug, bugAdded } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    store = configureStore();
    fakeAxios = new MockAdapter(axios);
  });

  const bugsSlice = () => store.getState().entities.bugs;

  it("should add bug to the store if it's saved to the server", async () => {
    //Arrange
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug);

    //Act
    await store.dispatch(addBug(bug));

    //Assert
    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add bug to the store if it's not saved to the server", async () => {
    const bug = { description: "a" };
    fakeAxios.onPost("/bugs").reply(500);

    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toHaveLength(0);
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
