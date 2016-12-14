export class TmdbHelper {
  
  baseUrlSrc = "http://image.tmdb.org/t/p/w300";
  
  constructor() { }
  
  getUrlSrc(src: string): string {
    return `${this.baseUrlSrc}${src}`;
  }

}
