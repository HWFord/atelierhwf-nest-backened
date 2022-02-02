import { Subcategory } from 'src/subcategories/subcategory.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 100 })
  materiels: string;

  @Column({ length: 100 })
  tags: string;

  @Column({ length: 100 })
  img: string;

  @Column({ length: 50 })
  reference: string;

  @Column({ length: 25 })
  color: string;

  @Column({ length: 50 })
  size: string;

  @Column()
  personnalisable: boolean;

  @Column()
  sId: number;

  @ManyToOne(
    type=>Subcategory,
    subcategory => subcategory.product,
    {
      cascade:['insert', 'update'],
      nullable: false,
    }
  )
  subcategory:Subcategory;

  @ManyToMany(() => User)
  @JoinTable()
  users:User[];

}