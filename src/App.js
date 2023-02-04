import React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Content from "./pages/Content";

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen name="ContentScreen" component={Content} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;