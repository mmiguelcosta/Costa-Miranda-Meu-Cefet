import React from "react";
import styles from "./style";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";

export function Help(){
    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Perguntas Frequentes:</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como acessar o SIGAA?</Text>
                    <Text style={styles.faqAnswer}>
                        Acesse o portal do SIGAA através do link institucional e utilize suas credenciais de login.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Como solicitar declaração de matrícula?</Text>
                    <Text style={styles.faqAnswer}>
                        A declaração de matrícula pode ser solicitada diretamente no módulo de serviços do aluno no SIGAA.
                    </Text>
                </View>
                <View style={styles.faqItem}>
                    <Text style={styles.faqQuestion}>Onde consultar minhas notas?</Text>
                    <Text style={styles.faqAnswer}>
                        Suas notas estão disponíveis no histórico acadêmico dentro do portal do aluno.
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.contactContainer}>
                <Text style={styles.contactText}>Precisa de mais ajuda?</Text>
                <TouchableOpacity onPress={() => {
                    Alert.alert("Fale Conosco", "Entre em contato pelo e-mail: \nsuporte@cefetmg.br");
                }} style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Fale Conosco</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};