import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { loadBugs, addBug, resolveBug, getUnresolvedBugs } from "../bugs";
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

  describe("loading bugs", () => {
    describe("if the bugs exist in the cache", () => {
      it("they should not be fetched from the server again", async () => {
        fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }]); //Arrange

        await store.dispatch(loadBugs()); //Act
        await store.dispatch(loadBugs()); 

        expect(fakeAxios.history.get.length).toBe(1); //Assert
      })
    });
    describe("if the bugs don't exist in the cache", () => {
      it("they should be fetched from server and put in the store", async () => {
        fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }]); //Arrange

        await store.dispatch(loadBugs()); //Act

        expect(bugsSlice().list).toHaveLength(1); //Assert
      })
      describe("loading indicator", () => {
        it("should be true while fetching bugs", () => {
          fakeAxios.onGet("/bugs").reply(() => {
            expect(bugsSlice().loading).toBe(true); //arrange + assertion (executed before request completes)
            return [200, [{ id: 1 }]];
          });

          store.dispatch(loadBugs()); //Act
        });
        it("should be false after the bugs are fetched", async () => {
      
          fakeAxios.onGet("/bugs").reply(200, [ { id:1 } ]); 
      
          await store.dispatch(loadBugs()); 
       
          expect(bugsSlice().loading).toBe(false); 
        });

        it("should be false if server returns an error", async () => {
          //arrange
          fakeAxios.onGet("/bugs").reply(500); 
          //act
          await store.dispatch(loadBugs()); 
          //assert
          expect(bugsSlice().loading).toBe(false); 
        });
      });
    });
  });

  it("should mark bug as resolved if saved to the server", async () => {
    //Arrange
    fakeAxios.onPatch("/bugs/1").reply(200, { id: 1, resolved: true });
    fakeAxios.onPost("/bugs").reply(200, { id: 1 });
    //Act
    await store.dispatch(addBug({}));
    await store.dispatch(resolveBug(1));
    //Assert
    expect(bugsSlice().list[0].resolved).toBe(true);
  });

  it("should not mark bug as resolved if not saved to the server", async () => {
    fakeAxios.onPatch("/bugs/1").reply(500);
    fakeAxios.onPost("/bugs").reply(200, { id: 1 });

    await store.dispatch(addBug({}));
    await store.dispatch(resolveBug(1));

    expect(bugsSlice().list[0].resolved).not.toBe(true);
  });

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

  describe("selectors", () => {
    it("should return all unresolved bugs", () => {
      const state = createState();
      state.entities.bugs.list = [
        { id: 1, resolved: true },
        { id: 1 },
        { id: 1 },
      ];

      const result = getUnresolvedBugs(state); //invoke

      expect(result).toHaveLength(2); //assert
    });
  });
});
