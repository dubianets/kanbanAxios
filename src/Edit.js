import React, {useState} from "react";
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function Edit (props) {

    const [nameInput, setNameInput] = useState(props.card.name)
    const [descriptionInput, setDescriptionInput] = useState(props.card.description)
    const [priorityInput, setPriorityInput] = useState(props.card.priority)
    const [statusInput, setStatusInput] = useState(props.card.status)

    const editCardHandler = (_id) => {
        props.editModalCard(_id, nameInput, descriptionInput, priorityInput, statusInput)
    }

    return (
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Edit Card</ModalHeader>
                <ModalBody>
                    <label>Name:</label>
                    <Input type='text' value={nameInput}
                           onChange={(event) => setNameInput(event.target.value)}/>
                    <label>Description:</label>
                    <Input type='text' value={descriptionInput}
                           onChange={(event) => setDescriptionInput(event.target.value)}/>
                    <label>Priority:</label>
                    <Input type='text' value={priorityInput}
                           onChange={(event) => setPriorityInput(event.target.value)}/>
                    <label>Status:</label>
                    <Input type='select' value={statusInput}
                           onChange={(event) => setStatusInput(event.target.value)}>
                        <option value='todo'>Todo</option>
                        <option value='progress'>IN progress</option>
                        <option value='review'>Review</option>
                        <option value='done'>Done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => editCardHandler(props.card._id)}>Edit</Button>{' '}
                    <Button color="secondary" onClick={() => props.editModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Edit;