import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {createStructuredSelector} from 'reselect';

import {OptionLink,OptionsContainer,LogoContainer,HeaderContainer} from "./header.styles";
import {selectCartHidden} from '../../redux/cart/cart.selectors.js';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser,hidden,signOutStart}) =>(
	<HeaderContainer>
		<LogoContainer to='/' >
			<Logo className='logo'/>
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop' >
				SHOP
			</OptionLink>
			<OptionLink to='/shop'>
				CONTACT
			</OptionLink>
			{
				currentUser?
				(<OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>)
				:
				(<OptionLink to='/signin'> SIGN IN </OptionLink>)
			}
			<CartIcon/>
		</OptionsContainer>
		{
			hidden? null : <CartDropdown/>
		}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden : selectCartHidden

})

const mapDispatchToProps = (dispatch) => ({
	signOutStart : () => dispatch(signOutStart()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);