import renderer from "react-test-renderer";

import Team from "../about/Team";

it("renders correctly", () => {
    const tree = renderer.create(<Team t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
