import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pagination />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders a BACK button", () => {
    const component = create(<Pagination />);
    const { root } = component;
    const button = root.findAllByType("button");
    const buttonText = button[0].props.children[0].props.children;
    expect(buttonText).toBe("BACK");
  });
  it("renders a NEXT button", () => {
    const component = create(<Pagination />);
    const { root } = component;
    const button = root.findAllByType("button");
    const buttonText = button[1].props.children[0].props.children;
    expect(buttonText).toBe("NEXT");
  });
  it("renders page numbers from props", () => {
    const props = { currentPage: 1, totalPages: 2 };
    const component = create(<Pagination {...props} />);
    const { root } = component;
    const page = root.findAllByType("div");
    const currentPage = page[0].props.children[1].props.children[0];
    const totalPages = page[0].props.children[1].props.children[2];
    expect(currentPage).toEqual(1);
    expect(totalPages).toEqual(2);
  });
  it("renders a spinner when totalPages is null", () => {
    const props = { totalPages: null };
    const component = create(<Pagination {...props} />);
    const { root } = component;
    const div = root.findAllByType("div");
    const CircularProgress = div[1].props.children[2].type.options.name;
    expect(CircularProgress).toBe("MuiCircularProgress");
  });
});
