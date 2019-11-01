import React from 'react';
import get from 'lodash/get';
import { StyleSheet } from 'react-native';
import WheelCurvedPicker, { Item as PickerItem } from './WheelCurvedPicker';

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#d3d3d3',
    height: 220,
  },
});

// static propTypes = {
//   textColor: ColorPropType,
//   textSize: PropTypes.number,
//   itemSpace: PropTypes.number,
//   itemStyle: ViewPropTypes.style,
//   onValueChange: PropTypes.func.isRequired,
//   pickerData: PropTypes.array.isRequired,
//   style: ViewPropTypes.style,
//   selectedValue: PropTypes.any,
// };
//
const defaultLibProps = {
  textColor: '#333',
  textSize: 26,
  itemSpace: 20,
  itemStyle: null,
  style: null,
};


const Picker = (props) => {
  const { style, ...otherProps } = props;

  const pickerData = get(props, 'pickerData') || [];

  return (
    <WheelCurvedPicker
      {...defaultLibProps}
      {...otherProps}
      style={[styles.picker, style]}
    >
      {pickerData.map((data) => {
        const renderedValue = get(data, 'value', data);
        const renderedLabel = get(data, 'label', data.toString());

        return (
          <PickerItem
            key={renderedLabel}
            value={renderedValue}
            label={renderedLabel}
          />
        )
      })}
    </WheelCurvedPicker>
  );
};

export default Picker;
