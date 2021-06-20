import React from 'react' //use rfce
import './Header.css';
import {Link} from "react-router-dom";
import FindAStore from './FindAStore';
import {Example} from './Example';
import {useSelector} from "react-redux";
import {selectUser} from './feature/userSlice'


function Header({menuPage}) {
    const user = useSelector(selectUser)

    return ( <div className='header'>
           <div classNam='header__left'>
            <Link className="header__logo" to="/">
                  <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' 
                  alt=""/>
            </Link>
            <Link to='/menu' className="header__link">Menu</Link>
        
            <Link  className="header__link"> Rewards</Link>
            
            <Link  className="header__link">Gift Cards</Link>
            
           </div>
           <div className="header__right">
               <Example />
               <FindAStore/>
               {!user ? (
                   <>
                   <Link to='/account/signin'>
                   
                        <SingInButton/>
                   </Link>
                   <Link to='/account/create'>
                   
                        <SingUpButton/>
                   </Link>

                  
                   </>
               ) : (
                  <div className = "header__logout">
                    
                  </div>
               )}
           </div> 

        </div>
    );
}
export default Header;
