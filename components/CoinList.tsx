import { FlatList, Image, Text, View } from 'react-native';
import styles from '../assets/styles/coinlist.css';

const DATA = [
    {
        id: 'BTC',
        title: '비트코인',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'ETH',
        title: '이더리움',
        img: require('../assets/images/eth.png')
    },
    {
        id: 'UDST',
        title: '테더',
        img: require('../assets/images/usdt.png')
    },
    {
        id: 'XRP',
        title: '리플',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'ADA',
        title: '에이다(카르다노)',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'SOL',
        title: '솔라나',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'AVAX',
        title: '아발란체',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'LUNA',
        title: '테라',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'DOGE',
        title: '도지코인',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'DOT',
        title: '폴카닷',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'SHIB',
        title: '시바이누',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'MATIC',
        title: '폴리곤',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'LTC',
        title: '라이트코인',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'LINK',
        title: '체인링크',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'NEAR',
        title: '니어프로토콜',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'UNI',
        title: '유니스왑',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'TRX',
        title: '트론',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'ALGO',
        title: '알고랜드',
        img: require('../assets/images/btc.png')
    },
    {
        id: 'ETC',
        title: '이더리움클래식',
        img: require('../assets/images/btc.png')
    },
];

const CoinItem = ({ id, title, img }) => (
	<View style={styles.item}>
        <View style={styles.item_img}>
            <Image style={{ resizeMode: 'cover', width: 28, height: 28 }} source={img} />
        </View>
		<View style={styles.item_title}>
    		<Text style={styles.title}>{title}</Text>
            <Text style={styles.code}>{id}</Text>
        </View>
	</View>
);
  
export default function CoinList() {
	const renderItem = ({ item }) => (
		<CoinItem id={item.id} title={item.title} img={item.img} />
	);

	return (
		<View style={styles.list}>
			<FlatList
			data={DATA}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			/>
		</View>
	);
}