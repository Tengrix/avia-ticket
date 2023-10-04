import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Control, FieldPath, FieldValues, useController} from 'react-hook-form';
import CustomTextField from "./../CustomTextField/CustomTextField";
import {memo} from "react";


type Props<TFieldValues extends FieldValues> = {
    name: FieldPath<TFieldValues>;
    control: Control<TFieldValues>;
    label: string;
};
const DatePicker = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
    const {field, fieldState: {error}} = useController({
        name: props.name,
        control: props.control
    });

    return (
        <ReactDatePicker
            minDate={new Date()}
            selected={field.value}
            onChange={(date: Date) => field.onChange(date)}
            customInput={<CustomTextField
                InputProps={{style: {backgroundColor:"white",borderRadius:"10px",fontWeight:700}  }}
                error={!!error}
                helperText={error?.message}
                placeHolder={"дд.мм.гг"}
                label={props.label}
                value={field.value}

            />
            }
            dateFormat={'dd.MM.yyyy'}
        />
    );
};

export default memo(DatePicker);
