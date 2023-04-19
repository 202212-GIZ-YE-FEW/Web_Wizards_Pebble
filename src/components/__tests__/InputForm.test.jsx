import renderer from "react-test-renderer";

import InputForm from "@/components/shared/InputForm";

it("renders correctly", () => {
    const tree = renderer.create(<InputForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
