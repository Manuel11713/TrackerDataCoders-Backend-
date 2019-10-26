import React,{useState,useEffect} from 'react';
import TarjetaDatos from './TarjetaDatos.jsx';
import Header from '../General/Header.jsx';

import FormMac from './FormMac.jsx';
//Material UI
import {Container,Grid} from '@material-ui/core';
import axios from 'axios';

const costumerIds = ['eda39e92559043d1b7c2f583d9dab55e',"08ae8b61c0a048ef9bb14d7ae5db4a7c","b16ec992e6c946a1846ed0f4b5dbbd77"];


const HomeContainer = ()=>{
    const [usuarioData,setUsuarioData] = useState(null);
    const [sitioData,setSitioData] = useState(null);
    const [aviso,setAviso] = useState(null);
    const [macAddr,setMacAddr] = useState("c0:9a:d0:9f:7e:2c");

    useEffect(() => {
        const fetchData = async () => {
          let cliente=null;
          for(var i=0;i<3;i++){//Ciclo for para hace peticiones en las 3 id's
            //peticion get a los usuarios conectados
            const clientes = await axios.get(`https://aruba.easygetpaid.com/hackathon/tenants/${costumerIds[i]}/clients`);
            
            //buscamos al cliente por medio de su macAddr 
            cliente = clientes.data.find(registro=>{
              return registro.macaddr === macAddr
              
            });
            //si lo encuentra detiene el ciclo
            if(cliente)break;

            //pero nunca encuentra un cliente con ninguna de las mac address
          }
          
          if(!cliente){
          
            setAviso(<div>Dispositivo no Encontrado</div>)
          }else{
            const serial = cliente.associated_device;
           
            const detalle = await axios.get(`https://aruba.easygetpaid.com/hackathon/tenants/${costumerIds[i]}/ap/${serial}/detail`);

          
            const sitio = await axios.get(`http://ip-api.com/json/${detalle.data.public_ip_address}`);
            
            setUsuarioData(detalle.data);
            setSitioData(sitio.data);
            setAviso(null)
          }
        };
        fetchData();
      }, [macAddr]);
    
      
    return(
        <div>
            <Header/>
            <FormMac macAddr={macAddr} setMacAddr={setMacAddr} sitioData={sitioData} usuarioData={usuarioData} setSitioData={setSitioData} setUsuarioData={setUsuarioData}/>
            <Container>
                <Grid container>
                  <Grid item xs={6}>
                    {aviso}
                    <TarjetaDatos macAddr={macAddr} usuarioData={usuarioData} sitioData={sitioData} />
                    
                  </Grid>
                  <Grid item xs={6}>
                   
                  </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default HomeContainer;