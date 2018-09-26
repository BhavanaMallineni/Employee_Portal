import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import {Calendar} from 'react-native-calendars';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';

export default class CalendarSample extends Component {
  
    render() {
        return (
   <Calendar
   onDayPress={(day) => {console.log('selected day', day)}}
     style={{
         borderWidth: 1,
         borderColor: 'gray',
         height: 350,
     }}
     theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        monthTextColor: 'blue',
      //  textDayFontFamily: 'monospace',
        //textMonthFontFamily: 'monospace',
       // textDayHeaderFontFamily: 'monospace',
        textMonthFontWeight: 'bold',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16

     }}/>
        );
    }
}
 
