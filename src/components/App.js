import React, {Component} from 'react';
import '../App.css';
import {bicing} from '../assets/bicing';
import {BicingStation} from '../components/BicingStation';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import {getStations} from '../actions/bicingActions';
import {setViewList} from '../actions/presentationActions';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="App">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Servicio Bicing
                        </Typography>
                        <Button variant="raised" color="secondary" onClick={() => this.props.mireia()}>Refresh</Button>
                        <Button variant="raised" color="secondary" onClick={() => this.props.hideList(false)}>Hide</Button>
                        <Button variant="raised" color="secondary" onClick={() => this.props.hideList(true)}>Show</Button>
                    </Toolbar>
                </AppBar>

                {this.props.isHiddenProp && this.props.bicingjson.map(s => <BicingStation bicing={s}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isHiddenProp : state.presentation.isHidden,
        bicingjson: state.bicing.bicingJson
    }
};
// mapDispatchToProps is the usual name dev use
const mapActionsToProperties = (dispatch) => {
    return {
        mireia: () => dispatch(getStations()),
        hideList: (boolean) => dispatch(setViewList(boolean))
    }
};
export default connect(mapStateToProps, mapActionsToProperties)(withStyles(styles)(App));

