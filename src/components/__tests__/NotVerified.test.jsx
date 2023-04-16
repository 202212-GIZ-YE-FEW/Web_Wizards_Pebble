import renderer from "react-test-renderer";

import NotVerfied from "@/components/NotVerfied";

it("renders correctly", () => {
    const tree = renderer.create(<NotVerfied />).toJSON();
    expect(tree).toMatchSnapshot();
});
