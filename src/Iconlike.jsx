import React, { useState } from 'react';

function Iconlike() {g
  const [favoriteCount, setFavoriteCount] = useState(0);

  const incrementFavoriteCount = () => {
    setFavoriteCount(favoriteCount + 1);
  };

  return (
    <div className="feed">
      {/* ... le reste de mon code ... */}
      <div className="post__footer">
        <span className="material-symbols-outlined" style={{ color: 'red' }}> repeat </span>
        <span className="material-symbols-outlined" style={{ color: 'red' }} onClick={incrementFavoriteCount}> favorite_border</span>
        <span className="material-symbols-outlined" style={{ color: 'red' }}> publish </span>
        <span>{favoriteCount}</span>
      </div>
      {/* ... le reste de mon code ... */}
    </div>
  );
}

export default Iconlike;