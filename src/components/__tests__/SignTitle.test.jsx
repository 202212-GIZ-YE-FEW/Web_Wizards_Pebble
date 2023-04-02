import renderer from "react-test-renderer";

import SignTitle from "../SignTitle";

it("renders correctly", () => {
    const tree = renderer.create(<SignTitle />).toJSON();
    expect(tree).toMatchSnapshot();
});
