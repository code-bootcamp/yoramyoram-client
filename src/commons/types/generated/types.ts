export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IComment = {
  __typename?: 'Comment';
  comment_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  payment: IPayment;
  product: IProduct;
  star: Scalars['Int'];
  title: Scalars['String'];
  user: IUser;
};

export type ICreateCommentInput = {
  content: Scalars['String'];
  productId: Scalars['String'];
  star: Scalars['Int'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateProductInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['String'];
  productTags: Array<Scalars['String']>;
};

export type ICreateProductWishInput = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateUserInput = {
  add_detail: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  addWishlist: Scalars['Boolean'];
  canclePayment: IPayment;
  checkTokenPhone: Scalars['String'];
  createComment: IComment;
  createPayment: IPayment;
  createProduct: IProduct;
  createProductCart: IProductCart;
  createProductCategory: IProductCategory;
  createUser: IUser;
  deleteComment: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteProductCart: IProductCart;
  deleteUser: Scalars['Boolean'];
  findUserPassword: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendTokentoPhone: Scalars['String'];
  udpateComment: IComment;
  updatePassword: Scalars['String'];
  updateProduct: IProduct;
  uploadImage: Array<Scalars['String']>;
};


export type IMutationAddWishlistArgs = {
  createProductWishInput: ICreateProductWishInput;
};


export type IMutationCanclePaymentArgs = {
  impUid: Scalars['String'];
  point: Scalars['Int'];
};


export type IMutationCheckTokenPhoneArgs = {
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreatePaymentArgs = {
  impUid: Scalars['String'];
  point: Scalars['Int'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateProductCartArgs = {
  productId: Scalars['String'];
};


export type IMutationCreateProductCategoryArgs = {
  name: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type IMutationDeleteProductCartArgs = {
  productId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationFindUserPasswordArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendTokentoPhoneArgs = {
  phone: Scalars['String'];
};


export type IMutationUdpateCommentArgs = {
  commentId: Scalars['String'];
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdatePasswordArgs = {
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['String'];
  updateProductInput: IUpdateProductInput;
};


export type IMutationUploadImageArgs = {
  images: Array<Scalars['Upload']>;
};

export enum IPayment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  etc1: Scalars['String'];
  etc2: Scalars['String'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  point: Scalars['Int'];
  status: IPayment_Status_Enum;
  user: IUser;
};

export type IProduct = {
  __typename?: 'Product';
  commentCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  payment: IPayment;
  price: Scalars['Int'];
  productCategory: IProductCategory;
  product_id: Scalars['String'];
  wishListCount: Scalars['Int'];
};

export type IProductCart = {
  __typename?: 'ProductCart';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  product: IProduct;
  quantity: Scalars['Int'];
  user: IUser;
};

export type IProductCategory = {
  __typename?: 'ProductCategory';
  category: Scalars['String'];
  category_id: Scalars['String'];
};

export type IProductWishlist = {
  __typename?: 'ProductWishlist';
  isDib: Scalars['Boolean'];
  product: IProduct;
  productwishlist_id: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchComment: IComment;
  fetchComments: Array<IComment>;
  fetchCommentsWithDeleted: Array<IComment>;
  fetchProduct: IProduct;
  fetchProductCart: Array<IProductCart>;
  fetchProducts: Array<IProduct>;
  fetchProductsWithDeleted: Array<IProduct>;
  fetchmyWishlist: Array<IProductWishlist>;
  findUserEmail: Scalars['String'];
  searchProducts: Array<IProduct>;
  sortByCommentsASC: Array<IProduct>;
  sortByCommentsDESC: Array<IProduct>;
  sortByPriceASC: Array<IProduct>;
  sortByPriceDESC: Array<IProduct>;
};


export type IQueryFetchCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
};


export type IQueryFindUserEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type IQuerySearchProductsArgs = {
  word: Scalars['String'];
};

export type IUpdateCommentInput = {
  content?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  star?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateProductInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
  productTags?: InputMaybe<Array<Scalars['String']>>;
};

export type IUser = {
  __typename?: 'User';
  add_detail: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
};
