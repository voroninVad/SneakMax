import ReactDOM from "react-dom";
import './index.css'
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Props ={
    children: ReactNode
    closeModal: () => void
}
const Modal:FC<Props> = ({children,closeModal}) => {
    const root = document.getElementById('portal__root')
    if(!root) return <div className="">error</div>

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            closeModal();
        }
    };

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <motion.div className="modal-content"
        
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
                {children}
            </motion.div>
        </div>,
        root
    );
}
 
export default Modal;