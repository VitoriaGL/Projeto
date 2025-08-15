    import styled from "styled-components";

    export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: #b6b0b0;

    .logo-container {
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        width: 180px;
    }

    .logo {
        width: 100%;
        height: auto;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
    }

    .header-image-container {
        width: 100%;
        height: 100vh;
        max-height: 300px;
        overflow: hidden;
        position: relative;
    }

    .header-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slogan {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        width: 80%;
        max-width: 800px;
        z-index: 2;
        padding: 15px;
        background-color: rgba(0,0,0,0.4);
        border-radius: 8px;

        p {
        margin: 0;
        
        }
    }

    @media (max-width: 768px) {
        .logo-container {
        width: 120px;
        top: 20px;
        }

        .slogan {
        font-size: 1.2rem;
        bottom: 20px;
        width: 90%;
        }

        .header-image-container {
        max-height: 400px;
        }
    }

    @media (max-width: 480px) {
        .logo-container {
        width: 100px;
        }

        .slogan {
        font-size: 1rem;
        padding: 10px;
        }
    }
    `;