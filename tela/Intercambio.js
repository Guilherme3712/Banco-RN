import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

export function Intercambio({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <View style={styles.nav}>
                <Image
                style={styles.tinyicon}
                source={require('/assets/lista.png')}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.tinyicon} source={require('/assets/seta.png')}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>INTERCÂMBIO</Text>            
                <Image
                style={styles.tinyicon}
                source={require('/assets/engrenagem.png')}
                />
        </View>
        <View style={styles.div2}>
            <Image style={styles.icon} source={require('/assets/dolar.png')}/>
            <Image style={styles.icon2} source={require('/assets/setas.png')}/>
            <Image style={styles.icon} source={require('/assets/euro.png')}/>
        </View>

        <View style={styles.textInput}>
            <TextInput placeholder='$ ˇ' style={styles.txtinput2}></TextInput>
            <TextInput placeholder='1,000.00' style={styles.txtinput}></TextInput>
        </View>
        <Text>Converter para</Text>
        <View style={styles.textInput}>
            <TextInput placeholder='? ˇ' style={styles.txtinput2}></TextInput>
            <TextInput placeholder='780.00' style={styles.txtinput}></TextInput>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>3</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>6</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>9</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', gap: 10, marginBottom: 30}}>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>00</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.txtSection}>X</Text></TouchableOpacity>
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
        height: '50px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
    },
    nav:{
        flexDirection: 'row',
        marginRight: 70,
        
    },
    tinyicon:{
        width: 25,
        height: 25,
    },
    icon:{
        width: 90,
        height: 90,
        marginTop: 50
    },
    icon2:{
        width: 100,
        height: 190,
    },
    text:{
        color: '#ffffff',
        fontSize: 15,
        marginRight: 110,
    
    },
    div2:{
        flexDirection: 'row'
    },
    textInput:{
        flexDirection: 'row',
    },
    txtinput:{
        height: 30,
        margin: 5,
        width: 180,
        borderWidth: 1,
        padding: 10,
        borderRadius: '5px',
        color: 'steelblue',
        fontSize: 25,
        textAlign: 'right'
    },
    txtinput2:{
        height: 30,
        width: 50,
        margin: 5,
        borderWidth: 1,
        borderRadius: '5px',
        padding: 10,
        fontSize: 20,
        color: '#00B3FF'
    },
    btn:{
        backgroundColor: 'steelblue',
        borderRadius: 3,
        width: 110,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center'
    },
    txtSection:{
        color: '#ffffff',
        textAlign: 'center',
        fontWeight:'500'
    },
    
    });