import ButtonAuth from "@/components/shared/ButtonAuth";
import OrDivider from "@/components/shared/OrDivider";

import { signUpwithGoogle, singInWithTwitter } from "../../../lib/useAuth";

import GoogleIcon from "~/GoogleIcon.png";
import TwitterIcon from "~/twitter.svg";
const SignOptions = ({ t }) => {
    return (
        <div className='flex flex-col-reverse order-last lg:flex-col lg:order-2'>
            <ButtonAuth
                onClick={singInWithTwitter}
                text={t("signWithTwitter")}
                icon={TwitterIcon}
                alt='TwitterIcon'
                width='35'
                height='16.5'
            />
            <ButtonAuth
                onClick={signUpwithGoogle}
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
