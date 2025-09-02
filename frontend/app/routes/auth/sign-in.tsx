import { InputField, Form } from "components"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, type SignInFormValues } from "../../validations/auth/sign-in";
import { postRequest } from "../../service/apiService";
import { useNavigate } from "react-router-dom";
import { SUCCESS } from "~/constants/apiStatus";
import { ACCESS_TOKEN } from "~/constants/localStorage";

function SignIn() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormValues>({
        resolver: zodResolver(schema)
    });

    const handelLogin: SubmitHandler<SignInFormValues> = async (data) => {
        const result = await postRequest('/login', data);

        if (result.status == SUCCESS) {
            localStorage.setItem(ACCESS_TOKEN, result.response.token);
            navigate("/dashboard");
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div>
                <Form
                    onSubmit={handleSubmit(handelLogin)}
                    className="w-[500px]"
                    buttonLabel="LOGIN"
                    buttonName="login"
                    linkLabel="Don’t have an account?"
                    linkTo="/sign-up"
                    header="Member Login"
                >

                    <div className="flex flex-col gap-4">
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
                            icon={<FaLock size={17.5} />}
                            className="w-full"
                        />
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default SignIn
