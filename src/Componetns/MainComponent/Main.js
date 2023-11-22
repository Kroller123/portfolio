import React from 'react';
import foto from "./ImageMain/myfoto.jpg"
import css from "./Main.module.css"

const Main = () => {
    return (
        <div className={css.Main}>
            <img  className={css.image_foto} src={foto}  alt={"#"}/>
            <h3 className={css.text}><u>Yaroslav Ternovyi</u></h3>
            <div>
                <p className={css.second_text}>I'm from Ukraine, now I live in Ireland.At the moment there is a war going on in my country.</p>
            </div>
            <div>
                <button className={css.btn} onClick={() => window.location.assign('https://www.instagram.com/yyaarrriiikkk/')}>My Instagram</button>
                <button style={{marginLeft:"10px"}} className={css.btn} onClick={() => window.location.assign('https://www.youtube.com/channel/UC7_GobEnwiahW73OYN0sb2g')}>My YouTube Channel</button> <br/>
            </div>
        </div>
    );
};

export {Main};