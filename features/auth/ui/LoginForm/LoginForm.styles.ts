// features/auth/ui/LoginForm/LoginForm.styles.ts
import { SxProps, Theme } from '@mui/material';

export const textFieldStyles: SxProps<Theme> = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 2,
    },
};

export const rememberMeBoxStyles: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 1,
    mb: 2,
};

export const submitButtonStyles: SxProps<Theme> = {
    py: 1.5,
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
    '&:hover': {
        boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
    },
};

export const registerTextStyles: SxProps<Theme> = {
    mt: 3,
};