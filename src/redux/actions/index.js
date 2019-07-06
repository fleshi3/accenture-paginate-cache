import { TEST_ACTION } from "../actionTypes";

export default function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  };
}
