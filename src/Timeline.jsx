import React from 'react';

function Timeline () {
    return (
<div className="feed">
  <div className="feed__header">
    <h2>Home</h2>
  </div>
  <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGx_C-h-GZkXDqm0cWzOlXuccDI_SzJzcj7VkSKYdWDU9fpuyaCq66JIr23V4QNQjaq8&usqp=CAU"
          alt=""
        />
        <input type="text" placeholder="What's happening ?" />
      </div>
      <button className="tweetBox__tweetButtton">Tweet</button>
      
      <div className="icon__twitter">
      <span className="material-symbols-outlined">gif</span>
      <span className="material-symbols-outlined">Image</span>
      <span className="material-symbols-outlined">Mood</span>
      </div>
    </form>
  </div>
  <div className="post">
    <div className="post__avatar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGx_C-h-GZkXDqm0cWzOlXuccDI_SzJzcj7VkSKYdWDU9fpuyaCq66JIr23V4QNQjaq8&usqp=CAU"
        alt=""
      />
    </div>
    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Ruben Lubasa
            <span className="post__headerSpecial">
              <span className="material-symbols-outlined post__badge">
                {" "}
                verified{" "}
              </span>
              @rubenlubasa
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>
            Bonjour à tous, je m'appel ruben Lubasa. Je suis inegnieur
            developpeur web.
          </p>
        </div>
      </div>
      <img
        src="https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/webassembly-t.jpg"
        alt=""
      />
      <div className="post__footer">
        <span className="material-symbols-outlined"> repeat </span>
        <span className="material-symbols-outlined"> favorite_border</span>
        <span className="material-symbols-outlined"> publish </span>
      </div>
    </div>
  </div>
</div>
);
}
export default Timeline;