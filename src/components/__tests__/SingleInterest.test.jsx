import renderer from "react-test-renderer";

import SingleInterest from "../SingleInterest";

it("renders correctly", () => {
    const tree = renderer.create(<SingleInterest />).toJSON();
    expect(tree).toMatchSnapshot();
});
