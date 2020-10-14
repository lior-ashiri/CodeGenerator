import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.inputRow}>
      <TextInput
        {...props}
        style={styles.input}
        onChangeText={(input) => {
          props.setVal(input);
        }}
        value={props.getVal}></TextInput>
      <Text style={styles.label}>{props.Label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: 90,
  },
  label: {
    marginHorizontal: 10,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Input;
