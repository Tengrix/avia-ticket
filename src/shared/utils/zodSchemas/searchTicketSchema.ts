import {z} from 'zod';

export const searchTicketSchema = z.object({
        departure: z
            .string({required_error: 'Введите город отправления'}).min(1,{message: 'Введите город отправления'}),
        arrival: z
            .string({required_error: 'Введите город прибытия'}).min(1,{message: 'Введите город прибытия'}),
        depDate: z
            .date({required_error: 'Введите дату отправления'}),
        arrDate: z
            .date().optional(),

    }
).refine(data => data.arrDate===undefined || (data.arrDate >= data.depDate), {
    message: "Некорректная дата возвращения",
    path: ["arrDate"]
});

export type SearchTicketType = z.infer<typeof searchTicketSchema>;