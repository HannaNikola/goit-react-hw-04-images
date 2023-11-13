import { useEffect, useState } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

import { fetchImages } from 'components/Api';
import { Layout } from './App.styled'


export const App = () => {
 
  
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 
  useEffect(() => {
    const searchImages = async () => {
    try {

      setLoading(true);
      setError(false);

      const response = await fetchImages(query, page);
      setImages((prevState) => [...prevState, ...response.hits]);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setError(true);
      console.error('Something went wrong:', error);
    }
    };

    if (query !== '' || page !== 1) {
         searchImages();
       }
  }, [query, page]);
  





 const  handleLoadMore = () => {
   setPage((prevPage) => prevPage + 1);
  };

 const  handleSearch = (newQuery) => {
   
   setQuery(newQuery);
   setPage(1);
   setImages([])
  };


  
    const showLoadMoreButton = images.length > 0;

    return (
      <Layout>
        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={images} />
        <Loader loading={loading} error={error} />
        {showLoadMoreButton && <Button onClick={handleLoadMore} />}
        </Layout>
    );
 
}

export default App;


