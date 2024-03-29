import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Empleador } from './empleador';
import { Ciudad } from './ciudad';
import { Requisitos } from './requisitos';
import { TipoContrato } from './tipo-contrato';
import { Horario } from './horario';
import { RangoSueldo } from './rango-sueldo';
import { PeriodoPago } from './periodo-pago';
import { TipoJornada } from './tipo-jornada';


@Entity('vacantes')
export class Vacante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100})
    titulo: string;
      
    @JoinColumn({name:'sueldos_id'}) 
    @ManyToOne(type => RangoSueldo, sueldo => sueldo.id, {nullable: false, eager: true})  
    sueldo: RangoSueldo;

    @JoinColumn({name:'periodos_de_pago_id'}) 
    @ManyToOne(type => PeriodoPago, periodo => periodo.id, {nullable: false, eager: true})  
    periodo_pago: PeriodoPago;

    @Column({type: 'varchar', length: 45})
    direccion: string; 
    
    @JoinColumn({name:'horarios_id'}) 
    @ManyToOne(type => Horario, horario => horario.id, {nullable: false, eager: true})  
    horario: Horario;

    @Column()
    num_vacantes: number;

    @Column()
    num_disponibles: number;

/*    @Column({type: 'varchar', length: 255})
    funciones: string;
*/
    @Column({type: 'varchar', length: 255}) 
    descripcion: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    creado_en: Date;

    @Column()
    habilitado: boolean;
  
    @JoinColumn({name:'requisitos_id'}) 
    @OneToOne(type => Requisitos, requisitos => requisitos.id, {nullable: false, eager: true})  
    requisitos: Requisitos;

    @JoinColumn({name:'tipo_contrato_id'}) 
    @ManyToOne(type => TipoContrato, tipo_contrato => tipo_contrato.id, {nullable: false, eager: true})  
    tipo_contrato: TipoContrato;

    @JoinColumn({name:'ciudades_id'}) 
    @ManyToOne(type => Ciudad, ciudad => ciudad.id, {nullable: false, eager: true})  
    ciudad: Ciudad;

    @JoinColumn({name:'empleadores_id'})
    @ManyToOne(type => Empleador, empleador => empleador.id,{nullable:false, eager: true})
    empleador: Empleador;


    @Column()
    num_postulantes_aceptados: number;

    @JoinColumn({name:'tipo_jornada_id'}) 
    @ManyToOne(type => TipoJornada, tipo => tipo.id, {nullable: false, eager: true})  
    tipo_jornada: TipoJornada;
 
}