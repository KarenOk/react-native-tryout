import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: "#d1f0c2",
					flex: 2,
				}}
			/>
			<View
				style={{
					backgroundColor: "#f0c2ef",
					flex: 1,
				}}
			/>
			<View
				style={{
					backgroundColor: "yellow",
					flex: 1,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		flexDirection: "row",
	},
});
