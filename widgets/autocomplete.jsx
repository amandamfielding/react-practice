import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", filteredNames: this.props.names};
  }

  filterNames(e) {
    let search = e.currentTarget.value;


    let filteredNames = this.props.names.filter(name => {
      name = name.toLowerCase();
      return name.indexOf(search) === 0;
    });

    this.setState({search, filteredNames});
  }

  render() {
    return (
      <div className="widget col-1-2">
        <h2>AutoComplete</h2>
        <input type="text"
               value={this.state.search}
               onChange={this.filterNames.bind(this)} />
        <ul>
          {
            this.state.filteredNames.map((name, i) => (
              <li key={i}>{name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
