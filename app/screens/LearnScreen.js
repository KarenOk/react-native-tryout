import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableHighlight,
	Button,
	Alert,
	Platform,
	Dimensions,
} from "react-native";
import {
	useDimensions,
	useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
	const [show, setShow] = useState(false);
	// console.log(Dimensions.get("window"));
	const { landscape } = useDeviceOrientation();
	// console.log(useDeviceOrientation());
	// console.log(useDimensions());
	return (
		<SafeAreaView
			style={[
				styles.container,
				landscape ? { backgroundColor: "blue" } : { backgroundColor: "yellow" },
			]}
		>
			<Text numberOfLines={1} onPress={() => setShow(true)}>
				My first mobile app. Expo web is in late beta, please report any bugs or
				missing features on the Expo repo. │ │ You can follow the V1 release for
				more info: https://github.com/expo/expo/issues/6782
			</Text>
			{show ? (
				<>
					<TouchableHighlight onPress={() => setShow(false)}>
						<Image
							source={{
								width: 200,
								height: 200,
								uri: "https://picsum.photos/200",
							}}
						/>
					</TouchableHighlight>
					<Text> Peekaboo! </Text>
				</>
			) : (
				<Text />
			)}
			<Button
				title="Click me to eat"
				onPress={() =>
					Alert.alert("Choose", "Choose you food for the day", [
						{ text: "Egusi" },
						{ text: "Oha" },
						{ text: "Banga" },
					])
				}
			/>
			<Button
				title="Click me to eat 2"
				onPress={() =>
					Alert.prompt("Foood", "What do you want to eat?", (text) =>
						console.log(text)
					)
				}
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Platform.OS === "ios" ? "orange" : "lightblue",
		paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
