import renderer from "react-test-renderer";

import SignButton from "../SignButton";

it("renders correctly", () => {
    const tree = renderer.create(<SignButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
