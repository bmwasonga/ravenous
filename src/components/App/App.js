import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/Searchbar';
import React from 'react';

//business list
const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};

//businesses array
const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`you are looking up ${term}, ${location} and ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
