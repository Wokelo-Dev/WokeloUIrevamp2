import { fetcher } from "./axios";
import { NotificationService } from "./notification-service";

export const ApiUser = {
  async updateUser(firstName: string, lastName: string) {
    try {
      const response = await fetcher(`/accounts/user_detail/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      });
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        NotificationService.error(err.toString());
      }
    }
  },

  async updatePassword(currentPassword: string, newPassword: string) {
    try {
      const response = await fetcher(`/accounts/change_password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          old_password: currentPassword,
          new_password: newPassword,
        },
      });
      if(response.data.error)
	  {
		NotificationService.error(response.data.error)
	  }
	  else{
		  NotificationService.success("Settings updated.");
		  return response.data;
	  }
    } catch (err) {
      if (err instanceof Error) {
        NotificationService.error("Please follow the instructions");
      }
    }
  },

  async updateEmployeeStatus(
    company: string,
    designation: string,
    profileType: string
  ) {
    try {
      const response = await fetcher(`/accounts/employee_info/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          company,
          designation,
          profile_type: profileType,
        },
      });
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        NotificationService.error(err.toString());
      }
    }
  },
};
