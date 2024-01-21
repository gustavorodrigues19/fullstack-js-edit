import "./styles.css";
import { CardComponent } from "../../components/CardComponent";

const cardWithImagesList = [
  {
    id: 1,
    title: "Card 1",
    description: "Card 1 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Card 2 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Card 3 description",
    image: "https://picsum.photos/200/300",
  },
];

export const CardExercise = () => (
  <>
    <h1>01. Card</h1>
    <div className="exercises-card-list">
      {cardWithImagesList.map((item) => (
        <CardComponent
          image={item.image}
          title={item.title}
          description={item.description}
          key={`card-${item.id}`}
        />
      ))}
    </div>
  </>
);

export default function ExercisesPage() {
  return (
    <div>
      <CardExercise />
      <h1>02. Contact form</h1>
      <div>
        <form>
          <div>
            <label>Nome:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" />
          </div>
          <div>
            <label>Assunto:</label>
            <input type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
