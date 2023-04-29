import renderer from "react-test-renderer";

import EventCreation from "../EventCreation";

jest.mock("next/router", () => ({
    useRouter: jest.fn().mockReturnValue({}),
}));

it("renders correctly", () => {
    const tree = renderer
        .create(<EventCreation label='Some label' t={() => {}} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
