import { useRouter } from "next/router";
import { I18nContext } from "next-i18next";
import renderer from "react-test-renderer";

import SittingImg from "@/components/shared/SittingImg";

// Mock the useRouter hook
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

it("renders correctly", () => {
    // Set up the mocked useRouter function
    useRouter.mockImplementation(() => ({
        locale: "en",
    }));

    const i18n = {
        language: "en",
        t: (str) => str,
    };
    const tree = renderer
        .create(
            <I18nContext.Provider value={i18n}>
                <SittingImg t={i18n.t} />
            </I18nContext.Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
