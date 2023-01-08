import "./card-list.css";
import Card from "../card/card";

const cardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default cardList;
