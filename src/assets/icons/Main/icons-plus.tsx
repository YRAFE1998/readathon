import React from 'react'

export const IconsPlus = (props: any) => {
    const { color } = props;
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                <g fill="none" fill-rule="evenodd">
                    <g fill={color} fill-rule="nonzero">
                        <g>
                            <g>
                                <path d="M13.805 6.25H8.75V1.195C8.75.535 8.191 0 7.5 0S6.25.535 6.25 1.195V6.25H1.195C.535 6.25 0 6.809 0 7.5s.535 1.25 1.195 1.25H6.25v5.055c0 .66.559 1.195 1.25 1.195s1.25-.535 1.25-1.195V8.75h5.055c.66 0 1.195-.559 1.195-1.25s-.535-1.25-1.195-1.25z" transform="translate(-637 -665) translate(120 192) translate(0 466) translate(517 7)" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        </div>
    )
}
