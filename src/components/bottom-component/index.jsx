import React from 'react';
import './styles.css';
import icon1 from '../bottom-component/arcticons_device-info-pro.png';
import icon2 from '../bottom-component/arcticons_invest.png';
import icon3 from '../bottom-component/arcticons_blogger.png';
import icon4 from '../bottom-component/arcticons_office-reader.png';
import ill from '../bottom-component/illustration 2 1.png';
import mall from '../bottom-component/illustration 3 2.png';
import hall from '../bottom-component/Group 352 1.png';
function Landingpage() {
    return (
        <div className='container'>
            <div className="icons">
                <div className='i1'>
                    <img src={icon1} alt="" />
                    <p > Company</p>
                </div>
                <div className='i2'>
                    <img src={icon2} alt="" />
                    <p>Invest</p>
                </div>
                <div className='i3'>
                    <img src={icon3} alt="" />
                    <p>Blog</p>
                </div>
                <div className='i4'>
                    <img src={icon4} alt="" />
                    <p>Career</p>
                </div>
            </div>
            <div className="contain">
                <div className='middle'>
                    <p className='par1'>Sustaining Agriculture</p>
                    <p className='par2'>Field Monitoring, Cost Reduction,And Yield Enhancement</p>
                    <p className='par3'>We Create A Difference At Feedapp By Integrating Space Technology<br /> With Human Desire To Ensure Earth s Sustainability.Our Primary Focus is<br />
                        Precision Farming As A Shared Approach For Saving Time And<br />
                        Resources,Reducing Costs And Losses,Making A Profit And Having An<br />
                        Effect,And Keeping Up with The Speed Of Change. You will Always Be<br />
                        One Step Ahead If You Use Our Agricultural Solutions.</p>
                    <button className='why'>Why Feedapp?</button>
                </div>
                <div className='pi'>
                    <img src={ill} alt="" />
                </div>
            </div>
            <div className='cont'>
                <div className='im'>
                    <img src={mall} alt="" />
                </div>
                <div className='down'>
                    <p className='pa1'>Feedapp Products</p>
                    <p className='pa2'>Feedapp Offers High-Quality Food Sourced From<br />Rwandan Farmers.</p>
                    <p className='pa3'>Throughout All Agriculture Operations We Do With Rwandan <br />
                        Farmers,We Collect Their Output And Sell It in The Market,And We <br />
                        Provide Some Of The Poceeds To Others Who Do Not Have Enough<br />
                        Money To Begin Farming.</p>
                    <button className='explo'>Explore Our Products</button>
                </div>
            </div>
            <div className='las'>
                <p className='pa4'>Our Featured Articles</p>
            </div>
            <div className='con'>
                <div className='ima'>
                    <img src={hall} alt="" />
                </div>
                <div className='base'>
                    <p className='p1'>Access To Our Dashboard</p>
                    <p className='p2'>Integer Nibh Eget Pellentesque Urna Proin.<br />
                        Ultricies Ut Aliquam Sogittis Elementum Dui.<br />
                        Pretium Consectetur Vestibulum Elementum<br />
                        Felis.Cursus Eleilfend Et,Et Vitae..</p>
                    <button className='log'>Log In</button>
                </div>
            </div>
        </div>


    )

}

export default Landingpage;

