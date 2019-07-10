/* --- IMPORT: React and ReactDOM --- */
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
/* --- IMPORT: Test Components --- */
import Loading from "./Loading";

/* --- TESTS --- */
describe("Loading component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("check if loading text renders", () => {
    const component = create(<Loading />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.props.children).toBe("Loading Tickets");
  });

  it("check if svg spinner renders", () => {
    const component = create(<Loading />);
    const instance = component.root;
    const spinner = instance.findByType("svg");
  });

  it("check if component renders with flex-flow: column", () => {
    const props = { currentPage: 1, totalPages: 2 };
    const component = create(<Loading {...props} />);
    const instance = component.root;
    const flexFlow = instance.findByType("div");
  });
});
