import { useState, useContext, createContext, FC, ReactNode, Dispatch, SetStateAction } from 'react'

type CurrentPathContextType = {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
};

type CurrentPathProviderProps = {
  children: ReactNode;
};

const CurrentPathContext = createContext<CurrentPathContextType | undefined>(
  undefined
)

export const CurrentPathProvider: FC<CurrentPathProviderProps> = ({
  children
}: CurrentPathProviderProps) => {
  const [path, setPath] = useState<string>('')
  return (
    <CurrentPathContext.Provider value={{ path, setPath }}>
      {children}
    </CurrentPathContext.Provider>
  )
}

export const useCurrentPath = (): CurrentPathContextType => {
  const context = useContext(CurrentPathContext)
  if (!context) {
    throw new Error('useCurrentPath must be used within a CurrentPathProvider')
  }
  return context
}
