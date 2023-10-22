import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export function CartaoAdd({navigation}) {
    return (
    <View style={styles.container}>
        <View style={styles.div}>
            <View style={styles.nav}>
                <Image
                style={styles.icon}
                source={require('/assets/lista.png')}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.icon} source={require('/assets/seta.png')}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>ADICIONAR CARTÃO</Text>
                
                <Image
                style={styles.icon}
                source={require('/assets/engrenagem.png')}
                />
                
        </View>
        <Image
                    style={styles.tinyLogo}
                    source={require('/assets/card.png')}
                    />
        <View>
            <Text style={styles.text2}>Seu nome</Text>
            <TextInput placeholder='Nome' style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Número do Cartão</Text>
            <TextInput placeholder='Insira o número do cartão' style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Data de expiração</Text>
            <View style={styles.dma}>
                <TextInput placeholder='Dia' style={styles.txtinput2}></TextInput>
                <TextInput placeholder='Mês' style={styles.txtinput2}></TextInput>
                <TextInput placeholder='Ano' style={styles.txtinput2}></TextInput>
            </View>
            

            <Text style={styles.text2}>Senha</Text>
            <TextInput placeholder='*********' style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Número de Celular</Text>
            <View style={styles.dma}>
                <TextInput placeholder='+55' style={styles.txtinput2}></TextInput>
                <TextInput style={styles.txtinput}></TextInput>
            </View>
            
        </View>
        <Text>*Não compartilhe seus dados com ninguém!</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}><Text style={styles.txtSection}>Lincar Cartão</Text></TouchableOpacity>

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
        marginRight: 80
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
    txtinput3:{
        height: 30,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: '5px',
    },
    tinyLogo: {
        width: 110,
        height: 110,
    },
    dma:{
        flexDirection: 'row'
    },
    txtSection:{
        color: '#ffffff',
        textAlign: 'center',
        fontWeight:'500'
    },
    btn:{
        backgroundColor: 'steelblue',
        borderRadius: 3,
        width: 130,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center'
    },
  });