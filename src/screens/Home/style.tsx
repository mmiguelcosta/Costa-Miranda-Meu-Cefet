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
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.azulEscuro,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
});

export default styles;