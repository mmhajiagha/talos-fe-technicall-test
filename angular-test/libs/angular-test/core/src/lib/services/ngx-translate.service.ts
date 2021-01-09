import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Injectable()
export class NgxTranslateService {
  private readonly defaultLang: string = 'en';

  constructor(private translate: TranslateService) {

  }

  setup() {
    this.translate.addLangs(['en', 'de']);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|de/) ? browserLang : this.defaultLang);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  getTranslateByKey(translateKey: string, params: any): Observable<any> {
    return this.translate.get(translateKey, params);
  }
}
