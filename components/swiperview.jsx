import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const {height, width} = Dimensions.get('window')

const Swiperview = (props) => {
  const { live } = props;
  return (
   <>
   {live &&  <View style={styles.slide1}>
      <Image style={styles.image} source={{ uri: live.thumbnail }} />
      <View style={styles.textview}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Join Now</Text>
      </TouchableOpacity>
      </View>
    </View>}
   </>
  );
};

export default Swiperview;

const styles = StyleSheet.create({
  slide1: {
    justifyContent: "center",
    alignItems: "center",
    width: width/2,
    height: height / 3,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  textview: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width/2,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: "#fff",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    marginLeft: 10,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "#fff",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: 10,
  },
  button:{
    padding: 10,
    backgroundColor: '#EEF6FF',
    borderRadius: 10
  },
  buttontext:{
    fontWeight: 'bold',
    color:'#1D47BA'
  }
});
