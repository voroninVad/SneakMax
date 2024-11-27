import ReactDOM from "react-dom";
import './index.css'
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Props ={
    children: ReactNode
}
//закинь потом стили motion для плавного появления модалки
const Modal:FC<Props> = ({children}) => {
    const root = document.getElementById('portal__root')
    if(!root) return <div className="">error</div>
    return ReactDOM.createPortal(
        <div className="modal-overlay">
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