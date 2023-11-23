import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../../interfaces/Post.interface';
import { isLoadingSelector, postsSelector, errorSelector } from '../../store/selectors';
import { AppStateInterface } from '../../types/appState.interface';
import { Store, select } from '@ngrx/store';
import * as PostsActions from "../../store/actions";


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  
  private readonly store:Store<AppStateInterface> = inject(Store);


  public postForm = new FormGroup({
    title: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),
    description: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),  
  });


  public addPost = () => {
    const {title, description} = this.postForm.value;

    const _post: Post = {
      id: Date.now().toString(),
      title: title,
      content: description
    }

    //add post to state
    this.store.dispatch(PostsActions.addPost({post: _post}));
   
    //reset
    this.postForm.reset();

  }

}
