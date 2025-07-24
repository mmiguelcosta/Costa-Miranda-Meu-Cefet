import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ScreenHelp, ScreenHome, ScreenHorarios } from "../screens";
import { View, StyleSheet } from "react-native";

const {Navigator, Screen} = createBottomTabNavigator();

const colors = {
    laranja: '#ff7b00', 
    azulEscuro: '#003c79', 
    cinzaClaro: '#F0F0F0',
    textoClaro: '#fff',
    textoEscuro: '#000',
};

export function BottomTabsRoutes({route}: any){
    const { nome } = route.params || {};

    return(
        <Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: colors.cinzaClaro,
            },
            headerTintColor: colors.cinzaClaro, 
    
            tabBarActiveTintColor: colors.laranja,
            tabBarInactiveTintColor: colors.laranja,
            tabBarStyle: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.azulEscuro,
              height: 80,
              paddingBottom: 5,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
          })}
        >
            <Screen 
                name="Home"
                component={ScreenHome}
                options={{
                  title: "Home", 
                  tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="home" size={size} color={color} />  
                     }}}
                initialParams={{nome: nome}}
            />

            <Screen 
                name="Horarios"
                component={ScreenHorarios}
                options={{
                    title: "Horários",
                    tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="calendar" size={size} color={color} />  
                     }}}
                initialParams={{nome: nome}}
            />

            <Screen 
                name="Help"
                component={ScreenHelp}
                options={{
                    title: "Ajuda",
                    tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="help-circle" size={size} color={color} />  
                }}}
                initialParams={{nome: nome}}
            />
           
        </Navigator>
    );
   
};


