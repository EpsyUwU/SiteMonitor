import React from "react";
import ProgressBars from "./ProgressBars";

function InsulatedHumidValues({dato}) {
    return ( 
        <>
            <ProgressBars values={dato} />
        </>
     );
}

export default InsulatedHumidValues;