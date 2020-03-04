import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} desciption={todo.description} responsable={todo.responsable} status={todo.status} dueDate={todo.dueDate}/>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Responsable</th>
                    <th>Status</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                {todoList}
                </tbody>
            </table>
        );


    }

}