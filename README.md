# react-native-wheel-picker
iOS style picker component for android.


## Introduction
Based on: [react-native-wheel-datepicker](https://github.com/pinguinjkeke/react-native-wheel-datepicker).

Everything except for basic picker functionality was removed, the rest – refactored a bit.
## Install
```
yarn add 'https://github.com/e1ferapontov/react-native-wheel-picker'
```

## Use
```jsx
import { Picker } from 'react-native-wheel-picker';

<Picker
  style={{ flex: 1 }}
  selectedValue={1}
  pickerData={[1, 2, 3, 4, 5, 6]}
  onValueChange={value => this.setState({ value })}
/>
```
