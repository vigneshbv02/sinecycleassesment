import React from 'react'
import TimelineChild from './TimelineChild';
import "./index.css";

function Timeline({ data, color = [] }) {
    return (
        <div className="timelineContainer">
            <div className="timeLinebody">
                {data.map((value, key) => {
                    return <TimelineChild type={value} data={value} key={key} color={color.length !== 0 ? color[key] : undefined} />
                })}
            </div>
        </div>

    )
}

export default Timeline