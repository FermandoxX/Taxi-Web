import { InputField, Form } from "components"
import { FaLock, FaUser } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { MdEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { schema, type SignUpFormValue } from '../../validations/auth/sign-up';
import { postRequest } from "~/service/apiService";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValue>({
        resolver: zodResolver(schema)
    });

    const handelLogin: SubmitHandler<SignUpFormValue> = async (data) => {
        const result = await postRequest({ url: '/register', data });

        if (result.status == 'success') {
            localStorage.setItem("access_token", result.response.token);
            navigate("/home");
        }

    };

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="flex items-center gap-20">
                <div>
                    <img src="/assets/images/auth/sign-in.png" alt="sign-in" />
                </div>

                <Form
                    onSubmit={handleSubmit(handelLogin)}
                    className="gap-10"
                    buttonLabel="REGISTER"
                    buttonClassName="bg-[#57b846] text-white h-12 w-70 rounded-3xl font-bold"
                    buttonName="login"
                    linkLabel="Have an account?"
                    linkClassName="text-[14px] text-[#666666] hover:text-[#57b846] transition-colors duration-300"
                    linkTo="/sign-in"
                >
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-bold">Member Registeration</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <InputField
                            name="name"
                            type="text"
                            register={register}
                            placeholder="Your Name"
                            error={errors.name?.message}
                            icon={<FaUser />}

                        />

                        <InputField
                            name="email"
                            type="text"
                            register={register}
                            placeholder="Email"
                            error={errors.email?.message}
                            icon={<MdEmail />}
                        />

                        <InputField
                            name="password"
                            type="password"
                            register={register}
                            placeholder="Password"
                            error={errors.password?.message}
                            icon={<FaLock />}
                        />

                        <InputField
                            name="password_confirmation"
                            type="password"
                            register={register}
                            placeholder="Confirm Password"
                            error={errors.password_confirmation?.message}
                            icon={<FiLock size={23} />}
                        />
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default SignUp
