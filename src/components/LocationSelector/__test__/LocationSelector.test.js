import renderer from "react-test-renderer";
import LocationSelectors from "../LocationSelector";

it("renders correctly", () => {
    const tree = renderer
        .create(<LocationSelectors label='Some label' t={() => {}} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
