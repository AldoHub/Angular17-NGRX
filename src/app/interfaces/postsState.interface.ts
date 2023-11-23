import { Post } from "./Post.interface";

export interface PostsStateInterface {
    isLoading : boolean;
    posts : Post[];
    error : string | null;
}