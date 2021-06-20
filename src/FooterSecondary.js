import React from 'react';
import "./FooterSecondary.css";
import FindAStore from './FindAStore';
import { Link } from 'react-router-dom';

function FooterSecondary({alignItems, paddingLeft, flexDirection}) {
    return (

    <div className="footerSecondary" style={{alignItems, paddingLeft: 
        `${paddingLeft * 2}px`}}>
            
         <div className="footerSecondary__container" 
         style={{paddingLeft: `${paddingLeft}`}}> 
         
         <div className="footerSecondary__info">
            <div className="footerSecondary__left">
                <FindAStore/>
            </div>
            <div className="footerSecondary__right" style={{flexDirection}}>
                <Link>Responsibility</Link>
                <Link>Web Accessibility</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms of Use </Link>
                <Link>Cookie Preferences</Link>
            </div>
         </div>
         <span className="footerSecondary__copyright"> 2021 Starbucks inc</span>
      </div>
    </div>
    );
}

export default FooterSecondary
