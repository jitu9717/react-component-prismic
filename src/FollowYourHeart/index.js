import React, { Component } from 'react';
import './style.css';
import '../index.css';

class FollowYourHeart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    title : "Belgium v England Betting Review",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "http://www.quizcarry.com/wp-content/uploads/2018/07/FIFA-Word-Cup-.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "The Edge Final",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "https://images.indianexpress.com/2017/08/football-reuters-m.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "TAB World Cup Betting Preview",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "http://cdn3-www.playstationlifestyle.net/wp-content/uploads/2010/02/FIFA-World-Cup-2010-Shots-5-685x385.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "History of the World Cup Third Place Playoff",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "https://i.ebayimg.com/images/g/6eIAAOSwq~tZXEhO/s-l300.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "World Cup Final Stat Attack",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "https://images.firstpost.com/wp-content/uploads/2018/07/Mbappe-Modric-.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "World Cup Final Stat Attack",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "https://images.firstpost.com/wp-content/uploads/2018/07/Mbappe-Modric-.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "World Cup Final Stat Attack",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "https://images.firstpost.com/wp-content/uploads/2018/07/Mbappe-Modric-.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                },
                {
                    title : "World Cup Final Stat Attack",
                    tags: ['Belgium', 'England', 'Head'],
                    desc: "At Kick-Off [Normal Time Result] Prices similar when Belgium took a 1-0 lead in the 4th minute ",
                    image: "https://images.firstpost.com/wp-content/uploads/2018/07/Mbappe-Modric-.jpg",
                    time: "2018-07-17T10:51:40.958Z"
                }
            ],
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div className="menu-bar">
                <header className="menu-bar-header">
                    <h1 className="menu-bar-title">Follow Your Heart</h1>
                </header>

            </div>
        );
    }
}

export default FollowYourHeart;