import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
    const navigation = useNavigation();
    return (
            <View style={styles.container}>
                <View style={styles.div}>
                    <Text style={styles.txtHeader}>Bem Vindo!</Text>
                    <Image
                    style={styles.tinyLogo}
                    source={require('/assets/bank.png')}
                    />
                </View>

                    <TextInput placeholder='Usuário ou Email' style={styles.txtinput}></TextInput>
                    <TextInput placeholder='Senha' style={styles.txtinput}></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.txtSection}>
                            Login
                        </Text>
                    </TouchableOpacity>          
                    <Text>Esqueceu a senha?</Text>
                    <Text>Ainda não é cliente? <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>Inscreva-se</TouchableOpacity></Text>
                    
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
        height: '380px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 30
    },

    txtHeader:{
        color: '#ffffff',
        fontSize: 32
    },
    txtinput:{
        height: 30,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        borderRadius: '5px',
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    btn:{
        backgroundColor: 'steelblue',
        borderRadius: 3,
        width: 90,
        height: 23,
        textAlign: 'center',
        justifyContent: 'center'
    },
    txtSection:{
        color: '#ffffff',
        fontWeight:'500',
        textAlign: 'center',
    },
  });
  
