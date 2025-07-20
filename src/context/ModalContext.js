import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState("");
    const [author, setAuthor] = useState("Lecodeur");


    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
    };

    const closeModal = () => {
        setModalTitle("");
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalContent, modalTitle, author, setAuthor}}>
        {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);