import { injectable} from "inversify";

import { getRepository, getConnection } from 'typeorm';
import { INotificacionEmpleadorService } from '../interfaces/INotificacionEmpleador.service';
import { NotificacionEmpleador } from '../entity/notificacion-empleador';


@injectable()
class NotificacionEmpleadorService  implements INotificacionEmpleadorService  {

    async listar(id_empleador: number) {
        const notificaciones: NotificacionEmpleador [] = await getRepository(NotificacionEmpleador)
        .createQueryBuilder("notificaciones_empleadores")
        .leftJoinAndSelect("notificaciones_empleadores.solicitante", "solicitante")
        .leftJoinAndSelect("notificaciones_empleadores.vacante", "vacante")
        .leftJoinAndSelect("vacante.empleador", "empleador")
        .leftJoinAndSelect("vacante.requisitos", "requisitos")
        .leftJoinAndSelect("requisitos.ocupacion", "ocupacion")
        .leftJoinAndSelect("notificaciones_empleadores.tipo_notificacion", "tipo_notificacion")
        .where("empleador.id = :id_empleador", {id_empleador: id_empleador})
        .addOrderBy("notificaciones_empleadores.creado_en", "DESC")
        .getMany();
        return notificaciones;
    }
    async contarNoLeidas(id_empleador: number) {
        const total: number = await getRepository(NotificacionEmpleador)
        .createQueryBuilder("notificaciones_empleadores")
        .leftJoinAndSelect("notificaciones_empleadores.vacante", "vacante")
        .leftJoinAndSelect("vacante.empleador", "empleador")
        .where("empleador.id = :id_empleador and notificaciones_empleadores.leido = false", {id_empleador: id_empleador})
        .getCount();  
        return total;
    }

    async leerNotificacion(id_notificacion: number) {
        const notificacion = await getRepository(NotificacionEmpleador)
        .createQueryBuilder()
        .update(NotificacionEmpleador)
        .set({
            leido: true
        })
        .where("id = :id", { id: id_notificacion })
        .execute();
        return notificacion;
    }
    async buscar(id_notificacion: number) {
            let notificacion: NotificacionEmpleador;
            notificacion = await  getRepository(NotificacionEmpleador).findOne(id_notificacion);
            if(notificacion){
              notificacion.solicitante.credenciales.password = "xd";
            }
        return notificacion;
    }
    async eliminar(id_notificacion: number) {
        let respuesta: any;
        const connection = getConnection();
            const queryRunner = connection.createQueryRunner();

            // establish real database connection using our new query runner
            await queryRunner.connect();

            // lets now open a new transaction:
            await queryRunner.startTransaction();
            try {
                // execute some operations on this transaction:
                await getRepository(NotificacionEmpleador)
                .createQueryBuilder()
                .delete()
                .where("id = :id", { id: id_notificacion })
                .execute();
    
                await queryRunner.commitTransaction();

                respuesta = true;
            
            
            } catch (err) {
            
                // since we have errors let's rollback changes we made
                await queryRunner.rollbackTransaction();
                respuesta = err;
            
            } finally {
            
                // you need to release query runner which is manually created:
                await queryRunner.release();
            }

            return respuesta;
    }

    async listarConPaginacion(id_empleador: number, desde: number) {
        const notificaciones: NotificacionEmpleador [] = await getRepository(NotificacionEmpleador)
        .createQueryBuilder("notificaciones_empleadores")
        .leftJoinAndSelect("notificaciones_empleadores.solicitante", "solicitante")
        .leftJoinAndSelect("notificaciones_empleadores.vacante", "vacante")
        .leftJoinAndSelect("vacante.empleador", "empleador")
        .leftJoinAndSelect("vacante.requisitos", "requisitos")
        .leftJoinAndSelect("requisitos.ocupacion", "ocupacion")
        .leftJoinAndSelect("notificaciones_empleadores.tipo_notificacion", "tipo_notificacion")
        .where("empleador.id = :id_empleador", {id_empleador: id_empleador})
        .addOrderBy("notificaciones_empleadores.creado_en", "DESC")
        .skip(desde)  
        .take(5)
        .getMany();
        return notificaciones;
    }

    async contarTodas(id_empleador: number) {
        const notificaciones: number = await getRepository(NotificacionEmpleador)
        .createQueryBuilder("notificaciones_empleadores")
        .leftJoinAndSelect("notificaciones_empleadores.solicitante", "solicitante")
        .leftJoinAndSelect("notificaciones_empleadores.vacante", "vacante")
        .leftJoinAndSelect("vacante.empleador", "empleador")
        .leftJoinAndSelect("vacante.requisitos", "requisitos")
        .leftJoinAndSelect("requisitos.ocupacion", "ocupacion")
        .leftJoinAndSelect("notificaciones_empleadores.tipo_notificacion", "tipo_notificacion")
        .where("empleador.id = :id_empleador", {id_empleador: id_empleador})
        .getCount();
        return notificaciones;
    }
}
  
export { NotificacionEmpleadorService};  