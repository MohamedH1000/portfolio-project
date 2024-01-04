import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import './mainPage.css';
import '../ImageSlider/ImageSlider.css';
import {Link} from 'react-router-dom'

// the main page design of the website
const PopularMainPage = () => {
  const images = [
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/Bv42cabMOQRFNqfmkbNJD7MbXzfztdwS30Sp4loI.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/xW2eBVcHDnFsfVWqIE9dmxiIgkiqtNCpVWcy3suh.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/RNMszmMxLauDIkSKBVaqp9nk7WsJMJLzvQfcFEBo.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/huYROlcLo0CL0l4dd9f2023UluIzjEVCecoiCIpq.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/aj9EXgnRh41UWJbhlzk6NlKdQsCDDSnoEpuzU60R.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/ESJt8zamJi3lNQCxazYQpXVZHhWcTnzKpjZ05bAI.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/shglNg2HYVomrygMm6VgblifcorO1EjE4i2VN9aB.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/WBAv9EOcXPPCltYpRUymCBLwPUga5rARDpZN8zga.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/322IpRyA1nrYpl6MRBiCW6hfLOPF3qL5xWrG4beP.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/zPItNdf8mFkkTvoJdSHUkEcB5qdWgjs6sQPvHYwB.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/Vl1uoMcwozsXa0zYo9KpsPxcqi7Xh21rbAiitlNM.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/EaKFOOYhoy8PS0VIsGPqEZE29wsaGHvwTR7TTinH.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/fTHLiW7l4296VO3Ghk37BDhbpFv5Fss2dbl5d9K7.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/csbUJ2rl6ITixEPSM5CbmJwKKayKhTbkqdjJ8o3K.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/1qNem9XUEtKdyLVzCQdfP2EPyYVMucIeV5yQ0nIt.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/ms0SRQUxoGSqlE4wysjmjj2W0dd0PDKl9vt1bLU4.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/APZdwCoFhVZFIAqMcP6JlyDGeqZdqDNgC1HVYX0O.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/sjzdefBtk1AX97Sn6qLAFVNU3ILYVOHx5cGaI1Nw.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/rsL5s0apcnho5ZBWfrAGORP7JAv9JhKcLxdam9F3.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/IxUzcjCy2bpLDSzdjwzcnuRuOX8n5g2dNq15U6Rq.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/TKJFvReZLsPPc5fAoWVQVyYFRoaOtmdnUZY8XRmn.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/yz02MttU2xkNAl4y7Dx3iSB9jakmtRFmwTMvn02x.png',
    'https://cdn.chefaa.com/filters:format(webp)/public/uploads/sliders/dDoOIAOmvUaDWUyf6r9LOiDX13yZ7cmtW2JD6AGZ.png',
  ];
  
  return (
    <>
      <div className="flex-center">
        <div className="image-slider">
            <ImageSlider images={images}/>
            <div className="two-imgs">
              <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/add/I0BWvhRJ14PERVebAt6PuF4W4dj9EZFtCmsEFkGq.png" alt=""></img>
            </div>
            <div className="two-imgs">
              <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/add/15qTOJ1BQziVS2zxSWvssgSXXBPmLqISBEXPk8iH.png" alt=""></img>
            </div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div className="categories">
          <div style={{textAlign:'left', width:'90%'}}>
            <h1 style={{fontSize:'35px', fontWeight:'bold', margin:'40px', color:'var(--text-color)'}}>Categories</h1>
          </div>
          <div className="image-cat-container">
            <Link to='/eg-ar/medication' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/02439_1677741943.png" alt=""></img>
                <p>medications</p>
              </div>
            </Link>
            <Link to='/eg-ar/hair-care' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Group-2439-3_1677741968.png" alt=""></img>
                <p>Hair Care</p>
              </div>
            </Link>
            <Link to='/eg-ar/skin-care' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Group-2439_1677741984.png" alt=""></img>
                <p>Skin Care</p>
              </div>
            </Link>
            <Link to='/eg-ar/daily-essentials' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Daily-Essential-Waffar-_1690384280.png" alt=""></img>
                <p>Daily Essentials</p>
              </div>
            </Link>
            <Link to='/eg-ar/mom-and-baby' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Group-2439-2_1677742026.png" alt=""></img>
                <p>Mon and Baby</p>
              </div>
            </Link>
            <Link to='/eg-ar/makeup-and-accessories' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Group-2439-4_1677742046.png" alt=""></img>
                <p>Makeup & Accessories</p>
              </div>
            </Link>
            <Link to='/eg-ar/health-care-devices' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Group-2439-6_1677742066.png" alt=""></img>
                <p>Health Care Devices</p>
              </div>
            </Link>
            <Link to='/eg-ar/vitamins' style={{color:'var(--text-color', textDecoration:'none'}}>
              <div className="image-cat">
                <img src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/categories/Group-2439-1_1677742083.png" alt=""></img>
                <p>Vitamins and Supplements</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMainPage;
