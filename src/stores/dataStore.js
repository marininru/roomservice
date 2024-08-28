class DataStore {
  constructor() {
    this.persons = [
      { id: 1, name: 'Иванова' },
      { id: 2, name: 'Петрова' },
      { id: 3, name: 'Сидорова' },
      { id: 4, name: 'Кузнецова' },
    ];
    this.rooms = Array(30)
      .fill(0)
      .map((_, i) => ({ id: i + 1, name: `Комната ${i + 1}` }));

    this.data = {};
  }
}

const dataStore = new DataStore();

export default dataStore;
