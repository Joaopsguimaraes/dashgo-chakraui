import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      //gerar dados em massa pelo mirage
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`; //o name de factory retorna um index;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase(); //utilizando o faker para criar email ficticio em lowerCase;
        },
        createdAt() {
          return faker.date.recent(10, new Date()); //utilizando o faker para criar uma data para o usuario que seja 10 dias recentes a partir da data de hoje;
        }
      })
    },
    seeds(server) {
      server.createList('user', 10); //utilizando o seeds para criar 200 usuarios baseado no user do factory;
    },

    routes() {
      this.namespace == 'api'; //utilizando o namespace das rotas 'https://localhost:3000/api/';
      this.timing = 750; //toda chamada utilizada do mirage com delay de 750ms;

      this.get('/users'); //utilizando shorthands do miragejs para ler arquivos do banco de dados
      this.post('/users'); //utilizando shorthands do miragejs para inserir arquivos no banco de dados

      this.namespace = ''; //definindo o namespace como '' para quando terminar de utiliza-las para nao prejudicar as rotas do next;
      this.passthrough(); //todas chamadas que sejam enviadas por chamada api nao seja executada ele passa para as proximas;
    }
  });
  return server;
}
