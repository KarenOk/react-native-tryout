import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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
