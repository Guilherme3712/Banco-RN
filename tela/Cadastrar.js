import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, CheckBox, Button,TouchableOpacity } from 'react-native';

export function Cadastrar({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <View style={styles.img}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('/assets/bank.png')}
                    />
                    <Image
                    style={styles.tinyLogo}
                    source={require('/assets/proximo.png')}
                    />
                    <Image
                    style={styles.tinyLogo}
                    source={require('/assets/celular.png')}
                    />
                </View>
                <Text style={styles.texto}>Conecte-se a sua conta Bancaria!</Text>
            </View>
            <TextInput placeholder='Seu Nome' style={styles.txtinput}></TextInput>
            <TextInput placeholder='Conta Bancária' style={styles.txtinput}></TextInput>
            <TextInput placeholder='Email' style={styles.txtinput}></TextInput>
            <TextInput placeholder='Senha' style={styles.txtinput}></TextInput>
            <Text>Use 6 carácteres com letras,números e símbolos.</Text>
            <View style={styles.check}>
                <CheckBox style={styles.box}/>
                <View style={styles.textbox}>
                    <Text style={styles.text}>Ao se cadastrar você concorda com os</Text>
                    <Text style={styles.text}>Termos de uso e política de privacidadedo banco.</Text>
                </View>
            </View>

            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}><Text style={styles.txtSection}>Inscreva-se</Text></TouchableOpacity>
                <Text style={styles.txt}>ou</Text>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Inicio')}>Cancelar</TouchableOpacity>
            </View>
            <Text>Já tem uma conta? <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>Entrar</TouchableOpacity></Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '5px',
    },
    check:{
        flexDirection: 'row',
    },
    box:{
        width: 30,
        height: 30,
        marginTop: 5
    },
    text:{
        paddingLeft: 14,
    },
    textbox:{
        flexDirection: 'column',
    },
    div:{
        width: '100%',
        height: '200px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center'
    },
    img:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    texto:{
        color: '#ffffff',
        fontSize: 15
    },
    txtinput:{
        height: 30,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        textAlign: 'start',
        borderRadius: '5px',
    },
    btns:{
        flexDirection: 'row',
        padding: 10
    },
    txt:{
        marginLeft: 10,
        marginRight: 10 
     },
     txtSection:{
        color: '#ffffff',
        fontWeight:'500',
        textAlign: 'center',
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