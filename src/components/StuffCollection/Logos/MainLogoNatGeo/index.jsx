import React from "react";
import s from "./index.css"

export const MainLogoNatGeo = () => {
    return <div className={s.mainLogoStyle}>
        <div className={s.mainLogoBGStyle}>
            <img className={s.mainLogoStyleImg}
                 src='https://www.ifia.com/wp-content/uploads/2020/05/seo.ngsversion.1565614141405.jpg'
                /*height="200" width="300"*/
                 alt="NatGeo Logo"/>
        </div>
    </div>

}