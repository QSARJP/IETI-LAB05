import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.description}</td>
                <td>{this.props.responsable}</td>
                <td>{this.props.status}</td>
                <td>{this.props.dueDate.format('DD-MM-YYYY')}</td>
            </tr>
        );
    }

}