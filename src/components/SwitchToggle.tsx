import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";

type TProps = {
  value: boolean;
  onPress: (value: boolean) => void;
};

export default function SwitchToggle({ value, onPress }: TProps) {
  const transform = React.useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  const text = value ? "Dark" : "Light";
  const iconName = value ? "moon" : "sun";

  function handleAnimation() {
    Animated.timing(transform, {
      toValue: transform._value > 0 ? 0 : 120,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }

  function handleOnPress() {
    handleAnimation();
    onPress(!value);
  }

  return (
    <Animated.View
      style={[
        style.switchWrapper,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <TouchableOpacity
        onPress={handleOnPress}
        style={[
          style.toggleBtn,
          {
            backgroundColor: colors.card,
            transform: [{ translateX: transform }],
          },
        ]}
      >
        <Icon name={iconName} style={style.icon} color={colors.text} />
        <Text style={{ color: colors.text }}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const style = StyleSheet.create({
  switchWrapper: {
    borderRadius: 100,
    width: 240,
  },
  toggleBtn: {
    width: 120,
    height: 32,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 5,
  },
});
