import React, { createContext, useState } from 'react';

export const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const [muted, setMuted] = useState(false);

    const handleMuted = () => {
        setMuted(!muted);
    };

    return (
        <SoundContext.Provider
            value={{
                muted,
                handleMuted,
            }}
        >
            {children}
        </SoundContext.Provider>
    );
};
