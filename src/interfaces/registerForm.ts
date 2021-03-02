import React, {ReactNode} from 'react'
export interface RegisterForm {
    name?: string;
    mobileNumber?: string; 
    email?: string;
    password?: string;
    confirmPassword?: string;
    countryCode?: string;
    organizationLogo?: any;
    organizationName?: string;
    schoolName?: string;
    schoolLogo?: any;
}