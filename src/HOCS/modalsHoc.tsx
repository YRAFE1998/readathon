import React, { useState, useEffect } from 'react'
import { Modal, Button } from "react-bootstrap";
import { RedBackgroundButton } from '../components/Lables/redBackgroundButton';
import { ModalesStyles, ModalTitle, ModalFooter, ModalBody, ImportStyle } from './modalsHocs.styles';

const ModalsHoc = (props: any) => {
    const [show, setShow] = useState(props.open);
    useEffect(() => {
        setShow(props.open)
    }, [props.open])
    const handleClose = () => props.onShow(false);
    return (
        <ModalesStyles>
            <Modal show={show} onHide={handleClose}>
                <div>
                    <ModalTitle>{props.title}</ModalTitle>
                </div>

                <ModalBody>{props.children}</ModalBody>

                
            </Modal>
        </ModalesStyles>
    )
}

export default ModalsHoc
