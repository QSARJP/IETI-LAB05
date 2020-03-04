import React from 'react';
import CardShow from './Card';
import { task } from './Task';
import ResponsiveDrawer from './ResponsiveDrawer';
import CarList from './CardList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';






export class MainView extends React.Component{


    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="MainView" >
                <ResponsiveDrawer></ResponsiveDrawer>
                <br/>
                <br/>
                <CarList task = {task} ></CarList>
                <Fab color="secondary" aria-label="add" style={{position: "absolute", right: "0px", bottom: "0", margin: "10px"}} href="/Task" >
                    <AddIcon/>
                </Fab>
                
                
                
            </div>

    

        );
    }

}