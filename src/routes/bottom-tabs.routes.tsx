import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ScreenHome, ScreenHorarios } from "../screens";
import { View, StyleSheet } from "react-native";

const {Navigator, Screen} = createBottomTabNavigator();

const colors = {
    laranja: '#FF8C00',
    azulEscuro: '#001F3F',
    cinzaClaro: '#F0F0F0',
    textoClaro: '#FFFFFF',
    textoEscuro: '#333333',
};

export function BottomTabsRoutes({route}: any){
    const nome = route.params || {};

    return(
        <Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: colors.azulEscuro,
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: colors.textoClaro,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
    
            tabBarActiveTintColor: colors.laranja,
            tabBarInactiveTintColor: colors.cinzaClaro,
            tabBarStyle: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.azulEscuro,
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              height: 80,
              paddingBottom: 5,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any = "";
    
              if(route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              }
              else if (route.name === 'Horarios') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              }
              else if (route.name === 'Help') {
                iconName = focused ? 'help-circle' : 'help-circle-outline';
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },

          })}
        >
            <Screen 
                name="Home"
                component={ScreenHome}
                options={{
                  title: "Início"
                }}
                initialParams={{nome}}
            />

            <Screen 
                name="Horarios"
                component={ScreenHorarios}
                options={{
                    title: "Horários",
                }}
                initialParams={{nome}}
            />

            <Screen 
                name="Help"
                component={ScreenHome}
                options={{
                    title: "Ajuda",
                }}
                initialParams={{nome}}
            />

        </Navigator>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.cinzaClaro,
    },
    screenText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.azulEscuro,
    },
    headerTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitleImage: {
      width: 30,
      height: 30,
      marginRight: 8,
    },
    headerTitleText: {
      color: colors.textoClaro,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });