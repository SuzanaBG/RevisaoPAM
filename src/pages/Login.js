import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native-web';
import Checkbox from 'expo-checkbox'
import { useState } from 'react';
import google from '../assets/Google.png'
import facebook from '../assets/Facebook.png'
import { Ionicons } from '@expo/vector-icons'

export default function Login({navigation}) {
    const [isChecked, setChecked] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    return(
        <View style={styles.container}>
            <Text style={styles.seta} onPress={() => navigation.goBack()}>{'<'}</Text>
            <View style={styles.containerTitulo}>
                <Text style={styles.text1}>Acesse</Text>
                <Text style={styles.text2}>com E-mail e senha</Text>
            </View>

            <View style={styles.containerLogin}>
                <View style={styles.containerInfos}>
                    <Text style={styles.textEmail}>E-mail</Text>
                    <TextInput style={styles.inputEmail} 
                    placeholder='   Digite seu E-mail' 
                    placeholderTextColor='#b0b3c8ff'/>
                    
                    <Text style={styles.textSenha}>Senha</Text>
                    <View style={styles.campoSenha}>
                        <TextInput style={styles.inputSenha} 
                        placeholder='   Digite sua senha'
                        placeholderTextColor='#b0b3c8ff'
                        secureTextEntry={!showPassword} 
                        value={password}
                        onChangeText={setPassword}/>

                        <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.olhoButton}>
                          <Ionicons
                            name={showPassword ? 'eye' : 'eye-off'}
                            size={24}
                            color="#555"
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.containerOpcoesSenha}>
                    <View style={styles.containerCheckbox}>
                        <Checkbox style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#14c871' : '#14c871'}/>
                        <Text style={styles.text3}>Lembrar senha</Text>
                    </View>
                    <Text style={styles.text4}>Esqueci minha senha</Text>
                </View>
                <View style={styles.buttons1}>
                    <Pressable style={styles.buttonAcessar}>
                        <Text style={styles.buttonText1}>Acessar</Text>
                    </Pressable>
                    <Pressable style={styles.buttonCadastrar}>
                        <Text style={styles.buttonText2}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.containerOpcoes}>
                <View style={styles.containerLinha}>
                    <View style={styles.linha}/>
                    <Text style={styles.text5}>Ou continue com</Text>
                    <View style={styles.linha}/>
                </View>
                <View style={styles.buttons2}>
                    <Image style={styles.google} source={google}></Image>
                    <Image style={styles.face} source={facebook}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        width: '100%',
        height: '100%'
    },

    seta: {
        color: '#14c871',
        left: 10,
        fontSize: '40px'
    },

    containerTitulo: {
        left: 10
    },

    text1: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#555555'
    },

    text2: {
        color: '#555555'
    },

    containerLogin: {
        position: 'absolute',
        left: 10,
        right: 10,
        top: 150,
        alignItems: 'center',
    },

    textEmail: {
        color: '#555555',
        fontSize: '10px'
    },

    textSenha: {
        marginTop: 10,
        color: '#555555',
        fontSize: '10px'
    },

    inputEmail: {
        backgroundColor: '#e3e7f3',
        borderRadius: 5,
        height: '50px'
    },

    inputSenha: {
        backgroundColor: '#e3e7f3',
        borderRadius: 5,
        height: '50px',
        paddingLeft: 10,
        paddingRight: 40
    },

    containerInfos: {
        width: '100%',
        position: 'relative'
    },

    campoSenha: {
        width: '100%',
        position: 'relative'
    },

    olhoButton: {
        position: 'absolute',
        right: 10, 
        top: '50%',
        transform: [{ translateY: -12 }]
    },

    checkbox: {
        borderColor: '#14c871',
        marginRight: 5
    },

    text3: {
        color: '#555555'
    },

    containerCheckbox: {
        flexDirection: 'row',
        flex: 1
    },

    text4: {
        color: '#555555'
    },

    containerOpcoesSenha: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        marginTop: 30
    },

    buttonAcessar: {
        backgroundColor: '#14c871',
        width: '150px',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px'
    },

    buttonText1: {
        color: 'rgb(255, 255, 255)'
    },

    buttonCadastrar: {
        backgroundColor: '#fefefe',
        width: '150px',
        borderRadius: 10,
        height: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#14c871',
        borderWidth: 2,
        height: '50px'
    },

    buttons1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 30
    },

    containerOpcoes: {
        position: 'absolute',
        top: 450,
        left: 10,
        right: 10,
        alignItems: 'center'
    },

    linha: {
        borderBottomColor: '#555555', 
        borderBottomWidth: 1,     
        width: '30%',           
        marginVertical: 10,        
    },

    text5: {
        color: '#555555'
    },

    containerLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },

    buttons2: {
        flexDirection: 'row',
        marginTop: 30
    },

    google: {
        marginRight: 20
    }
})
