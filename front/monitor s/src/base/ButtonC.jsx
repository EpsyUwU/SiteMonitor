import React from 'react'

function ButtonC({typ,clas,img}){
    return(
        <>
            <a
            type={typ}
            className={clas}
            >
                <img className="img-fluid" src={img} alt="xd"/>
            </a>
        </>
    ) 
}

export default ButtonC