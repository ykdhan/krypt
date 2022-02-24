import axios from 'axios'
import { Pressable, FlatList, Image, Text, View } from 'react-native'
import styles from '../assets/styles/coin-list.css'

let coins : [] = []

axios.get('http://1.1.1.95:5000/coins')
    .then((response : any) =>  {
         coins = response.data
    }).catch(error => {
        console.log('error...')
    }).then(() => {
        // 항상 실행
    });

const onPress = (e : any) => {
	console.log(e.target)
}

export default function CoinList() {
	const renderCoin = ({ item } : any) => {
		const img_url = `https://static.upbit.com/logos/${item.symbol}.png`
		return (
			<Pressable style={styles.item} onPress={onPress}>
				<View style={styles.item_img}>
					<Image style={styles.img} source={{ uri: img_url }} />
				</View>
				<View style={styles.item_text}>
					<Text style={styles.name}>{item.name}</Text>
					<Text style={styles.symbol}>{item.symbol}</Text>
				</View>
			</Pressable>
		)
	};

	return (
		<View style={styles.list}>
			<FlatList
			data={coins}
			renderItem={renderCoin}
			keyExtractor={(item : any) => item._id}
			/>
		</View>
	);
}