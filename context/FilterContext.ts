import { createContext } from 'react';

interface IContextProps {
    filterActive: string,
    changeFilter: Function
}

const FilterContext = createContext({} as IContextProps);

export default FilterContext;