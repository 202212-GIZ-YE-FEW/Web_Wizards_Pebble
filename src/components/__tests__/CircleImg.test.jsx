import renderer from "react-test-renderer";

import CircleImg from "@/components/editProfile/CircleImg";

it("renders correctly", () => {
    const tree = renderer.create(<CircleImg />).toJSON();
    expect(tree).toMatchSnapshot();
});
