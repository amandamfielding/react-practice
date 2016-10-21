import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedTab: 0};
  }

  updateSelectedTab(selectedTab) {
    this.setState({selectedTab});
  }

  render() {
    let {tabs} = this.props;
    let {selectedTab} = this.state;

    return (
      <div className="widget col-1-2">
        <div className="col-1 cf">
          <h2>Tabs</h2>
          <ul className="tab-list cf">
            {
              tabs.map( (tab, i) => (
                <li onClick={this.updateSelectedTab.bind(this, i)}
                    key={tab.title}>
                    <h1>{tab.title}</h1>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-1">
          <article className="tab-content">
            {tabs[selectedTab].content}
          </article>
        </div>

      </div>
    );
  }
}

export default Tabs;
