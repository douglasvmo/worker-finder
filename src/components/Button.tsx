import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Tprops = {
  textColor: string;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export default function Button(props: Tprops) {
  return (
    <TouchableOpacity
      style={[style.btnWrapper, props.style]}
      onPress={props.onPress}
    >
      <Text style={{ color: props.textColor }}>{props.title}</Text>
      <Icon name="chevron-right" color={props.textColor} />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btnWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    padding: 7,
    borderRadius: 100,
    width: 106,
  },
});
