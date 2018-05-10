import React from 'react';
import Button from 'material-ui/Button';
import {ListItem} from 'material-ui/List';
import ExpansionPanel, {
    ExpansionPanelSummary, ExpansionPanelDetails,} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';




export const BicingStation = ({bicing}) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <ListItem>
                    <span>{bicing.id} - {bicing.streetName} , {bicing.streetNumber} </span>
                    <Chip label={bicing.status} />
                </ListItem>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    <div>Bikes available: {bicing.bikes} </div>
                    <div>Slots available: {bicing.slots}</div>
                    <Button variant="raised" color="secondary">View on Map</Button>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>)
};