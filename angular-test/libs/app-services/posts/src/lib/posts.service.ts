import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestClient} from '@angular-test/angular-test/core';
import {PostModel} from '@angular-test/app-models/posts';
import {ListResponseModel} from '@angular-test/app-models/common';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private static readonly POSTS_BASE_URL = '/posts';

  constructor(private restClient: RestClient) {
  }

  listPosts(): Observable<ListResponseModel<PostModel>> {
    return this.restClient.sendGetListRequest<PostModel>(PostsService.POSTS_BASE_URL, PostModel);
  }

  getPostById(id: string): Observable<PostModel> {
    return this.restClient.sendGetRequest<PostModel>(`${PostsService.POSTS_BASE_URL}/${id}`, PostModel);
  }

  savePost(payload: PostModel): Observable<any> {
    return this.restClient.sendPostRequest<PostModel>(PostsService.POSTS_BASE_URL, payload, PostModel);
  }

  /**
   * TODO: (mmhajiagha) should implement this
   */
  savePicture() {
  }
}
