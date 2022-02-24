import { Text, View, StyleSheet } from 'react-native';

import CoinList from '../components/CoinList';
import { RootTabScreenProps } from '../types';

export default function TabUpbit({ navigation }: RootTabScreenProps<'TabUpbit'>) {
  return (
    <View style={styles.container}>
      <CoinList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
