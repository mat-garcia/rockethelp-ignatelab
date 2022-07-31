import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {Heading, VStack, Icon, useTheme} from 'native-base';
import { Envelope, Key} from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {
    //pega os valores dos inputs de login
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    //loading ao clicar no botao
    const [isLoading, setIsLoading] = useState(false);

    const { colors } = useTheme();

    function handleSignIn() {
        if(!email || !password) {
           
            return Alert.alert('Entrar', 'Preencha todos os campos para entrar');
        }
        setIsLoading(true);

        auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
            setIsLoading(false);
            if(error.code === 'auth/user-not-found') {
                return Alert.alert('Entrar', 'Email ou senha inválido');
            }
            if(error.code === 'auth/wrong-password') {
                return Alert.alert('Entrar', 'Email ou senha inválido.');
            }
            if(error.code === 'auth/invalid-email') {
                return Alert.alert('Entrar', 'Email inválido.');
            }
            return Alert.alert('Entrar', 'OOPs, não foi possivel acessar.');
        })
    }
    return (
        <VStack flex={1} alignItems="center" bg={"gray.600"} px={8} pt={24} >
            <Logo/>
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input onChangeText={setEmail} placeholder="E-mail" mb={4} InputLeftElement={<Icon as ={<Envelope color={colors.gray[300]} />} ml={4} />} />
            <Input onChangeText={setPassword} placeholder="Senha" mb={8} InputLeftElement={<Icon as ={<Key color={colors.gray[300]} />} ml={4} />} secureTextEntry/>

            <Button 
                title='Entrar' 
                w="full" 
                onPress={handleSignIn}
                isLoading={isLoading}/>
            
        </VStack>
        

    );
}