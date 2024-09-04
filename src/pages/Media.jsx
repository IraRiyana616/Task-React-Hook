import React, { useState, useEffect } from 'react';
import { fetchMedia } from '/src/api/mediaApi';
import Footers from '/src/component/Footer';
import Navbar from '/src/component/Navbar';
import Image1 from '/src/assets/images/media1.jpg';
import Image2 from '/src/assets/images/media2.jpg';
import Image3 from '/src/assets/images/media3.jpg';

const Media = () => {
  const [mediaList, setMediaList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMedia = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMedia();
        setMediaList(data);
      } catch (error) {
        console.error('Error loading media:', error);
        setError('Failed to load media.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMedia();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const images = [Image1, Image2, Image3];

  return (
    <div
      className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-700 dark:to-gray-800"
      id="media"
      style={{ marginTop: '85px' }}>
      <Navbar />
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="py-5 text-4xl text-neutralDGrey dark:text-white font-bold mb-4">
          Media
        </h2>
        <p className="text-sm text-neutralGrey dark:text-white mb-8 md:w-3/4 mx-auto ">
          Informasi Seputar PaDi UMKM
        </p>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {isLoading ? (
          <div className="col-span-3 text-center">
            <div className="loader">Loading...</div>
          </div>
        ) : error ? (
          <div className="col-span-3 text-center text-red-500">{error}</div>
        ) : mediaList.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500">
            No media available.
          </div>
        ) : (
          mediaList.slice(0, visibleCount).map((media, index) => (
            <div
              key={media.id}
              className="relative mb-4 transition-transform transform hover:scale-105">
              <div className="w-full h-auto rounded-lg bg-white dark:bg-gray-600 p-4 shadow-lg">
                <img
                  src={images[index % images.length]}
                  alt={`media-${index}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-neutralGrey dark:text-white">
                  {media.title}
                </h3>
                <p className="text-sm text-neutralGrey dark:text-white mt-2">
                  {media.body}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center">
        {visibleCount < mediaList.length ? (
          <button
            onClick={handleLoadMore}
            className="bg-brandPrimary dark:bg-brandPrimary text-white py-2 px-8 transition-all duration-300 rounded hover:bg-brandSecondary dark:hover:bg-neutralDGrey shadow-lg">
            Load More
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-400 text-white py-2 px-8 transition-all duration-300 rounded cursor-not-allowed">
            No More Data
          </button>
        )}
      </div>
      <Footers />
    </div>
  );
};
export default Media;
