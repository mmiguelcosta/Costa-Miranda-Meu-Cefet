import React from "react";
import styles from "./style";
import { Text, View, ScrollView } from "react-native";
import { ComponentCard } from "../../components";

export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Boas-vindas Álvaro!
            </Text>
            <Text style={styles.sectionTitle}>
                Notícias:
            </Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
                <ComponentCard/>
            </ScrollView>
        </View>
    );
};