declare module 'react-native-wheel-picker' {
    import * as React from 'react';
    import * as ReactNative from 'react-native';

    type PickerDataItemObject = {
        label: string;
        value?: any;
    };

    export type PickerDataItem = string | number | PickerDataItemObject;

    export type PickerProps = ReactNative.PickerProps & {
        pickerData: PickerDataItem[];
    };

    export type Picker = React.FC<PickerProps>;
}
