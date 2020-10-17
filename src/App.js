import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Columns from "./Columns";
import Create from "./Create";


const initialColumns = [
    {id: Math.random(), title: 'ToDo', status: 'todo'},
    {id: Math.random(), title: 'In Progress', status: 'progress'},
    {id: Math.random(), title: 'Review', status: 'review'},
    {id: Math.random(), title: 'Done', status: 'done'}
]

function App() {

    const [list, setList] = useState([])
    const [columns, setColumns] = useState(initialColumns)

    const initialList = () => {
       return axios.get("https://nazarov-kanban-server.herokuapp.com/card")
            .then(res => {
                setList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        initialList()
    }, [])

    const createCard = (newName, newDescription, newPriority, newStatus) => {
        const newCard = {
            id: Math.random(),
            name: newName,
            description: newDescription,
            priority: newPriority,
            status: newStatus
        }
        axios.post("https://nazarov-kanban-server.herokuapp.com/card", newCard)
            .then(res => {
                initialList()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteCard = (_id) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${_id}`)
            .then(res => {
                initialList()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const editModalCard = (_id, newName, newDescription, newPriority, newStatus) => {
        const updateCard = {
            name: newName,
            description: newDescription,
            priority: newPriority,
            status: newStatus
        }
        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${_id}`, updateCard)
            .then(res => {
                initialList()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const prioritys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const priorityChanger = (cardId, value) => {
        let newPriority = list.filter(el => el._id === cardId)
        newPriority =  {...newPriority[0], priority: prioritys[prioritys.indexOf(newPriority[0].priority) + value]};
        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`, {priority: newPriority.priority})
            .then(res => {
                initialList()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const statusChanger = ['todo', 'progress', 'review', 'done']

    const statusChangerH = (cardId, value) => {
        let newStatus = list.filter(el => el._id === cardId)
        newStatus =  {...newStatus[0], status: statusChanger[statusChanger.indexOf(newStatus[0].status) + value]};

        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`, {status:newStatus.status })
            .then(res => {
                initialList()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='container'>

            <Create
                createCard={createCard }
            />

        <div className='row'>
            {columns.map(el =>
                <Columns key={Math.random()}
                         prioritys={prioritys}
                         statusChangerH={statusChangerH}
                         priorityChanger={priorityChanger}
                         editModalCard={editModalCard}
                         deleteCard={deleteCard}
                         columns={el}
                         list={list}
                />
            )}

        </div>

        </div>
    );
}

export default App;
