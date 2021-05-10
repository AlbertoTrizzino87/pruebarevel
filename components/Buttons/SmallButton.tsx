import { useContext } from 'react';
import FilterContext from '../../context/FilterContext';

const SmallButton = ({anchorText, active} : {anchorText: string, active: boolean}): JSX.Element => {
    const filterConf : any = useContext(FilterContext); 
    const changeFilter  = filterConf.changeFilter; 
    const classActive = (active) ? 'button--state-active' : 'button--state-inactive';
     return(
        <button 
            type="button" 
            className={`button button--dimension--small ${classActive}`}
            onClick={() => changeFilter(anchorText)}
            >
            {anchorText}
        </button>
    )
}

export default SmallButton;