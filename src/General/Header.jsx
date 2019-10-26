import React,{useState} from 'react';

//Material UI
import {Button,Container,Grid,Typography,IconButton,Modal,Toolbar,TextField,Drawer} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import cssHeader from './cssHeader';

//Icons
import MenuIcon from '@material-ui/icons/Menu';

//Components 
import SideBar from './SideBar.jsx';

const useStyles = makeStyles(cssHeader);

const usuarioRef = React.createRef();
const Header = props=>{
    let usuarioLocal = localStorage.getItem('usuario');
    const [usuario,setUsuario] = useState(usuarioLocal);
    const [openModal,setOpenModal]=useState(false)
    const [abierto,setAbierto] = useState(false);
    const classes = useStyles();

    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setAbierto(open)
    };
    const abrirModal=()=>{
        setOpenModal(true);
    }
    const ponerUsuario=e=>{
        e.preventDefault();
        setOpenModal(false);
        setUsuario(usuarioRef.current.value)
        localStorage.setItem('usuario',usuarioRef.current.value);
    }
    let sesion;
    console.log(usuario)
    if(usuario===null)sesion=<Button onClick={abrirModal} className={classes.botonSesion}>Inciar Sesion</Button>
    else sesion=<Typography className={classes.botonSesion}>{localStorage.getItem('usuario')}</Typography>
    return(
        <div  className={classes.header}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} >
                        <Toolbar >
                            <IconButton className={classes.iconMenu} onClick={toggleDrawer(true)}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h5" display="inline">{props.title}</Typography>
                            {sesion}
                        </Toolbar>
                    </Grid>
                </Grid>
                <Drawer
                    open={abierto}
                    onClose={toggleDrawer(false)}
                >
                    <SideBar/>
                </Drawer>
                <Modal open={openModal} className={classes.modal} onClose={(e)=>{setOpenModal(false)}}>
                    <form className={classes.modalContent} onSubmit={ponerUsuario}>

                        <TextField label="Ingresa tu Nombre" inputProps={{ref:usuarioRef }} />
                        <button className={classes.botonEnviar}>Ingresar</button>
                    </form>
                </Modal>
            </Container>
        </div>
        
    );
}
export default Header;