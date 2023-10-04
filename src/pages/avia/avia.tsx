import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import CustomTextField from "./../../components/CustomTextField/CustomTextField";
import {searchTicketSchema, SearchTicketType} from "./../../shared/utils/zodSchemas/searchTicketSchema";
import DatePicker from "./../../components/DatePicker/DatePicker";
import s from "./styles.module.css"
import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "./../../redux/store";
import {searchActions} from "./../../redux/slice";
import {useNavigate} from "react-router-dom";
import {memo, useEffect, useMemo} from "react";

const Avia = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const ticketInfo = useAppSelector(state => state.search.ticketInfo)
    const {control, handleSubmit, formState: {errors}, reset} = useForm<SearchTicketType>({
        resolver: zodResolver(searchTicketSchema),
        mode: 'all'
    });

    const onSubmit = useMemo(() => handleSubmit((data) => {
        dispatch(searchActions.setSearchParams(data));
        navigate('/avia/info');
    }), [handleSubmit, dispatch, navigate]);

    useEffect(() => {
        reset({
            departure: ticketInfo.departure,
            arrival: ticketInfo.arrival
        })
    }, [ticketInfo])
    return (
        <div>
            <form onSubmit={onSubmit} className={s.form}>
                <div className={s.inputs}>
                    <Controller
                        control={control}
                        name={'departure'}
                        render={({field}) => (
                            <CustomTextField
                                label={"Откуда"}
                                placeHolder={"Город вылета"}
                                error={!!errors.departure}
                                helperText={errors.departure?.message}
                                variant={'outlined'}
                                value={field.value}
                                onChange={(e) => field.onChange(e)}
                            />)
                        }/>
                    <Controller
                        control={control}
                        name={'arrival'}
                        render={({field}) => (
                            <CustomTextField
                                label={"Куда"}
                                placeHolder={"Город прилёта"}
                                error={!!errors.arrival}
                                helperText={errors.arrival?.message}
                                variant={'outlined'}
                                value={field.value}
                                onChange={(e) => field.onChange(e)}
                            />)
                        }/>
                    <DatePicker label={"Туда"} name={"depDate"} control={control}/>
                    <DatePicker label={"Обратно"} name={"arrDate"} control={control}/>
                </div>
                <div className={s.button}>
                    <Button type={"submit"} style={{backgroundColor: "#5C87DB", borderRadius: "10px"}}
                            variant={"contained"}>Найти билеты</Button>
                </div>
            </form>
        </div>
    );
});

export default Avia;