import {TextField, TextFieldProps} from "@mui/material";
import {memo} from "react";

type Props = {
    label: string
    placeHolder: string
} & TextFieldProps
const CustomTextField = ({label, placeHolder, ...rest}: Props) => {
    return (
        <TextField
            // style={{backgroundColor:"white",borderRadius:"10px"}}
            label={label}
            placeholder={placeHolder}
            InputLabelProps={{shrink: true }}
            InputProps={{style: {backgroundColor:"white",borderRadius:"10px"}  }}
            {...rest}
        />
    );
};

export default memo(CustomTextField);