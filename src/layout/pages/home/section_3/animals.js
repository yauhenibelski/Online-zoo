class Animal {
  constructor(name, location, eating) {
    this.name = name;
    this.location = location;
    this.eating = eating === 'meat' ? 'meet-fish_icon.svg' : 'banana-bamboo_icon.svg';
  }
}
const animals = [
  new Animal(
    'giant Pandas',
    'Native to Southwest China',
    'banana',
  ),
  new Animal(
    'Eagles',
    'Native to South America',
    'meat',
  ),
  new Animal(
    'Gorillas',
    'Native to Congo',
    'banana',
  ),
  new Animal(
    'Two-toed Sloth',
    'Mesoamerica, South America',
    'banana',
  ),
  new Animal(
    'cheetahs',
    'Native to Africa',
    'meat',
  ),
  new Animal(
    'Penguins',
    'Native to Antarctica',
    'meat',
  ),
  new Animal(
    'Alligators',
    'Native to Southeastern U. S.',
    'meat',
  ),
];

export { animals };
