// AoT requires an exported function for factories
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const BASE_TRANSLATE_PATH = './assets/i18n/';

export function TranslateHttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, BASE_TRANSLATE_PATH, '.json');

}
