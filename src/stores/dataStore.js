class DataStore {
  constructor() {
    this.persons = [
      { id: 1, name: 'Мягкова' },
      { id: 2, name: 'Яровицина' },
      { id: 3, name: 'Родина' },
      { id: 4, name: 'Маркова' },
      { id: 5, name: 'Щербакова' },
      { id: 6, name: 'Джабраилова' },
      { id: 7, name: 'Юсупова' },
      { id: 8, name: 'Муратова' },
      { id: 9, name: 'Малу' },
      { id: 10, name: 'Мейханаджян' },
    ];
    this.rooms = Array(25)
      .fill(0)
      .map((_, i) => ({ id: i + 1, name: `Комната ${i + 1}` }));

    this.days = Array(31)
      .fill(0)
      .map((_, i) => i + 1);

    this.data = {};
  }
}

const dataStore = new DataStore();

export default dataStore;
