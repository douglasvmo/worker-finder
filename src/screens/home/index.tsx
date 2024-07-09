import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import Title from '../../components/Title';


export default function Home() {
  return (
    <View style={styles.container}>
      <Card>
        <Title>What you are looking for today</Title>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
