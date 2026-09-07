'use client';
import React from 'react';
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Typography,
} from '@mui/material';
import {
    textFieldStyles,
    rememberMeBoxStyles,
    submitButtonStyles,
    registerTextStyles,
} from './LoginForm.styles';
import { useForm, Controller } from 'react-hook-form';
import {defaultValues} from "@/features/auth/ui/LoginForm/defaultValues";
import {LoginInterface} from "@/features/auth/ui/LoginForm/LoginInterface";
import {FormField} from "@/features/auth/ui/LoginForm/FormField";
import {loginSchema} from "@/features/auth/ui/LoginForm/loginSchema";
import {yupResolver} from "@hookform/resolvers/yup";



export const LoginForm: React.FC = () => {
    const { control, handleSubmit } = useForm<LoginInterface>({
        defaultValues: defaultValues,
        resolver: yupResolver(loginSchema),
        mode: 'onChange'
    });

    const onSubmit = (data: LoginInterface) => {
        console.log('Form data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField control={control} type={"email"}
            name="email"
            label={"Email"}/>
            <FormField control={control}
                       name="password"
                       label={"Password"} type="password"/>



            {/* Запомнить меня и Забыли пароль */}
            <Box sx={rememberMeBoxStyles}>
                <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    color="primary"
                                />
                            }
                            label={<Typography variant="body2">Запомнить меня</Typography>}
                        />
                    )}
                />
                <Link href="#" variant="body2" underline="hover" sx={{ fontWeight: 500 }}>
                    Забыли пароль?
                </Link>
            </Box>

            {/* Кнопка отправки */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={submitButtonStyles}
            >
                Войти
            </Button>

            {/* Ссылка на регистрацию */}
            <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                sx={registerTextStyles}
            >
                Ещё нет аккаунта?{' '}
                <Link href="#" underline="hover" sx={{ fontWeight: 600 }}>
                    Зарегистрироваться
                </Link>
            </Typography>
        </form>
    );
};