import {Button} from "@mui/material";
import s from './styles.module.scss'
import {memo} from "react";

type Props = {
    isCurrent: boolean
    depTime: string
    arrTime: string
    onClick: () => void
}
const TimeButton = (props: Props) => {
    const timeRange = (
        <span style={{
            color: "black"
        }}>
    <span
        style={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "normal"
        }}
    >
      {props.depTime}
    </span>{" "}
            -{" "}
            <span style={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "normal"
            }}>{props.arrTime}</span>
  </span>);

    return (
        <Button className={s.btn} style={{
            backgroundColor: props.isCurrent ? "#DDE3EE" : "white",
            border: "1px solid #B7BAC1",
            borderRadius: "10px",
            padding:  "4px",
            height: props.isCurrent ? "40px" : "34px"
        }}
                onClick={() => props.onClick()}
        >{timeRange}</Button>
    );
};

export default memo(TimeButton);