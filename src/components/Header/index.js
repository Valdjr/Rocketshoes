import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartLength }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>
                        {cartLength === 0
                            ? 'vazio'
                            : cartLength +
                              (cartLength > 1 ? ' itens' : ' item')}
                    </span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartLength: state.cart.length,
}))(Header);
