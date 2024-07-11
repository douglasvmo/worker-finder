import Card from "../../components/Card";
import Title from "../../components/Title";
import SearchInput from "../../components/SearchInput";
import HelloText from "../../components/HelloText";
import { useTheme } from "@react-navigation/native";

type TProps = {
  title: string;
  name: string;
};

export default function TopComponent({ title, name }: TProps) {
  const { colors } = useTheme();
  return (
    <Card>
      <HelloText name={name} />
      <Title textColor={colors.text}>{title}</Title>
      <SearchInput placeholder="Search what you need..." />
    </Card>
  );
}
