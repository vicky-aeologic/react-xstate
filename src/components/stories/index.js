import React from 'react';

function Stories({ stories, sendToMachine }) {
  const selectStory = (e, story) => {
    e.preventDefault();
    sendToMachine('SELECT_STORY', { story });
  };

  return (
    <div className="">
      {stories.map(story => (
        <div key={story.id}>
          <a href="#" onClick={e => selectStory(e, story)}>
            {story.title}
          </a>
          <br />
          <small style={{color: "blue", fontStyle: "italic"}}>User Name: {story.by}</small>
        </div>
      ))}
    </div>
  );
}

export default Stories;
