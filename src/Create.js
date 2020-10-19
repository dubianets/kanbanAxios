import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

function Create(props) {

    const [modal, setModal] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [priorityInput, setPriorityInput] = useState('')
    const [statusInput, setStatusInput] = useState('')

    const createCardHandler = () => {
        props.createCard(nameInput, descriptionInput, priorityInput, statusInput)
        setModal(!modal)
        setNameInput('')
        setDescriptionInput('')
        setPriorityInput('')
        setStatusInput('')
    }

    return (
        <div>
            <Button color="secondary" size="lg" block onClick={() => setModal(!modal)}>Create New Card</Button>
            <Modal isOpen={modal}>
                <ModalHeader>Create new Card</ModalHeader>
                <ModalBody>
                    <label>Name:</label>
                    <Input type='text' value={nameInput} placeholder='type name here'
                    onChange={(event) => setNameInput(event.target.value)}/>
                    <label>Description:</label>
                    <Input type='text' value={descriptionInput} placeholder='type Description here'
                           onChange={(event) => setDescriptionInput(event.target.value)}/>
                    <label>Priority:</label>
                    <Input type='text' value={priorityInput} placeholder='type Priority here'
                           onChange={(event) => setPriorityInput(event.target.value)}/>
                    <label>Status:</label>
                    <Input type='select' value={statusInput} placeholder='type Status here'
                           onChange={(event) => setStatusInput(event.target.value)}>
                           <option value='todo'>Todo</option>
                           <option value='progress'>IN progress</option>
                           <option value='review'>Review</option>
                           <option value='done'>Done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={createCardHandler}>Create</Button>{' '}
                    <Button color="secondary" onClick={() => setModal(!modal)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Create;