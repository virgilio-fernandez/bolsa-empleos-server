import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('roles')
export class Rol {
   
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', length: 50,unique: true})
    nombre: string;   

}
