import React from 'react';
import './index.css';

function TimelineChild({data, color = 'blue'}) {
    return (
        <div className="timelineChildContainer">
            <div className="timelinetail"></div>
            <div className={`timelinePointers timelinePointers-${color}`}></div>
            <div className="timelineData">
                {
                    typeof(data) === 'object' ? (data.map((value, key) => (<p key={key}>{value}</p>))) : (<p>{data}</p>)
                }
            </div>
        </div>
    )
}

export default TimelineChild
