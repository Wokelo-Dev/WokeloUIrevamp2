import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import useUserDetails from '../../hooks/useUserDetails';
import { Api } from '../../lib/api';
import { NotificationService } from '../../lib/notification-service';
import InputField from './components/InputField';

interface EmployeeStatusInputs {
	company: string;
	designation: string;
	profileType: string;
}

const EmployeeStatus = () => {
	const { user } = useUserDetails();
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<EmployeeStatusInputs>();

	const onSubmit = async (values: EmployeeStatusInputs) => {
		const res = await Api.user.updateEmployeeStatus(
			values.company,
			values.designation,
			values.profileType
		);
		NotificationService.success('Employee status updated.');
	};

	useEffect(() => {
		if (user) {
			setValue('company', user.org_name);
			setValue('designation', user.org_designation);
			setValue('profileType', user.org_profile_type);
		}
	}, [user]);

	return (
    <div className="rounded-xl border border-gray-200 px-5 py-3 bg-white flex flex-col">
      <h3 className="font-semibold text-base mb-3">Employee Status</h3>

      <span className="w-full border-b border-gray-200 h-[1px] mb-5"></span>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-row flex-wrap items-center">
          <Controller
            name="company"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputField
                label="Company"
                className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
                placeholder="Company"
                error={errors.company ? "Company is required." : null}
                {...field}
              />
            )}
          />

          <Controller
            name="designation"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputField
                label="Designation"
                className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
                placeholder="Designation"
                error={errors.designation ? "Designation is required." : null}
                {...field}
              />
            )}
          />

          <Controller
            name="profileType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputField
                label="Profile Type"
                className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
                placeholder="Profile Type"
                disabled
                error={errors.profileType ? "Profile type is required." : null}
                {...field}
              />
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-[190px] mx-3 flex items-center justify-center"
        >
          Update Settings
        </Button>
      </form>
    </div>
  );
};

export default EmployeeStatus;
