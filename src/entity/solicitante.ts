import { Usuario } from './usuario';
import { Entity, Column, JoinColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { EstadoCivil } from './estado-civil';
import { Ciudad } from './ciudad';
import { Profesion } from './profesion';
import { Curriculum } from './curriculum';
import { Postulacion } from './postulacion';



@Entity('solicitantes')
export class Solicitante extends Usuario { 
    @Column({type: 'varchar', length: 20})
    nacionalidad: string;

    @Column({type: 'varchar', length: 45})
    direccion: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    creado_en: Date;

    @Column()
    ocupado: boolean;

    @JoinColumn({name:'estado_civil_id'})
    @ManyToOne(type => EstadoCivil, estado => estado.id, {nullable: false, eager: true})  
    estado_civil: EstadoCivil

    @JoinColumn({name:'ciudades_id'})
    @ManyToOne(type => Ciudad, ciudad => ciudad.id, {nullable: false, eager: true})  
    ciudad: Ciudad

    @JoinColumn({name:'profesiones_id'})
    @ManyToOne(type => Profesion, profesion => profesion.id, {nullable: false, eager: true})  
    profesion: Profesion

    @OneToOne(type => Curriculum, curriculum => curriculum.solicitante) // specify inverse side as a second parameter
    curriculum: Curriculum;

    @OneToMany(type => Postulacion, postulacion => postulacion.solicitante)
    postulaciones: Postulacion[];

}