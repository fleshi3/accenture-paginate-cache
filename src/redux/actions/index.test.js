/* --- IMPORT: Action creators and action types --- */
import * as actions from "./index";
import * as types from "../actionTypes";

/* --- TESTS --- */
describe("Actions", () => {
  it("creates an action to increment page", () => {
    const expectedAction = {
      type: types.INCREMENT_PAGE
    };
    expect(actions.incrementPage()).toEqual(expectedAction);
  });

  it("creates an action to decrement page", () => {
    const expectedAction = {
      type: types.DECREMENT_PAGE
    };
    expect(actions.decrementPage()).toEqual(expectedAction);
  });

  it("creates an action to inspect cards", () => {
    const cardData = {
      allFields: {
        number: "123"
      }
    };
    const expectedAction = {
      type: types.INSPECT_CARD,
      payload: cardData.allFields
    };
    expect(actions.onInspectCard(cardData)).toEqual(expectedAction);
  });

  it("creates an action to dismount cards", () => {
    const expectedAction = {
      type: types.DISMOUNT_CARD
    };
    expect(actions.onDismountCard()).toEqual(expectedAction);
  });

  it("creates an action that updates the store with fetch requests", () => {
    const response = {
      data: {
        coreData: {
          number: "123"
        }
      }
    };
    const totalPages = 12;
    const expectedAction = {
      type: types.CARDS_FETCH_SUCCESS,
      payload: response.data,
      totalPages
    };
    expect(actions.cardsFetchSuccess(response, totalPages)).toEqual(
      expectedAction
    );
  });

  it("creates an action that updates the store with error response", () => {
    const e = {
      error: {
        status: "500",
        message: "Internal server error"
      }
    };
    const expectedAction = {
      type: types.CARDS_FETCH_FAILED,
      error: e
    };
    expect(actions.cardsFetchFailed(e)).toEqual(expectedAction);
  });

  it("creates an action that calls fetchMoreSaga", () => {
    const expectedAction = {
      type: types.CARDS_FETCH_MORE
    };
    expect(actions.cardsFetchMore()).toEqual(expectedAction);
  });

  it("creates an action that updates the store cached cards", () => {
    const responseBody = {
      coreData: {
        number: "123"
      }
    };
    const expectedAction = {
      type: types.CARDS_FETCH_MORE_SUCCESS,
      payload: responseBody
    };
    expect(actions.cardsFetchMoreSuccess(responseBody)).toEqual(expectedAction);
  });

  it("creates an action that updates the store with error response", () => {
    const e = {
      error: {
        status: "500",
        message: "Internal server error"
      }
    };
    const expectedAction = {
      type: types.CARDS_FETCH_MORE_FAILED,
      error: e
    };
    expect(actions.cardsFetchMoreFailed(e)).toEqual(expectedAction);
  });
});
