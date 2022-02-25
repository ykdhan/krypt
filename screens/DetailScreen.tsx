import { Text, View, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function DetailUpbit({ navigation }: RootTabScreenProps<'DetailScreen'>) {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
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
