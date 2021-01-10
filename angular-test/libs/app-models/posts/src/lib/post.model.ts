import {JsonObject, JsonProperty} from 'json2typescript';
import {ImageConverter} from '@angular-test/app-models/common';

@JsonObject('PostModel')
export class PostModel {

  @JsonProperty('id', String)
  id = '';

  @JsonProperty('title', String)
  title = '';

  @JsonProperty('description', String, true)
  description = '';

  @JsonProperty('photoUrl', ImageConverter, true)
  image = '';

  @JsonProperty('tags', [String], true)
  tags = '';
}
