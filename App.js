import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  RefreshControl,
  SectionList,
} from 'react-native';

const App = () => {
  const [DATA, setDATA] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);
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
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text_item}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  item: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
  text_item: {
    color: '#000000',
    fontSize: 35,
    margin: 5,
  },
});
export default App;
