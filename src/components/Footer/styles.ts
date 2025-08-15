    import styled from "styled-components";

    export const Container = styled.footer`
    background-color: #fff0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    width: 100%;
    box-sizing: border-box;
        `;

    export const Logo = styled.img`
    width: 125px;
    height: auto;
    margin-bottom: 24px;
    `;

    export const SocialLinks = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    `;

    export const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    `;

    export const Text = styled.p`
    font-size: 16px;
    text-align: center;
    color: #e66767;
    max-width: 500px;
    line-height: 1.4;
    `;
