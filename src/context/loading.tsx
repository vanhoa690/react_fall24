import { createContext, useContext, useState } from "react";

type LoadingProps = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

// 1 create context
const LoadingContext = createContext<LoadingProps | undefined>(undefined);

// 2 Provider
export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

// 3. su dung hook de goi data
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("context undefined");
  }
  return context;
};
