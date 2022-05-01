import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log('Render component');
    //destructuring props
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monsters) => {
          const { name, id, email } = monsters;
          return (
            <div className="card-container">
              <img
                alt={`monster${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              ></img>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
