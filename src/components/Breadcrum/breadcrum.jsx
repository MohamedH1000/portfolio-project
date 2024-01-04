import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import './breadcurm.css'
import { Link } from 'react-router-dom';

// create a breadcrum for each product in the site to see the route
const BreadCrum = (props) => {
  return (
    <div className='breadcrum-style'>
        <Link to='/eg-ar' style={{textDecoration:'none'}}><span className='breadcrum-span'>Main</span></Link> <FaLongArrowAltRight style={{paddingTop:'5px', margin:'0 5px', scale:'1.1'}}/> <Link to={`/eg-ar/${props.product.category}`} style={{textDecoration:'none'}}><span className='breadcrum-span'>{props.product.category}</span></Link> <FaLongArrowAltRight style={{paddingTop:'5px', margin:'0 5px', scale:'1.1'}}/> {props.product.name} 
    </div>
  )
}

export default BreadCrum