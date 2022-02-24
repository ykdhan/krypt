import { Text, View, StyleSheet } from 'react-native';
import styles from '../assets/styles/common.css';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.red}>
        <Text>Red</Text>
      </View>
    </View>
  );
}