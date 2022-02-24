import { Text, TextInput, View, Keyboard, Button } from 'react-native';
import styles from '../assets/styles/searchbar.css';
  
const search =  {
	query: '',
	onChange: (e : string) => {
		search.query = e
		console.log(e)
	}
}

export default function SearchInput() {
	return (
		<View style={styles.bar}>
			<TextInput style={styles.input}
				placeholder="Search"
				// value={search.query}
				onChangeText={search.onChange}
			></TextInput>
		</View>
	);
}