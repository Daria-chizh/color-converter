import React from 'react';

import hexToRgb from './hexToRgb';

class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rgbValue: '', error: false };
  }

  handleChange = (evt) => {
    const value = evt.target.value;
    const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;

    if (value.length >= 7) {
      if (hexRegex.test(value)) {
        this.setState({ rgbValue: hexToRgb(value), error: false });
      } else {
        this.setState({ rgbValue: 'red', error: true })
      }
    } else {
      this.setState({ rgbValue: '', error: false })
    }
  };

  render() {
    return (
      <div className="color-container" style={{ backgroundColor: this.state.rgbValue }}>
        <div>
          <input type="text" className="input-field" onChange={this.handleChange} />
        </div>

        <div className="color-rgb-field">
          <span className="color-rgb">
            {this.state.error ? 'Ошибка!' : this.state.rgbValue}
          </span>
        </div>
      </div>
    )
  }
}
export default Converter;
