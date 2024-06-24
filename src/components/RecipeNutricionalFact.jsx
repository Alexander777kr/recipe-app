export default function RecipeNutricionalFact({ fact, children }) {
  return (
    <div className="recipe-fact-container">
      <img src="" alt="" />
      {children}
      <h3>{fact.amount}</h3>
      <p>{fact.category}</p>
    </div>
  );
}
