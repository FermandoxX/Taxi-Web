import { InputField, Form } from "components"
import { FaLock, FaUser } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { MdEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaPhone, FaRegFileImage } from "react-icons/fa6";
import { schema, type SignUpFormValue } from '../../validations/auth/sign-up';
import { postRequest } from "~/service/apiService";
import { useNavigate } from "react-router-dom";
import { SUCCESS } from "~/constants/apiStatus";
import { ACCESS_TOKEN } from "~/constants/localStorage";

const links = [
    {
        linkLabel: "Have an account?",
        linkTo: "/sign-in"
    }
]

function Apply() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValue>({
        resolver: zodResolver(schema)
    });

    const handelLogin: SubmitHandler<SignUpFormValue> = async (data) => {
        const result = await postRequest('/register', data);

        if (result.status == SUCCESS) {
            localStorage.setItem(ACCESS_TOKEN, result.response.token);
            navigate("/dashboard");
        }

    };

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="flex items-center gap-20">

                <Form
                    onSubmit={handleSubmit(handelLogin)}
                    className="w-[500px]"
                    buttonLabel="REGISTER"
                    buttonName="register"
                    links={links}
                    header="Member Registeration"
                >
                    <div className="flex flex-col gap-4">
                        <InputField
                            name="name"
                            type="text"
                            register={register}
                            placeholder="Your Name"
                            error={errors.name?.message}
                            icon={<FaUser />}
                            className="w-full"
                        />

                        <InputField
                            name="phone_number"
                            type="text"
                            register={register}
                            placeholder="+355"
                            error={errors.phone_number?.message}
                            icon={<FaPhone />}
                            className="w-full"
                        />

                        <InputField
                            name="email"
                            type="text"
                            register={register}
                            placeholder="Email"
                            error={errors.email?.message}
                            icon={<MdEmail />}
                            className="w-full"
                        />

                        <InputField
                            name="password"
                            type="password"
                            register={register}
                            placeholder="Password"
                            error={errors.password?.message}
                            icon={<FaLock size={17} />}
                            className="w-full"
                        />

                        <InputField
                            name="password_confirmation"
                            type="password"
                            register={register}
                            placeholder="Confirm Password"
                            error={errors.password_confirmation?.message}
                            icon={<FiLock size={19} />}
                            className="w-full"
                        />

                        <InputField
                            name="password_confirmation"
                            type="file"
                            register={register}
                            placeholder="Confirm Password"
                            error={errors.password_confirmation?.message}
                            icon={<FaRegFileImage size={19} />}
                            className="w-full"
                        />
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default Apply
