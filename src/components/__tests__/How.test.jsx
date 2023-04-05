import renderer from "react-test-renderer";

import How from "@/components/How";

it("renders correctly", () => {
    const tree = renderer.create(<How t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
