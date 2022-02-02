import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Product } from "src/products/product.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    length: 50,
    nullable: false, 
    unique: true 
   })
  username: string;

  @Column({ 
    length: 100,
    nullable: false, 
    unique: true  
  })
  password: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);  
  }

  @Column({ 
    length: 50,
    nullable: false, 
    unique: true 
   })
  email: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products:Product[];

}