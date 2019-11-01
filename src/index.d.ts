
declare module 'react-native-wheel-picker' {
    import * as React from 'react';
    import { PickerProps as ReactNativePickerProps } from 'react-native';

    type ComponentType<P = {}> = React.ComponentClass<P> | React.FunctionComponent<P>;
    type PickerDataItemObject = {
        label: string;
        value?: any;
    };

    export type PickerDataItem = string | number | PickerDataItemObject;

    export type PickerProps = ReactNativePickerProps & {
        pickerData: PickerDataItem[];
    };

    export const Picker: React.ComponentType<PickerProps>;
}
