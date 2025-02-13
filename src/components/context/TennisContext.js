import { createContext, useContext } from "react";

const TennisContext = createContext();

export const TennisProvider = ({ children }) => {
  const apiKey = process.env.REACT_APP_API_TENNIS_KEY;

  return (
    <TennisContext.Provider value={{ apiKey }}>
      {children}
    </TennisContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
// Hook global
export const useApiKey = () => {
    const context = useContext(TennisContext);
    return context.apiKey;
}