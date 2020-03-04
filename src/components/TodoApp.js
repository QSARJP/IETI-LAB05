import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from "moment";
import { TextField, Button } from "@material-ui/core";
import ResponsiveDrawer from "./ResponsiveDrawer";



export class TodoApp extends Component{


    constructor(props) {
        super(props);
        this.state = {items: [], description: '',responsible:'', status: '', dueDate: moment()};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <div className="App" onSubmit={this.handleSubmit}>
                <ResponsiveDrawer></ResponsiveDrawer>
                <br/>
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TASK </h3>
                    <TextField id="description" label="description" onChange={this.handleDescriptionChange} value={this.state.description}/>
                    <br/>
                    <br/>
                    <TextField id="responsible" label="responsible" onChange={this.handleResponsibleChange} value={this.state.responsible}/>
                    <br/>
                    <br/>
                    <TextField id="status" label="status" onChange={this.handleStatusChange} value={this.state.status} />
                  
                    <br/>
                    <br/>

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br/>
                    <br/>
                    <Button variant="contained" color="secondary" type="submit" href={"/Main"}> Add #{this.state.items.length + 1} </Button>
                </form>
                <br/>
                <br/>
                
            </div>

    

        );
    }
    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleResponsibleChange(e) {
        this.setState({
            responsible: e.target.value
        });
    }
    handleStatusChange(e) {
            this.setState({
                status: e.target.value
            });
        }
    
        handleDateChange(date) {
            this.setState({
                dueDate: date
            });
        }
    
        handleSubmit(e) {
    
            e.preventDefault();
    
            if (!this.state.description.length || !this.state.responsable.length || !this.state.status.length || !this.state.dueDate)
                return;
    
            const newItem = {
                description: this.state.description,
                responsable: this.state.responsable,
                status: this.state.status,
                dueDate: this.state.dueDate,
    
            };
            this.setState(prevState => ({
                items: prevState.items.concat(newItem),
                description: '',
                responsable: '',
                status: '',
                dueDate: ''
            }));
        }
    




}







