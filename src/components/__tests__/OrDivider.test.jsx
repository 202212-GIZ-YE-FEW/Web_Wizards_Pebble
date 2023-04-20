import renderer from "react-test-renderer";

import OrDivider from "@/components/shared/OrDivider";

it("renders correctly", () => {
    const tree = renderer.create(<OrDivider />).toJSON();
    expect(tree).toMatchSnapshot();
});
