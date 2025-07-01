import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./style";

export function Card() {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>
                Hello World!
            </Text>
            <Text style={styles.cardContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum mi ante,
                rutrum maximus erat maximus quis. Nunc sit amet consectetur dolor. Morbi elit nisl,
                tempus ac sollicitudin a, consequat et lectus. Praesent rutrum, mauris a pulvinar
                pulvinar, purus urna vehicula lacus, ac luctus diam lectus et enim. Fusce id maximus
                augue. Donec vitae leo vel dui condimentum efficitur. Donec ornare lacinia purus ac
                mollis. Integer non egestas mi.
            </Text>
        </View>
    );
}