import InputForm from "@/components/shared/InputForm";

import SecondaryTitle from "./SecondaryTitle";
const EditProfileForm = ({ t }) => {
    return (
        <div className='mt-24 w-3/4'>
            <div>
                <SecondaryTitle text={t("nameRequired")} />
                <InputForm
                    name='name'
                    placeholder={t("placeholderName")}
                    type='text'
                    width='4/5'
                />
            </div>
            <div className='mt-2 lg:mt-8'>
                <SecondaryTitle text={t("yourLocation")} />
                <InputForm
                    name='location'
                    placeholder={t("placeholderLocation")}
                    type='text'
                    width='4/5'
                />
            </div>
        </div>
    );
};

export default EditProfileForm;
