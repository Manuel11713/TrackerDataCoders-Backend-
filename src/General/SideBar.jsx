import React from 'react';
import {Link} from 'react-router-dom';
//Material-UI
import {Box,Divider,List,ListItem,ListItemIcon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//Material Icons
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import SearchIcon from '@material-ui/icons/Search';
import cssSideBar from './cssSideBar';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(cssSideBar);
const SideBar = props=>{
    const classes = useStyles();
    return(
        <Box className={classes.containerSideBar}>
            <List>
                <Link className={classes.link}  to="/">
                    <ListItem  button>
                        <ListItemIcon>
                            <AssignmentIcon className={classes.icon}/>
                        </ListItemIcon>
                        <Typography variant="h6">Reporte</Typography>
                    </ListItem>
                </Link>
                <Divider light={true}/>
                <Link className={classes.link}  to="/tomarcontrol">
                    <ListItem  button>
                        <ListItemIcon>
                            <CodeIcon className={classes.icon}/>
                        </ListItemIcon>
                        <Typography variant="h6">Tomar Control</Typography>
                    </ListItem>
                </Link>
                <Link className={classes.link}  to="/mapeo">
                    <ListItem  button>
                        <ListItemIcon>
                            <SearchIcon className={classes.icon}/>
                        </ListItemIcon>
                        <Typography variant="h6">Mapeo</Typography>
                    </ListItem>
                </Link>
                <Link className={classes.link}  to="/configuracion">
                    <ListItem  button>
                        <ListItemIcon >
                            <SettingsIcon className={classes.icon}/>
                        </ListItemIcon>
                        <Typography variant="h6">Configuracion</Typography>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );   
}

export default SideBar;