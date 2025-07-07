import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabsRoutes } from "./bottom-tabs.routes";
import { ScreenLogin } from "../screens";

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator initialRouteName="Login">
            <Screen 
                name="Login"
                component={ScreenLogin}
                options={{
                    headerShown: false,
                }}
            />

            <Screen 
                name="App"
                component={BottomTabsRoutes}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    );
};