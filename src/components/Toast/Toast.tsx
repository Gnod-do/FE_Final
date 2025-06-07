// components/Toast/Toast.tsx
import { Alert, Snackbar } from '@mui/material';

interface ToastProps {
    open: boolean;
    message: string;
    severity: 'error' | 'warning' | 'info' | 'success';
    handleClose: () => void;
}

const Toast = ({ open, message, severity, handleClose }: ToastProps) => {
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert severity={severity} onClose={handleClose}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Toast;