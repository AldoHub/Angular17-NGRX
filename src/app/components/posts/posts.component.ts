import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as PostsActions from "../../store/actions";

//store
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/Post.interface';
import { isLoadingSelector, postsSelector, errorSelector } from '../../store/selectors';
import { AppStateInterface } from '../../types/appState.interface';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  private readonly store:Store<AppStateInterface> = inject(Store);
  //return the isloading slice of the state
  readonly isLoading$: Observable<any> = this.store.select(isLoadingSelector);
  //posts
  readonly posts$: Observable<any> = this.store.select(postsSelector);
  //error
  readonly error$: Observable<any> = this.store.select(errorSelector);

  //fetch store data
  public fetchStoreData(){
    //this also triggers the effects
    this.store.dispatch(PostsActions.getPosts());
  }


  ngOnInit(): void {
    this.fetchStoreData();
  }

}
