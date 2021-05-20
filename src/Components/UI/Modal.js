import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';


const Backdrop = (props) =>{
      return(
            <div className={styles.backdrop} onClick={props.onClose} />
      );
};

const ModalOverlays = props => {
      return(<div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
      </div>)
}

const Modal = (props) => {
      return(
            // This is how we would be doing if not using the portal
            // <Fragment>
            //       <Backdrop/>
            //       <ModalOverlays>{props.children}</ModalOverlays>
            // </Fragment>
            <Fragment>
                  {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("overlays"))}
                  {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById("overlays"))}
            </Fragment>          
      );
};

export default Modal;   