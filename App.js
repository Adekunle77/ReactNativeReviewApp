import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	const [name, setName] = useState('Patrick');
	const [person, setPerson] = useState({ name: 'Kunle', age: 44 });
	const [age, setAge] = useState('40');
	const clickHandler = () => {
		setName('Adegoke');
		setAge('40');
	};

	return (
		<View style={styles.container}>
			<Text>Enter name:</Text>
			<TextInput
				style={styles.input}
				placeholder="e.g John Doe"
				onChangeText={val => setName(val)}
			/>
			<Text>Enter age:</Text>
			<TextInput
				style={styles.input}
				placeholder="e.g 18"
				onChangeText={val => setAge(val)}
			/>
			<Text>
				My name is {name}, age: {age}
			</Text>
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
	},
	input: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#777',
		backgroundColor: '#DCDCDC',
		padding: 8,
		margin: 10,
		width: 200
	}
});
