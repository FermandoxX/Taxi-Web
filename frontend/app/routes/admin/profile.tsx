import { Form, IconButton, InputField } from "components";
import { UserAvatar } from "components/UserAvatar";
import LocalStorageService from "~/service/localStorageService";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";

function Profile() {
  let [isOpen, setIsOpen] = useState(false);

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

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <Form
                // onSubmit={handleSubmit(handelLogin)}
                className="w-[500px]"
                buttonLabel="Save Changes"
                buttonName="update"
                header="Edit Personal Information"
              >
                <div className="flex flex-col gap-4">
                  <InputField
                    name="full name"
                    type="text"
                    // register={register}
                    placeholder="Full Name"
                    // error={errors.email?.message}
                    // icon={<MdEmail />}
                    value={LocalStorageService.get("user_data", "name")}
                    className="w-full"
                  />

                  <InputField
                    name="email"
                    type="text"
                    // register={register}
                    placeholder="Email"
                    // error={errors.password?.message}
                    // icon={<FaLock size={17.5} />}
                    value={LocalStorageService.get("user_data", "email")}
                    className="w-full"
                  />

                  <InputField
                    name="phone"
                    type="text"
                    // register={register}
                    placeholder="Phone"
                    // error={errors.email?.message}
                    // icon={<MdEmail />}
                    value={LocalStorageService.get("user_data", "phone_number")}
                    className="w-full"
                  />
                </div>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
