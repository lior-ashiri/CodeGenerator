import React, {useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
import Input from './Components/UI/Input';
import AuthCodePanel from './Components/AuthCodePanel';
import CenteredText from './Components/UI/CenteredText';
import TitlePanel from './Components/UI/TItlePanel';
export default function App() {
  [Id, setId] = useState(null);
  [ExamId, setExamId] = useState(null);
  [StationId, setStationId] = useState(null);
  [AuthCode, setAuthCode] = useState(null);
  const CodeGeneratorHandler = () => {
    let time = new Date() - new Date(1970, 1, 1);
    if (
      Id &&
      ExamId &&
      StationId &&
      Id != '' &&
      ExamId != '' &&
      StationId != ''
    ) {
      setAuthCode(
        'P:' + Id + '_E:' + ExamId + '_S:' + StationId + '_T:' + time,
      );
    }
  };
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <TitlePanel />
          <View style={styles.FormContainer}>
            <CenteredText>
              Please Insert Your ID number, the Exam ID and the Station ID
            </CenteredText>
            <Input
              placeholder="Your ID"
              getVal={Id}
              setVal={(input) => {
                setId(input);
              }}
              keyboardType="decimal-pad"
              Label="ID:"
            />
            <Input
              placeholder="Exam ID"
              getVal={ExamId}
              setVal={(input) => {
                setExamId(input);
              }}
              keyboardType="decimal-pad"
              Label="ID:"
            />
            <Input
              placeholder="Station ID"
              getVal={StationId}
              setVal={(input) => {
                setStationId(input);
              }}
              keyboardType="decimal-pad"
              Label="ID:"
            />
            <Button
              title="Generate Code!"
              onPress={CodeGeneratorHandler}></Button>
          </View>
          {AuthCode && <AuthCodePanel AuthCode={AuthCode}></AuthCodePanel>}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
//exam Id
//TZ
const styles = StyleSheet.create({
  FormContainer: {
    flex: 2,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    margin: 10,
    marginVertical: 5,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },
});
