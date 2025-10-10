import { InputField, Form } from "components";
import { FaLock, FaUser } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { schema, type SignUpFormValue } from "../../validations/auth/sign-up";
import { getRequest, postRequest } from "~/service/apiService";
import { useNavigate } from "react-router-dom";
import { SUCCESS } from "~/constants/apiStatus";
import { ACCESS_TOKEN, USER_DATA } from "~/constants/localStorage";
import LocalStorageService from "~/service/localStorageService";

const links = [
  {
    linkLabel: "Have an account?",
    linkTo: "/sign-in",
  },
];

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValue>({
    resolver: zodResolver(schema),
  });

  const handelLogin: SubmitHandler<SignUpFormValue> = async (data) => {
    const result = await postRequest("/register", data);

    if (result.status == SUCCESS) {
      LocalStorageService.set(ACCESS_TOKEN, result.response.token);

      const userData = await getRequest("/user");
      LocalStorageService.set(USER_DATA, JSON.stringify(userData.response));
      navigate("/dashboard");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-20">
        <Form
          onSubmit={handleSubmit(handelLogin)}
          className="w-[500px] flex flex-col bg-white p-5 border border-gray-200 rounded-xl gap-10"
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
              label="Name"
            />

            <InputField
              name="phone_number"
              type="text"
              register={register}
              placeholder="+355"
              error={errors.phone_number?.message}
              icon={<FaPhone />}
              className="w-full"
              label="Phone Number"
            />

            <InputField
              name="email"
              type="text"
              register={register}
              placeholder="Email"
              error={errors.email?.message}
              icon={<MdEmail />}
              className="w-full"
              label="Email"
            />

            <InputField
              name="password"
              type="password"
              register={register}
              placeholder="Password"
              error={errors.password?.message}
              icon={<FaLock size={17} />}
              className="w-full"
              label="Password"
            />

            <InputField
              name="password_confirmation"
              type="password"
              register={register}
              placeholder="Confirm Password"
              error={errors.password_confirmation?.message}
              icon={<FiLock size={19} />}
              className="w-full"
              label="Confirm Password"
            />
          </div>
        </Form>
      </div>
    </main>
  );
}

export default SignUp;
