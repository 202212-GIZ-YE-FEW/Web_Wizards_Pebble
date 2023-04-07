import renderer from "react-test-renderer";

import { Navbar } from "@/components/Navbar";

it("renders correctly", () => {
    const tree = renderer
        .create(<Navbar t={(str) => str} i18n={{ language: "en" }} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
