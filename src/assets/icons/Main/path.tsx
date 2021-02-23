import React from 'react'

const IconPath = (props: any) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" viewBox="0 0 7 5">
                <g fill="none" fill-rule="evenodd">
                    <g fill={props.color || "#B8C2CC"} fill-rule="nonzero">
                        <g>
                            <path d="M604.063 23.6l.04.052 2.975 3.806c.1.128.251.209.42.209.168 0 .32-.083.42-.21l2.973-3.798.05-.063c.037-.061.059-.134.059-.212 0-.211-.162-.384-.363-.384h-6.274c-.201 0-.363.173-.363.384 0 .08.024.156.063.217z" transform="translate(-1011 -994) translate(40 277) translate(367 694)" />
                        </g>
                    </g>
                </g>
            </svg>

        </div>
    )
}

export default IconPath
