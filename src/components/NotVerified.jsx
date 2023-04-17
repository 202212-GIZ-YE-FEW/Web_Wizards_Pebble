import { withTranslation } from "next-i18next";

export function NotVerified(props) {
    const { t } = props;
    return (
        <div className='h-10 text-center p-2 w-full bg-yellow-200'>
            {t("verifyEmail")}
        </div>
    );
}

export default withTranslation("common")(NotVerified);
