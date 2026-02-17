import { FormProvider, useForm, useFormContext } from "react-hook-form"

const Input = ({ name }) => {
    const { register } = useFormContext();
    return <input {...register(name)} />;
};

const ContextForm = () => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(data => console.log(data))}>
                <Input name="firstName" /> <br /><br />
                <Input name="lastName" /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    )
};

export default ContextForm