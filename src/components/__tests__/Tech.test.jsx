import renderer from "react-test-renderer";

import Tech from "../about/Tech";

it("renders correctly", () => {
    const tree = renderer.create(<Tech t={(str) => str} />).toJSON();
    expect(tree).toMatchSnapshot();
});
