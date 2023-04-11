import renderer from "react-test-renderer";

import Team from "../Team";

it("renders correctly", () => {
    const tree = renderer.create(<Team t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
