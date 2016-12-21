import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let opps = [
      {id: 11, title: 'clean up', description: 'desc clean up'},
      {id: 12, title: 'clean up 2', description: '2 desc clean up'},
      {id: 13, title: 'clean up 3', description: '3 desc clean up'},
    ];
    return {opps};
  }
}
