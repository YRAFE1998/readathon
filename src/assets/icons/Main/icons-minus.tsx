import React from 'react'

export const IconsMinus = (props: any) => {
    const { color } = props;
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" viewBox="0 0 15 3">
                <g fill="none" fill-rule="evenodd">
                    <g fill={color}>
                        <g transform="translate(-637 -325) translate(120 192)">
                            <rect width="15" height="2.5" rx="1.25" transform="translate(517 133.25)" />
                        </g>
                    </g>
                </g>
            </svg>

        </div>
    )
}
