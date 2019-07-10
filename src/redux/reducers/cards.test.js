/* --- IMPORT: Reducer & Action types --- */
import cards from "./cards";
import * as types from "../actionTypes";

/* --- MOCK: Initial State --- */
const state = {
  data: [],
  loading: false,
  loadingMore: false,
  error: "",
  totalPages: null,
  pageToBeFetched: 0,
  endOfCache: 6
};

/* --- TESTS --- */
describe("Cards reducer", () => {
  it("should return initialState", () => {
    expect(cards(undefined, {})).toEqual({
      data: [],
      loading: false,
      loadingMore: false,
      error: "",
      totalPages: null,
      pageToBeFetched: 0,
      endOfCache: 6
    });
  });
  it("should handle CARDS_FETCH", () => {
    expect(
      cards(
        {},
        {
          type: types.CARDS_FETCH
        }
      )
    ).toEqual({
      loading: true
    });
  });
  it("should handle CARDS_FETCH_SUCCESS", () => {
    const response = {
      data: {
        coreData: {
          number: "123",
          assignee: "John",
          application: "SYSTEM"
        }
      }
    };
    const totalPages = 12;
    expect(
      cards(
        { pageToBeFetched: 0 },
        {
          type: types.CARDS_FETCH_SUCCESS,
          payload: response.data,
          totalPages
        }
      )
    ).toEqual({
      data: {
        coreData: {
          number: "123",
          assignee: "John",
          application: "SYSTEM"
        }
      },
      loading: false,
      pageToBeFetched: 1,
      totalPages: 12
    });
  });
  it("should handle CARDS_FETCH_FAILED", () => {
    const e = {
      status: "500",
      message: "Internal server error"
    };
    expect(
      cards(
        {},
        {
          type: types.CARDS_FETCH_FAILED,
          error: e
        }
      )
    ).toEqual({
      error: {
        status: "500",
        message: "Internal server error"
      },
      loading: true
    });
  });
});

describe("Cards reducer(fetch more)", () => {
  it("should handle CARDS_FETCH_MORE", () => {
    expect(
      cards(
        {},
        {
          type: types.CARDS_FETCH_MORE
        }
      )
    ).toEqual({
      loadingMore: true
    });
  });
  it("should handle CARDS_FETCH_MORE_SUCCESS", () => {
    const responseBody = {
      data: [
        {
          coreData: {
            number: "123",
            assignee: "John",
            application: "SYSTEM"
          }
        }
      ]
    };
    expect(
      cards(
        { pageToBeFetched: 1, endOfCache: 6, data: [] },
        {
          type: types.CARDS_FETCH_MORE_SUCCESS,
          payload: responseBody.data
        }
      )
    ).toEqual({
      data: [
        {
          coreData: {
            number: "123",
            assignee: "John",
            application: "SYSTEM"
          }
        }
      ],
      loadingMore: false,
      pageToBeFetched: 2,
      endOfCache: 12
    });
  });
  it("should handle CARDS_FETCH_FAILED", () => {
    const e = {
      status: "500",
      message: "Internal server error"
    };
    expect(
      cards(
        {},
        {
          type: types.CARDS_FETCH_MORE_FAILED,
          error: e
        }
      )
    ).toEqual({
      error: {
        status: "500",
        message: "Internal server error"
      },
      loadingMore: true
    });
  });
});
