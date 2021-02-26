import React from "react";
import {
	View,
	SafeAreaView,
	Text,
	ImageBackground,
	StyleSheet,
	Image,
	TouchableHighlight,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			source={require("../assets/bg.jpeg")}
			style={styles.background}
		>
			<SafeAreaView style={styles.safeAreaView}>
				<View style={styles.logoContainer}>
					<Image source={require("../assets/logo.png")} />
					<Text style={styles.logoText}> FashionNova</Text>
				</View>
				<TouchableHighlight
					onPress={() => navigation.navigate("Login")}
					style={styles.buttonTouchableHighlight}
				>
					<View style={[styles.button, styles.loginButton]}>
						<Text style={styles.buttonText}> LOGIN </Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={() => navigation.navigate("ViewImages")}
					style={styles.buttonTouchableHighlight}
				>
					<View style={[styles.button, styles.registerButton]}>
						<Text style={styles.buttonText}> VIEW IMAGES </Text>
					</View>
				</TouchableHighlight>
			</SafeAreaView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	button: {
		width: "100%",
		height: 80,
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
	},
	buttonTouchableHighlight: {
		width: "100%",
	},
	loginButton: {
		backgroundColor: "#f28046",
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		justifyContent: "center",
		alignItems: "center",
	},
	logoText: {
		marginTop: 10,
		fontSize: 32,
		fontWeight: "700",
	},
	registerButton: {
		backgroundColor: "#bad6c4",
	},
	safeAreaView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default WelcomeScreen;
