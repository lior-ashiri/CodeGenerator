import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TitlePanel = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>
        Welcome to the Admin Authentication Screen!
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Title: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1,
    margin: 10,
    padding: 4,
  },
});
export default TitlePanel;
