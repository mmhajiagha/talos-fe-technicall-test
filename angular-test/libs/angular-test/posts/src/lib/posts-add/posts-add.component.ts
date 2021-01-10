import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';
import {POSTS_ADD_FORM} from './posts-add.form';

@Component({
  selector: 'talos-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsAddComponent implements OnInit {
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  tags: string[] = ['Lemon'];
  allTags: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  addPostForm: FormGroup = POSTS_ADD_FORM.create();
  tagsCtrl = new FormControl();

  constructor() {
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
      console.log(POSTS_ADD_FORM.getPayload(this.addPostForm.getRawValue()));
    }
  }

}
