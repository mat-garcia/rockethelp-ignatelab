import { useState } from 'react';
import { Alert } from 'react-native';
import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {

  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('') ;
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleNewOrderRegister(){
    if(!patrimony || !description){
      return Alert.alert('Registar', ' preencha todos os campos')
    }
    setIsLoading(true);
    firestore()
    .collection('orders')
    .add({
      patrimony,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      Alert.alert("Solicitação","Solicitação registrada com sucesso!")
      navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false)
      return Alert.alert('Solicitação', 'Não foi possivel registar o pedido');
    })
  }
  return (
    <VStack flex={1} p={6} bg="gray.600">
        <Header title="Nova solicitação" />
        <Input onChangeText={setPatrimony} placeholder=' Número do patrimonio '  mt={4}></Input>
        <Input onChangeText={setDescription} placeholder=' Descriço do problema' flex={1} mt={5} multiline textAlignVertical="top"></Input>
        <Button onPress={handleNewOrderRegister} isLoading={isLoading} title='Cadastrar' mt={5}>Enviar</Button>
    </VStack>
  );
}