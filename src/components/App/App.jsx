import { Component } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

import { fetchImages } from 'components/Api';
import { Layout } from './App.styled'


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };

  componentDidMount() {
  console.log('I mounted!')
}

  componentDidUpdate(prevProps, prevState) {
    console.log('I updated!')
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.searchImages();
    }
  }

  searchImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ loading: true, error: false });
      const response = await fetchImages(query, page);
      this.setState((prevState) => ({
        images: [...prevState.images, ...response.hits],
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: true, loading: false });
      console.error('Something went wrong:', error);
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleSearch = (query) => {
    this.setState({ query: query, page: 1, images: [] });
  };


  



  render() {
    const { loading, error, images } = this.state;
    const showLoadMoreButton = images.length > 0;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} openModal={this.openModal} />
        <Loader loading={loading} error={error} />
        {showLoadMoreButton && <Button onClick={this.handleLoadMore} />}
        </Layout>
    );
  }
}

export default App;
