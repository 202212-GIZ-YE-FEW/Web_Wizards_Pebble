import { I18nContext } from "next-i18next";
import renderer from "react-test-renderer";

import SignOptions from "../SignOptions";

it("renders correctly", () => {
    const i18n = {
        language: "en",
        t: (str) => str,
    };
    const tree = renderer
        .create(
            <I18nContext.Provider value={i18n}>
                <SignOptions t={i18n.t} />
            </I18nContext.Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
