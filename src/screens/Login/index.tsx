import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";

export function Login({navigation}: any){
    const [nome, setNome] = useState("Aluno");

    const handleLogin = () => {
        if(nome.trim() === "") {
            Alert.alert("Erro de Login", "Por favor, digite seu nome para continuar.");
            return;
        }
        navigation.navigate("App", nome);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Sistema Acadêmico!</Text>
            <Text style={styles.label}>Digite seu nome:</Text>

            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    if(text.trim() != ""){
                        setNome(text);
                    }
                    else{
                        setNome("Aluno");
                    }
                }}
                placeholder="Seu nome completo"
                placeholderTextColor={'#333333' + '80'}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};