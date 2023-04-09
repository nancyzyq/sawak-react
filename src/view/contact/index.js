import React,{Component} from 'react';
import { Carousel } from '../../components/Carousel';
import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Carousel/>
                <div className="container">
                    <div className='row'>
                        <div className=" col-sm-12 col-lg-6 col-xl-6 contactBox">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.835375887069!2d147.27517141598935!3d-42.83409114529102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e74a407ae88e1%3A0x2b0d4b8fa77c107!2sSawak%20Noodles!5e0!3m2!1sen!2sau!4v1594346551198!5m2!1sen!2sau" width="100%" height="100%" frameBorder="0"  tabIndex="0"></iframe>
                        </div>
                        <div className=" col-sm-12 col-lg-6 col-xl-6 contactBox">
                            <div className="contactBoxContent">
                                <div className='mb-1'>
                                    <i className="fa fa-phone mx-1"></i>
                                    <span><strong>(03) 62729138</strong></span>
                                </div>
                                <div className='mb-1'>
                                    <i className="fa fa-map-marker mx-1" ></i>
                                    <span><strong>8 Cooper St, Glenorchy TAS 7010</strong></span>
                                </div>
                                <div className='mb-1'>
                                    <i className="fa fa-clock-o mx-1" ></i>
                                    <span><strong>Opening Hours</strong></span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    <span>Monday 10am – 8:30pm</span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    {/* <div style={{width: '48px', height: '24px', float: 'left'}}></div> */}
                                    <span>Tuesday 10am – 8:30pm</span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    {/* <div style={{width: '48px', height: '24px', float: 'left'}}></div> */}
                                    <span>Wednesday 10am–8:30pm</span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    {/* <div style={{width: '48px', height: '24px', float: 'left'}}></div> */}
                                    <span>Thursday 10am – 8:30pm</span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    {/* <div style={{width: '48px', height: '24px', float: 'left'}}></div> */}
                                    <span>Friday 10am – 8:30pm</span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    {/* <div style={{width: '48px', height: '24px', float: 'left'}}></div> */}
                                    <span>Saturday 11am – 7pm</span>
                                </div>
                                <div className='mb-1'>
                                    {/* <i className="fa fa-clock-o" ></i> */}
                                    {/* <div style={{width: '48px', height: '24px', float: 'left'}}></div> */}
                                    <span>Sunday/public holiday Closed</span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact