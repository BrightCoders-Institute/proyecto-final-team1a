import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DateSelectorStyle from '../../styles/DateSelectorStyle';
import PropTypes from 'prop-types';

const DateSelector = ({
  name,
  selectedDate,
  isDatePickerVisible,
  toggleDatePicker,
  onDateChange,
}) => {
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
            onDateChange={date => onDateChange(date)}
            mode="date"
          />
        </View>
      )}
    </View>
  );
};
DateSelector.propTypes = {
  name: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  isDatePickerVisible: PropTypes.bool.isRequired,
  toggleDatePicker: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DateSelector;
