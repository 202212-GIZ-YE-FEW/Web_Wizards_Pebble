import renderer from "react-test-renderer";

import SaveButton from "@/components/editProfile/SaveButton";

it("renders correctly", () => {
    const tree = renderer.create(<SaveButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
