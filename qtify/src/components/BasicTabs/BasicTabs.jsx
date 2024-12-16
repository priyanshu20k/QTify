import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material'
import Styles from "./BasicTabs.module.css";

function BasicTabs({handleTabsChanges}) {
    const [tabsValue,setTabsValue] = useState(0);
    const handleTabs = (e,value)=>{
        setTabsValue(value);
        handleTabsChanges(value);
    }
  return (
    <div className={Styles.wrapper}>
        <Tabs value={tabsValue} textColor='#34c94b' onChange={handleTabs} TabIndicatorProps={{style: { backgroundColor: "#34c94b"}}}>
            <Tab label="All" />
            <Tab label="Rock"/>
            <Tab label="Pop"/>
            <Tab label="Jazz"/>
            <Tab label="Blues"/>
        </Tabs>
    </div>
  )
}

export default BasicTabs;
