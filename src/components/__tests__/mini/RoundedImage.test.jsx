import renderer from "react-test-renderer";

import { RoundedImage } from "@/components/mini";

it("renders correctly", () => {
    const tree = renderer.create(<RoundedImage />).toJSON();
    expect(tree).toMatchSnapshot();
});
