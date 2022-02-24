import { Text, View, StyleSheet } from 'react-native';

import SearchInput from '../components/SearchInput';
import { RootTabScreenProps } from '../types';

export default function TabBithumb({ navigation }: RootTabScreenProps<'TabBithumb'>) {
  return (
    <View style={styles.container}>
      {/* <SearchInput /> */}
      <Text>Bithumb</Text>
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
