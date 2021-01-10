import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable, Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';
import {POSTS_ADD_FORM} from './posts-add.form';
import {PostModel} from '@angular-test/app-models/posts';
import {PostsService} from '@angular-test/app-services/posts';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsAddComponent implements OnInit, OnDestroy {
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  addPostForm: FormGroup = POSTS_ADD_FORM.create();
  tagsCtrl = new FormControl();
  post: PostModel = new PostModel();
  subscription: Subscription = new Subscription();

  constructor(private postsService: PostsService, private _snackBar: MatSnackBar, private router: Router) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allTags.slice()));
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }
    if (input) {
      input.value = '';
    }

    this.tagsCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  onFileSelected($event) {
    this.addPostForm.controls['image'].setValue($event);
  }

  onSubmitClick() {
    if (this.addPostForm.valid) {
      this.addPostForm.controls['tags'].setValue(this.tags);
      this.subscription.add(this.postsService.savePost(POSTS_ADD_FORM.getPayload(this.addPostForm.getRawValue())).subscribe(res => {
        this._snackBar.open('Post created successfully', 'Close', {duration: 3000});
        this.router.navigateByUrl('/posts/list');
      }));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
