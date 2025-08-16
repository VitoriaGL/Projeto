    import React from "react";
    import { ModalOverlay, ModalContent, ModalImage, CloseButton } from "../ProductCard/styles";

    interface ModalProps {
    imagem: string;
    nome: string;
    descricao: string;
    preco: number;
    onClose: () => void;
    }

    const Modal: React.FC<ModalProps> = ({ imagem, nome, descricao, preco, onClose }) => {
    return (
        <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onClose}>×</CloseButton>
            <ModalImage src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>R$ {preco.toFixed(2)}</span>
        </ModalContent>
        </ModalOverlay>
    );
    };

    export default Modal;
