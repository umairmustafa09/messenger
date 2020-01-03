import React from 'react';
import { Button } from 'native-base';
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Intro(props) {
  console.disableYellowBox = true;
  return (
    <KeyboardAvoidingView style = {{ flex: 1 }} behavior="padding">
    <View style={styles.container}>
      <Ionicons name="ios-chatboxes" size={100} color="black" />
      <Text style = { styles.text }>Enter Email</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Email"
        placeholderTextColor = "grey"/>
      <Text style = { styles.text }>Enter Password</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
        placeholderTextColor = "grey"
        secureTextEntry = 'true'/>
      <Button  style={ styles.submitButton } 
        onPress={() => { props.navigation.navigate('Home') }}>
        <Text style = {styles.submitButtonText}>Submit</Text>
      </Button>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
  },
  text: {
    textAlign: 'left',
    color: 'black',
    padding: 10,
 },
 input: {
    marginBottom: 25,
    marginLeft: 5,
    height: 40,
    width: Dimensions.get('window').width / 1.1,
    borderColor: 'white',
    borderBottomColor: 'black',
    borderWidth: 1,
 },
 submitButton: {
    backgroundColor: '#1A535C',
    padding: 20,
    height: 40,
    marginLeft:  Dimensions.get('window').width / 1.5,
 },
 submitButtonText:{
    color: 'white',
    textAlign: 'center',
 }
});