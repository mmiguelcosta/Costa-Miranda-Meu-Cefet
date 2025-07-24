import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./style";

export function Card() {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.Titulo}>
                Coisa Acontece No Campus Varginha
            </Text>
            <Text style={styles.Descricao}>
                essa semana aconteceu uma coisa muito legal no campus Varginha:
                planeta dos normies foi invadido por um exército de cachorros
                que queriam dominar o mundo. Eles foram derrotados por um grupo
                composto por alunos do curso de Engenharia de Software, que
                usaram suas habilidades de programação para criar um software
            </Text>
        </View>
    );
}