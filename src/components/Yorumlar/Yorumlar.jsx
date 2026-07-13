import React from 'react';
import './Yorumlar.css';
import Yorum from './Yorum';

const Yorumlar = (props) => {
  const { yorumlar } = props;

  return (
    <div>
      {yorumlar.map((yorum) => (
        <Yorum key={yorum.id} yorum={yorum} />
      ))}
    </div>
  );
};

export default Yorumlar;
