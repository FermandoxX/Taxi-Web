import { InputField,Form } from "components"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

function SignIn() {
    
    type ValidateTypes = {
        email: string;
        password: string;
    };

    
    const schema = z.object({
        email: z.string().email('Invalid email'),
        password: z.string().min(8,'Password must be at least 8 characters')
    });

    const { register, handleSubmit, formState:{ errors } } = useForm<ValidateTypes>({
        resolver: zodResolver(schema)
    });

    const handelLogin: SubmitHandler<ValidateTypes> = (data) => {
        console.log("Form Data:", data);
    };

  return (
    <main className="flex min-h-screen items-center justify-center">
        <div className="flex gap-20">
            <div>
                <img src="/assets/images/auth/sign-in.png" alt="sign-in"/>
            </div>
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
                        error={errors.email?.message}
                        icon={<MdEmail />}
                    />

                    <InputField
                        name="password"
                        type="password" 
                        register={register} 
                        placeholder="Password"
                        error={errors.password?.message}
                        icon={<FaLock size={17.5} />}
                    />
                </div>
            </Form>
        </div>
    </main>
  )
}

export default SignIn