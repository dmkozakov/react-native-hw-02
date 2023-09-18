import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Feather } from "@expo/vector-icons";
import { PALETTE } from "../assets/common/palette";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";

function CustomHeader({ title, backBtn = null, logoutBtn = null, navigation }) {
  onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {backBtn && (
        <TouchableOpacity style={styles.backBtn} onPress={onBackPress}>
          <Feather name="arrow-left" size={24} color={PALETTE.primaryTransparentColor} />
        </TouchableOpacity>
      )}
      {logoutBtn && (
        <TouchableOpacity style={styles.logoutBtn}>
          <Feather name="log-out" size={24} color={PALETTE.secondaryColor} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 11,
    paddingTop: 55,
    height: 88,
    elevation: 1,
    borderBottomWidth: 0.5,
    borderBlockColor: "rgba(0, 0, 0, 0.30)",
    backgroundColor: PALETTE.primaryBgColor,
  },
  text: {
    fontFamily: "Roboto-500",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  backBtn: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
});

export default CustomHeader;
