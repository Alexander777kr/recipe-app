import Card from './Card';

const recipes = [
  {
    id: 1,
    name: 'Poke Bawls',
    image:
      'https://i.pinimg.com/originals/6c/2d/d0/6c2dd09bd32f40afa3d1e3a7da43e2e3.jpg',
    tag: 'Romantic dinner',
    numberOfMinutes: 50,
  },
  {
    id: 2,
    name: 'Chocolate banana cake',
    image:
      'https://mig.pics/uploads/posts/2023-05/1684582798_mykaleidoscope-ru-p-tort-shokolad-banan-instagram-15.jpg',
    tag: 'Sweet Tooth',
    numberOfMinutes: 150,
  },
  {
    id: 3,
    name: 'Shawarma',
    image: 'https://cafehabibi.ru/d/shaurma-svininoj.jpg',
    tag: 'Chicken',
    numberOfMinutes: 50,
  },
  {
    id: 4,
    name: 'Kanafeh',
    image:
      'https://mur-mur.top/uploads/posts/2023-05/1683110669_mur-mur-top-p-turetskaya-sladost-s-sirom-pinterest-1.jpg',
    tag: 'Romantic dinner',
    numberOfMinutes: 30,
  },
];

export default function CardList() {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
