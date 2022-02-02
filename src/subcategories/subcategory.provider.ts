import { Subcategory } from 'src/subcategories/subcategory.entity';
import { Connection} from 'typeorm';

export const subcategoryProviders = [
  {
    provide: 'SUBCATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Subcategory),
    inject: ['DATABASE_CONNECTION'],
  },
];