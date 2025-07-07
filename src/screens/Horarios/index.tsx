import React from "react";
import { View, Text } from "react-native";

export function Horarios({route}: any){
    const {nome} = route.params || {};
    return(
        <View>
            <Text>
                Olá, {nome}! Aqui estão seus horários:
            </Text>
        </View>
    );
};