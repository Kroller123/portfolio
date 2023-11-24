import React from 'react';
import css from "./Skils.module.css"

const Skils = () => {
    return (
        <div className={css.Main}>
            <h1 className={css.main_text}>Here I will tell you in detail about my programming skills.At the moment I am studying at an online school in Ukraine</h1>
            <ul className={css.list}>
                <li>75% of HTML and can make a one-page website with a navigation menu and a footbar</li>
                <li>50% of CSS, I haven’t had to work with styles, but I can do basic styling</li>
                <li>Java.script 100%. With this script I can do any functionality of the site. Below I will attach my work</li>
                <li>Databases 25% I have not had to work with databases but I know how to use them</li>
                <li>And the last framework that I’m currently studying is React.js, it’s a very functional framework.</li>
            </ul>
            <h2 className={css.text}>My works on the button below</h2>
            <button onClick={() => window.location.assign('https://github.com/GrayHead')} className={css.btn}> My works </button>
        </div>
    );
};

export {Skils};