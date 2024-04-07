"use client";
import React from 'react'
import { Tooltip } from 'react-tooltip'

const ToolTip = () => {
    return (
        <div >
            <a href='https://hashnode.com/@krayush1109' target='_blank' id="my-anchor-element-id" className="ri-blogger-fill"></a>
            
            <Tooltip
                // Don't forget the `#`!
                anchorSelect="#my-anchor-element-id"
                content="Hashnode (Coding Blog)" style={{
                    fontSize: '1rem', padding: '0 4px'
                }}
            />
        </div>
    )
}

export default ToolTip