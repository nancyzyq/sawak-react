import React, { Component } from "react"
import fd2 from '../static/img/fd2.jpg'
import fd4 from '../static/img/fd4.jpg'
import fd5 from '../static/img/fd5.jpg'
import fd7 from '../static/img/fd7.jpg'
import fd8 from '../static/img/fd8.jpg'
// import fd9 from '../static/img/fd9.jpg'
import fd10 from '../static/img/fd10.jpg'
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
                    <div className="item" style={{ backgroundImage: `url(${fd8})` }}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">Asdfs sjdfosf asdf ad asdfsd asdr asd asdfsd asd tfrfa as, asdf asdfa arfhgb dasdfd sds sdfgs sfgs sfgsrsdfg. Vfgv fafjhd sdfvs sfv bgs avgb afvas fgf.</div>
                        </div>
                    </div>
                        <div className="item" style={{backgroundImage: `url(${fd2})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">Asdfs sjdfosf asdf ad asdfsd asdr asd asdfsd asd tfrfa as, asdf asdfa arfhgb dasdfd sds sdfgs sfgs sfgsrsdfg.  Vfgv fafjhd sdfvs sfv bgs avgb afvas fgf.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${fd5})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">Asdfs sjdfosf asdf ad asdfsd asdr asd asdfsd asd tfrfa as, asdf asdfa arfhgb dasdfd sds sdfgs sfgs sfgsrsdfg.  Vfgv fafjhd sdfvs sfv bgs avgb afvas fgf.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${fd10})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">Asdfs sjdfosf asdf ad asdfsd asdr asd asdfsd asd tfrfa as, asdf asdfa arfhgb dasdfd sds sdfgs sfgs sfgsrsdfg.  Vfgv fafjhd sdfvs sfv bgs avgb afvas fgf.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${fd7})`}}>
                        <div className="slide_content">
                            <h3 className="slide_title">Sawak Restaurant</h3>
                            <div className="slide_text">Asdfs sjdfosf asdf ad asdfsd asdr asd asdfsd asd tfrfa as, asdf asdfa arfhgb dasdfd sds sdfgs sfgs sfgsrsdfg.  Vfgv fafjhd sdfvs sfv bgs avgb afvas fgf.</div>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${fd4})`}}>
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