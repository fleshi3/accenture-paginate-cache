/* --- IMPORT: React & ReactDOM --- */
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
/* --- IMPORT: REDUX store --- */
import { Provider } from "react-redux";
import store from "./redux/store/index";
/* --- IMPORT: Test Components --- */
import App from "./App";

/* --- TESTS --- */
describe("Component rendering", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("initialises redux store on mount", () => {
    const component = create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const instance = component.getInstance();
    const redux = instance.state.store.getState();
    expect(redux).toStrictEqual({
      cards: {
        data: [],
        endOfCache: 6,
        error: "",
        loading: true,
        loadingMore: false,
        pageToBeFetched: 0,
        totalPages: null
      },
      pages: { cardsPerPage: 12, currentPage: 1 },
      inspect: { inspectCard: {}, inspecting: false }
    });
  });
});
