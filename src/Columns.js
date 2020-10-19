import React from "react";
import Cards from "./Cards";


function Columns (props) {
    return(
        <div className='col-4 col-sm' style={{boarder: '1px solid'}}>
            <h2>{props.columns.title}</h2>

                {props.list.filter(el => el.status === props.columns.status)
                    .sort((a, b) => b.priority - a.priority)
                    .map(el =>
                    <Cards
                        key={Math.random()}
                        prioritys={props.prioritys}
                        statusChangerH={props.statusChangerH}
                        priorityChanger={props.priorityChanger}
                        editModalCard={props.editModalCard}
                        deleteCard={props.deleteCard}
                        card={el}
                    />
                )}

        </div>
    )
}

export default Columns;