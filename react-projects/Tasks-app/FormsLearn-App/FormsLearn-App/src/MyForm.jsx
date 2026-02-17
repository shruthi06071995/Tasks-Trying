import React from 'react';
import { useForm, FormProvider, useFieldArray, useFormContext } from 'react-hook-form';

const Hobbies = () => {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'hobbies'
    });

    return (
        <div>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <input {...register(`hobbies.${index}.name`)} />
                    <button type="button" onClick={() => remove(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={() => append({ name: '' })}>Add Hobby</button>
        </div>
    );
};

const MyForm = () => {
    const methods = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Hobbies />
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

export default MyForm;