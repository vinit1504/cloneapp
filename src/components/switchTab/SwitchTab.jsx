import React from 'react'
import './style.scss'
import { useState } from 'react';

const SwitchTab = ({data , onTabChange}) => {

    const [selectedTab, setselectedTab] = useState(0)
    const [left, setleft] = useState(0)

    const activeTab=(tab,index)=>{
        setleft(index*100)
        setTimeout(() => {
            setselectedTab(index)
        }, 3000);
        onTabChange(tab,index)
    }
  return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((tab,index)=>(
                <span key={index} className={`tabItem ${selectedTab === index ? 'active' : ''}`} onClick={()=>activeTab(tab,index)}>
                    {tab}
                </span>
            ))}
            <span className="movingBg" style={{left}}/>
        </div>
    </div>
  )
}

export default SwitchTab
