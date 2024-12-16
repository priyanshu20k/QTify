import React from 'react';
import Styles from "./FilterSection.module.css";
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousel from '../Carousel/Carousel';


function FilterSection({type, title, fliteredSongs, handleTabsChanges}) {
    
  return (
    <div className={Styles.wrapper}>
        <div className={Styles.heading}>
            {title}
        </div>
        <BasicTabs handleTabsChanges={handleTabsChanges}/>
        <Carousel data={fliteredSongs}/>
    </div>
  )
}

export default FilterSection;
