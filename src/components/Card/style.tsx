import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 20,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#001F3F',
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
    buttonPrimary: {
        backgroundColor: '#FF8C00',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonPrimaryText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;