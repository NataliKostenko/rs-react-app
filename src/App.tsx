import { Component } from 'react';
import './App.css';
import Search from './Search';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import Overlay from './Overlay';

const storageId = 'b0a9c80d-0965-4b88-aaca-69df890a1d3b';
const correctUrl = 'http://swapi.dev/api/planets/?format=json';
const wrongUrl = 'http://swapi.dev/api/plonets/?format=json';

export interface Planet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}

interface AppState {
  actualUrl: string;
  searchTerm: string;
  isOverlayEnabled: boolean;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      actualUrl: correctUrl,
      searchTerm: localStorage[storageId] || '',
      isOverlayEnabled: true,
    };
  }

  handleSearchClick = () => {
    const searchTerm = (
      document.getElementById('searchTerm') as HTMLInputElement
    )?.value.trim();
    localStorage[storageId] = searchTerm;
    this.setState({
      ...this.state,
      actualUrl: correctUrl,
      searchTerm,
      isOverlayEnabled: true,
    });
  };

  handleSearchErrorClick = () => {
    this.setState({
      ...this.state,
      actualUrl: wrongUrl,
      isOverlayEnabled: true,
    });
  };

  componentDidUpdate = () => {
    this.setState({
      ...this.state,
      isOverlayEnabled: false,
    });
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isOverlayEnabled: false,
    });
  };

  shouldComponentUpdate = (
    _nextProps: object,
    nextState: AppState
  ): boolean => {
    return (
      this.state.actualUrl != nextState.actualUrl ||
      this.state.searchTerm != nextState.searchTerm ||
      this.state.isOverlayEnabled !== nextState.isOverlayEnabled
    );
  };

  render() {
    return (
      <>
        <div className="container">
          <Search
            searchTerm={this.state.searchTerm}
            handleClick={this.handleSearchClick}
          />
          <ErrorBoundary>
            <CardList
              searchTerm={this.state.searchTerm}
              actualUrl={this.state.actualUrl}
            />
          </ErrorBoundary>
          <button
            className="errorBoundary"
            onClick={this.handleSearchErrorClick}
          >
            Error Button
          </button>
        </div>
        <Overlay isEnabled={this.state.isOverlayEnabled} />
      </>
    );
  }
}

export default App;
