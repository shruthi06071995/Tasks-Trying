import { Controller, useForm } from "react-hook-form";
import Select from 'react-select';

const FourthForm = () => {
    const { register, handleSubmit, control } = useForm({
        // use mode to specify the event that triggers each input field
        mode: "onBlur"
    });

    const selectOptions = [
        { value: "student", label: "Student" },
        { value: "developer", label: "Developer" },
        { value: "manager", label: "Manager" }
    ];

    const registerOptions = {
        role: { required: "Role is required" }
    };

    <form >
        <div>
            <label>Your Role</label>
            <Controller
                name="role"
                control={control}
                defaultValue=""
                rules={registerOptions.role}
                render={({ field }) => (
                    <Select options={selectOptions} {...field} label="Text field" />
                )}
            />
            {/* <small className="text-danger">
                {errors?.role && errors.role.message}
            </small> */}
        </div>
    </form>
}

export default FourthForm;