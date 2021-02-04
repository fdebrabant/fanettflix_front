import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

const Logo = styled.div`
    color: #D40F0F;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 72px;
    letter-spacing: 0.065em;
    cursor: pointer;
`;
const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export default function Title() {
    const history = useHistory();

    function handleClick() {
        history.push("/");
    };

    return (
        <Header>
            <Logo onClick={handleClick}>
                FANETTEFLIX
            </Logo>
            <Menu/>
        </Header>
    )
}
