import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    color: #D40F0F;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 72px;
    letter-spacing: 0.065em;
`;

export default function Title() {
    return (
        <Logo>
            FANETTEFLIX
        </Logo>
    )
}
