export interface UserModel {
	first_name: string;
	last_name: string;
	email: string;
	billing_profile_id: string;
	org_name: string;
	org_designation: string;
	org_profile_type: string;
	account_type: string;
	otp_verified: string;
	credits_allowed: number;
	credits_used: number;
	credits_available: number;
	total_reports: number;
	time_saved: string;
}
