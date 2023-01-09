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

export type IAdminCreateUserInput = {
  add_detail: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type IAdminUser = {
  __typename?: 'AdminUser';
  add_detail: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
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
};

export type ICreateProductInput = {
  description: Scalars['String'];
  detailContent: Scalars['String'];
  etc1Name?: InputMaybe<Scalars['String']>;
  etc1Value?: InputMaybe<Scalars['String']>;
  etc2Name?: InputMaybe<Scalars['String']>;
  etc2Value?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategoryId: Scalars['String'];
  productImages: Array<Scalars['String']>;
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
  adminLogin: Scalars['String'];
  canclePayment: IPayment;
  checkTokenPhone: Scalars['String'];
  createAdminUser: IAdminUser;
  createComment: IComment;
  createPayment: IPayment;
  createProduct: IProduct;
  createProductCart: IProductCart;
  createProductCategory: IProductCategory;
  createUser: IUser;
  deleteAdminUser: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteProductCart: IProductCart;
  deleteUser: Scalars['Boolean'];
  findAdminUserPassword: Scalars['String'];
  findUserPassword: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendTokentoPhone: Scalars['String'];
  udpateComment: IComment;
  updateAdminPassword: Scalars['String'];
  updatePassword: Scalars['String'];
  updateProduct: IProduct;
  uploadDetailImage: Array<Scalars['String']>;
  uploadImage: Array<Scalars['String']>;
};


export type IMutationAddWishlistArgs = {
  createProductWishInput: ICreateProductWishInput;
};


export type IMutationAdminLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCanclePaymentArgs = {
  impUid: Scalars['String'];
  point: Scalars['Int'];
};


export type IMutationCheckTokenPhoneArgs = {
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationCreateAdminUserArgs = {
  adminCreateUserInput: IAdminCreateUserInput;
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


export type IMutationFindAdminUserPasswordArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  token: Scalars['String'];
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


export type IMutationUpdateAdminPasswordArgs = {
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationUpdatePasswordArgs = {
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['String'];
  updateProductInput: IUpdateProductInput;
};


export type IMutationUploadDetailImageArgs = {
  images: Array<Scalars['Upload']>;
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
  description: Scalars['String'];
  detailContent: Scalars['String'];
  etc1Name?: Maybe<Scalars['String']>;
  etc1Value?: Maybe<Scalars['String']>;
  etc2Name?: Maybe<Scalars['String']>;
  etc2Value?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  payment: IPayment;
  price: Scalars['Int'];
  productCategory: IProductCategory;
  productImages: Array<IProductImage>;
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

export type IProductImage = {
  __typename?: 'ProductImage';
  isMain: Scalars['Boolean'];
  product: IProduct;
  productImage_id: Scalars['String'];
  url: Scalars['String'];
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
  fetchLoginAdminUser: IAdminUser;
  fetchLoginUser: IUser;
  fetchProduct: IProduct;
  fetchProductCart: Array<IProductCart>;
  fetchProducts: Array<IProduct>;
  fetchProductsWithDeleted: Array<IProduct>;
  fetchmyWishlist: Array<IProductWishlist>;
  findAdminUserEmail: Scalars['String'];
  findUserEmail: Scalars['String'];
  searchProducts: Array<IProduct>;
  sortByCommentsASC: Array<IProduct>;
  sortByCommentsDESC: Array<IProduct>;
  sortByCreatedAtASC: Array<IProduct>;
  sortByCreatedAtDESC: Array<IProduct>;
  sortByPriceASC: Array<IProduct>;
  sortByPriceDESC: Array<IProduct>;
};


export type IQueryFetchCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductsArgs = {
  page: Scalars['Float'];
};


export type IQueryFindAdminUserEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type IQueryFindUserEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type IQuerySearchProductsArgs = {
  page: Scalars['Float'];
  word: Scalars['String'];
};


export type IQuerySortByCommentsAscArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByCommentsDescArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByCreatedAtAscArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByCreatedAtDescArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByPriceAscArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByPriceDescArgs = {
  page: Scalars['Float'];
};

export type IUpdateCommentInput = {
  content?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  star?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateProductInput = {
  description?: InputMaybe<Scalars['String']>;
  detailContent?: InputMaybe<Scalars['String']>;
  etc1Name?: InputMaybe<Scalars['String']>;
  etc1Value?: InputMaybe<Scalars['String']>;
  etc2Name?: InputMaybe<Scalars['String']>;
  etc2Value?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
  productImages?: InputMaybe<Array<Scalars['String']>>;
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
