import renderer from "react-test-renderer";
import About from "@/components/About";

it("renders correctly", () => {
    const tree = renderer.create(<About t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
