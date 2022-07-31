import { useState , useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import auth , { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { SignIn } from '../screens/Signin';
import { Loading } from '../components/Loading';
import { AppRoutes } from './app.routes';

export function Routes(){
    const [loading, setLoad] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(response => {
            setUser(response);
            setLoad(false);
        })
        return subscriber;
    },[]);

    if(loading){
        return <Loading />
    }
    return (
        <NavigationContainer>
            {user ? <AppRoutes/> : <SignIn />}
        </NavigationContainer>
    );
}