import renderer from "react-test-renderer";

import SecondaryTitle from "@/components/editProfile/SecondaryTitle";

it("renders correctly", () => {
    const tree = renderer.create(<SecondaryTitle />).toJSON();
    expect(tree).toMatchSnapshot();
});
