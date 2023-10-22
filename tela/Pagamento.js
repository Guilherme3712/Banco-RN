import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function Pagamento({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <View style={styles.header}>
                <View style={styles.nav}>
                    <Image
                    style={styles.icon}
                    source={require('/assets/lista.png')}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <Image style={styles.icon} source={require('/assets/seta.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>PAGAMENTO</Text>
                    
                    <Image
                    style={styles.icon}
                    source={require('/assets/engrenagem.png')}
                    />
                    
            </View>

            <View style={styles.user}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('/assets/user2.png')}
                    />
                    <View style={styles.user2}>
                        <Text style={styles.text2}>Balanço</Text>
                        <Text style={styles.text3}>$4,180.20</Text>
                    </View>
                </View>
        </View>

        <View style={styles.container1}>
            <View style={styles.container2}>
                
                <View style={styles.container3}>
                    <View style={styles.circulo}>
                        <Image style={styles.iconC} source={require('/assets/gota.png')}/>
                    </View>
                    <Text>Água</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo2}>
                        <Image style={styles.iconC} source={require('/assets/lamp.png')}/>
                    </View>
                    <Text>Eletrecidade</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo3}>
                        <Image style={styles.iconC} source={require('/assets/fogo.png')}/>
                    </View>
                    <Text>Gás</Text>
                </View>
        
            </View>


            <View style={styles.container2}>
                <View style={styles.container3}>
                    <View style={styles.circulo4}>
                        <Image style={styles.iconC} source={require('/assets/sacola.png')}/>
                    </View>
                    <Text>Compras</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo5}>
                        <Image style={styles.iconC} source={require('/assets/cell.png')}/>
                    </View>
                    <Text>Celular</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo6}>
                        <Image style={styles.iconC} source={require('/assets/cartao.png')}/>
                    </View>
                    <Text>Cartão</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <View style={styles.circulo7}>
                        <Image style={styles.iconC} source={require('/assets/escudo.png')}/>
                    </View>
                    <Text>Seguro</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo8}>
                        <Image style={styles.iconC} source={require('/assets/casa.png')}/>
                    </View>
                    <Text>Seguro</Text>
                </View>

                <View style={styles.container3}>
                    <View style={styles.circulo9}>
                        <Image style={styles.iconC} source={require('/assets/list.png')}/>
                    </View>
                    <Text>Outros</Text>
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
    header:{
        flexDirection: 'row',

    },
    div:{
        width: '100%',
        height: '190px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
    },
    
    nav:{
        flexDirection: 'row',
        marginRight: 80,
        
    },
    icon:{
        width: 25,
        height: 25,
        justifyContent: 'space-between'
    },
    text:{
        color: '#ffffff',
        fontSize: 15,
        marginRight: 120,
    },
    tinyLogo: {
        width: 90,
        height: 90,
    },
    user:{
        flexDirection: 'row',
        marginTop: 20,
    },
    text2:{
        color: '#00BFFF'
    },
    text3:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    user2:{
        marginLeft: 20,
        marginTop: 15
    },
    circulo: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#00B3FF',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo2: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#FFB300',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo3: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#FF3333',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo4: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#FF58AC',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo5: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo6: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#00916F',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo7: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#009EA4',
        alignItems: 'center',
        justifyContent:'center',
      },
      circulo8: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#6A5ACD',
        alignItems: 'center',
        justifyContent:'center',

      },
      circulo9: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        backgroundColor: '#606060',
        alignItems: 'center',
        justifyContent:'center',

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
        width: 40,
        height: 40,
    },
    text4:{
        marginLeft: 250,
        marginTop: 20,
        color: '#00B3FF'
    },

    });