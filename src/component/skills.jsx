import React, { Component } from 'react';

import './style.css';

import my from'./img/my photo/my.jpg';
import html from './img/skills/html.png';
import css from './img/skills/css.png';
import js from './img/skills/Js.png';
import TS from './img/skills/TS.png';
import Python from './img/skills/python.png';
import Bootstrap from './img/skills/bootstrap.png';
import React_Js from './img/skills/REACT.png';
import Postgresql from './img/skills/postgresql.png';
import ES6 from './img/skills/ES6.png';

class Skills extends Component {
    state = {}
    render() {
        return ( 
            <div className="page2">
                
            <div className="partTop">
                <img className="photo" src={my} alt="myPhoto"></img>
                <font className="data">Shnouda Youssef</font>
            </div>
            <div className="partbottom">
                <div className="htm">
                    <img className="htm1" src={html} alt="HTML"></img>
                    <div className="htm2 ml-1">
                        <font className="htmlfont text-danger">HTML</font>
                        <div className='back bg-danger'> <div className="htmlline"></div> </div>
                    </div>
                </div>
                <div className="cs">
                    <img className="cs1" src={css} alt="CSS"></img>
                    <div className="cs2">
                        <font className="csfont text-danger">CSS</font>
                        <div className='back bg-danger'>  <div className="csline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={js} alt="JavaScript"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">JavaScript</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={ES6} alt="ES6"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">ES6</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={TS} alt="TS"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">TypeScript</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={React_Js} alt="REACT"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">React JS</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={Python} alt="Python"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">Python</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={Bootstrap} alt="Bootstrap"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">Bootstrap</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
                <div className="js">
                    <img className="js1" src={Postgresql} alt="Postgresql"></img>
                    <div className="js2 ml-1">
                        <font className="jsfont text-danger">Postgresql</font>
                        <div className='back bg-danger'>  <div className="jsline"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Skills;