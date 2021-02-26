import React from "react";
// import { SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./app/screens/LoginScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const AppNavigator = createStackNavigator(
	{
		Welcome: {
			screen: WelcomeScreen,
		},
		ViewImages: {
			screen: ViewImageScreen,
		},
		Login: {
			screen: LoginScreen,
		},
	},
	{
		initialRouteName: "Welcome",
		headerMode: "none",
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
	return <AppContainer />;
}
