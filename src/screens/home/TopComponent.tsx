import Card from "../../components/Card";
import Title from "../../components/Title";
import SearchInput from "../../components/SearchInput";
import HelloText from "../../components/HelloText";

type TProps = {
  title: string;
  name: string;
};

export default function TopComponent({ title, name }: TProps) {
  return (
    <Card>
      <HelloText name={name} />
      <Title>{title}</Title>
      <SearchInput placeholder="Search what you need..." />
    </Card>
  );
}
