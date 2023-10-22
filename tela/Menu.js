import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';

export function Menu({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <View style={{flexDirection:'row'}}>
                                            <View style={styles.nav}>
                    <Image style={styles.icon} source={require('/assets/lista.png')}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                        <Image style={styles.icon} source={require('/assets/seta.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>MENU</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Conta')}>
                        <Image style={styles.icon} source={require('/assets/engrenagem.png')}/>
                    </TouchableOpacity>
            </View>
            <Image style={styles.tinyLogo} source={require('/assets/bank.png')}/>   
        </View>

        <View style={styles.container1}>
            <View style={styles.container2}>
                
                <View style={styles.container3}>
                        <View style={styles.circulo}>
                            <TouchableOpacity onPress={() => navigation.navigate('Conta')}>
                                <Image style={styles.iconC} source={require('/assets/user.png')}/>
                            </TouchableOpacity>
                        </View>
                    <Text>Conta</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo2}>
                        <TouchableOpacity onPress={() => navigation.navigate('Intercambio')}>
                            <Image style={styles.iconC} source={require('/assets/intercambio.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text>Intercâmbio</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo3}>
                        <TouchableOpacity onPress={() => navigation.navigate('Pagamento')}>
                            <Image style={styles.iconC} source={require('/assets/dinheiro.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text>Pagamento</Text>
                </View>
        
            </View>
            <View style={styles.container2}>
                
                <View style={styles.container3}>
                    <View style={styles.circulo}>
                        <TouchableOpacity onPress={() => navigation.navigate('Transacao')}>
                            <Image style={styles.iconC} source={require('/assets/transacao.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text>Transação</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo2}>
                        <TouchableOpacity  onPress={() => navigation.navigate('CartaoAdd')}>
                            <Image style={styles.iconC} source={require('/assets/card.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text>Cartão</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo3}>
                        <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                            <Image style={styles.iconC} source={require('/assets/extrato.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text>Extrato</Text>
                </View>
        
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: '5px',
},
div:{
    width: '100%',
    height: '250px',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent:'center',

},

nav:{
    flexDirection: 'row',
    marginRight: 100,
    marginBottom: 30,
    gap:10
},
icon:{
    width: 25,
    height: 25,
    justifyContent: 'space-between'
},
text:{
    color: '#ffffff',
    fontSize: 15,
    marginRight: 125,

},
text2:{
    color: 'steelblue',
},
txtinput:{
    height: 30,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: '5px',
},
txtinput2:{
    height: 30,
    margin: 5,
    borderWidth: 1,
    padding: 27,
    borderRadius: '5px',
},
btn:{
    color: 'steelblue'
},
tinyLogo: {
    width: 120,
    height: 120,
},

container1:{
    gap: 40,
    marginTop: 20
},
container2:{
    flexDirection: 'row',
    gap: 30
},
container3:{
    alignItems: 'center',
    justifyContent:'center',
},
iconC:{
    width: 80,
    height: 80,
},

circulo: {
    borderRadius: 150 / 2,
    backgroundColor: '#00B3FF',
    alignItems: 'center',
    justifyContent:'center',
  },
circulo2: {
    borderRadius: 150 / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
circulo3: {
    borderRadius: 150 / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },

});