import { Form, IconButton, InputField } from "components";
import { UserAvatar } from "components/UserAvatar";
import LocalStorageService from "~/service/localStorageService";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FormModal } from "components/FormModal";
import { schema, type ProfileValues } from "../../validations/admin/profile";
import { zodResolver } from "@hookform/resolvers/zod";

function Profile() {
  let [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileValues>({
    defaultValues: {
      name: LocalStorageService.get("user_data", "name"),
      email: LocalStorageService.get("user_data", "email"),
      phone_number: LocalStorageService.get("user_data", "phone_number"),
    },
    resolver: zodResolver(schema),
  });

  const updateProfile: SubmitHandler<ProfileValues> = async (data) => {
    console.log("okey");
  };

  return (
    <div className="flex flex-col gap-10">
      <p className="font-bold">Profile</p>

      <div className="flex flex-col gap-5">
        <div className="border border-gray-200 rounded-2xl p-6 flex items-center gap-5 justify-between">
          <div className="flex items-center gap-5">
            <UserAvatar
              src="../../public/assets/images/profile/profile_pic.png"
              size="lg"
            />

            <div className="flex flex-col">
              <span className="font-bold">
                {LocalStorageService.get("user_data", "name")}
              </span>
              <span className="text-sm text-gray-600">
                {LocalStorageService.get("user_data", "email")}
              </span>
            </div>
          </div>

          <IconButton
            className="rounded-4xl font-medium text-sm pl-5 pr-5"
            icon={<GoPencil />}
            label="Edit"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-5">
          <span className="font-bold">Personal Information</span>

          <div className="flex justify-between">
            <div className="flex gap-40">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 text-xs text-gray-500">First Name</p>
                  <p className="text-sm font-medium text-gray-800">
                    {LocalStorageService.get("user_data", "name")}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium text-gray-800">
                    {LocalStorageService.get("user_data", "phone_number")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-800">
                    {LocalStorageService.get("user_data", "email")}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs text-gray-500">Role</p>
                  <p className="text-sm font-medium text-gray-800">
                    {LocalStorageService.get("user_data", "role")}
                  </p>
                </div>
              </div>
            </div>

            <IconButton
              className="rounded-4xl font-medium text-sm pl-5 pr-5 h-12"
              icon={<GoPencil />}
              label="Edit"
              onClick={() => setIsOpen(true)}
            />

            <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <Form
                onSubmit={handleSubmit(updateProfile)}
                buttonLabel="Save Changes"
                buttonName="update"
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      name="name"
                      type="text"
                      register={register}
                      placeholder="Full Name"
                      error={errors.name?.message}
                      className="w-full"
                      label="Name"
                    />
                    <InputField
                      name="email"
                      type="text"
                      register={register}
                      placeholder="Email"
                      error={errors.email?.message}
                      className="w-full"
                      label="Email"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      name="phone_number"
                      type="text"
                      register={register}
                      placeholder="Phone Number"
                      error={errors.name?.message}
                      className="w-full"
                      label="Phone Number"
                    />
                  </div>
                </div>
              </Form>
            </FormModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
