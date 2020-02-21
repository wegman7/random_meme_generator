import React from 'react';

function Header(props) {
    return(
      <header>
        <div className="center">
          <form className="row">
            <input type="text" name="top_text" onChange={props.handleChange} />
            <input type="text" name="bottom_text" onChange={props.handleChange} />
          </form>
          <button className="input-and-button" onClick={props.handleClick}>Generate!</button>
        </div>
        <div className="image">
          <img src={props.meme_url} width="500" height="500" alt=''/>
          <h1 className="inside-text-top">{props.top_text}</h1>
          <h1 className="inside-text-bottom">{props.bottom_text}</h1>
        </div>
      </header>
    );
  }

export default Header;