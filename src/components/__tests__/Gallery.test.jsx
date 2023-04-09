import renderer from "react-test-renderer";

import Gallery from "@/components/Gallery";

it("renders correctly", () => {
    const tree = renderer.create(<Gallery />).toJSON();
    expect(tree).toMatchSnapshot();
});
