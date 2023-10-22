import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';

export function TransacaoL({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <View style={styles.header}>
                <View style={styles.nav}>
                    <Image
                    style={styles.icon}
                    source={require('/assets/lista.png')}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                        <Image style={styles.icon} source={require('/assets/seta.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>TRANSAÇÃO</Text>
                <Image
                style={styles.icon}
                source={require('/assets/engrenagem.png')}
                /> 
            </View>
            <View style={styles.btns}>
                <View style={styles.btnHeader}>
                    <TouchableOpacity style={styles.btn}><Text style={styles.txtHeader}>Completo</Text></TouchableOpacity>
                </View>
                <View style={styles.btnHeader}>
                <TouchableOpacity style={styles.btn2}><Text style={styles.txtHeader}>Em Progresso</Text></TouchableOpacity>
                </View>
            </View>
        </View>

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
                        <View style={styles.circulo2}></View>
                        <View>
                            <Text>Auctor Elit Ltd.</Text>
                            <Text style={styles.text5}>Dinheiro transferido</Text>
                        </View>
                        <Text style={styles.num}>               -$450.00</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo3}></View>
                        <View>
                            <Text>Lectus Sit Amet est</Text>
                            <Text style={styles.text5}>Pagamento água e gás</Text>
                        </View>
                        <Text style={styles.num}>        -$239.50</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo4}></View>
                        <View>
                            <Text>Congue Quisque</Text>
                            <Text style={styles.text5}>Dinheiro transferido</Text>
                        </View>
                        <Text style={styles.num}>         -$1,500.00</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo5}></View>
                        <View>
                            <Text>Auctor Elit Ltd.</Text>
                            <Text style={styles.text5}>Dinheiro retirado</Text>
                        </View>
                        <Text style={styles.num}>               -$450.00</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo6}></View>
                        <View>
                            <Text>Lectus Sit Amet est</Text>
                            <Text style={styles.text5}>Pagamento água e gás</Text>
                        </View>
                        <Text style={styles.num}>        -$239.50</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo7}></View>
                        <View>
                            <Text>Congue Quisque</Text>
                            <Text style={styles.text5}>Dinheiro retirado</Text>
                        </View>
                        <Text style={styles.num}>         -$1.500,00</Text>
                    </View>

                    <View style={styles.containers}>
                        <View style={styles.circulo8}></View>
                        <View>
                            <Text>Auctor Elit Ltd.</Text>
                            <Text style={styles.text5}>Dinheiro transferido</Text>
                        </View>
                        <Text style={styles.num}>               -$450.00</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Image
                    style={styles.iconF}
                    source={require('/assets/sesquerda.png')}
                    />
                    <Image
                    style={styles.iconF}
                    source={require('/assets/n1.png')}
                    />
                    <Image
                    style={styles.iconF}
                    source={require('/assets/n2.png')}
                    />
                    <Image
                    style={styles.iconF}
                    source={require('/assets/n3.png')}
                    />
                    <Image
                    style={styles.iconF}
                    source={require('/assets/n4.png')}
                    />
                    <Image
                    style={styles.iconF}
                    source={require('/assets/n5.png')}
                    />
                    <Image
                    style={styles.iconF}
                    source={require('/assets/sdireita.png')}
                    />
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
        height: '150px',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent:'center',
        
    },
    
    nav:{
        flexDirection: 'row',
        marginRight: 80,
    },
    header:{
        flexDirection: 'row',
        marginTop: 20
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
    btns:{
        flexDirection: 'row',
        paddingTop: 64,
    },
    btnHeader:{
        marginLeft: 20,
    },
    circulo: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: 'steelblue',
        marginRight: 5
    },
    circulo2: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: '#00B3FF',
        marginRight: 5
    },
    circulo3: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: '#00916F',
        marginRight: 5
    },
    circulo4: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: '#FFB300',
        marginRight: 5
    },
    circulo5: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: 'steelblue',
        marginRight: 5
    },
    circulo6: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: '#00916F',
        marginRight: 5
    },
    circulo7: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: '#FF3333',
        marginRight: 5
    },
    circulo8: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        backgroundColor: '#00B3FF',
        marginRight: 5
    },
    text5:{
        fontSize: 10,
    },
    container2:{
        rowGap: 10,
        marginTop: 30
    },
    containers:{
        flexDirection: 'row',
        rowGap: 10
    },
    num:{
        marginLeft: 50
    },
    footer:{
        flexDirection: 'row',
    },
    iconF:{
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 5
    },
    btn:{
        backgroundColor: '#00B3FF',
        borderRadius: 3,
        width: 110,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center'
    },
    btn2:{
        backgroundColor: 'gray',
        borderRadius: 3,
        width: 110,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center'
    },
    txtHeader:{
        color: '#ffffff',
        fontWeight:'500',
        textAlign: 'center',
    },
  });