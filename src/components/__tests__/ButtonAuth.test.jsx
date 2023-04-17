import renderer from "react-test-renderer";

import ButtonAuth from "@/components/shared/ButtonAuth";

it("renders correctly", () => {
    const tree = renderer.create(<ButtonAuth />).toJSON();
    expect(tree).toMatchSnapshot();
});
