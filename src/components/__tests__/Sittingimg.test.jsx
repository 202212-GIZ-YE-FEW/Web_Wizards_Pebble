import renderer from "react-test-renderer";

import SittingImg from "../SittingImg";

it("renders correctly", () => {
    const tree = renderer.create(<SittingImg />).toJSON();
    expect(tree).toMatchSnapshot();
});
