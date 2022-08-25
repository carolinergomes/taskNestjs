import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  password:string;
  @Column()
  confirmPassword: string
  @Column()
  createAt: Date
  @Column()
  updateAt: Date
  @Column()
  authCode: String
  
}
