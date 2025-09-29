import { InputField, Form } from "components";
import { FaLock, FaUser } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaPhone, FaRegFileImage } from "react-icons/fa6";
import { postRequest } from "~/service/apiService";
import { schema, type ApplyFormValue } from "~/validations/auth/apply";

const links = [
  {
    linkLabel: "Have an account?",
    linkTo: "/sign-in",
  },
];

function Apply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormValue>({
    resolver: zodResolver(schema),
  });

  const handelLogin: SubmitHandler<ApplyFormValue> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);

    if (data.driver_license && data.driver_license.length > 0) {
      formData.append("driver_license", data.driver_license[0]);
    }

    await postRequest("/apply", formData);
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
              name="driver_license"
              type="file"
              register={register}
              placeholder="Driver License"
              error={errors.driver_license?.message}
              icon={<FaRegFileImage size={19} />}
              className="w-full"
            />
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Apply;
