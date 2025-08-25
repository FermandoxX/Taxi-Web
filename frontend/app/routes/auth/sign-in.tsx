import { InputField, Form } from "components"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Bounce, ToastContainer } from 'react-toastify';
import { schema, type SignInFormValues } from "../../validations/auth/sign-in";
import { postRequest } from "../../service/apiService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [serverErrors, setServerErrors] = useState<Record<string, string>>({})
    const navigate = useNavigate();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<SignInFormValues>({
        resolver: zodResolver(schema)
    });

    const handelLogin: SubmitHandler<SignInFormValues> = async (data) => {
        const result = await postRequest({ url: '/login', data });
        setServerErrors({});

        if (result.status == 'error') {
            const errorFields = result.response;

            Object.keys(errorFields).forEach((field) => {
                setError(field as keyof SignInFormValues, {
                    type: "server",
                    message: errorFields[field]
                });
            });

            setServerErrors(errorFields);

        } else {
            localStorage.setItem("access_token", result.response.token);
            navigate("/dashboard");
        }

    };

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="flex gap-20">
                <div>
                    <img src="/assets/images/auth/sign-in.png" alt="sign-in" />
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />

                <Form
                    onSubmit={handleSubmit(handelLogin)}
                    className="gap-10"
                    buttonLabel="LOGIN"
                    buttonClassName="bg-[#57b846] text-white h-12 w-70 rounded-3xl font-bold"
                    buttonName="login"
                    linkLabel="Don’t have an account?"
                    linkClassName="text-[14px] text-[#666666] hover:text-[#57b846] transition-colors duration-300"
                    linkTo="/sign-up"
                >
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-bold">Member Login</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <InputField
                            name="email"
                            type="text"
                            register={register}
                            placeholder="Email"
                            error={errors.email?.message || serverErrors.email}
                            icon={<MdEmail />}
                        />

                        <InputField
                            name="password"
                            type="password"
                            register={register}
                            placeholder="Password"
                            error={errors.password?.message || serverErrors.password}
                            icon={<FaLock size={17.5} />}
                        />
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default SignIn
