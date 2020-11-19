import { Container } from "inversify";
import { TYPES } from "./types";
import { IRolService } from '../interfaces/rol.service'; 
import { RolService } from '../services/rol.service'; 
import { IAdministradorService } from '../interfaces/administrador.service';
import { AdministradorService } from '../services/administrador.service'
import { ICredencialesService } from '../interfaces/creadenciales.service';
import { CredencialesService } from "../services/credenciales.service";
import { IGrupoOcupacionalService } from '../interfaces/grupo-ocupacional.service';
import { GrupoOcupacionalService } from "../services/grupo-ocupacional.service";
import { IOcupacionService } from '../interfaces/ocupacion.service';
import { ProfesionService } from "../services/ocupacion.service";
import { ISolicitanteService } from '../interfaces/solicitante.service';
import { SolicitanteService } from "../services/solicitante.service";
import { IEmpleadorService } from '../interfaces/empleador.service';
import { EmpleadorService } from "../services/empleador.service"; 
import { CurriculumService } from "../services/curriculum.service";
import { ICurriculumService } from '../interfaces/curriculum.service';
import { IReferenciaService } from '../interfaces/referencias.service';
import { ReferenciaService } from "../services/referencia.service";
import { IIdiomaService } from '../interfaces/idioma.service';
import { IdiomaService } from "../services/idioma.service";
import { ICurriculumIdiomaService } from '../interfaces/curriculum-idioma.service';
import { CurriculumIdiomaService } from "../services/curriculum-idioma.service";
import { INivelIdiomaService } from '../interfaces/nivel-idioma.service';
import { NivelIdiomaService } from "../services/nivel-idioma.service";
import { IEstadoCivilService } from '../interfaces/estado-civil.service';
import { EstadoCivilService } from "../services/estado-civil.service";
import { IImagenService } from '../interfaces/imagen.service';
import { ImagenService } from "../services/imagen.service";
import { IHabilidadService } from '../interfaces/habilidad.service';
import { HabilidadService } from "../services/habilidad.service";
import { CurriculumHabilidadService } from "../services/curriculum-habilidad.service";
import { ICurriculumHabilidadService } from '../interfaces/curriculum-habilidad.service';
import { IExperienciaService } from '../interfaces/experiencia.service';
import { ExperienciaService } from "../services/experiencia.service";
import { INivelEstudioService } from '../interfaces/nivel-estudio.service';
import { NivelEstudioService } from "../services/nivel-estudio.service";
import { GradoEscolarService } from "../services/grado-escolar.service";
import { IGradoEscolarService } from '../interfaces/grado-escolar.service';
import { EstudioBasicoService } from "../services/estudio-basico.service";
import { IEstudioBasicoService } from '../interfaces/estudio-basico.service';
import { IEstudioAvanzadoService } from '../interfaces/estudio-avanzado.service';
import { EstudioAvanzadoService } from "../services/estudio-avanzado.service";
import { IEmpresaService } from '../interfaces/empresa.service';
import { EmpresaService } from "../services/empresa.service";
import { ITipoContratoService } from '../interfaces/tipo-contrato.service';
import { TipoContratoService } from "../services/tipo-contrato.service";
import { IRangoSueldoService } from '../interfaces/rango-sueldo.service';
import { RangoSueldoService } from "../services/rango-sueldo.service";
import { IVacanteService } from '../interfaces/vacante.service';
import { VacanteService } from "../services/vacante.service";
import { IHorarioService } from '../interfaces/horario.service';
import { HorarioService } from "../services/horario.service";
import { IPostulacionService } from '../interfaces/postulacion.service';
import { PostulacionService } from "../services/postulacion.service";
import { IContratacionService } from '../interfaces/contratacion.service';
import { ContratacionService } from "../services/contratacion.service";
import { PaisService } from "../services/pais.service";
import { IPaisService } from '../interfaces/pais.service';
import { EstadoService } from "../services/estado.service";
import { IEstadoService } from '../interfaces/estado.service';
import { CiudadService } from "../services/ciudad.service";
import { ICiudadService } from '../interfaces/ciudad.service';
import { IOcupacionSolicitanteService } from '../interfaces/ocupacion-solicitante.service';
import { OcupacionSolicitanteService } from "../services/ocupacion-solicitante.service";
import { INotificacionEmpleadorService } from '../interfaces/notificacion-empleador.service';
import { NotificacionEmpleadorService } from "../services/notificacion-empleador.service";
import { INotificacionSolicitanteService } from '../interfaces/notificacion-solicitante.service';
import { NotificacionSolicitanteService } from "../services/notificacion-solicitante.service";

const myContainer = new Container();

myContainer.bind<IRolService>(TYPES.IRolService).to(RolService);
myContainer.bind<IAdministradorService>(TYPES.IAdministradorService).to(AdministradorService); 
myContainer.bind<ICredencialesService>(TYPES.ICredencialesService).to(CredencialesService);
myContainer.bind<IGrupoOcupacionalService>(TYPES.IGrupoOcupacionalService).to(GrupoOcupacionalService);
myContainer.bind<IOcupacionService>(TYPES.IOcupacionService).to(ProfesionService);  
myContainer.bind<ISolicitanteService>(TYPES.ISolicitanteService).to(SolicitanteService);  
myContainer.bind<IEmpleadorService>(TYPES.IEmpleadorService).to(EmpleadorService); 
myContainer.bind<ICurriculumService>(TYPES.ICurriculumService).to(CurriculumService);
myContainer.bind<IReferenciaService>(TYPES.IReferenciaService).to(ReferenciaService);
myContainer.bind<IIdiomaService>(TYPES.IIdiomaService).to(IdiomaService);
myContainer.bind<ICurriculumIdiomaService>(TYPES.ICurriculumIdiomaService).to(CurriculumIdiomaService);
myContainer.bind<INivelIdiomaService>(TYPES.INivelIdiomaService).to(NivelIdiomaService);
myContainer.bind<IEstadoCivilService>(TYPES.IEstadoCivilService).to(EstadoCivilService);
myContainer.bind<IImagenService>(TYPES.IImagenService).to(ImagenService);
myContainer.bind<IHabilidadService>(TYPES.IHabilidadService).to(HabilidadService);
myContainer.bind<ICurriculumHabilidadService>(TYPES.ICurriculumHabilidadService).to(CurriculumHabilidadService);
myContainer.bind<IExperienciaService>(TYPES.IExperienciaService).to(ExperienciaService);
myContainer.bind<INivelEstudioService>(TYPES.INivelEstudioService).to(NivelEstudioService);
myContainer.bind<IGradoEscolarService>(TYPES.IGradoEscolarService).to(GradoEscolarService);
myContainer.bind<IEstudioBasicoService>(TYPES.IEstudioBasicoService).to(EstudioBasicoService);
myContainer.bind<IEstudioAvanzadoService>(TYPES.IEstudioAvanzadoService).to(EstudioAvanzadoService);
myContainer.bind<IEmpresaService>(TYPES.IEmpresaService).to(EmpresaService);
myContainer.bind<ITipoContratoService>(TYPES.ITipoContratoService).to(TipoContratoService);
myContainer.bind<IRangoSueldoService>(TYPES.IRangoSueldoService).to(RangoSueldoService);
myContainer.bind<IVacanteService>(TYPES.IVacanteService).to(VacanteService);
myContainer.bind<IHorarioService>(TYPES.IHorarioService).to(HorarioService);
myContainer.bind<IPostulacionService>(TYPES.IPostulacionService).to(PostulacionService);
myContainer.bind<IContratacionService>(TYPES.IContratacionService).to(ContratacionService);
myContainer.bind<IPaisService>(TYPES.IPaisService).to(PaisService);
myContainer.bind<IEstadoService>(TYPES.IEstadoService).to(EstadoService);
myContainer.bind<ICiudadService>(TYPES.ICiudadService).to(CiudadService);
myContainer.bind<IOcupacionSolicitanteService>(TYPES.IOcupacionSolicitanteService).to(OcupacionSolicitanteService);
myContainer.bind<INotificacionEmpleadorService>(TYPES.INotificacionEmpleadorService).to(NotificacionEmpleadorService);
myContainer.bind<INotificacionSolicitanteService>(TYPES.INotificacionSolicitanteService).to(NotificacionSolicitanteService);


export { myContainer };     