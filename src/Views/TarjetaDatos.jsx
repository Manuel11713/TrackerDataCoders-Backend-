import React from 'react';


//Material UI
import {Card,CardContent,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import cssTarjetaDatos from './cssTarjetaDatos';
import axios from 'axios';
const styles = makeStyles(cssTarjetaDatos);

const TarjetaDatos = props=>{
    const classes = styles();
    
    if(!props.usuarioData || !props.sitioData)return null;
    const data ={macAdress:props.macAddr,
        nombreDispositivo:props.usuarioData.name,
        longitud:props.sitioData.lon,
        latitud:props.sitioData.lat,
        pais:props.sitioData.country,
        ciudad:props.sitioData.city,
        fecha:new Date()}
    console.log('almacenar',Date())
    axios.post('/almacenar',data).then(res=>console.log(res)).catch(err=>console.log(err))
    
    return(
        <Card className={classes.list}>
            <CardContent>
                <Typography display="block" variant="h5">Posicion Actual</Typography>
                <Typography display="block" variant="body1">Mac Adress: {props.macAddr}</Typography>
                <Typography display="block" variant="body1">Nombre del dispositivo: {props.usuarioData.name}</Typography>
                <Typography display="block" variant="body1">Longitud: {props.sitioData.lon}</Typography>
                <Typography display="block" variant="body1">Latitud: {props.sitioData.lat}</Typography>
                <Typography display="block" variant="body1">Pais: {props.sitioData.country}</Typography>
                <Typography display="block" variant="body1">Ciudad: {props.sitioData.city}</Typography>
            </CardContent>
        </Card>
    );
}
export default TarjetaDatos;