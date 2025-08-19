import { InputField,Form } from "components"
import { FaLock, FaUser } from "react-icons/fa";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { MdEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";


function SignUp() {

    type ValidateTypes = {
        fullname: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

    const schema = z.object({
        fullname: z.string().min(3,'Invalide Name'),
        email: z.string().email('Invalide Email'),
        password: z.string().min(8,'Password must be at least 8 characters'),
        confirmPassword: z.string().min(8,'Password must be at least 8 characters')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    
    });

    const { register, handleSubmit, formState:{ errors } } = useForm<ValidateTypes>({
        resolver: zodResolver(schema)
    });

    const handelLogin: SubmitHandler<ValidateTypes> = (data) => {
        console.log("Form Data:", data);
    };

  return (
    <main className="flex min-h-screen items-center justify-center">
            <div className="flex items-center gap-20">
                <div>
                    <img src="/assets/images/auth/sign-in.png" alt="sign-in"/>
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
                            name="fullname"
                            type="text"
                            register={register}
                            placeholder="Your Name"
                            error={errors.fullname?.message}
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
                            name="confirmPassword"
                            type="password" 
                            register={register} 
                            placeholder="Confirm Password"
                            error={errors.confirmPassword?.message}
                            icon={<FiLock size={23}/>}
                        />
                    </div>
                </Form>
            </div>
        </main>
  )
}

export default SignUp