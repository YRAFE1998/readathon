import React, { useState } from 'react'
import InputComponent from '../Input/input';
import { RedOutlineButton } from '../Lables/red-outlline-button';
import { RedBackgroundButton } from '../Lables/redBackgroundButton';
import { DeleteModalStyle } from '../Table/table.styles';

const DeleteModalContent = (props: any) => {
    const [error, setError] = useState<any>("");
    const [number, setNumber] = useState<any>();
    console.log(props.singleDelete);
    
    return (
        <div>
            <DeleteModalStyle>
                <p className="delete-content">You're about to delete {props?.number} Items, and you will no <br /> longer access them.</p>

                {!props.singleDelete && <div className="m-inline-40 m-b-40">
                    <InputComponent
                        onChange={(v) => {
                            setNumber(v)
                            v == props?.number ? setError("") : setError("Please Check Number of contacts to delete");

                        }}
                        type={"textarea"}
                        error={error}
                        required={true}
                        placeholder={"Number of contacts to delete"}
                        state={""}
                    ></InputComponent>
                </div>}

                <div className="d-flex justify-content-center">
                    <div>
                        <RedBackgroundButton
                            className="delete-btn"
                            onClick={() => {
                               
                                if (!props.singleDelete) {
                                    if (!error && number) {
                                        props?.onClick()
                                    } else {
                                        setError("Please Check Number of contacts to delete")
                                    }
                                } else {
                                    props?.onClick()
                                }

                            }}>Delete
                            </RedBackgroundButton></div>
                    <div><RedOutlineButton className="delete-btn" onClick={() => props?.onClose()}>Cancel</RedOutlineButton></div>
                </div>
            </DeleteModalStyle>
        </div>
    )
}

export default DeleteModalContent
