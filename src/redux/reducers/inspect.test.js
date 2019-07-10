/* --- IMPORT: Reducer & Action types --- */
import inspect from "./inspect";
import * as types from "../actionTypes";

/* --- TESTS --- */
describe("Inspect reducer", () => {
  it("should return initialState", () => {
    expect(inspect(undefined, {})).toEqual({
      inspectCard: {},
      inspecting: false
    });
  });

  it("should handle INSPECT_CARD", () => {
    const cardData = {
      allFields: {
        number: "123",
        assignee: "John",
        application: "SYSTEM"
      }
    };
    expect(
      inspect(
        {},
        {
          type: types.INSPECT_CARD,
          payload: cardData.allFields
        }
      )
    ).toEqual({
      inspectCard: {
        number: "123",
        assignee: "John",
        application: "SYSTEM"
      },
      inspecting: true
    });
  });

  it("should handle DISMOUNT CARD", () => {
    const initialState = {
      inspectCard: {},
      inspecting: true
    };
    expect(
      inspect(initialState, {
        type: types.DISMOUNT_CARD
      })
    ).toEqual({
      ...initialState,
      inspecting: false
    });
  });
});
