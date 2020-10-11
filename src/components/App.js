import React, { Component } from "react";
import "./../styles.css";
import getImagesFromApi from "./api/ImagesAPI.js";
import Searchbar from "./Searchbar.js";
import GalleryList from "./ImageGallery.js";
import ButtonLoadMore from "./ButtonLoadMore.js";
import LoaderReact from "./Loader.js";

class App extends Component {
  state = {
    gallery: [],
    currentPage: 0,
    searchQuery: "",
    loading: false,
    error: null,
    isModalOpen: false,
  };

  searchImagesHandler = (searchQuery) => {
    this.setState({ searchQuery, currentPage: 1, gallery: [] });
  };

  loadHandler = () => {
    const { searchQuery, currentPage } = this.state;

    return getImagesFromApi(searchQuery, currentPage)
      .then((response) => {
        return this.setState((prev) => ({
          gallery: [...prev.gallery, ...response],
          currentPage: prev.currentPage + 1,
        }));
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchQuery, currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    if (prevState.searchQuery !== searchQuery) {
      this.loadHandler();
    }
  }

  render() {
    const { gallery, loading } = this.state;
    return (
      <>
        <Searchbar onSearch={this.searchImagesHandler} />
        {loading && <LoaderReact />}
        {gallery.length > 0 && <GalleryList gallery={gallery} />}
        {gallery.length > 0 && <ButtonLoadMore clickFunc={this.loadHandler} />}
      </>
    );
  }
}

export default App;
