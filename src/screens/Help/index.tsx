import React from "react";
import styles from "./style";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";

export function Help(){
    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Perguntas Frequentes:</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>

                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>

                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>

                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>

                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>

                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>

                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como consigo ver minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        As notas podem ser acessadas através do menu "Emitir Boletim" no SIGAA.
                    </Text>
                </View> 
            </ScrollView>
        </View>
    );
};