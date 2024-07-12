import { FlatList, Image } from "react-native";
import Card from "../../components/Card";
import { catApi } from "../../hooks/catApi";
import Divider from "../../components/Divider";

export default function Services() {
  const { data } = catApi();

  function renderItem({ item }) {
    return (
      <Image
        source={{ uri: `https://cataas.com/cat/${item}` }}
        width={100}
        height={150}
      />
    );
  }

  return (
    <Card>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </Card>
  );
}
