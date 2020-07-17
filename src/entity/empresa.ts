import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Empleador } from './empleador';
import { Ciudad } from './ciudad';


@Entity('empresas')
export class Empresa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 45})
    nombre: string;
    
    @Column({type: 'varchar', length: 100})
    dominio_web: string;

    @Column({type: 'varchar', length: 45})
    direccion: string; 
    
    @Column({type: 'varchar', length: 50})
    telefono: string;

    @Column({type: 'varchar', length: 255})
    descripcion: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    logo: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    creado_en: Date;
  
    @JoinColumn({name:'empleadores_id'}) 
    @OneToOne(type => Empleador, empleador => empleador.id, {nullable: false, eager: true})  
    empleador: Empleador;

    @JoinColumn({name:'ciudades_id'}) 
    @ManyToOne(type => Ciudad, ciudad => ciudad.id, {nullable: false, eager: true})  
    ciudad: Ciudad;
 
}