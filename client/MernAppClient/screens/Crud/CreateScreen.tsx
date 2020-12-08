import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

class CreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test_accounts_accountName: '',
      test_accounts_status: '',
      test_accounts_addressStreet: '',
      test_accounts_addressCity: '',
      test_accounts_addressState: '',
      test_accounts_addressZip: '',
      test_accounts_franchiseId: '',
      test_accounts_accountId: '',
      test_franchise_name: '',
      test_franchise_status: '',
      test_franchise_email: '',
      test_franchise_franchiseId: '',
      // test_service-agreement_
      // test_TruckInspections
      // test_Trucks
      // test_users
      // test_workorders
    };
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <ScrollView>
          {/* Title */}
          <View>
            <Text style={styles.title}>Create Screen!</Text>
          </View>

          {/* test-accounts */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Accounts Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
              onChangeText={(text) => {
                this.setState({test_accounts_accountName: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Status"
              onChangeText={(text) => {
                this.setState({test_accounts_status: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Address Street"
              onChangeText={(text) => {
                this.setState({test_accounts_addressStreet: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Address City"
              onChangeText={(text) => {
                this.setState({test_accounts_addressCity: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Address State"
              onChangeText={(text) => {
                this.setState({test_accounts_addressState: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Address Zip"
              onChangeText={(text) => {
                this.setState({test_accounts_addressZip: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Franchise Id"
              onChangeText={(text) => {
                this.setState({test_accounts_franchiseId: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Id"
              onChangeText={(text) => {
                this.setState({test_accounts_accountId: text});
              }}
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  this.saveTestAccountsAsync(this.state);
                }}
              />
            </View>
          </View>

          {/* test-franchise */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Franchises Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
              onChangeText={(text) => {
                this.setState({test_franchise_name: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Status"
              onChangeText={(text) => {
                this.setState({test_franchise_status: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              onChangeText={(text) => {
                this.setState({test_franchise_email: text});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Franchise Id"
              onChangeText={(text) => {
                this.setState({test_franchise_franchiseId: text});
              }}
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  this.saveTestFranchiseAsync(this.state);
                }}
              />
            </View>
          </View>

          {/* test-invoices */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Invoices Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  console.log('You Saved It...!!!...');
                }}
              />
            </View>
          </View>

          {/* test-service-agreement */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Service Agreements Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  console.log('You Saved It...!!!...');
                }}
              />
            </View>
          </View>

          {/* test-truckInspections */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Truck Inspections Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  console.log('You Saved It...!!!...');
                }}
              />
            </View>
          </View>

          {/* test-trucks */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Trucks Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  console.log('You Saved It...!!!...');
                }}
              />
            </View>
          </View>

          {/* test-users */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Users Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  console.log('You Saved It...!!!...');
                }}
              />
            </View>
          </View>

          {/* test-workorders */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Work Orders Form</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Name"
            />

            <View style={styles.saveButton}>
              <Button
                title="Save"
                onPress={() => {
                  console.log('You Saved It...!!!...');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  saveTestFranchiseAsync = async (state) => {
    await fetch('http://192.168.1.132:4000/api/testFranchise/', {
      method: 'post',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: state.test_franchise_name,
        status: state.test_franchise_status,
        email: state.test_franchise_email,
        franchise_id: state.test_franchise_franchiseId,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('LOOKS LIKE IT SAVED!');
      })
      .catch((error) => {
        console.log(error);
      });
};

  saveTestAccountsAsync = async (state) => {
      await fetch('http://192.168.1.132:4000/api/testAccount/', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountName: state.test_accounts_accountName,
          status: state.test_accounts_status,
          address_city: state.test_accounts_addressCity,
          address_state: state.test_accounts_addressState,
          address_street: state.test_accounts_addressStreet,
          address_zip: state.test_accounts_addressZip,
          franchise_id: state.test_accounts_franchiseId,
          account_id: state.test_accounts_accountId,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log('LOOKS LIKE IT SAVED!');
        })
        .catch((error) => {
          console.log(error);
        });
  };
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

export default CreateScreen;
