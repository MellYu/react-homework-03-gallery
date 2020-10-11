import React, { Component } from "react";
import ModalWindow from "./Modal";

class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener("keydown", this.closeModal);
  };

  closeModal = (e) => {
    if (e.target.nodeName !== "IMG" || e.key === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  componentWillUnmount(){
    window.removeEventListener("keydown", this.closeModal);
  }

  render() {
    const { isModalOpen } = this.state;
    const { alt, src, largeImageURL } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.openModal}>
        <img src={src} alt={alt} className="ImageGalleryItem-image" />
        {isModalOpen ? (
          <ModalWindow
            closeModal={this.closeModal}
            src={largeImageURL}
            alt={alt}
          />
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default GalleryItem;
