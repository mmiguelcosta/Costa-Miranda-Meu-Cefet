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
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.azulEscuro,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.azulEscuro,
        marginTop: 15,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.laranja,
        paddingBottom: 5,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
});

export default styles;