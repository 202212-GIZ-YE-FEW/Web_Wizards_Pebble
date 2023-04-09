import renderer from "react-test-renderer";

import Goals from "@/components/Goals";

it("renders correctly", () => {
    const tree = renderer.create(<Goals t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
