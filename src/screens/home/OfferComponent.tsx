import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Icon from "react-native-vector-icons/FontAwesome";

const offer = [
  {
    caption: "Offer AC Service",
    offer: "Get 25%",
    grabText: "Grab Offer",
    background: "#EAF6EF",
    textColor: "#6A9B7E",
  },
  {
    caption: "Offer",
    grabText: "Grab Offer",
    offer: "Get 15%",
    background: "#E9F6FC",
    textColor: "#83C1DE",
  },
];

export default function OfferComponent() {
  return (
    <Card>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {offer.map((it) => (
          <View
            key={it.caption}
            style={[style.offerCard, { backgroundColor: it.background }]}
          >
            <Text style={style.caption}>{it.caption}</Text>
            <Title>{it.offer}</Title>
            <TouchableOpacity style={style.offerBtn}>
              <Text style={{ color: it.textColor }}>Grap Offer</Text>
              <Icon name="chevron-right" color={it.textColor} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </Card>
  );
}

const style = StyleSheet.create({
  caption: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
  },
  offerCard: {
    minHeight: 118,
    minWidth: 241,
    margin: 6,
    padding: 12,
    borderRadius: 14,
  },
  offerBtn: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 7,
    borderRadius: 100,
    width: 106,
  },
});
