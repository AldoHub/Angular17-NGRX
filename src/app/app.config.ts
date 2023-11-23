import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { PostsEffects } from './store/effects';

//reducers
import { reducers } from "./store/reducers";

//inside the provideStore give the state and reducers - no need for ngModule
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore({posts: reducers}), provideEffects(PostsEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
