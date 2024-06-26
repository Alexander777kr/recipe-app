import { Outlet } from 'react-router-dom';

export default function RecipeInfo({ instructions, image }) {
  return (
    <div className="recipe-info">
      <Outlet />
      <img className="recipe-img" src={image} alt="" />
    </div>
  );
}
