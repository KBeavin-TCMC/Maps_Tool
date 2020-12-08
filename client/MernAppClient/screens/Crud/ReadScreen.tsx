import React, { ReactText } from 'react';
import {ScrollView, View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface MyState {
  collection: ReactText,
  pickerValue: string,
}

class ReadScreen extends React.Component<{}, MyState> {
  constructor(props) {
    super(props);
    this.state= {
      collection: "",
      pickerValue: "",
    };
  }

  componentDidMount = async () => {
    this.getCollectionAsync(this.state.collection)

  }

  render() {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.title}>Read Screen!</Text>
        <ScrollView>
          
          <View style={styles.formContainer}>
            <Text style={styles.title}>{} List</Text>

            <Picker 
              selectedValue={this.state.collection}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => 
                this.setState({collection: itemValue})
              }>
              <Picker.Item label="test-accounts" value="test-accounts" />
              <Picker.Item label="test-franchise" value="test-franchise" />
            </Picker>

            <View style={styles.saveButton}>
              <Button
                title="Get"
                onPress={() => {
                  console.log('HI');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  getCollectionAsync = async (itemValue: React.ReactText) => {
    let endpoint = "";

    if (itemValue === "test-accounts"){
      endpoint = "testAccount";
    }else if (itemValue === "test-franchise"){
      endpoint = "testFranchise";
    }else if (itemValue === "test-invoices"){
      endpoint = "testInvoice";
    }else if (itemValue === "test-service-agreement"){
      endpoint = "testServiceAgreement";
    }else if (itemValue === "test-truckInspections"){
      endpoint = "testTruckInspection";
    }else if (itemValue === "test-trucks"){
      endpoint = "testTruck";
    }else if (itemValue === "test-users"){
      endpoint = "testUser";
    }else if (itemValue === "test-workorders"){
      endpoint = "testWorkorder";
    }

    await fetch(`http://192.168.1.132:4000/api/${endpoint}/`,{
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("getCollectionAsync");
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  formContainer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  picker: {
    backgroundColor: "white",
  },
  saveButton: {
    marginTop: 5,
  },
  textInput: {
    backgroundColor: 'white',
    marginTop: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default ReadScreen;
