import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DateSelectorStyle from '../../styles/DateSelectorStyle';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    toggleDatePicker();
  };

  return (
    <View style={DateSelectorStyle.container}>
      <Text style={DateSelectorStyle.datePickerLabel}>Birthday:</Text>
      <TouchableOpacity
        onPress={toggleDatePicker}
        style={DateSelectorStyle.dateContainer}>
        <Text style={DateSelectorStyle.dateText}>
          {selectedDate.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      {isDatePickerVisible && (
        <View style={DateSelectorStyle.datePickerContainer}>
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
