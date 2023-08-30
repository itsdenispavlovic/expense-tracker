import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Animated, Easing } from "react-native";
import { transactionsItems } from "@/libs/data";
import TransactionItem from "@/components/TransactionItem";
import { THEME } from "@/libs/theme";
import Header from "@/components/Header";

export default function TabOneScreen() {
  let listItemValues = transactionsItems.map(() => new Animated.Value(0));
  const animations = listItemValues.map((value) =>
    Animated.timing(value, {
      toValue: 1,
      duration: 300,
      easing: Easing.bezier(0.17, 0.67, 0.82, 0.98),
      useNativeDriver: true,
    })
  );

  const listItemTransitions = (index: any) => ({
    opacity: listItemValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        translateY: listItemValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  });
  useEffect(() => {
    // Reset all the values to 0 on load
    listItemValues.forEach((value) => value.setValue(0));
    Animated.stagger(80, animations).start();
  }, []);

  const onBack = () => {};

  return (
    <View>
      <Header clicked={onBack} title="Transactions" buttons={["back", "add"]} />
      <View style={styles.body}>
        <FlatList
          data={transactionsItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => (
            <Animated.View style={listItemTransitions(index)}>
              <TransactionItem key={index} {...item} />
            </Animated.View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    backgroundColor: THEME.bg,
    height: "100%",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
