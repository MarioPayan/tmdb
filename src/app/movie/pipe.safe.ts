import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})

/**Pipe que permite acceder a enlaces que el navegador
    determina como inseguros*/
export class PipeSafe implements PipeTransform {
    constructor( private sanitizer: DomSanitizer){}
    
    transform(url){
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}