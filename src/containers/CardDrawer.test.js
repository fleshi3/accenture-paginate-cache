import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import { mount, shallow } from "../enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardDrawer from "./CardDrawer";
import { onDismountCard } from "../redux/actions/index";
import Typography from "@material-ui/core/Typography";
import { createShallow } from "@material-ui/core/test-utils";

it("renders without crashing", () => {
  const props = { inspecting: true, onDismountCard, inspectCard: {} };
  const div = document.createElement("div");
  ReactDOM.render(<CardDrawer {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders ticket number from props", () => {
  const component = mount(
    <CardDrawer inspectCard={{ number: "TEST" }} inspecting />
  );
  const text = component
    .find(Typography)
    .children()
    .children()
    .getElement("h3").props.children;
  expect(text).toBe("TEST");
});
