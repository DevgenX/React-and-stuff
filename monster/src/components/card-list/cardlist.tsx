import "./card-list.css";
import Card from "../card/card";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const cardList = ({ monsters }: CardListProps) => {
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
