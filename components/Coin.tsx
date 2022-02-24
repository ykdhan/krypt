import { FlatList, StyleSheet } from 'react-native';

import { Text, View, Image } from './Themed';
import styles from '../assets/styles/coin.css';

const DATA = [
    {
        id: 'BTC',
        title: '비트코인',
        description: '설명'
    },
    {
        id: 'ETH',
        title: '이더리움',
        description: '설명'
    },
    {
        id: 'ADA',
        title: '에이다(카르다노)',
        description: '설명'
    },
    {
        id: 'LINK',
        title: '체인링크',
        description: '설명'
    },
    {
        id: 'ETC',
        title: '이더리움클래식',
        description: '설명'
    },
    {
        id: 'TRX',
        title: '트론',
        description: '설명'
    },
    {
        id: 'LTC',
        title: '라이트코인',
        description: '설명'
    },
    {
        id: 'ALGO',
        title: '알고랜드',
        description: '설명'
    },
    {
        id: 'SOL',
        title: '솔라나',
        description: '설명'
    },
    {
        id: 'TRX',
        title: '트론',
        description: '설명'
    },
    {
        id: 'TRX',
        title: '트론',
        description: '설명'
    },
    {
        id: 'TRX',
        title: '트론',
        description: '설명'
    },
];

export default function Coin() {
	return (
		<View>
			<Text>1</Text>
		</View>
	);
}