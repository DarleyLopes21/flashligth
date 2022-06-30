import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from  'react-native'
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
const [toogle, setToogle] = useState(false);

const handleChangeToogle = () => setToogle(oldTogle => oldTogle); 

useEffect(()=>{
//liga lanterna do celular
Torch.switchState(toogle);  
},[toogle]);

useEffect(()=>{

  // Quando o celular chacolhar o toogle altera
  const subscription = RNShake.addListener(()=>{
  handleChangeToogle(oldTogle => oldTogle);
  });
// Essa função vai ser chamada quando o componente
//for ser desmontado

  return () => subscription.remove();
  },[]);

return <View style={toogle ? style.containerLigth : style.container}  />;
  <TouchableOpacity onPress={handleChangeToogle}
  >   
 

  <Image
    style = {toogle ? style.lightingOn : style.lightingOff}
    source = {requiretoogle 
    ? require ('./assets/icons/eco-light.png') 
    : require ('./assets/icons/eco-light-off.png' )}  />

    return <View style={toogle ? style.containerLigth : style.container}  />;
    <Image
      style = {style.diologo}
      source = {requiretoogle 
      ? require ('./assets/icons/logo-dio.png') 
      : require ('./assets/icons/logo-dio-white.png' )}  />
  </TouchableOpacity>
};



export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',

  },

  containerligth:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

  },

  lightingOn: {

    resizeMode: 'cotain',
    alignSelf: 'center',
        width: 150,
    heigth: 150,

  },

  lightingOff: {

    resizeMode: 'cotain',
    alignSelf: 'center',
    tintecolor: 'white',
    width: 150,
    heigth: 150,

  },
  dioLogo: {

    resizeMode: 'cotain',
    alignSelf: 'center',
    width: 250,
    heigth: 250,

  },

  

});

