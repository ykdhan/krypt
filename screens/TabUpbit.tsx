import { Button, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CoinList from '../components/CoinList';
import { RootStackParamList, RootTabScreenProps } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const UpbitList = ({ navigation }) => {
  return (
    <CoinList navigation={navigation}/>
  )
}
const UpbitDetail = ({ navigation }) => {
  return (
    <View>
      <Text>Upbit Detail</Text>
      <Button title="Back" onPress={()=> navigation.goBack()} />
    </View>
  )
}

export default function TabUpbit({ navigation }: RootTabScreenProps<'TabUpbit'>) {
  return (
    <View style={styles.container}>
      <Stack.Navigator style={{ flex: 1 }}>
        <Stack.Screen name="UpbitList" component={UpbitList} />
        <Stack.Screen name="UpbitDetail" component={UpbitDetail} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
