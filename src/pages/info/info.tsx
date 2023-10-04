import s from "./styles.module.scss"
import {S7Logo} from "./../../assets/S7Logo";
import {useAppSelector} from "./../../redux/store";
import {format} from "date-fns";
import {LuggageIcon} from "./../../assets/LuggageIcon";
import TimeButton from "./../../components/TimeButton/TimeButton";
import {useId, useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Info = () => {
    const ticketInfo = useAppSelector(state => state.search.ticketInfo)
    const [flightTime, setFlightTime] = useState(['09:30', '10:45'])
    const navigate = useNavigate()
    const id = useId()
    const {departure, arrival, depDate, arrDate} = ticketInfo
    const timeOptions = [
        {
            depTime: '09:30',
            arrTime: '10:45'
        },
        {
            depTime: '14:00',
            arrTime: '17:25'
        },
        {
            depTime: '21:00',
            arrTime: '05:45'
        },
    ]
    const ticketCost = new Intl.NumberFormat('ru-RU').format(7950) + ' ₽'

    return (
        <div>
            <div className={s.container}>
                <div className={s.tickets}>
                    <div className={s.ticket}>
                        <div className={s.type}>
                            Невозвратный
                        </div>
                        <div className={s.company}>
                            <S7Logo/>
                            <div>S7 Airlines</div>
                        </div>
                        <div className={s.content}>
                            <div className={s.ticketInfo}>
                                <div className={s.flightInfo}>
                                    <div className={s.time}>{flightTime[0]}</div>
                                    <div>{departure}</div>
                                    <div>{format(depDate, 'dd.MM.yyyy')}</div>
                                </div>
                                <div>
                                    <div className={s.schema}>
                                        <div className={s.airport}>
                                            <div className={s.airportName}>MSC</div>
                                        </div>
                                        <div className={s.flightLine}></div>
                                        <div className={s.airport}>
                                            <div className={s.airportName}>NVB</div>
                                        </div>
                                    </div>
                                    <div className={s.flightTime}>В пути 2 ч 30 мин</div>
                                </div>
                                <div className={s.flightInfo}>
                                    <div className={s.time}>{flightTime[1]}</div>
                                    <div>{arrival}</div>
                                    <div>{format(depDate, 'dd.MM.yyyy')}</div>
                                </div>
                                <LuggageIcon/>
                            </div>
                            <div className={s.timeOptions}>
                                {!arrDate && timeOptions.map(time => (
                                    <TimeButton key={id}
                                                isCurrent={flightTime[0] === time.depTime && flightTime[1] === time.arrTime}
                                                depTime={time.depTime} arrTime={time.arrTime}
                                                onClick={() => setFlightTime([time.depTime, time.arrTime])}/>
                                ))}
                            </div>
                        </div>
                        <div className={s.verticalLine}></div>
                    </div>
                    {arrDate && (
                        <>
                            <div className={s.dashedLine}></div>
                            <div className={s.ticket}>
                                <div className={s.type}>
                                    Невозвратный
                                </div>
                                <div className={s.company}>
                                    <S7Logo/>
                                    <div>S7 Airlines</div>
                                </div>
                                <div className={s.content}>
                                    <div className={s.ticketInfo}>
                                        <div className={s.flightInfo}>
                                            <div className={s.time}>{flightTime[0]}</div>
                                            <div>{arrival}</div>
                                            <div>{format(arrDate, 'dd.MM.yyyy')}</div>
                                        </div>
                                        <div>
                                            <div className={s.schema}>
                                                <div className={s.airport}>
                                                    <div className={s.airportName}>MSC</div>
                                                </div>
                                                <div className={s.flightLine}></div>
                                                <div className={s.airport}>
                                                    <div className={s.airportName}>NVB</div>
                                                </div>
                                            </div>
                                            <div className={s.flightTime}>В пути 2 ч 30 мин</div>
                                        </div>
                                        <div className={s.flightInfo}>
                                            <div className={s.time}>{flightTime[1]}</div>
                                            <div>{departure}</div>
                                            <div>{format(arrDate, 'dd.MM.yyyy')}</div>
                                        </div>
                                        <LuggageIcon/>
                                    </div>
                                    <div className={s.timeOptions}>
                                        {!arrDate && timeOptions.map(time => (
                                            <TimeButton key={id}
                                                        isCurrent={flightTime[0] === time.depTime && flightTime[1] === time.arrTime}
                                                        depTime={time.depTime} arrTime={time.arrTime}
                                                        onClick={() => setFlightTime([time.depTime, time.arrTime])}/>
                                        ))}
                                    </div>
                                </div>
                                <div className={s.verticalLine}></div>
                            </div>
                        </>
                    )}
                </div>
                <div className={s.cost}>{ticketCost}</div>
            </div>
            <Button style={{backgroundColor: "#5C87DB", borderRadius: "10px", marginTop: 100, textAlign: "end"}}
                    variant={"contained"}
                    onClick={() => navigate('/avia')}
            >Вернуться назад</Button>
        </div>
    );
};

export default Info;