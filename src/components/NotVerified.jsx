import { withTranslation } from "next-i18next";

export function NotVerified(props) {
    const { t } = props;
    return (
        <div className='text-center p-1 w-full bg-yellow-200'>
            {t("verifyEmail")}
        </div>
    );
}

export default withTranslation("common")(NotVerified);
