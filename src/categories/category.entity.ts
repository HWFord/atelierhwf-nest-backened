import { Subcategory } from 'src/subcategories/subcategory.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;
  
  @Column({ length: 100 })
  img: string;

  @OneToMany(
    type=>Subcategory,
    subcategory => subcategory.category,
    {
      cascade: true,
      nullable: false,
    }
    )
  subcategory:Subcategory[];
}