import renderer from "react-test-renderer";

import JoinButton from "../event/JoinButton";

it("renders correctly", () => {
    const tree = renderer.create(<JoinButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
