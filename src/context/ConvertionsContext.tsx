import { createContext, ReactNode, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export enum ConvertionChannelEnum {
  GENERAL = "GENERAL",
  MERCADO_LIVRE = "MERCADO_LIVRE",
  AMAZON = "AMAZON",
}

type IndividualConvertionType = {
  id: string;
  result: number;
  channel: ConvertionChannelEnum;
};

interface IConvertionsContext {
  addConvertionValues: (
    convertion: number,
    channelName: ConvertionChannelEnum
  ) => void;
  convertionsList: IndividualConvertionType[];
}

type IConvertionsContextProviderType = {
  children: ReactNode;
};

export const ConvertionsContext = createContext({} as IConvertionsContext);

export function ConvertionsContextProvider({
  children,
}: IConvertionsContextProviderType) {
  const [convertionsList, setConvertionsList] = useState<
    IndividualConvertionType[]
  >([]);

  const addConvertionValues = useCallback(
    (convertion: number, channelName: ConvertionChannelEnum) => {
      if (convertion) {
        setConvertionsList([
          ...convertionsList,
          { result: convertion, id: uuidv4(), channel: channelName },
        ]);
      }
    },
    [convertionsList]
  );

  return (
    <ConvertionsContext.Provider
      value={{
        addConvertionValues,
        convertionsList,
      }}
    >
      {children}
    </ConvertionsContext.Provider>
  );
}
