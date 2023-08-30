import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Spacing from "@/components/Spacing";
import { TYPOGRAPHY } from "@/libs/typography";

const TransactionItem = ({
  title,
  category,
  icon,
  color,
  type = "debit",
  amount,
}: any) => {
  const arrowIcons: any = {
    debit: <MaterialCommunityIcons name="arrow-down" size={20} color="red" />,
    credit: <MaterialCommunityIcons name="arrow-up" size={20} color="green" />,
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentLeft}>
            <View style={styles.icon}>
              <FontAwesome name={icon} size={18} />
            </View>
            <Spacing r={2} />
            <View style={styles.info}>
              <Text style={[TYPOGRAPHY.subheading]} numberOfLines={1}>
                {title}
              </Text>
              <Text style={[TYPOGRAPHY.body]}>25 Jun</Text>
            </View>
          </View>
          <View style={styles.contentRight}>
            {arrowIcons?.[type]}
            <Spacing r={1} />
            <Text style={[TYPOGRAPHY.numbers]}>${amount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
  },
  content: {
    width: "100%",
    paddingVertical: 12,
    paddingRight: 16,
    paddingLeft: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  contentLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.7,
  },
  contentRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 0.3,
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
});
