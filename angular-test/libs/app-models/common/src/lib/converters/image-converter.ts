import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {environment} from '../../../../../../apps/angular-test/src/environments/environment';

@JsonConverter
export class ImageConverter implements JsonCustomConvert<String> {
  serialize(url: string): string {
    return url;
  }

  deserialize(url: string): String {
    return `${environment.apiUrl}/${url}`;
  }
}
