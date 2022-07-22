import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, HStack, IconButton, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut , ChatTeardropText} from 'phosphor-react-native';


import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Order , OrderProps} from '../components/Order';
import { Button } from '../components/Button';

export function Home() {
    //seta o filtro selecionado pelo usuario - <> define o valor padrao no useState
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');

    const [orders, setOrders] = useState<OrderProps[]>([{
        id: '123',
        patrimony: '13556',
        when: '21/07/2022 às 10:00',
        status: 'open'
    },{
        id: '124',
        patrimony: '13557',
        when: '21/07/2022 às 10:00',
        status: 'open'
    },
    {
        id: '125',
        patrimony: '13558',
        when: '21/07/2022 às 10:00',
        status: 'open'
    },
    {
        id: '126',
        patrimony: '1359',
        when: '21/07/2022 às 10:00',
        status: 'open'
    }/*,
    {
        id: '124',
        patrimony: '13557',
        when: '21/07/2022 às 10:00',
        status: 'open'
    },
    {
        id: '124',
        patrimony: '13557',
        when: '21/07/2022 às 10:00',
        status: 'open'
    },
    {
        id: '124',
        patrimony: '13557',
        when: '21/07/2022 às 10:00',
        status: 'open'
    },
    {
        id: '124',
        patrimony: '13557',
        when: '21/07/2022 às 10:00',
        status: 'open'
    } */

]);

    const navigation = useNavigation();
    const {colors} = useTheme();
    
    //navegação para a tela de cadastro de nova solicitação
    function handeNewOrder() {
        navigation.navigate('new');

    }
    //navegação para a tela de detalhes de uma solicitação
    function handleDetails(orderId: string) {
        navigation.navigate('details', { orderId });
    }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack 
        w="full"
        justifyContent="space-between" 
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
        >
        <Logo/>
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />}/>
        </HStack>
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                <Heading color="gray.100">
                    Solicitações
                </Heading>
                <Text color="gray.200">
                    {orders.length}
                </Text>
            </HStack>

            {/* FILTROS */}
            <HStack space={3} mb={8}>
                <Filter onPress={() => setStatusSelected('open')} type="open" title="em andamento" isActive={statusSelected == 'open'} />
                <Filter onPress={() => setStatusSelected('closed')} type="closed" title="finalizados" isActive={statusSelected == 'closed'} />
            </HStack>

            {/* LISTA DE CHAMADOS
                //listEmpty mostra um component caso lista esteja vazia
                //_contentContainerStyle estiliza o interior da flat list */}
            <FlatList data={orders}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Order data={item} onPress={() => handleDetails(item.id)}/>}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{paddingBottom: 100}}
            ListEmptyComponent={() => (
                <Center>
                    <ChatTeardropText color={colors.gray[300]} size={40}/>
                    <Text color="gray.300" fontSize="xl" mt={6} textAlign="center"> 
                    Você ainda não possui {'\n'}
                    solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                    </Text>
                </Center>
            )}/>

            <Button title="Novo chamado" onPress={handeNewOrder}/>

        </VStack>
    </VStack>
  );
}