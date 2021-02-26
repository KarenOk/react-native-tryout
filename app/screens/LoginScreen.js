import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";
import { Input, H1, Button, Strong, P } from "nachos-ui";

function LoginScreen() {
	const [value, setValue] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.backText}>
				<Image source={require("../assets/back-21.png")} />
			</TouchableOpacity>
			<View style={styles.form}>
				<H1 style={styles.heading}>Create Account</H1>
				<P style={styles.subtitle}>
					Create a Rentgage account and make housing issues a problem of the
					past.
				</P>
				<Input
					style={styles.inputContainer}
					inputStyle={styles.input}
					placeholder="First name"
					value={value}
					onChangeText={(value) => setValue(value)}
				/>
				<Input
					style={styles.inputContainer}
					placeholder="Last name"
					value={value}
					onChangeText={(value) => setValue(value)}
				/>
				<Input
					style={styles.inputContainer}
					placeholder="Email"
					value={value}
					onChangeText={(value) => setValue(value)}
				/>
				<Input
					icon="ios-eye"
					style={styles.inputContainer}
					placeholder="Password"
					value={value}
					onChangeText={(value) => setValue(value)}
				/>

				<Input
					icon="ios-eye"
					style={styles.inputContainer}
					placeholder="Confirm Password"
					value={value}
					onChangeText={(value) => setValue(value)}
				/>
				<Button kind="squared" style={styles.button} uppercase={false}>
					Strong tag defines strong emphasized text
				</Button>
			</View>
			<P align="center">
				By creating an account, you agree with our{" "}
				<Strong>terms and conditions</Strong> and{" "}
				<Strong> privacy policy</Strong>.
			</P>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backText: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30,
		marginVertical: 15,
		height: 50,
	},
	button: {
		backgroundColor: "#005CE6",
		color: "red",
		marginVertical: 15,
	},
	container: {
		flex: 1,
		margin: 20,
	},
	form: {
		flex: 1,
	},
	heading: {
		color: "#005CE6",
	},
	input: {
		color: "black",
	},
	inputContainer: {
		marginVertical: 15,
		borderColor: "red",
		borderWidth: 0,
		backgroundColor: "#EDF0FA",
	},
	subtitle: {
		color: "#7F8E9D",
	},
});

export default LoginScreen;
