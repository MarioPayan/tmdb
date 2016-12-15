export class TmdbHelper {
  
  baseUrlSrc = "http://image.tmdb.org/t/p/w300";
  
  constructor() { }
  
  getUrlSrc(src: string): string {
    if(src){
    return `${this.baseUrlSrc}${src}`;
    }else{
      return `assets/images/no-preview.png`;
    }
  }
}
