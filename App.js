import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	const [name, setName] = useState('Patrick');
	const [person, setPerson] = useState({ name: 'Kunle', age: 44 });
	const clickHandler = () => {
		setName('Adegoke');
	};

	return (
		<View style={styles.container}>
			<Text>My name is {name}</Text>
			<View style={styles.buttonContainer}>
				<Button title="Update name" onPress={clickHandler} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonContainer: {
		marginTop: 20,
		backgroundColor: '#fff'
	}
});
