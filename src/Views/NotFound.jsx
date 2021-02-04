import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
    color: #D40F0F;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 72px;
    letter-spacing: 0.065em;
    text-align:center;
`;

export default function NotFound() {
    return (
        <Message>
            Not Found
        </Message>
    )
}
