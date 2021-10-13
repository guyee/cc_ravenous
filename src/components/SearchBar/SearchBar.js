import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

export default class searchBar extends React.Component {
  render(){
    return (<div class="SearchBar">
    <div className="SearchBar-sort-options">
      <ul>
        {this.renderSortByOptions}
      </ul>
    </div>
    <div className="SearchBar-fields">
      <input placeholder="Search Businesses" />
      <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
      <a>Let's Go</a>
    </div>
  </div>);
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOption;
      return <li key={sortByOptionValue}>{sortByOption}</li>
    })
  }
}