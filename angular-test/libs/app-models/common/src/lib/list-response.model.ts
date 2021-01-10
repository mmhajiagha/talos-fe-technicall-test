import {Any, JsonObject, JsonProperty} from 'json2typescript';
import {PaginationModel} from './pagination.model';

@JsonObject('ListResponseModel')
export class ListResponseModel<T> {
  constructor(pagination?: PaginationModel, items?: T[]) {
    this.pagination = pagination;
    this.items = items;
  }

  @JsonProperty('pagination', PaginationModel)
  pagination: PaginationModel = new PaginationModel();

  @JsonProperty('items', [Any])
  items: T[] = [];
}
