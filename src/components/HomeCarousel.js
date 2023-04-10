import React, { Component } from "react"
import bn1 from '../static/img/bn1_900.jpg'
import bn2 from '../static/img/bn2_900.jpg'
import bn3 from '../static/img/bn3_900.jpg'
import bn4 from '../static/img/bn4_900.jpg'
import bn5 from '../static/img/bn5_900.jpg'
// import fd9 from '../static/img/fd9.jpg'
import bn6 from '../static/img/bn6_900.jpg'
import './components.css'



class HomeCarousel extends Component {
    constructor(props) {
		super(props)
        this.slide = this.slide.bind(this)
    }
    slide (forward) {
        let lists = document.querySelectorAll('.item')
        if (forward) {
            document.querySelector('#slide').appendChild(lists[0])
        } else {
            document.querySelector('#slide').prepend(lists[lists.length - 1])
        }
    }
    render () {
        return (
            <div className="slide_container">
                <div id="slide">
                    <div className="item" style={{ backgroundImage: `url(${bn6})` }}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">We offer exceptional dining experiences with a menu of expertly prepared dishes using highest quality ingredients.</div>
                        </div>
                    </div>
                        <div className="item" style={{backgroundImage: `url(${bn1})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">We offer exceptional dining experiences with a menu of expertly prepared dishes using highest quality ingredients.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${bn2})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">We offer exceptional dining experiences with a menu of expertly prepared dishes using highest quality ingredients.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${bn3})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">We offer exceptional dining experiences with a menu of expertly prepared dishes using highest quality ingredients.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${bn4})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">We offer exceptional dining experiences with a menu of expertly prepared dishes using highest quality ingredients.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${bn5})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">Asdfs sjdfosf asdf ad asdfsd asdr asd asdfsd asd tfrfa as, asdf asdfa arfhgb dasdfd sds sdfgs sfgs sfgsrsdfg.</div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="s_button carousel-control-prev-icon" onClick={() => this.slide(false)}></div>
                    <div className="s_button carousel-control-next-icon" onClick={() => this.slide(true)}></div>
                </div>
            </div>
        )
    }
}

export default HomeCarousel