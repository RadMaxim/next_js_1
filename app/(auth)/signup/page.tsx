"use client"
import React from 'react';
import {
    Box,
    Card,
    CardContent,

    Typography,

} from '@mui/material';
import {LoginForm} from "@/features/auth/ui/LoginForm/LoginForm";

export default function SignupPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
        >
            <Card
                sx={{
                    maxWidth: 400,
                    width: '100%',

                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    overflow: 'visible'
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    {/* Иконка и заголовок */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <Box
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50%',
                                p: 1.5,
                                mb: 1.5,
                                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                            }}
                        >
                        </Box>

                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                            Войдите в свой аккаунт
                        </Typography>
                    </Box>

                    {/* Форма */}
                    <LoginForm/>

                </CardContent>
            </Card>
        </Box>
    );
}
