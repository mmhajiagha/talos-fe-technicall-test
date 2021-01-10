import {FormControl, FormGroup, Validators} from '@angular/forms';

export const POSTS_ADD_FORM = {
  create: () => {
    return new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      tags: new FormControl(''),
      image: new FormControl('')
    });
  },
  getPayload: (formData) => {
    const payload = {...formData};
    payload.photoUrl = formData.image;
    delete formData.image;
    return {
      ...payload,
    };
  }
};
