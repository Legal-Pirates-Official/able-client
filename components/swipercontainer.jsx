import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
// import liveevent from "../data/liveevent.data";
import Swipercont from './swiper';

const { width, height } = Dimensions.get('window');

const Swipercontainer = (props) => {
	const { liveevent, title } = props;
	return (
		<View style={styles.areatwo}>
			<View style={styles.aboutheadcontainer}>
				<Text style={styles.abouthead}>{title}</Text>
			</View>
			<Swipercont datas={liveevent} />
		</View>
	);
};

export default Swipercontainer;

const styles = StyleSheet.create({
	areatwo: {
		alignItems: 'center',
		justifyContent: "center",
		height: height/ 1.5,
	},
	aboutheadcontainer: {
		height: 65,
		width: width - 20
	},
	abouthead: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		paddingBottom: 10,
		paddingHorizontal: 20
	}
});
