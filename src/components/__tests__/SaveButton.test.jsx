import renderer from "react-test-renderer";

import SaveButton from "@/components/SaveButton";

it("renders correctly", () => {
    const tree = renderer.create(<SaveButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
