import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CenteredText = (props) => {
  return <Text style={styles.centeredText}> {props.children} </Text>;
};

const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default CenteredText;
