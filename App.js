import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Mash');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Programming with Mash');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
    // console.log('Hello');
  };

  return (
    <View style={styles.body}>
      <View style={styles.firstrow}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text>4</Text>
      </View>
      <View style={styles.view5}>
        <Text>5</Text>
      </View>
      <View style={styles.view6}>
        <View style={styles.view66}>
          <Text>6</Text>
        </View>
        <View style={styles.view67}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#eceff1',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  firstrow: {
    flex: 1,
    backgroundColor: '#eceff1',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#9c27b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    // width: 100,
    backgroundColor: '#ec407a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#ef5350',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    height: 100,
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    height: 100,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view66: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view67: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
