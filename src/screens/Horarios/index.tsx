import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";

export function Horarios({route}: any){
    const userName = route.params?.userName || 'Aluno';

    return(
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>
                Olá, {userName}! Aqui estão seus horários:
            </Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Segunda-feira:</Text>
                    <Text style={styles.scheduleText}>Sociologia - 07h às 08h40</Text>
                    <Text style={styles.scheduleText}>LMMC - 09h às 10h40</Text>
                    <Text style={styles.scheduleText}>Redes de Computadores - 10h50 às 12h30</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Terça-feira:</Text>
                    <Text style={styles.scheduleText}>Física - 07h às 08h40</Text>
                    <Text style={styles.scheduleText}>Aplicações WEB - 09h às 10h40</Text>
                    <Text style={styles.scheduleText}>Aplicações Móveis - 10h50 às 12h30</Text>
                    
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Quarta-feira:</Text>
                    <Text style={styles.scheduleText}>Laboratório de Aplicações Móveis - 07h às 08h40</Text>
                    <Text style={styles.scheduleText}>Laboratório de Aplicações WEB - 09h às 10h40</Text>
                    <Text style={styles.scheduleText}>Língua Portuguesa - 10h50 às 12h30</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Quinta-feira:</Text>
                    <Text style={styles.scheduleText}>Redação - 07h às 08h40</Text>
                    <Text style={styles.scheduleText}>História - 09h às 10h40</Text>
                    <Text style={styles.scheduleText}>Engenharia de Software - 10h50 às 12h30</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Sexta-feira:</Text>
                    <Text style={styles.scheduleText}>Sociologia - 07h às 08h40</Text>
                    <Text style={styles.scheduleText}>Química - 09h às 10h40</Text>
                    <Text style={styles.scheduleText}>Língua Inglesa - 10h50 às 12h30</Text>
                    <Text style={styles.scheduleText}>Matemática - 13h50 às 15h30</Text>
                    <Text style={styles.scheduleText}>Projeto Aplicado - 15h50 às 17h30</Text>
                </View>
            </ScrollView>
        </View>
    );
};