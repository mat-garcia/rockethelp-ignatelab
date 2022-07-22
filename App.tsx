import {NativeBaseProvider, StatusBar} from 'native-base';

//import fonts
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme';

import {Register} from './src/screens/Register';
import { Loading } from './src/components/Loading';


export default function App() {
  //verifica se a fonte esta carregada
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      {/* 
        //operador ternario - para usar varivavel envolver com chaves 
        //APLICA O EFEITO DE LOADING
      */}
      <StatusBar
      barStyle='light-content'
      backgroundColor="transparent"
      translucent
      />
      { fontsLoaded ? <Register/> : <Loading/>}
    </NativeBaseProvider>
  );
}

