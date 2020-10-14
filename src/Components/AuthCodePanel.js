import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CenteredText from './UI/CenteredText';

const AuthCodePanel = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Your Code is:</Text>
      <CenteredText>{props.AuthCode}</CenteredText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
export default AuthCodePanel;
