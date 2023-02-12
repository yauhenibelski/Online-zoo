class Animal {
  constructor(name, location, num, eating) {
    this.name = name;
    this.location = location;
    this.num = `pets_${num}.png`;
    this.eating = eating === 'meat' ? 'meet-fish_icon.svg'
      : 'banana-bamboo_icon.svg';
  }
}
const animals = [
  new Animal(
    'giant Pandas',
    'Native to Southwest China',
    1,
    'banana',
  ),
  new Animal(
    'Eagles',
    'Native to South America',
    2,
    'meat',
  ),
  new Animal(
    'Gorillas',
    'Native to Congo',
    3,
    'banana',
  ),
  new Animal(
    'Two-toed Sloth',
    'Mesoamerica, South America',
    4,
    'banana',
  ),
  new Animal(
    'cheetahs',
    'Native to Africa',
    5,
    'meat',
  ),
  new Animal(
    'Penguins',
    'Native to Antarctica',
    6,
    'meat',
  ),
  new Animal(
    'Alligators',
    'Native to Southeastern U. S.',
    7,
    'meat',
  ),
];

export { animals };
