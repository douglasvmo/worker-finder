import React from "react";
import renderer from "react-test-renderer";
import SubTitleRow from "../../src/components/SubTitleRow";

describe("SubTitle Component", () => {
  test("render", () => {
    const tree = renderer
      .create(<SubTitleRow title="Cleaning Services" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
