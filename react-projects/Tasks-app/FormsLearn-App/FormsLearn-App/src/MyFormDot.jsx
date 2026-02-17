import { FormProvider, useForm, useFormContext } from "react-hook-form"

const Address = () => {
    const{ register } = useFormContext();

    return (
        <div>
            <input {...register('address.street')} placeholder="Street" /> <br /><br />
            <input {...register('address.city')} placeholder="City" />
        </div>
    );
};

const MyFormDot = () => {
    const methods = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Address /> <br />
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

export default MyFormDot;