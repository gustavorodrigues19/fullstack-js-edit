import "./styles.css";
import { CardComponent } from "../../components/CardComponent";
import { useState } from "react";

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

function FormExercise() {
  const initialValues = {
    name: "",
    email: "",
    notes: "",
  };
  const [formFields, setFormFields] = useState(initialValues);

  const handleChangeField = (event, key) => {
    const value = event.target.value;
    setFormFields({
      ...formFields,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const msg = `
      name:${formFields.name}
      email:${formFields.email}
      notes:${formFields.notes}
    `;
    alert(msg);
    setFormFields(initialValues);
  };

  return (
    <>
      <h1>02. Contact form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={formFields.name}
              onChange={(e) => handleChangeField(e, "name")}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={formFields.email}
              onChange={(e) => handleChangeField(e, "email")}
            />
          </div>
          <div>
            <label>Assunto:</label>
            <input
              type="text"
              value={formFields.notes}
              onChange={(e) => handleChangeField(e, "notes")}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default function ExercisesPage() {
  return (
    <div>
      <CardExercise />
      <FormExercise />
    </div>
  );
}
