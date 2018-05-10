import React, {Component} from 'react';
import './App.css';
import {bicing} from './assets/bicing';
import {BicingStation} from './components/BicingStation';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class App extends Component {

    constructor(props) {
        super(props);
        this.bicingjson = bicing;
        // debugger;

    }

    render() {
        return (
            <div className="App">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Servicio Bicing
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.bicingjson.stations.map(s => <BicingStation bicing={s}/>)}
            </div>
        );
    }
}

export default withStyles(styles)(App);

