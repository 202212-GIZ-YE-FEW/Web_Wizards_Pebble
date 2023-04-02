import renderer from "react-test-renderer";

import SignOptions from "../SignOptions";

it("renders correctly", () => {
    const tree = renderer.create(<SignOptions />).toJSON();
    expect(tree).toMatchSnapshot();
});
