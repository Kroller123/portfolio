import React from 'react';
import css from "./Hobbies.module.css"
import {Card} from "../CardComponent/Card";
import firsFoto from "./ImageHobbies/h_react.webp"
import secondFoto from "./ImageHobbies/myfoto2.jpg"
import thirdFoto from "./ImageHobbies/баскетболфото.jpg"

const Hobbies = () => {
    let users = [
        {
            cardOne:{
                img:firsFoto,
                name:"Skills",
                textBtn:"My skills",
                info:"Here I will tell you a little about my web development skills.",
                url:"skills"
            },
            cardTwo:{
                img:secondFoto,
                name:"MotorBike",
                textBtn:"My moto",
                info:"In Ukraine, I have a motorcycle",
                url:"mymoto"
            },
            cardThree:{
                img:thirdFoto,
                name:"Basketball",
                textBtn:"My history",
                info:"My story of how I started playing basketball",
                url:"basketball"
            }
        }
    ]

    return (
        <div className={css.Hobbies}>
            <Card user={users[0].cardOne}/>
            <Card user={users[0].cardTwo}/>
            <Card user={users[0].cardThree}/>
        </div>
    );
};

export {Hobbies};