import renderer from "react-test-renderer";

import { BorderlessButton } from "@/components/mini";

it("renders correctly", () => {
    const tree = renderer.create(<BorderlessButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
