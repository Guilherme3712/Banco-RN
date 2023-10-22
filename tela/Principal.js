import React from 'react';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';

export function Principal({navigation}) {
    return (
            <View style={styles.container}>
                <View style={styles.div}>
                    <View style={styles.header}>
                        <View style={styles.nav}>
                            <Image
                            style={styles.icon2}
                            source={require('/assets/lista.png')}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                                <Image style={styles.icon2} source={require('/assets/seta.png')}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textNav}>TRANSAÇÃO</Text>
                        <Image
                        style={styles.icon2}
                        source={require('/assets/engrenagem.png')}
                        /> 
                    </View>
                    <Image
                    style={styles.tinyLogo}
                    source={require('/assets/user.png')}
                    />
                    <Text style={styles.text}>Seu Nome</Text>
                    <Text style={styles.text2}>seu-email@email.com</Text>
                    <View style={styles.caixa}>
                        <Text style={styles.text3}>Balanço</Text>
                            <Text style={styles.text4}>$4,180.20</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Transacao')}>
                            <Text style={styles.txtHeader}>Transferir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.text3}>Ultimas Transações</Text>
                
                <View style={styles.container2}>
                    <View style={styles.containers}>
                        <View style={styles.circulo}></View>
                        <View>
                            <Text>Lorem Ipsum Company</Text>
                            <Text style={styles.text5}>Pagamento recebido</Text>
                        </View>
                        <Text style={styles.num}>$2.030,80</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo}></View>
                        <View>
                            <Text>Auctor Elit Ltd.</Text>
                            <Text style={styles.text5}>Dinheiro transferido</Text>
                        </View>
                        <Text style={styles.num}>               -$450.00</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo}></View>
                        <View>
                            <Text>Lectus Sit Amet est</Text>
                            <Text style={styles.text5}>Pagamento água e gás</Text>
                        </View>
                        <Text style={styles.num}>        -$239.50</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo}></View>
                        <View>
                            <Text>Congue Quisque</Text>
                            <Text style={styles.text5}>Dinheiro retirado</Text>
                        </View>
                        <Text style={styles.num}>         -$1.500,00</Text>
                    </View>
                    
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('TransacaoL')}><Text style={styles.txtSection}>Mais--</Text></TouchableOpacity>
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
        height: '365px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 20,
    },
    
    nav:{
        flexDirection: 'row',
        marginRight: 50,
        
    },
    icon2:{
        width: 25,
        height: 25,
    },
    textNav:{
        color: '#ffffff',
        fontSize: 20,
        marginRight: 70,
    
    },
    header:{
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    text:{
        color: '#ffffff',
        fontSize: 20
    },
    text2:{
        color: '#ffffff',
    },
    text3:{
        fontSize: 15,
        color: '#00B3FF'
    },
    caixa:{
        width: '200px',
        height: '90px',
        backgroundColor: '#ffffff',
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    circulo: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: 'steelblue',
      },
    text5:{
        fontSize: 10,
    },
    container2:{
        rowGap: 10
    },
    containers:{
        flexDirection: 'row',
        rowGap: 10
    },
    num:{
        marginLeft: 50
    },
    mais:{
        marginLeft: 240,
        color: '#00B3FF'
    },
    icon:{
        width: 25,
        height: 25,
        marginLeft: 150,
        marginRight: 150,
        marginBottom: 90
    },
    btn:{
        backgroundColor: 'steelblue',
        borderRadius: 3,
        width: 90,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center'
    },
    txtHeader:{
        color: '#ffffff',
        fontWeight:'500',
        textAlign: 'center',
    },
    txtSection:{
        color: 'steelblue',
        fontWeight:'500',

    },

});