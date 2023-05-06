import renderer from "react-test-renderer";

import FormFooter from "@/components/shared/FormFooter";

it("renders correctly", () => {
    const tree = renderer.create(<FormFooter t={(t) => t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
