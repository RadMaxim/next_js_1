// features/auth/ui/LoginForm/FormField.tsx
import React from 'react';
import { TextField } from '@mui/material';
import { Controller, Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { textFieldStyles } from './LoginForm.styles';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    type?: 'text' | 'password' | 'email';
    autoComplete?: string;
    autoFocus?: boolean;
    rules?: RegisterOptions<T>;
    required?: boolean;
}

export const FormField = <T extends FieldValues>({
                                                     control,
                                                     name,
                                                     label,
                                                     type = 'text',
                                                     autoComplete,
                                                     autoFocus = false,
                                                     rules,
                                                     required = false,
                                                 }: FormFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    value={field.value ?? ''}
                    margin="normal"
                    required={required}
                    fullWidth
                    id={name}
                    placeholder={"Введите "+label}
                    // label={label}
                    type={type}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message} // Теперь текст ошибки отобразится корректно
                    sx={textFieldStyles}
                />
            )}
        />
    );
};