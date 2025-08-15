    import styled from 'styled-components';
    import { Link } from 'react-router-dom';

    export const Card = styled.article`
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
    `;

    export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    `;

    export const Title = styled.h3`
    padding: 0 16px;
    margin: 12px 0 8px;
    font-size: 1.2rem;
    `;

    export const Description = styled.p`
    padding: 0 16px;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 12px;
    `;

    export const Button = styled(Link)`
    display: block;
    text-align: center;
    padding: 10px;
    margin: 16px;
    background: #e66767;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
        background: #d45a5a;
    }
    `;