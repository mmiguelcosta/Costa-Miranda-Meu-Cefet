import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";

export function Horarios({route}: any){
    const userName = route.params?.userName || 'Aluno';

    return(
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>
                Horários:
            </Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Segunda-feira:</Text>
                    <Text style={styles.scheduleText}>07:00 as 08:40 - Sociologia - Sala 308 </Text>
                    <Text style={styles.scheduleText}>9:00 as 10:40 - Redes - Sala 308</Text>
                    <Text style={styles.scheduleText}>10:50 as 12:30 - Montagem e Manutencao - Sala 308</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Segunda-feira:</Text>
                    <Text style={styles.scheduleText}>07:00 as 08:40 - Sociologia - Sala 308 </Text>
                    <Text style={styles.scheduleText}>9:00 as 10:40 - Redes - Sala 308</Text>
                    <Text style={styles.scheduleText}>10:50 as 12:30 - Montagem e Manutencao - Sala 308</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Segunda-feira:</Text>
                    <Text style={styles.scheduleText}>07:00 as 08:40 - Sociologia - Sala 308 </Text>
                    <Text style={styles.scheduleText}>9:00 as 10:40 - Redes - Sala 308</Text>
                    <Text style={styles.scheduleText}>10:50 as 12:30 - Montagem e Manutencao - Sala 308</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Segunda-feira:</Text>
                    <Text style={styles.scheduleText}>07:00 as 08:40 - Sociologia - Sala 308 </Text>
                    <Text style={styles.scheduleText}>9:00 as 10:40 - Redes - Sala 308</Text>
                    <Text style={styles.scheduleText}>10:50 as 12:30 - Montagem e Manutencao - Sala 308</Text>
                </View>
                <View style={styles.daySchedule}>
                    <Text style={styles.dayText}>Segunda-feira:</Text>
                    <Text style={styles.scheduleText}>07:00 as 08:40 - Sociologia - Sala 308 </Text>
                    <Text style={styles.scheduleText}>9:00 as 10:40 - Redes - Sala 308</Text>
                    <Text style={styles.scheduleText}>10:50 as 12:30 - Montagem e Manutencao - Sala 308</Text>
                </View>
               
            </ScrollView>
        </View>
    );
};