'use client';

import { ReactElement, createContext, useState } from "react";

type LoaderType = boolean;
export type UniLoaderType = LoaderType | any

export const LoaderContext = createContext<UniLoaderType>(null);

const LoaderProvider = ({children}: {children: ReactElement}) => {
    const [loader, setLoader] = useState<UniLoaderType>(null)
    return (
        <LoaderContext.Provider value={{loader, setLoader}}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderProvider