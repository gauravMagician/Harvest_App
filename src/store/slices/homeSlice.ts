import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { ApiResponse } from "../../types/authTypes";
import { Comment, HomeFeedItem, homeService } from "../../services/homeService";
import axios from "axios";
import { BASE_URL } from "../../services/apiEndpoints";


interface HomeState {
  feeds: HomeFeedItem[];
  loading: boolean;
  error: string | null;
  createPostLoading: boolean;
  createPostError: string | null;
  comments: Record<string, Comment[]>; // Keyed by postId
  commentsLoading: boolean;
  commentsError: string | null;
  postCommentLoading: boolean;
  postCommentError: string | null;
  replyLoading: boolean;
  replyError: string | null;
  likeLoading: boolean;
  likeError: string | null;
  selectedPostForEarnings: HomeFeedItem | null;
}

const initialState: HomeState = {
  feeds: [],
  loading: false,
  error: null,
  createPostLoading: false,
  createPostError: null,
  comments: {},
  commentsLoading: false,
  commentsError: null,
  postCommentLoading: false,
  postCommentError: null,
  replyLoading: false,
  replyError: null,
  likeLoading: false,
  likeError: null,
  selectedPostForEarnings: null,
};

export const fetchHomeFeed = createAsyncThunk(
  "home/fetchHomeFeed",
  async (_, { rejectWithValue }) => {
    try {
      const response: ApiResponse<HomeFeedItem[]> =
        await homeService.getHomeFeed();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const createPost = createAsyncThunk(
//   "home/createPost",
//   async (postData: FormData, { rejectWithValue }) => {
//     try {
//       const response: ApiResponse<HomeFeedItem> = await homeService.createPost(
//         postData
//       );
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const createPost = createAsyncThunk<
  any, // or replace with proper response type
  FormData,
  { rejectValue: string }
>(
  "home/createPost",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await homeService.createPost(formData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const fetchComments = createAsyncThunk(
  "home/fetchComments",
  async (postId: string, { rejectWithValue }) => {
    try {
      const response = await homeService.getComments(postId);
      console.log(response, "response.data");

      return { postId, comments: response.data };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const postComment = createAsyncThunk(
  "home/postComment",
  async (payload: PostCommentPayload, { rejectWithValue }) => {
    try {
      const response = await homeService.postComment(payload);
      return { postId: payload.postId, comment: response.data };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const replyToComment = createAsyncThunk(
  "home/replyToComment",
  async (payload: CommentReplyPayload, { rejectWithValue }) => {
    try {
      const response = await homeService.replyToComment(payload);
      return {
        postId: payload.postId,
        commentId: payload.commentId,
        reply: response.data,
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const likePost = createAsyncThunk(
  "home/likePost",
  async (payload: LikePostPayload, { rejectWithValue }) => {
    try {
      await homeService.likePost(payload);
      return { postId: payload.postId };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const unlikePost = createAsyncThunk(
  "home/unlikePost",
  async (payload: LikePostPayload, { rejectWithValue }) => {
    try {
      await homeService.unlikePost(payload);
      return { postId: payload.postId };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    clearHomeError: (state) => {
      state.error = null;
      state.createPostError = null;
      state.commentsError = null;
      state.postCommentError = null;
      state.replyError = null;
      state.likeError = null;
    },
    setSelectedPostForEarnings: (
      state,
      action: PayloadAction<HomeFeedItem | null>
    ) => {
      state.selectedPostForEarnings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeFeed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(fetchHomeFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createPost.pending, (state) => {
        state.createPostLoading = true;
        state.createPostError = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.createPostLoading = false;
        state.feeds.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.createPostLoading = false;
        state.createPostError = action.payload as string;
      })

      .addCase(fetchComments.pending, (state) => {
        state.commentsLoading = true;
        state.commentsError = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsLoading = false;
        state.comments[action.payload.postId] = action.payload.comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.commentsLoading = false;
        state.commentsError = action.payload as string;
      })

      .addCase(postComment.pending, (state) => {
        state.postCommentLoading = true;
        state.postCommentError = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.postCommentLoading = false;
        const { postId, comment } = action.payload;

        if (!state.comments[postId]) {
          state.comments[postId] = [];
        }
        state.comments[postId].push(comment);

        const post = state.feeds.find((feed) => feed._id === postId);
        if (post) {
          post.commentsCount += 1;
        }
      })
      .addCase(postComment.rejected, (state, action) => {
        state.postCommentLoading = false;
        state.postCommentError = action.payload as string;
      })

      .addCase(replyToComment.pending, (state) => {
        state.replyLoading = true;
        state.replyError = null;
      })
      .addCase(replyToComment.fulfilled, (state, action) => {
        state.replyLoading = false;
        const { postId, commentId, reply } = action.payload;

        if (state.comments[postId]) {
          const comment = state.comments[postId].find(
            (c) => c._id === commentId
          );
          if (comment) {
            if (!comment.replies) {
              comment.replies = [];
            }
            comment.replies.push(reply);
          }
        }
      })
      .addCase(replyToComment.rejected, (state, action) => {
        state.replyLoading = false;
        state.replyError = action.payload as string;
      })

      .addCase(likePost.pending, (state) => {
        state.likeLoading = true;
        state.likeError = null;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.likeLoading = false;
        const post = state.feeds.find(
          (feed) => feed._id === action.payload.postId
        );
        if (post) {
          post.likesCount += 1;
        }
      })
      .addCase(likePost.rejected, (state, action) => {
        state.likeLoading = false;
        state.likeError = action.payload as string;
      })

      .addCase(unlikePost.fulfilled, (state, action) => {
        const post = state.feeds.find(
          (feed) => feed._id === action.payload.postId
        );
        if (post && post.likesCount > 0) {
          post.likesCount -= 1;
        }
      });
  },
});

export const { clearHomeError, setSelectedPostForEarnings } = homeSlice.actions;
export default homeSlice.reducer;
