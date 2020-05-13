import React, { useState } from  'react';

const BoxDisplay = (props) => {
    return (
        <div className="box">
            <pre>{ props.color }</pre>
        </div>
    );
};

export default BoxDisplay;