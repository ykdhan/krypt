import { Text, View, StyleSheet } from 'react-native';
import styles from '../assets/styles/coin-detail.css';

export default function Coin({ symbol } : any) {
	return (
		<View>
			<Text>{symbol}</Text>
		</View>
	);
}