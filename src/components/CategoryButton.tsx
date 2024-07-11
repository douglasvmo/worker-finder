import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Tprops = {
  onPress: () => void;
  borderColor?: string;
  backgroundColor: string;
  title: string;
  titleColor?: string;
};

export default function CategoryButton({
  title,
  titleColor,
  borderColor,
  backgroundColor,
  onPress,
  children,
}: PropsWithChildren<Tprops>) {
  return (
    <TouchableOpacity style={style.item} onPress={onPress}>
      <View
        style={[
          style.iconWeaper,
          {
            borderColor,
            backgroundColor,
          },
        ]}
      >
        {children}
      </View>
      <Text style={{ color: titleColor }}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  item: {
    marginHorizontal: 10,
  },

  iconWeaper: {
    height: 58,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 15,
  },
});
