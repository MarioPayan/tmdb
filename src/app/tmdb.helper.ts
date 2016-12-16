export class TmdbHelper {
  
  baseUrlSrc = "http://image.tmdb.org/t/p/w300";
  
  constructor() { }
  /**Metodo encargado de devolver las url completas para los recursos
   * @param {src:string} Identificador del recurso
   * @return {:string} Url completa del recurso */
  getUrlSrc(src: string): string {
    if(src){
    return `${this.baseUrlSrc}${src}`;
    }else{
      return `assets/images/no-preview.png`;
    }
  }
  /**Metodo encatado de retornar una imagen por defecto cuando el recurso
   * no es encontrado
   * @return {:string} url del recurso */
  getImgNoFound(): string {
    return `assets/images/no-found.png`;
  }
}
