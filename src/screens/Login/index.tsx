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
        navigation.navigate("App", {nome: nome});
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Meu CEFET-MG</Text>

            <TextInput
                style={styles.input}
                onChangeText={(text) => {setNome(text);}}
                placeholder="Digite seu nome "
                placeholderTextColor={'#000' + '80'}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};