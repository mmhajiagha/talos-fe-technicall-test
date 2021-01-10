import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('PageableModel')
export class PaginationModel {
  constructor(page: number = 1, size: number = 25, totalResults: number = 0) {
    this.page = page;
    this.size = size;
    this.totalResults = totalResults;
  }

  @JsonProperty('page', Number)
  page = 1;

  @JsonProperty('size', Number)
  size = 25;

  @JsonProperty('totalResults', Number)
  totalResults = 0;
}
