import renderer from "react-test-renderer";

import SingleDetail from "../event/SingleDetail";

it("renders correctly", () => {
    const tree = renderer.create(<SingleDetail />).toJSON();
    expect(tree).toMatchSnapshot();
});
