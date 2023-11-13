
import { GalleryIitem, Image } from "./ImageGalleryItem.styled";
import {useEffect, useState } from "react";
import Modal from 'react-modal';
    
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};
Modal.setAppElement('#root');



export const ImageGalleryItem = ({ image }) => {
    

    const [isModalOpen, setIsModalOpen] = useState(false); 
   

    
   const  openModal = () => {
    setIsModalOpen(true);
    };


    const closeModal = () => {
     setIsModalOpen(false);
    }
   




    useEffect(() => {
        const hendalKeyDown = (event) => {
            if (event.code === 'Escape' && isModalOpen) {
                closeModal();
            }
        }
        window.addEventListener('keydown', hendalKeyDown);
        return () => {
            window.addEventListener('keydown', hendalKeyDown);
        }
    }, [isModalOpen])
  
        return (
            <GalleryIitem className="GalleryItem">
                <Image src={image.webformatURL} alt="" onClick={openModal} />
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Large Image Modal"
                >
                    <Image src={image.webformatURL} alt="description" />
                    
                </Modal>
            </GalleryIitem>
        );
  

}






// useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts])

// useEffect(() => {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//         setContacts(JSON.parse(savedContacts));
//     }
// }, []);





// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     },
// };
// Modal.setAppElement('#root');

// export class ImageGalleryItem extends Component {

//     state = {
//         isModalOpen: false,
//     }
//     componentDidMount() {
//         window.addEventListener('keydown', this.hendalKeyDown)
//     }

//     componentWillUnmount() {
//         window.addEventListener('keydown', this.hendalKeyDown)
//     }
//     openModal = () => {
//         this.setState({ isModalOpen: true });
//     };

//     closeModal = () => {
//         this.setState({ isModalOpen: false })
//     }
//     hendalKeyDown = (event) => {
//         if (event.code === 'Escape' && this.state.isModalOpen) {
//             this.closeModal();
//         }
//     }

//     render() {
//         const { isModalOpen } = this.state
//         const { image } = this.props

//         return (
//             <GalleryIitem className="GalleryItem">
//                 <Image src={image.webformatURL} alt="" onClick={this.openModal} />
//                 <Modal
//                     isOpen={isModalOpen}
//                     onRequestClose={this.closeModal}
//                     style={customStyles}
//                     contentLabel="Large Image Modal"
//                 >
//                     <Image src={image.webformatURL} alt="description" />

//                 </Modal>
//             </GalleryIitem>
//         );
//     }

// }
