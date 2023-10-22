import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';

export function Conta({navigation}) {
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
            <Text style={styles.text}>CONTA</Text>
                
                <Image
                style={styles.icon}
                source={require('/assets/engrenagem.png')}
                />
                
        </View>
        <Image
                    style={styles.tinyLogo}
                    source={require('/assets/user.png')}
                    />
        <View>
            <Text style={styles.text2}>Seu nome</Text>
            <TextInput style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Conta Bancária</Text>
            <TextInput style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Email</Text>
            <TextInput style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Senha</Text>
            <TextInput style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Número telefônico</Text>
            <TextInput style={styles.txtinput}></TextInput>

            <Text style={styles.text2}>Seu endereço</Text>
            <TextInput style={styles.txtinput2}></TextInput>
        </View>
        <Text>*Não compartilhe seus dados com ninguém!</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}><Text style={styles.txtSection}>Salvar Alterações</Text></TouchableOpacity>
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
    marginRight: 100,
    
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
tinyLogo: {
    width: 90,
    height: 90,
},
txtSection:{
    color: '#ffffff',
    fontWeight:'500',
    textAlign: 'center',
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