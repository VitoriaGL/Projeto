    import styled from "styled-components";

    export const Card = styled.div`
    width: 300px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    overflow: hidden;
    transition: transform 0.3s ease;
    &:hover { transform: translateY(-5px); }
    `;

    export const ImageContainer = styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    &:hover img { transform: scale(1.1); }
    `;

    export const Info = styled.div`
    padding: 20px;
    h3 { margin: 0 0 15px; font-size: 18px; color: #333; }
    p { font-size: 14px; color: #666; height: 40px; overflow: hidden; }
    span { font-weight: bold; color: #e74c3c; }
    `;

    export const ButtonComprar = styled.button`
    width: calc(100% - 30px);
    margin: 10px 15px 15px;
    padding: 10px 0;
    border: none;
    border-radius: 8px;
    background: #27ae60;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover { background: #219150; }
    `;

    /* Modal */
    export const ModalOverlay = styled.div`
    position: fixed;
    top:0; left:0; right:0; bottom:0;
    background: rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 1000;
    `;

    export const ModalContent = styled.div`
    background:#fff;
    border-radius:12px;
    padding:20px;
    width:90%;
    max-width:500px;
    position:relative;
    text-align:center;
    h2 { margin-top:10px; color:#333; }
    p { color:#666; margin:10px 0; }
    span { color:#e74c3c; font-weight:bold; font-size:18px; }
    `;

    export const ModalImage = styled.img`
    width:100%;
    border-radius:12px;
    object-fit:cover;
    transition: transform 0.3s ease;
    &:hover { transform: scale(1.1); }
    `;

    export const CloseButton = styled.button`
    position:absolute;
    top:10px;
    right:10px;
    background:none;
    border:none;
    font-size:24px;
    cursor:pointer;
    `;
