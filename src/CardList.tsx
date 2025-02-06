import React from 'react';
import './cardList.css';
import { Planet } from './App';

interface CardListProps {
  actualUrl: string;
  searchTerm: string;
}

class CardList extends React.Component<CardListProps> {
  buildUrl = () =>
    this.props.searchTerm
      ? `${this.props.actualUrl}&search=${this.props.searchTerm}`
      : this.props.actualUrl;

  requestData(): Planet[] {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.buildUrl(), false);
    // We need to use sync requests because ErrorBoundary does not catch error in async code.

    let planets = Array<Planet>();
    let isError = false;
    xhr.onload = function () {
      if (xhr.status != 200) {
        isError = true;
      } else {
        planets = JSON.parse(xhr.response).results;
      }
    };

    xhr.onerror = function () {
      throw 'Request failed.';
    };

    xhr.send();

    if (isError) {
      throw `Response code ${xhr.status}`;
    }

    return planets;
  }

  render() {
    const planets = this.requestData();
    // We need to request data here becasue ErrorBoundary does not catch error in event handlers.
    return (
      <table>
        <tbody>
          <tr>
            <th className="w textStart">Name</th>
            <th className="textStart">Description</th>
          </tr>
          {planets.map((item, index) => (
            <tr key={index} className="w textStart">
              <td>{item.name}</td>
              <td>{`diameter: ${item.diameter}, climate: ${item.climate}, population: ${item.population}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

function areEqual(prevProps: CardListProps, nextProps: CardListProps): boolean {
  return (
    prevProps.actualUrl == nextProps.actualUrl &&
    prevProps.searchTerm == nextProps.searchTerm
  );
}

export default React.memo(CardList, areEqual);
