import { StyleSheet } from "react-native";

const colors = {
    laranja: '#ff7b00',
    azulEscuro: '#003c79',
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
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.azulEscuro,
        marginBottom: 20,
        textAlign: 'center',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    faqItem: {
        backgroundColor: colors.textoClaro,
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
    },
    faqQuestion: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.laranja,
        marginBottom: 5,
    },
    faqAnswer: { 
        fontSize: 15,
        color: colors.textoEscuro,
        lineHeight: 22,
    },
    contactContainer: {
        marginTop: 30,
        alignItems: 'center',
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: colors.laranja + '60',
    },
    contactText: {
        fontSize: 18,
        color: colors.azulEscuro,
        marginBottom: 15,
        fontWeight: '600',
    },
    contactButton: {
        backgroundColor: colors.laranja,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    contactButtonText: {
        color: colors.textoClaro,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default styles;