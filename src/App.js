import React,{useState} from 'react';
import {SafeAreaView,KeyboardAvoidingView, TextInput, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
export default function App() {
  [Id, setId] = useState(null);
  [ExamId, setExamId] = useState(null);
  [StationId, setStationId] = useState(null);
  [AuthCode, setAuthCode] = useState(null);
  const CodeGeneratorHandler = ()=>{
    let time = new Date() - new Date(1970,1,1)
    if (Id && ExamId && StationId && Id!="" && ExamId!="" && StationId!=""){
      setAuthCode("P:"+Id+"_E:"+ExamId+"_S:"+StationId+"_T:"+time)
      
    }
  }
  return (
    <KeyboardAvoidingView style={styles.screen}>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.TitleContainer}>
      <Text style={styles.Title}>Welcome to the Admin Authentication Screen!</Text>
    </View>
    <View style={styles.FormContainer}>
      <Text style={styles.centeredText}>Please Insert Your ID number, the Exam ID and the Station ID</Text>
      <View style={styles.inputRow}>
      <TextInput style={styles.input} onChangeText={(input)=>{console.log(input); setId(input)}} value={Id} placeholder="Your ID" keyboardType="decimal-pad"></TextInput>
        <Text style={styles.label}>ID:</Text>
      </View>
      <View style={styles.inputRow}>
      <TextInput style={styles.input}  onChangeText={(input)=>{console.log(input);setExamId(input)}} value={ExamId} placeholder="Exam ID" keyboardType="decimal-pad"></TextInput>
      <Text style={styles.label}>ExamID:</Text>
      </View>
      <View style={styles.inputRow}>
      <TextInput style={styles.input}  onChangeText={(input)=>{ console.log(input); setStationId(input)}} value={StationId} placeholder="Station ID" keyboardType="decimal-pad"></TextInput>
      <Text style={styles.label}>Station ID:</Text>
      </View>
      <Button title="Generate Code!" onPress={CodeGeneratorHandler}></Button>
    </View>
    {AuthCode&&
     <View style={styles.CodeResultContainer}>
       <Text style={styles.centeredText}>Your Code is:</Text>
      <Text>{AuthCode}</Text>
    </View>
    }
    </ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
//exam Id
//TZ
const styles = StyleSheet.create({
  Title:{
    color: "blue", fontWeight: 'bold', textDecorationLine: 'underline', textAlign: "center"
  },
  label:{
    marginHorizontal: 10
  },
  inputRow:{
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    
  },
  centeredText:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: 90
  },
  CodeResultContainer:{
    flex:1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    color: "white"
  },
  FormContainer:
  {
    flex:2,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    margin: 10,
    marginVertical: 5,
    padding: 10,
  },
  TitleContainer: {
    flex:1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1,
    margin: 10,
    padding: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen:{
    flex:1
  }
});