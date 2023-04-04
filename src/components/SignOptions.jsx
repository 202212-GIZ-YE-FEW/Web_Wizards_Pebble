import ButtonAuth from "./ButtonAuth";
import OrDivider from "./OrDivider";
import GoogleIcon from "../../public/GoogleIcon.png";
import TwitterIcon from "../../public/twitter.svg";

const SignOptions = () => {
    return (
        <div className='flex flex-col-reverse order-last lg:flex-col lg:order-2'>
            <ButtonAuth
                text='Continue with Twitter'
                icon={TwitterIcon}
                alt='TwitterIcon'
                width='35'
                height='16.5'
            />
            <ButtonAuth
                text='Continue with google'
                icon={GoogleIcon}
                alt='Google Icon'
                width='45'
            />
            <OrDivider />
        </div>
    );
};

export default SignOptions;
