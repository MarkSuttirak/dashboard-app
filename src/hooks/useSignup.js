import { createContext, useContext, useState } from 'react';

const signupContext = createContext();

export const SignupProvider = ({ children, state }) => {
    const [current, setCurrent] = useState(0);
    const [key, setKey] = useState("sjdkbjdbjk")
    const [istate, _] = useState(state)

    const next = () => {
        if (current < children.length) {
            setCurrent(current + 1);
        }
    };

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    return (
        <signupContext.Provider
            value={{
                current,
                next,
                prev,
                key,
                setKey,
                state: istate,
            }}
        >
            {children}
        </signupContext.Provider>
    );
};

export const useSignup = () => useContext(signupContext);
export default useSignup;
