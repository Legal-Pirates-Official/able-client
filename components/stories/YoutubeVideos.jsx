import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const {width, height} = Dimensions.get('window');

import React, { useState, useEffect } from "react";

const YoutubeVideos = ({ clips }) => {
  return (
    <View>
      <Text style={styles.textHeader}>Youtube videos</Text>
      <View style={styles.storiesView}>
        <ScrollView
          // snapToInterval={width}
          decelerationRate="fast"
          horizontal
        >
          {clips.length ? (
            clips.map((clip) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardStories}
                  onPress={() => Linking.openURL(clip.video_url)}
                >
                  <Image
                    source={{
                      uri: clip.video_thumbnail,
                    }}
                    style={styles.storyThumbnail}
                  />
                  <AntDesign name="youtube" size={70} color="#c4302b" />
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={{ color: "white", textAlign: "center" }}>
              No videos found
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default YoutubeVideos;

const styles = StyleSheet.create({
  textHeader: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  storiesView: {
    position: "relative",
    width: width,
    height: height / 2.2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  cardStories: {
    position: "relative",
    width: width / 1.4,
    height: height / 4,
    borderRadius: 10,
    backgroundColor: "#1e1e1e",
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    zIndex: 1,
  },
  storyThumbnail: {
    position: "absolute",
    width: width / 1.4,
    height: height / 4,
    borderRadius: 10,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  innerText: {
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    elevation: 27,
    zIndex: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
