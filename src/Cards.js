import React, {useState} from "react";
import {Card, Button, CardTitle, CardText, ModalHeader, ModalBody, Input, ModalFooter, Modal} from 'reactstrap';
import Edit from "./Edit";

function Cards(props) {

    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [edit, setEdit] = useState(false)

    const editModal = (val) => {
        setEdit(val)
    }

    const deleteCardHandler = (_id) => {
        props.deleteCard(_id)
    }

    return (
        <div>

            { edit && <Edit
                key={Math.random()}
                editModalCard={props.editModalCard}
                editModal={editModal}
            card={props.card}
            />}

            {props.card.status === 'todo' && <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                <CardTitle>
                    <h5>
                        {false && <a href="#" className="btn btn-primary"
                            onClick={() => props.statusChangerH(props.card._id, -1)}>←</a>
                        }
                        {props.card.name}
                        <a href="#" className="btn btn-primary" onClick={() => props.statusChangerH(props.card._id, 1)}>→</a>
                    </h5>
                </CardTitle>
                <CardText>{props.card.description}</CardText>
                <label class="list-group-item list-group-item-secondary">
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, 1)}>↑</a>
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, -1)}>↓</a>
                    Priority: {props.card.priority}
                </label>
                <div>
                    <Button onClick={() => setDeleteConfirm(!deleteConfirm)}>Delete</Button>
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>>
                </div>
            </Card>}

            {props.card.status === 'progress' && <Card body inverse color="danger">
                <CardTitle>
                    <h5>
                        <a href="#" className="btn btn-primary" onClick={() => props.statusChangerH(props.card._id, -1)}>←</a>
                        {props.card.name}
                        <a href="#" className="btn btn-primary" onClick={() => props.statusChangerH(props.card._id, 1)}>→</a>
                    </h5>
                </CardTitle>
                <CardText>{props.card.description}</CardText>
                <label className="list-group-item list-group-item-secondary">
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id ,props.card.priority + 1)}>↑</a>
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, props.card.priority - 1)}>↓</a>
                    Priority: {props.card.priority}</label>
                <div>
                    <Button onClick={() => setDeleteConfirm(!deleteConfirm)}>Delete</Button>
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>>
                </div>
            </Card>}

            {props.card.status === 'review' && <Card body inverse color="warning">
                <CardTitle>
                    <h5>
                        <a href="#" className="btn btn-primary" onClick={() => props.statusChangerH(props.card._id, -1)}>←</a>
                        {props.card.name}
                        <a href="#" className="btn btn-primary" onClick={() => props.statusChangerH(props.card._id, 1)}>→</a>
                    </h5>
                </CardTitle>
                <CardText>{props.card.description}</CardText>
                <label className="list-group-item list-group-item-secondary">
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, 1)}>↑</a>
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, -1)}>↓</a>
                    Priority: {props.card.priority}</label>
                <div>
                    <Button onClick={() => setDeleteConfirm(!deleteConfirm)}>Delete</Button>
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>>
                </div>
            </Card>}

            {props.card.status === 'done' && <Card body inverse color="success">
                <CardTitle>
                    <h5>
                        <a href="#" className="btn btn-primary" onClick={() => props.statusChangerH(props.card._id, -1)}>←</a>
                        {props.card.name}
                        { false &&
                        <a href="#" className="btn btn-primary"
                           onClick={() => props.statusChangerH(props.card._id, 1)}>→</a>
                        }
                    </h5>
                </CardTitle>
                <CardText>{props.card.description}</CardText>
                <label className="list-group-item list-group-item-secondary">
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, 1)}>↑</a>
                    <a href="#" className="btn btn-primary" onClick={() => props.priorityChanger(props.card._id, -1)}>↓</a>
                    Priority: {props.card.priority}</label>
                <div>
                    <Button onClick={() => setDeleteConfirm(!deleteConfirm)}>Delete</Button>
                    <Button onClick={() => setEdit(!edit)}>Edit</Button>>
                </div>
            </Card>}
                <>

                    <Modal isOpen={deleteConfirm}>
                        <ModalHeader>Confirmation</ModalHeader>
                        <ModalBody>
                            Are You Sure?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => deleteCardHandler(props.card._id)}>Yes</Button>{' '}
                            <Button color="secondary" onClick={() => setDeleteConfirm(!deleteConfirm)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                </>



        </div>
    );
};
export default Cards;