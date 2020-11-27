import * as yup from 'yup'
import {Formik} from 'formik'
import React, { Component, Fragment } from 'react';
import { Text, Alert, View, TouchableWithoutFeedback, Keyboard, ScrollView, Image, StyleSheet, Animated, Easing, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import {CheckBox, Left} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';

const image = require('./spreadpaint2.jpeg');

var { height, width } = Dimensions.get('window');

export default class Validatedsignup extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       toggleCheckBox:false,
       toggleCheckBox1:false,
       toggleCheckBox2:false,
       country:'',
       xValue: new Animated.Value(0),
       rotateValue: new Animated.Value(0),
    }
  }

  setToggleCheckBox () {
    this.setState({
      toggleCheckBox:true,
      toggleCheckBox1:false,
      toggleCheckBox2:false
      
    })
  }

  setToggleCheckBox1 () {
    this.setState({
      toggleCheckBox1:true,
      toggleCheckBox:false,
      toggleCheckBox2:false
    })
  }

  setToggleCheckBox2 () {
    this.setState({
      toggleCheckBox2:true,
      toggleCheckBox:false,
      toggleCheckBox1:false
    })
  }

  _moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 130.5,
      duration:1000,
      easing: Easing.cubic,
    }).start(() => {
      Animated.timing(this.state.xValue, {
        toValue:0,
        duration:1000,
        easing: Easing.cubic,

      }).start(() => {
        this._moveAnimation();
      });
    });
  }

  _rotateAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.rotateValue, {
        toValue:100,
        duration:2000,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.rotateValue, {
        toValue:0,
        duration:0,
      })
    ]).start(() => {
      this._rotateAnimation();
    });
  }

  _moveAndRotateAnimation = () => {
    Animated.parallel([
      
      this._moveAnimation(),
      this._rotateAnimation(),
    ]).start();
  }



 

  render() {

    const interpolatedRotateAnimation = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Formik
        initialValues={{ email: '', password: '', name: '',mobileNumber:'', city:'',college:'',checked:false,collegeId:'' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required('Name cannot be Empty'),
          email: yup
            .string()
            .email()
            .required(),
          mobileNumber: yup
            .number()
            .required('Mobile Number cannot be Empty'),
          city: yup
            .string()
            .required('City cannot be Empty'),
          college: yup
            .string()
            .required('college field cannot be Empty'),
          collegeId: yup
            .string()
            .required('College ID cannot be Empty'),
          checked: yup
            .string()
            .required('Select Anyone')

        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, setFieldValue}) => (

          <ImageBackground 
            source={image}
            style={styles.imageStyle}
          >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>


            <ScrollView>

            <View style={{ marginTop:30,justifyContent:'center',alignItems:'center'}}>
              <Animated.Image 
               source={require('./saarang_logo2.jpg')} 
               style={[styles.saaranglogo,
               // {left: this.state.xValue},
                {transform: [{ rotate: interpolatedRotateAnimation}]},
              ]} 
               onLoad={this._rotateAnimation}> 
              </Animated.Image>
            </View>
          <View style={{width:400,padding:10}}>

            
              
          <Fragment>

          <TextInput
              mode='outlined'
              value={values.name}
              selectionColor='blue'
              label="NAME"
              dense='true'
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder=" Enter your Name"
              placeholderTextColor="black"
              style={{marginBottom:10,marginTop:50}}
            />

            {touched.name && errors.name &&
              <Text style={{ fontSize: 17, color: 'red',width:300,paddingLeft:15,marginBottom:10 }}>{errors.name}</Text>
            }
             
            <TextInput
              mode='outlined'
              selectionColor='blue'
              value={values.email}
              label="EMAIL"
              dense='true'
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder=" Enter your E-mail"
              placeholderTextColor="black"
              style={{marginBottom:10}}
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 17, color: 'red',width:300,paddingLeft:15,marginBottom:10 }}>{errors.email}</Text>
            }

              <TextInput
              mode='outlined'
              selectionColor='blue'
              type="number"
              label="MOBILENUMBER"
              dense='true'
              keyboardType="phone-pad"
              value={values.mobileNumber}
              onChangeText={handleChange('mobileNumber')}
              onBlur={() => setFieldTouched('mobileNumber')}
              placeholder=" Enter Your MobileNumber"
              placeholderTextColor="black"
              style={{marginBottom:10}}
            />
            {touched.mobileNumber && errors.mobileNumber &&
              <Text style={{ fontSize: 17, color: 'red',paddingLeft:15,marginBottom:10 }}>{errors.mobileNumber}</Text>
            }

             <TextInput
              mode="outlined"
              selectionColor="blue"
              underlineColor="red"
              dense='true'
              value={values.city}
              label="CITY"
              onChangeText={handleChange('city')}
              onBlur={() => setFieldTouched('city')}
              placeholder=" Enter your city"
              placeholderTextColor="black"
              style={{marginBottom:10}}
            />
            {touched.city && errors.city &&
              <Text style={{ fontSize: 17, color: 'red',width:300,paddingLeft:15,marginBottom:10 }}>{errors.city}</Text>
            }

            <TextInput
              mode="outlined"
              selectionColor="blue"
              underlineColor="red"
              dense='true'
              value={values.collegeId}
              label="COLLEGE ID"
              onChangeText={handleChange('collegeId')}
              onBlur={() => setFieldTouched('collegeId')}
              placeholder=" Enter your College ID - Roll Number"
              placeholderTextColor="black"
              style={{marginBottom:10}}
            />
            {touched.collegeId && errors.collegeId &&
              <Text style={{ fontSize: 17, color: 'red',width:300,paddingLeft:15,marginBottom:10 }}>{errors.collegeId}</Text>
            }



            <DropDownPicker
                  
              items={[

                {label:'UK',value:'UK'},
                {label:'US',value:'US'}
              ]}
              containerStyle={{height:40,marginTop:10}}
              searchable={true}
              placeholder="Select your College"
              searchablePlaceholder="Search..."
              searchableError="Not Found"
              itemStyle={{alignItems: 'flex-start'}}
              style={{borderColor:'black',backgroundColor: '#fafafa'}}
              dropDownStyle={{backgroundColor: '#fafafa'}} 
              onChangeItem={(item) => {
                setFieldTouched('college',item)
                setFieldValue('college',item)
                this.setState({country: item.value})}}
            />

            {touched.college && errors.college &&
              <Text style={{ fontSize: 17, color: 'red',width:300,paddingLeft:15 }}>{errors.college}</Text>
            }


            <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-around',alignContent:'space-around'}}>
              <View style={{flexDirection:'row'}}>
              <CheckBox
                disabled={false}
                checked={this.state.toggleCheckBox}
                onPress={() => this.setToggleCheckBox() }
                onChangeItem = {(item) => {
                  setFieldTouched('checked',item)
                  setFieldValue('checked',item)
                  this.setState({checked:item})
                }}

              />
              <Text style={{paddingLeft:15,}}>male</Text>
              </View>


              <View style={{flexDirection:'row'}}>
              <CheckBox
                disabled={false}
                checked={this.state.toggleCheckBox1}
                onPress={() => this.setToggleCheckBox1()}
 
              />
              <Text style={{paddingLeft:15,}}>Female</Text>
              </View>

              <View style={{flexDirection:'row'}}>
              <CheckBox
                disabled={false}
                checked={this.state.toggleCheckBox2}
                onPress={() => this.setToggleCheckBox2() }
              />
              <Text style={{paddingLeft:15,}}>Others</Text>
              </View>

            </View>
            <Text></Text>


            <Button        
              title="Sign Up"
              type='solid'
              containerStyle={{marginTop:50,borderRadius:20,width:300,marginLeft:40}}
              buttonStyle={{backgroundColor:'red'}}
              onPress={handleSubmit}
            />
            
            
            
          </Fragment>
          </View>   
          </ScrollView>

          </TouchableWithoutFeedback>
          </ImageBackground>
        )}
      </Formik>
    );
  }
}
const styles = StyleSheet.create({

  imageStyle: {

    flex:1,
    resizeMode: "cover",

  },

  saaranglogo: {
    height:120,
    width:120,
    borderRadius:60,
    backgroundColor: 'transparent',
    justifyContent:'center',
    alignItems:'center'
  },

});