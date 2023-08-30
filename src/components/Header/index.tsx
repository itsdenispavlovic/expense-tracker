import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { TYPOGRAPHY } from "@/libs/typography";
import { THEME } from "@/libs/theme";

const Header = ({
  clicked,
  height = 150,
  title = null,
  buttons = ["back"],
}: any) => {
  return (
    <View style={{ ...styles.header, height }}>
      {buttons.includes("back") && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <TouchableOpacity
            activeOpacity={0.9}
            style={styles.back}
            onPress={clicked}
          >
            <FontAwesome name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity> */}
          {title && (
            <Text
              style={[
                TYPOGRAPHY.subheading,
                {
                  color: "#fff",
                  fontSize: 22,
                },
              ]}
            >
              {title}
            </Text>
          )}
        </View>
      )}
      {buttons.includes("search") && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.back}
          onPress={clicked}
        >
          <FontAwesome name="search" size={26} color="#fff" />
        </TouchableOpacity>
      )}
      {buttons.includes("add") && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.back}
          onPress={clicked}
        >
          <FontAwesome name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    backgroundColor: THEME.primary,
    width: "100%",
    paddingTop: Constants.statusBarHeight + 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
