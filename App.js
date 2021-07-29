import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  RefreshControl,
  SectionList,
  TextInput,
} from 'react-native';

const App = () => {
  const [DATA, setDATA] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);

  const [name, setName] = useState('');
  const onRefresh = () => {
    setRefreshing(true);
    const index = DATA.length + 1;
    setDATA([
      ...DATA,
      {
        title: 'Title ' + index,
        data: [`Item ${index}-1`, 'Item ' + index + '-2'],
      },
    ]);
    setRefreshing(false);
  };
  const [Refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Insert Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={value => {
          setName(value);
        }}
      />

      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
  },
});
export default App;
