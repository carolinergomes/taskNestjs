// import { DataSource } from 'typeorm';

// import { Task } from './tasks/entity/create.task';
// import { User } from './users/entities/user.entity';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'admin',
//         database: '',
//         // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         entities: [Task, User],
//         synchronize: true,
//         logging: true,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];
