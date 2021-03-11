import React, {ReactNode} from 'react'
export interface InputInfterface {
    placeholder?: string;
    type?: string;
    onChange: (v : any) => void; 
    error?: string;
    state?: string;
    icon?: React.FC;
    value?: any;
    required?: boolean;
    selectedCountry?: any;
    onBlur?: (v: any) => void;
}