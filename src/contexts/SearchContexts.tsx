import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type SearchContextData = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  find: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export default function SearchContextProvider({ children }: SearchContextProviderProps) {

  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  function find(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push('/produtos');
  }

  return (
    <SearchContext.Provider value={{ find, search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}