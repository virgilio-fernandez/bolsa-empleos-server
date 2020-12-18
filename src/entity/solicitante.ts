import { Usuario } from './usuario';
import { Entity, Column, JoinColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { EstadoCivil } from './estado-civil';
import { Ciudad } from './ciudad';
import { Ocupacion } from './ocupacion';
import { OcupacionSolicitante } from './ocupacion-solicitante';



@Entity('solicitantes')
export class Solicitante extends Usuario { 
    @Column({type: 'varchar', length: 20})
    nacionalidad: string;

    @Column({ type: "date"})
    fecha_nac: Date;

    @Column()
    ocupado: boolean;

    @JoinColumn({name:'estado_civil_id'})
    @ManyToOne(type => EstadoCivil, estado => estado.id, {nullable: false, eager: true})  
    estado_civil: EstadoCivil

 /*   @OneToMany(type => OcupacionSolicitante, ocupacion_solicitante => ocupacion_solicitante.ocupacion)  
    ocupaciones: Ocupacion[];
*/
    // fecha de naciemiento aumentar

 /*   @OneToOne(type => Curriculum, curriculum => curriculum.solicitante) // specify inverse side as a second parameter
    curriculum: Curriculum;

    @OneToMany(type => Postulacion, postulacion => postulacion.solicitante)
    postulaciones: Postulacion[];
*/
    @OneToMany(type => OcupacionSolicitante, ocupacion => ocupacion.solicitante, {eager: true})
    ocupaciones: OcupacionSolicitante[];
}