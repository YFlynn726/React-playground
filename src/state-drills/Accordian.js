import React from 'react';

class Accordian extends React.Component {
    static defaultProps = {tabs: []};
    state = {
        currentSectionIndex: 0
      };
    
      
    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
      }
    
      renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.title}
          </button>
        ))
      }
      renderContent() {
        const currentSection = this.props.tabs[this.state.currentSectionIndex]
        return (
          <p className='content'>
            {currentSection.content}
          </p>
        )
      }
    
    render() {
        return (
        <ul>
            <li>
            {this.renderButtons()}
          {this.props.tabs.length && this.renderContent()}
            </li>
          
        </ul>
        )
    }
}

export default Accordian