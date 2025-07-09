import { StyleSheet } from "react-native";

const colors = {
    laranja: '#FF8C00',
    azulEscuro: '#001F3F',
    cinzaClaro: '#F0F0F0',
    textoClaro: '#FFFFFF',
    textoEscuro: '#333333',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cinzaClaro,
        padding: 20,
    },
    welcomeMessage: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.azulEscuro,
        marginBottom: 20,
        textAlign: 'center',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    daySchedule: {
        backgroundColor: colors.textoClaro,
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        borderLeftWidth: 5,
        borderLeftColor: colors.laranja,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    dayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.azulEscuro,
        marginBottom: 5,
    },
    scheduleText: {
        fontSize: 16,
        color: colors.textoEscuro,
        lineHeight: 22,
    },
});

export default styles;