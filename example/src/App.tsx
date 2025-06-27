import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import getCountries from 'react-native-get-countries';

export default function App() {
  type Country = { iso_code: string; name: string };
  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries:</Text>
      <FlatList
        data={countries}
        keyExtractor={(item: Country) => item.iso_code}
        renderItem={({ item }: { item: Country }) => (
          <Text>{item.name} ({item.iso_code})</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
