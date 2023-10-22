import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export function TransacaoD({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <View style={styles.nav}>
                <Image
                style={styles.icon}
                source={require('/assets/lista.png')}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Transacao')}>
                    <Image style={styles.icon} source={require('/assets/seta.png')}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>TRANSAÇÃO</Text>
                
                <Image
                style={styles.icon}
                source={require('/assets/engrenagem.png')}
                />
                
        </View>
        <Image
                    style={styles.tinyLogo}
                    source={require('/assets/nota.png')}
                    />
        <View>
            <Text style={styles.text2}>Da conta bancária</Text>
            <TextInput placeholder='00 123 456' style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Para conta bancária</Text>
            <TextInput placeholder='Selecione' style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Número de Celular</Text>
            <View style={styles.dma}>
                <TextInput placeholder='$' style={styles.txtinput2}></TextInput>
                <TextInput style={styles.txtinput}></TextInput>
            </View>

            <Text style={styles.text2}>Menssagens</Text>
            <TextInput style={styles.txtinput}></TextInput>
            
        </View>

        <View style={styles.btns}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}><Text style={styles.txtSection}>Enviar</Text></TouchableOpacity>
            <Text style={styles.txt}>ou</Text>
            <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Menu')}>Cancelar</TouchableOpacity>
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
        marginRight: 100
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
        width: 60,
        margin: 5,
        borderWidth: 1,
        borderRadius: '5px',
        padding: 10,
    },
    tinyLogo: {
        width: 220,
        height: 110,
    },
    btns:{
        flexDirection: 'row',
        paddingTop: 20,
    },
    dma:{
        flexDirection: 'row'
    },
    txt:{
       marginLeft: 10,
       marginRight: 10 
    },
    txtSection:{
        color: '#ffffff',
        textAlign: 'center',
        fontWeight:'500'
    },
    btn:{
        backgroundColor: 'steelblue',
        borderRadius: 3,
        width: 90,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center'
    },
    btn2:{
        borderWidth: 1,
        color: 'steelblue',
        borderColor: 'steelblue',
        borderRadius: 3,
        width: 90,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center'
    },
  });