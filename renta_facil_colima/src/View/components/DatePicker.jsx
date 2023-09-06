import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from '../../styles/DataPickerStyle';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Fecha seleccionada:', date);
    toggleDatePicker();
  };

  return (
    <View style={styles.container}>
       <Text style={styles.datePickerLabel}>Birthday:</Text>
      <TouchableOpacity
        onPress={toggleDatePicker}
        style={styles.dateContainer}
      >
        <Text style={styles.dateText}>
          {selectedDate.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      {isDatePickerVisible && (
        <View style={styles.datePickerContainer}>
       
        <DatePicker
          date={selectedDate}
          onDateChange={handleDateChange}
          mode="date"
        />
         </View>
      )}
    </View>
  );
};



export default DateSelector;
