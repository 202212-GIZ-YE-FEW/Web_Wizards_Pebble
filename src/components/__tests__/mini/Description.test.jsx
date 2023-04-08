import renderer from "react-test-renderer";

import { Description } from "@/components/mini";

it("renders correctly", () => {
    const tree = renderer.create(<Description />).toJSON();
    expect(tree).toMatchSnapshot();
});
