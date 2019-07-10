/* --- IMPORT: React & ReactDOM --- */
import React from "react";
import ReactDOM from "react-dom";
/* --- IMPORT: Enzyme functions --- */
import { mount } from "../enzyme";
/* --- IMPORT: Components and Props --- */
import CardDrawer from "./CardDrawer";
import { onDismountCard } from "../redux/actions/index";

/* --- MOCK: Component props --- */
const mockProps = {
  inspectCard: {
    number: "123",
    assignee: "John",
    shortDescription: "Freezing",
    application: "Windows",
    made_sla: "false",
    upon_reject: "Cancel all future tasks",
    opened_by: "System Administrator",
    priority: "1 - Critical",
    activity_due: "2019-07-12 12:00",
    approval: "Not yet requested"
  },
  inspecting: true,
  onDismountCard
};

/* --- TESTS --- */
describe("Component rendering", () => {
  it("CardDrawer renders without crashing", () => {
    const props = { inspecting: true, onDismountCard, inspectCard: {} };
    const div = document.createElement("div");
    ReactDOM.render(<CardDrawer {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Prop rendering and handling", () => {
  it("renders ticket number text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("h3");
    const { number } = input.props.inspectCard;
    expect(number).toBe("123");
    const list = component.find("h3").text();
    expect(list).toBe("123");
  });

  it("renders assignee text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { assignee } = input.inspectCard;
    expect(assignee).toBe("John");
    const list = component
      .find("input")
      .at(0)
      .instance().value;
    expect(list).toBe("John");
  });

  it("renders short description text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { shortDescription } = input.inspectCard;
    expect(shortDescription).toBe("Freezing");
    const list = component
      .find("input")
      .at(1)
      .instance().value;
    expect(list).toBe("Freezing");
  });

  it("renders application text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { application } = input.inspectCard;
    expect(application).toBe("Windows");
    const list = component
      .find("input")
      .at(2)
      .instance().value;
    expect(list).toBe("Windows");
  });

  it("renders made_sla text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { made_sla } = input.inspectCard;
    expect(made_sla).toBe("false");
    const list = component
      .find("input")
      .at(3)
      .instance().value;
    expect(list).toBe("false");
  });

  it("renders upon_reject text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { upon_reject } = input.inspectCard;
    expect(upon_reject).toBe("Cancel all future tasks");
    const list = component
      .find("input")
      .at(4)
      .instance().value;
    expect(list).toBe("Cancel all future tasks");
  });

  it("renders opened_by text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { opened_by } = input.inspectCard;
    expect(opened_by).toBe("System Administrator");
    const list = component
      .find("input")
      .at(5)
      .instance().value;
    expect(list).toBe("System Administrator");
  });

  it("renders priority text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { priority } = input.inspectCard;
    expect(priority).toBe("1 - Critical");
    const list = component
      .find("input")
      .at(6)
      .instance().value;
    expect(list).toBe("1 - Critical");
  });

  it("renders due_activity text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { activity_due } = input.inspectCard;
    expect(activity_due).toBe("2019-07-12 12:00");
    const list = component
      .find("input")
      .at(7)
      .instance().value;
    expect(list).toBe("2019-07-12 12:00");
  });

  it("renders approval text field from props", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const input = component.getElement("input").props;
    const { approval } = input.inspectCard;
    expect(approval).toBe("Not yet requested");
    const list = component
      .find("input")
      .at(8)
      .instance().value;
    expect(list).toBe("Not yet requested");
  });
});

describe("List element rendering", () => {
  it("renders 9 list items per ticket", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const list = component.find("input");
    expect(list.length).toEqual(9);
  });
  it("each list item renders with a label", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const list = component.find("label");
    expect(list.length).toEqual(9);
  });
});

describe("Drawer functionality", () => {
  it("Close drawer button renders and has access to onDismountCard", () => {
    const component = mount(<CardDrawer {...mockProps} />);
    const button = component.find("button").props();
    expect(button.onClick).toBe(onDismountCard);
  });
});
