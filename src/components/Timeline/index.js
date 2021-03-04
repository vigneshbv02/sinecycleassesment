import React, { useState } from 'react'
import TimelineChild from './TimelineChild';
import "./index.css";

function Timeline({ data, enableToggle = false, pending = false, pendingContent = "Still working on",type = "left" }) {

    let [toggleState, setToggleState] = useState(false);

    const onClick = (e) => {
        if (enableToggle) {
            setTimeout(() => {
                setToggleState(!toggleState);
            }, 10);
        }
    }

    return (
        <div className="timelineContainer">
            <div className="timeLinebody" style={{ flexDirection: !toggleState ? 'column' : 'column-reverse' }}>
                <React.Fragment>
                    {data.map((value, key) => {
                        return <TimelineChild
                            data={value.data === undefined ? value : value.data}
                            key={key}
                            type={type}
                            label={value.label === undefined ? undefined : value.label}
                            color={value.color === undefined ? undefined : value.color} />
                    })}
                </React.Fragment>
                <React.Fragment>
                    {pending ? (
                        <TimelineChild
                            data={pendingContent}
                            pending={pending}
                            type={type} />
                    ) : (<span></span>)
                    }
                </React.Fragment>
            </div>
            {enableToggle ? (
                <button type="button" onClick={onClick}>Toggle Data</button>
            ) : (<span></span>)}
        </div>

    )
}

export default Timeline