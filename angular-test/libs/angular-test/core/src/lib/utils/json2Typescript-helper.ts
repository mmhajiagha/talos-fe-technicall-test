import {JsonConvert, ValueCheckingMode} from 'json2typescript';
import {ListResponseModel, PaginationModel} from '@angular-test/app-models/common';

export class Json2TypescriptHelper {
  constructor() {
  }

  static convertToEntity<T>(data: any, entityType: new() => T): T {
    if (data) {
      const jsonConvert: JsonConvert = new JsonConvert();
      jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
      return jsonConvert.deserializeObject(data, entityType) as T;
    }
    return data;
  }


  static convertToEntities<T>(data: any, entityType: new() => T, pageSize: number = 50): ListResponseModel<T> {
    const entities = [];
    const pagination: PaginationModel = new PaginationModel(1, pageSize, data.length);
    const jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
    data.map(v => entities.push(jsonConvert.deserialize(v, entityType)));
    return new ListResponseModel<T>(pagination, entities);
  }
}
