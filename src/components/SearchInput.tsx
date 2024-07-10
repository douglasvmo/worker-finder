import { useTheme } from "@react-navigation/native";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type TProps = {
  placeholder: string;
};

export default function SearchInput({ placeholder }: TProps) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        style.wrapper,
        { borderColor: colors.border, backgroundColor: colors.background },
      ]}
    >
      <TextInput {...{ placeholder }} style={style.input} />
      <View style={style.iconWrapper}>
        <Icon name="search" size={18} color="#fff"  />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 10,
    borderWidth: 1,
  },

  input: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 32,
    height: 32,
    backgroundColor: "#6759FF",
  },
});
