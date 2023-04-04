import renderer from "react-test-renderer";

import { Title } from "@/components/mini";

it("renders correctly", () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
});
