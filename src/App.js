import React, { PureComponent } from "react";

import "./App.css";
import Modalbox from "./components/Modalbox";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>Порталы: вывод модальных окон</h1>
        <button onClick={this.handleClick}>Показать модальное окно</button>
        {this.state.show && (
          <Modalbox>
            <div className="modal">
              <h2 className="modalHeader">modal window</h2>
              <button onClick={this.handleClick}>Закрыть</button>
              <picture>
                <img
                  src="https://www.pinclipart.com/picdir/big/211-2118619_snowman-images-free-download-snowman-free-png-photo.png"
                  alt="snowman"
                ></img>
              </picture>
            </div>
          </Modalbox>
        )}
      </div>
    );
  }
  handleClick() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }
}

export default App;
