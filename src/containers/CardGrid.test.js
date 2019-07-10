/* --- IMPORT: React & ReactDOM --- */
import React from "react";
import ReactDOM from "react-dom";
/* --- IMPORT: Enzyme functions --- */
import { mount } from "../enzyme";
/* --- IMPORT: Components and Props --- */
import CardGrid from "./CardGrid";
import { onInspectCard } from "../redux/actions/index";

/* --- MOCK: Component Props --- */
const mockProps = {
  cardData: {
    coreData: {
      number: "123",
      application: "SYSTEM",
      assignee: "John",
      shortDescription: "Freezing"
    }
  },
  onInspectCard
};

/* --- TESTS --- */
describe("Component rendering", () => {
  it("CardGrid renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CardGrid {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Prop handling and rendering", () => {
  it("renders the ticket number from props", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const text = component.find("h2").text();
    expect(text).toBe("123");
  });
  it("renders the application from props", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const text = component
      .find("p")
      .at(1)
      .text();
    expect(text).toBe("Application: SYSTEM");
  });
  it("renders the assignee from props", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const text = component
      .find("p")
      .at(2)
      .text();
    expect(text).toBe("Assignee: John");
  });
  it("renders the assignee from props", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const text = component
      .find("p")
      .at(2)
      .text();
    expect(text).toBe("Assignee: John");
  });
  it("renders the shortDescription from props", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const text = component
      .find("p")
      .at(3)
      .text();
    expect(text).toBe("Freezing");
  });
});

describe("Component functionality", () => {
  it("renders the learn more button", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const button = component.find("button").text();
    expect(button).toBe("LEARN MORE");
  });
  it("handles onClick event without crashing", () => {
    const component = mount(<CardGrid {...mockProps} />);
    const button = component.find("button").simulate("click");
  });
});
