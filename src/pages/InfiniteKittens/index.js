import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin } from 'antd';
import { FrownOutlined } from '@ant-design/icons';

import { GalleryContainer, ErrorMessage } from './Styles';
import Image from './Image';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function InfiniteKittens() {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=kitten&client_id=${accessKey}&per_page=15`
      );
      const data = await response.json();
      setTotalPage(data.total_pages);
      setData((prev) => [...prev, ...data.results]);
    } catch {
      setError(true);
    }
  };

  if (!accessKey) {
    return (
      <a
        href="https://unsplash.com/oauth/applications"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '1.2rem' }}
      >
        You need to provide Unsplash access key to run this app
      </a>
    );
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={!error ? () => setPage((prev) => prev + 1) : undefined}
      hasMore={page < totalPage}
      loader={
        error ? undefined : (
          <Spin style={{ width: '100%', margin: '2.5rem 0' }} />
        )
      }
    >
      <GalleryContainer>
        {data.map(({ id, alt_description, urls }) => (
          <Image key={id} src={urls.regular} alt={alt_description} />
        ))}
      </GalleryContainer>
      {error && (
        <ErrorMessage>
          <FrownOutlined />
          <p>Error! Something went wrong</p>
        </ErrorMessage>
      )}
    </InfiniteScroll>
  );
}

export default InfiniteKittens;
