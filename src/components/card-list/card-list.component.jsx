import './card-list.styles.css';
import '../card/card-component';
import Card from '../card/card-component';

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster}></Card>;
      })}
    </div>
  );
}

/*class CardList extends Component {
  render() {
    console.log('Render component');
    //destructuring props
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            //migrar isso para um componente card
            <Card monster={monster}></Card>
          );
        })}
      </div>
    );
  }
}

export default CardList;*/
