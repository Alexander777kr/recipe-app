import { Link, useParams } from 'react-router-dom';

export default function Ingredients() {
  const { id } = useParams();
  return (
    <div className="recipe-info-container">
      <div className="recipe-info-header">
        <h3>INGREDIENTS</h3>
        <Link to={`/recipe/${id}/instructions`} className="recipe-info-link">
          Instructions
        </Link>
      </div>
      {/* {instructions.map(({ display_text, position }) => (
        <div className="recipe-info-content-container" key={position}>
          <p className="recipe-step">{position}</p>
          <p className="recipe-text">{display_text}</p>
        </div>
      ))} */}
    </div>
  );
}
