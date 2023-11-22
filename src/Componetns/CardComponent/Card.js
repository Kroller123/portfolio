import React from 'react';
import css from "../HobbieComponent/Hobbies.module.css"

const Card = ({user}) => {
    let {img,name,textBtn,info,url} = user;
    return (
        <div className={css.main_div}>
            <img src={img} alt={"#"} className={css.images}/>
            <h1 className={css.text}><b>{name}</b></h1>
            <hr width={325}/>
            <p className={css.p}> {info}</p>
            <button className={css.btn} onClick={() => window.location.assign(`/${url}`)}><b>{textBtn}</b></button>
        </div>
    );
};

export {Card};