import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import UploadCloudIcon from '../../components/icons/UploadCloud';
import useUserDetails from '../../hooks/useUserDetails';
import { Api } from '../../lib/api';
import { NotificationService } from '../../lib/notification-service';
import { useAppSelector } from '../../store/store';
import InputField from './components/InputField';

export interface UserInputs {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
}

const UserProfile = () => {
	const { username } = useAppSelector((s) => s.auth);
	const { user } = useUserDetails();
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<UserInputs>();

	const handleUploadProfileImage = () => {};

	const onSubmit = async (values: UserInputs) => {
		if (
			values &&
			values.firstName &&
			values.firstName.length > 0 &&
			values.lastName &&
			values.lastName.length > 0
		) {
			const res = await Api.user.updateUser(
				values.firstName,
				values.lastName
			);
			NotificationService.success('Settings updated.');
		}
	};

	useEffect(() => {
		if (user) {
			setValue('firstName', user.first_name);
			setValue('lastName', user.last_name);
			setValue('username', username ?? '');
			setValue('email', user.email);
		}
	}, [user, username]);

	return (
		<div className="rounded-xl border border-gray-200 px-5 py-3 bg-white flex flex-col">
			<h3 className="font-semibold text-base mb-3">User profile</h3>

			<span className="w-full border-b border-gray-200 h-[1px]"></span>

			<div className="flex flex-row items-center mt-5 gap-5 mb-8">
				<span className="h-[76px] w-[76px] flex items-center justify-center text-3xl text-white font-semibold bg-orange-500 rounded-full">
					{username?.charAt(0).toUpperCase()}
				</span>

				{/* <button
					type="button"
					className="rounded-lg px-4 py-3 flex flex-row items-center gap-4 bg-purpl/10 border text-purpl border-purpl"
					onClick={handleUploadProfileImage}
				>
					<UploadCloudIcon />
					<span className="font-medium">Upload Profile Image</span>
				</button> */}
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
				<div className="flex flex-row flex-wrap items-center">
					<Controller
						name="firstName"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<InputField
								label="First Name"
								className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
								placeholder="First Name"
								{...field}
							/>
						)}
					/>

					<Controller
						name="lastName"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<InputField
								label="Last Name"
								className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
								placeholder="Last Name"
								{...field}
							/>
						)}
					/>

					<Controller
						name="username"
						control={control}
						render={({ field }) => (
							<InputField
								label="Username"
								className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
								placeholder="Username"
								disabled
								{...field}
							/>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<InputField
								label="Email Address"
								className="w-full xs:w-full sm:w-full md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] px-3 pb-5"
								placeholder="email@email.com"
								disabled
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

export default UserProfile;
