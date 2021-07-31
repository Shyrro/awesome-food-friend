import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, Card } from "react-native-ui-lib";
import { View } from "../components/Themed";

export default function TabOneScreen() {

  const [showCard, useShowCard] = useState(false);

  const getCard = (cardShown: boolean) => {
    if (!cardShown) return null;

    return (
      <Card flex>
        <Card.Section
          content={[{ text: "You’re Invited!", text70: true, grey10: true }]}
        ></Card.Section>
      </Card>
    );
  };
  return (
    <View style={styles.container}>
      <Button label="click me" round={true} onPress={() => useShowCard(!showCard)}></Button>
      { getCard(showCard) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
