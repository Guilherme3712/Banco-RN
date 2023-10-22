import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './tela/Inicio';
import { Cadastrar } from './tela/Cadastrar';
import { Principal } from './tela/Principal';
import { Conta } from './tela/Conta';
import { CartaoAdd } from './tela/CartaoAdd'
import { Transacao } from './tela/Transacao';
import { TransacaoD } from './tela/TransacaoD';
import { TransacaoL } from './tela/TransacaoL';
import { Pagamento } from './tela/Pagamento';
import { Intercambio } from './tela/Intercambio';
import { Menu } from './tela/Menu';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        {<Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen name='Inicio' component={Inicio}/>
          <Stack.Screen name='Cadastrar' component={Cadastrar}/>
          <Stack.Screen name='Principal' component={Principal}/>
          <Stack.Screen name='Conta' component={Conta}/>
          <Stack.Screen name='CartaoAdd' component={CartaoAdd}/>
          <Stack.Screen name='Transacao' component={Transacao}/>
          <Stack.Screen name='TransacaoD' component={TransacaoD}/>
          <Stack.Screen name='TransacaoL' component={TransacaoL}/>
          <Stack.Screen name='Pagamento' component={Pagamento}/>
          <Stack.Screen name='Intercambio' component={Intercambio}/>
          <Stack.Screen name='Menu' component={Menu}/>
        </Stack.Navigator>}
      </NavigationContainer>
  );
}

