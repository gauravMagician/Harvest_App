import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { homeService, Comment } from '../../services/homeService';

interface CommentState {
  comments: Record<string, Comment[]>; // Keyed by postId
  commentsLoading: boolean;
  commentsError: string | null;
  postCommentLoading: boolean;
  postCommentError: string | null;
  replyLoading: boolean;
  replyError: string | null;
}

const initialState: CommentState = {
  comments: {},
  commentsLoading: false,
  commentsError: null,
  postCommentLoading: false,
  postCommentError: null,
  replyLoading: false,
  replyError: null,
};

interface PostCommentPayload {
  postId: string;
  text: string;
}

interface CommentReplyPayload {
  postId: string;
  commentId: string;
  text: string;
}

// Thunks
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId: string, { rejectWithValue }) => {
    try {
      const response = await homeService.getComments(postId);
      console.log(">>>>>>>>>>>>>>>>", response.data)
      return { postId, comments: response.data };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  } 
);

export const postComment = createAsyncThunk(
  'comments/postComment',
  async (payload: PostCommentPayload, { rejectWithValue }) => {
    try {
      const response = await homeService.postComment(payload);
      console.log("?????",response);
      
      return { postId: payload.postId, comment: response.newComment };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const replyToComment = createAsyncThunk(
  'comments/replyToComment',
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

// Slice
const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearCommentErrors: (state) => {
      state.commentsError = null;
      state.postCommentError = null;
      state.replyError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.commentsLoading = true;
      });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.commentsLoading = false;
      const { postId, comments } = action.payload;
      state.comments[postId] = comments;  // Store per post
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.commentsLoading = false;
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
        const comment = state.comments[postId]?.find((c) => c._id === commentId);
        if (comment) {
          if (!comment.replies) {
            comment.replies = [];
          }
          comment.replies.push(reply);
        }
      })
      .addCase(replyToComment.rejected, (state, action) => {
        state.replyLoading = false;
        state.replyError = action.payload as string;
      });
  },
});

export const { clearCommentErrors } = commentSlice.actions;
export default commentSlice.reducer;
