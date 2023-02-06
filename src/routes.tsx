import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

export default function Routes() { 
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            >
            <Stack.Screen
                component={Welcome}
                name='Welcome'
            />
            <Stack.Screen
                component={Home}
                name='Home'
            />
        </Stack.Navigator>
    )
}