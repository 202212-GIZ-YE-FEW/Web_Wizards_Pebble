import ButtonAuth from "./ButtonAuth";
import OrDivider from "./OrDivider";

import GoogleIcon from "~/GoogleIcon.png";
import TwitterIcon from "~/twitter.svg";

const SignOptions = ({ t }) => {
    return (
        <div className='flex flex-col-reverse order-last lg:flex-col lg:order-2'>
            <ButtonAuth
                text={t("signWithTwitter")}
                icon={TwitterIcon}
                alt='TwitterIcon'
                width='35'
                height='16.5'
            />
            <ButtonAuth
                text={t("signWithGoogle")}
                icon={GoogleIcon}
                alt='Google Icon'
                width='45'
            />
            <OrDivider text={t("or")} />
        </div>
    );
};

export default SignOptions;
