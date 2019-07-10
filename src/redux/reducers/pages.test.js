/* --- IMPORT: Reducer & Action types --- */
import pages from "./pages";
import * as types from "../actionTypes";

/* --- TESTS --- */
describe("Pages reducer", () => {
  it("should return initialState", () => {
    expect(pages(undefined, {})).toEqual({
      currentPage: 1,
      cardsPerPage: 12
    });
  });

  it("should handle INCREMENT_PAGE", () => {
    expect(
      pages(undefined, {
        type: types.INCREMENT_PAGE
      })
    ).toEqual({
      currentPage: 2,
      cardsPerPage: 12
    });
  });

  it("should handle DECREMENT_PAGE", () => {
    expect(
      pages(undefined, {
        type: types.DECREMENT_PAGE
      })
    ).toEqual({
      currentPage: 1,
      cardsPerPage: 12
    });
  });
});
