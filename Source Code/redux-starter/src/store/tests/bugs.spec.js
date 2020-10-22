import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addBug, bugAdded, getUnresolvedBugs } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    store = configureStore();
    fakeAxios = new MockAdapter(axios);
  });

  const bugsSlice = () => store.getState().entities.bugs;
  const createState = () => ({
    entities: {
      bugs: {
        list: [],
      },
    },
  });

  it("should add bug to the store if it's saved to the server", async () => {
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug);

    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add bug to the store if it's not saved to the server", async () => {
    const bug = { description: "a" };
    fakeAxios.onPost("/bugs").reply(500);

    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toHaveLength(0);
  });

  describe("selectors", () => {
    it("getUnresolvedBugs", () => {
      const state = createState();
      state.entities.bugs.list = [
        { id: 1, resolved: true },
        { id: 1 },
        { id: 1 },
      ];

      const result = getUnresolvedBugs(state);

      expect(result).toHaveLength(2);
    });
  });
});
