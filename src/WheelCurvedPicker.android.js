import React from 'react';
import { isFunction } from 'lodash';
import { requireNativeComponent } from 'react-native';

const WheelCurvedPickerNative = requireNativeComponent('WheelCurvedPicker');

//
// static propTypes = {
//   ...ViewPropTypes,
//   data: PropTypes.array,
//   textColor: ColorPropType,
//   textSize: PropTypes.number,
//   itemSpace: PropTypes.number,
//   onValueChange: PropTypes.func.isRequired,
//   selectedValue: PropTypes.any,
//   selectedIndex: PropTypes.number,
// };

const defaultLibProps = {
  textSize: 26,
  itemSpace: 20,
  textColor: '#333',
};

const stateFromProps = ({ children, selectedValue }) => {
  let selectedIndex = 0;

  const items = children.map(({ props: { value, label } }, index) => {
    if (value === selectedValue) {
      selectedIndex = index;
    }

    return { value, label };
  });

  return { selectedIndex, items };
};

const WheelCurvedPicker = (props) => {
  const [pickerState, setPickerState] = React.useState(stateFromProps(props));

  const { children, selectedValue, onValueChange, ...otherProps } = props;

  React.useEffect(() => {
    setPickerState(stateFromProps({ children, selectedValue }));
  }, [children, selectedValue]);

  const onChange = ({ nativeEvent: { data } }) => {
    if (isFunction(onValueChange)) {
      return onValueChange(data);
    }
  };

  return (
    <WheelCurvedPickerNative
      {...defaultLibProps}
      {...otherProps}
      onValueChange={onChange}
      data={pickerState.items}
      selectedIndex={parseInt(pickerState.selectedIndex, 10)}
    />
  );
};

// static propTypes = {
//   value: PropTypes.any.isRequired,
//   label: PropTypes.string.isRequired,
// };

// These items don't get rendered directly.
export const Item = () => null;
export default WheelCurvedPicker;
