import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

import FilterPhotoConf from '../conf/FilterPhotoConf';
import FilterPhoto from '../utils/interfaces/FilterPhoto';
import SmallButton from './Buttons/SmallButton';

const FiltersRow = () : JSX.Element => {
    const filterConf : any = useContext(FilterContext);
    const  filterActive  = filterConf.filterActive;
    return(
        <div className="filter__row">
            {
                FilterPhotoConf.map((filter: FilterPhoto, index: number) => {
                    const active = (filterActive === filter.anchorText);
                    return(
                        <SmallButton
                            key={index} 
                            anchorText={filter.anchorText}
                            active={active}
                        />
                    )
                })
            }
        </div>
    )
}


export default FiltersRow;