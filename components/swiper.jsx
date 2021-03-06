import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import Swiperview from "./swiperview";

const { height, width } = Dimensions.get("window");

const Swipercont = (props) => {
  const { datas } = props;
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        showsPagination={false}
        bounces={true}
        loop={false}
        autoplay={false}
      >
        <Swiperview live={datas[0]} />
        <Swiperview live={datas[1]} />
        <Swiperview live={datas[2]} />
      </Swiper>
    </View>
  );
};

export default Swipercont;

const styles = StyleSheet.create({
  container: {
    width: width- 40,
    alignItems: "center",
    height: height / 3,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: height / 3,
  },
});
