import React, { useState, createContext, useContext } from 'react';

export const ToastContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ToastProvider = ({ children }) => {
    const [message, setMessage] = React.useState('');
    const [type, setType] = useState()
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const showToast = (type = "success", message, autoClose = true) => {
        setMessage(message);
        setType(type);
        setOpen(true);
        if (autoClose) {
            setTimeout(() => {
                setOpen(false);
            }, 3000);
        }
    };

    const value = { open, type, message, handleClose, showToast };
    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export const useToast = () => useContext(ToastContext);
