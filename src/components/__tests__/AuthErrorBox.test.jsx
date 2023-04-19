import renderer from "react-test-renderer";

import AuthErrorBox from "@/components/shared/AuthErrorBox";

it("renders correctly", () => {
    const tree = renderer
        .create(<AuthErrorBox t={(str) => str} errors={["auth/unknown"]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
