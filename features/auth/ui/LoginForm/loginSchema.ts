// features/auth/ui/LoginForm/loginSchema.ts
import * as yup from 'yup';
import {LoginInterface} from "@/features/auth/ui/LoginForm/LoginInterface";

export const loginSchema: yup.ObjectSchema<LoginInterface> = yup.object().shape({
    email: yup
        .string()
        .required('Email обязателен')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Введите корректный email'),
    password: yup
        .string()
        .required('Пароль обязателен')
        .min(6, 'Пароль должен содержать минимум 6 символов'),
    rememberMe: yup
        .boolean()
        .defined()
        .default(false),
});
