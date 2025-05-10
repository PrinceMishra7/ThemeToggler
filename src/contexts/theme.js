import React, {createContext, useContext} from 'react'
// Instead of defining state and handlers inside the Provider wrapper,  
// we can initialize them directly within createContext.  

export const ThemeContext = createContext({
    themeMode: "light",  // Default theme mode  
    darkTheme: () => {}, // Placeholder function for enabling dark theme  
    lightTheme: () => {} // Placeholder function for enabling light theme  
});

// Since we initialized the state and handlers separately,  
// the actual state management should be implemented in the component  
// where the ThemeProvider is used.  

export const ThemeProvider = ThemeContext.Provider; // Creating the Provider  

// Instead of using useContext(ThemeContext) in every file,  
// we create a custom hook to simplify access to ThemeContext.  

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme
