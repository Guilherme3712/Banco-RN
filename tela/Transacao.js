import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export function Transacao({navigation}) {
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
                <Text style={styles.text}>TRANSAÇÃO</Text>
                <Image
                style={styles.icon}
                source={require('/assets/engrenagem.png')}
                />
            </View>
                
            <Text style={styles.text2}>Escaneie este QR CODE</Text>
            <Image
            style={styles.qr}
            source={require('/assets/qrcode.png')}
            />
            <Text style={styles.text2}>Seu Nome</Text>
            <Text style={styles.text3}>seu-email@email.com</Text>
        </View>
        <Text style={styles}>Try BARCODE</Text>
        <Image
        style={styles.bar}
        source={require('/assets/bar.png')}
        />
        <Text>Não consegue escanear o QR CODE?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TransacaoD')}>
            <Text>Tente <a href='#'>Conta Bancária</a></Text>
        </TouchableOpacity>
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
        height: '410px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 20,
    },
    
    nav:{
        flexDirection: 'row',
        marginRight: 60,
        
    },
    icon:{
        width: 25,
        height: 25,
    },
    text:{
        color: '#ffffff',
        fontSize: 20,
        marginRight: 80,
    
    },
    header:{
        flexDirection: 'row',
    },
    qr:{
        width: 170,
        height: 170,
        marginTop: 10
    },
    text2:{
        color: '#ffffff',
        fontSize: 15,
        marginTop: 40
    },
    text3:{
        color: '#ffffff',
 
        marginTop: 10
    },
    bar:{
        width: 170,
        height: 50,
    }
    
    });