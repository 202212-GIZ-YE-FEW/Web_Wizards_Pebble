import renderer from "react-test-renderer";

import Footer from "@/components/Footer";

it("renders correctly", () => {
    const tree = renderer.create(<Footer t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
