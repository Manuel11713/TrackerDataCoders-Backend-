import React from 'react';

//Material UI
import {Container,TextField,MenuItem} from '@material-ui/core';
const ranges = [
    {
      value:'c0:9a:d0:9f:7e:2c',
      label:'c0:9a:d0:9f:7e:2c'
    },{
      value:'a8:db:03:ff:89:63',
      label:'a8:db:03:ff:89:63'
    },{
      value:'a8:db:03:01:60:73',
      label:'a8:db:03:01:60:73'
    },{
      value:'d8:1c:79:67:83:3c',
      label:'d8:1c:79:67:83:3c'
    },{
      value:'a8:c9:ed:2b:17:2f',
      label:'a8:c9:ed:2b:17:2f'
    },{
      value:'30:07:4d:84:02:a0',
      label:'30:07:4d:84:02:a0'
    },{
      value:'00:08:22:00:cd:fb',
      label:'00:08:22:00:cd:fb'
    }
  ];
const FormMac = props=>{
    const handleChange=e=>{
      e.preventDefault();
      if(props.macAddr===e.target.value)return null;
      props.setMacAddr(e.target.value);
      props.setSitioData(null);
      props.setUsuarioData(null);
      
    }
    return(
    <React.Fragment>
        <Container>
            <form>
                <TextField
                    select
                    label="Seleccione la MacAddress"
                    fullWidth
                    onChange={handleChange}
                    value={props.macAddr}
                  
                >
                    {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
            </form>
        </Container>
    </React.Fragment>)
}
export default FormMac;