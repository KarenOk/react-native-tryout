import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Button,
} from "react-native";

const ViewImageScreen = ({ navigation }) => {
	const images = [
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
		"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
		"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
		"https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	];
	const [currentImg, setCurrentImg] = useState(0);

	const changeImg = (offset) => {
		if (currentImg + offset >= 0 && currentImg + offset < images.length) {
			setCurrentImg(currentImg + offset);
		}
	};
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeAreaView}>
				<TouchableOpacity style={styles.backText}>
					<Image source={require("../assets/back.png")} />
					<Button
						style={styles.backText}
						color="white"
						title="Back"
						onPress={() => navigation.goBack(null)}
					/>
				</TouchableOpacity>
				<Image
					source={{
						uri: images[currentImg],
					}}
					style={styles.image}
					resizeMode="contain"
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => changeImg(-1)}>
						<View style={[styles.button, styles.buttonPrimary]}>
							<Text style={styles.buttonText}> Prev </Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => changeImg(1)}>
						<View style={[styles.button, styles.buttonSecondary]}>
							<Text style={styles.buttonText}> Next </Text>
						</View>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	backText: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30,
	},
	button: {
		width: 70,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	buttonPrimary: {
		backgroundColor: "#f28046",
		left: 20,
	},
	buttonSecondary: {
		backgroundColor: "#bad6c4",
		right: 20,
	},
	buttonText: {
		color: "white",
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	safeAreaView: {
		flex: 1,
	},
});

export default ViewImageScreen;
