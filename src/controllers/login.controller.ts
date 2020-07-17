import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, httpPut } from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from "../../config/types";
import { ICredencialesService } from '../interfaces/creadenciales.service';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IAdministradorService } from '../interfaces/administrador.service';
import { SEED } from '../../config/config';
import validarCampos from '../middlewares/administrador/validar-campos';

import { body } from 'express-validator';
 
@controller("/login")    
export class LoginController implements interfaces.Controller {    
 
    constructor( @inject(TYPES.ICredencialesService) private credencialesService: ICredencialesService,
                 @inject(TYPES.IAdministradorService) private adminService: IAdministradorService) {}
 

    @httpPost("/",
            body('email', 'El email es obligatorio').isEmail(),
            body('password', 'El password es Obligatorio').not().isEmpty(),
            validarCampos
        )    
    private async login(@request() req: express.Request, @response() res: express.Response) {
        
        
        try {
            const credenciales = await this.credencialesService.buscarCredenciales(req.body.email);
            if (!credenciales){
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Credenciales incorrectas - email',
                });
            }
            if( !bcrypt.compareSync(req.body.password,credenciales.password)){
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Credenciales incorrectas - password'
                });
            }  
            credenciales.password = 'xd';
            let token = jwt.sign({ usuario: credenciales }, SEED, {expiresIn: 14400 }); // expira 4horas

            if(credenciales.rol.nombre === 'ROLE_ADMINISTRADOR') {
                    console.log(credenciales);
                    const admin = await this.adminService.buscarPorCredencial(credenciales.id);
                    return res.status(200).json({
                        ok: true,
                        administrador: admin,
                        credenciales: credenciales,
                        token
                    });
                
            }
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar usuario',
                errors: err
            });
        }
    } 
 
  
}