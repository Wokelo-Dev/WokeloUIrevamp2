import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Api } from "../../lib/api";
import PasswordField from "./components/PasswordField";
import { NotificationService } from "../../lib/notification-service";
import InfoIcon from "../../components/icons/Info";
interface PasswordInputs {
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

const PasswordSettings = () => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<PasswordInputs>();

  const onSubmit = async (values: PasswordInputs) => {
    const res = await Api.user.updatePassword(
      values.currentPassword,
      values.newPassword
    );
  };

  return (
    <div className="rounded-xl border border-gray-200 px-5 py-3 bg-white flex flex-col">
      <h3 className="font-semibold text-base mb-3">Password Settings</h3>

      <span className="w-full border-b border-gray-200 h-[1px] mb-5"></span>
      <div className="flex justify-between">
        <div className="flex lg:flex-row sm:flex-col max-[640px]:flex-col lg:w-[100%] sm:w-[100%]  max-[640px]:w-[100%]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
            <div className="flex flex-row flex-wrap items-center ">
              <Controller
                name="currentPassword"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PasswordField
                    label="Current Password"
                    className="w-full xs:w-full sm:w-full md:w-[590px] lg:w-[590px] xl:w-[590px] 2xl:w-[590px] px-3 pb-5"
                    placeholder="Current Password"
                    error={
                      errors.currentPassword ? "Enter current password." : null
                    }
                    {...field}
                  />
                )}
              />

              <Controller
                name="newPassword"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PasswordField
                    label="New Password"
                    className="w-full xs:w-full sm:w-full md:w-[590px] lg:w-[590px] xl:w-[590px] 2xl:w-[590px] px-3 pb-5"
                    placeholder="New Password"
                    error={errors.newPassword ? "Add a new password." : null}
                    {...field}
                  />
                )}
              />

              <Controller
                name="passwordConfirmation"
                control={control}
                rules={{
                  validate: (value) => getValues().newPassword === value,
                }}
                render={({ field }) => (
                  <PasswordField
                    label="Re type Password"
                    className="w-full xs:w-full sm:w-full md:w-[590px] lg:w-[590px] xl:w-[590px] 2xl:w-[590px] px-3 pb-5"
                    placeholder="Password"
                    error={
                      errors.passwordConfirmation
                        ? "Passwords must match."
                        : null
                    }
                    {...field}
                  />
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-[190px] mx-3 flex items-center justify-center"
            >
              Update Password
            </Button>
          </form>

          {/* <div> */}
          <div className="flex flex-col items-center justify-center w-full h-auto gap-3 p-6 text-sm text-gray-500 bg-gray-100 rounded-lg sm:mt-6 max-[640px]:mt-6" style={{ alignItems: "flex-start" }}>
            <p>Instructions:</p>
            <p>1. Password must contain at least 8 characters.</p>
            <p>2. Password should not be too common.</p>
            <p>3. Password should contain alphabet and numbers.</p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PasswordSettings;
