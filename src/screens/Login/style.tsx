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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.azulEscuro,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.cinzaClaro,
        marginBottom: 40,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        color: colors.textoEscuro,
        marginBottom: 10,
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: colors.textoClaro,
        borderRadius: 2,
        paddingHorizontal: 15,
        fontSize: 16,
        color: colors.textoEscuro,
        marginBottom: 20, 
    },
    button: {
        backgroundColor: colors.laranja,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: colors.textoClaro,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default styles;