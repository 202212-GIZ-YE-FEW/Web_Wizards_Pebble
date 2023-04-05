import renderer from "react-test-renderer";

import FormFooter from "@/components/FormFooter";

it("renders correctly", () => {
    const tree = renderer.create(<FormFooter />).toJSON();
    expect(tree).toMatchSnapshot();
});
