import React, {ReactNode} from 'react'
export interface InputInfterface {
    placeholder?: string;
    type?: string;
    onChange: (v : string) => void; 
    error?: string;
    state?: string;
    icon?: React.FC;
    value?: string;

}