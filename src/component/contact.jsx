import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import me from './img/my photo/me.jpg';
import ghub from './img/contact/ghub.png';
import facebook from './img/contact/Facebook.png';
import insta from './img/contact/insta.png';

class Contact extends Component {
    state = {}
    render() {
        return ( 
            <div className="page3">
            <img className="photome" src={me} alt=""></img>
            <Link className="a" href="https://t.me/ShNoUdAYoUsSeF">
                <font className="tele">Connect Now Via Telegram</font>
            </Link>
            <div className="tools">
                <Link href="https://github.com/Shnouda-Youssef-Mounor"><img className="icon" src={ghub} alt=""></img></Link>
                <Link href="https://www.facebook.com/shnouda.youssef.3"><img className="icon" src={facebook} alt=""></img></Link>
                <Link href="https://www.instagram.com/shnoudayoussefmounir/"><img className="icon" src={insta} alt=""></img></Link>
            </div>
        </div>
        );
    }
}

export default Contact;