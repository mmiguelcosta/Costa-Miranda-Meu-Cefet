import { StyleSheet } from "react-native";

const colors = {
    laranja: '#ff7b00',
    azulEscuro: '#001F3F',
    cinzaClaro: '#F0F0F0',
    textoClaro: '#fff',
    textoEscuro: '#000',
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
        borderRadius: 2,
        padding: 15,
        marginBottom: 10,
    },
    dayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.laranja, // kkkk mmuito laranja ta aprendendo com vc ainda bibi tattoo studio
        marginBottom: 5,
    },
    scheduleText: {
        fontSize: 16,
        color: colors.textoEscuro,
        lineHeight: 22,
    },
});

export default styles;