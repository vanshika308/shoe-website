
import './Modal.css';
import React from "react";
import ReactDOM  from "react-dom";

const BackDrop=props=>{
    return(<div className='backDrop'></div>)
}

const ModalOverlay = props =>{
    return (
        <div className='modal'>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement =document.getElementById('overlays');
 const Modal=props=>{
    return(<React.Fragment>
        {ReactDOM.createPortal(<BackDrop/>,portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </React.Fragment>)
 }

 export default Modal;