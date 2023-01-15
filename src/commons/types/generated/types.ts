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
  user: IUser;
};

export type ICreateCommentInput = {
  content: Scalars['String'];
  productId: Scalars['String'];
  star: Scalars['Int'];
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
};

export type ICreateUserInput = {
  add_detail: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: IUser_Enum;
};

export type IMutation = {
  __typename?: 'Mutation';
  addWishlist: Scalars['Boolean'];
  checkTokenPhone: Scalars['String'];
  createComment: IComment;
  createPayment: IPayment;
  createProduct: IProduct;
  createProductCart: IProductCart;
  createProductCategory: IProductCategory;
  createUser: IUser;
  deleteComment: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteProductCart: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  findUserPassword: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendTokentoPhone: Scalars['String'];
  udpateComment: IComment;
  updateLoginUser: IUser;
  updatePassword: Scalars['String'];
  updateProduct: IProduct;
  uploadDetailImage: Array<Scalars['String']>;
  uploadImage: Array<Scalars['String']>;
};


export type IMutationAddWishlistArgs = {
  createProductWishInput: ICreateProductWishInput;
};


export type IMutationCheckTokenPhoneArgs = {
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreatePaymentArgs = {
  point: Scalars['Int'];
  totalAmount: Scalars['Float'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateProductCartArgs = {
  etc1Name?: InputMaybe<Scalars['String']>;
  etc1Value?: InputMaybe<Scalars['String']>;
  etc2Name?: InputMaybe<Scalars['String']>;
  etc2Value?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  quantity: Scalars['Float'];
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
  productCartId: Scalars['String'];
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


export type IMutationUpdateLoginUserArgs = {
  updateUserInput: IUpdateUserInput;
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
  etc1?: Maybe<Scalars['String']>;
  etc2?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  point: Scalars['Int'];
  status: IPayment_Status_Enum;
  totalAmount: Scalars['Int'];
  user: IUser;
};

export type IProduct = {
  __typename?: 'Product';
  commentCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  detailContent: Scalars['String'];
  etc1Name?: Maybe<Scalars['String']>;
  etc1Value?: Maybe<Scalars['String']>;
  etc2Name?: Maybe<Scalars['String']>;
  etc2Value?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  payment: IPayment;
  price: Scalars['Int'];
  productCart: IProductCart;
  productCategory: IProductCategory;
  productImages: Array<IProductImage>;
  productWishlist: Array<IProductWishlist>;
  product_id: Scalars['String'];
  wishListCount: Scalars['Int'];
};

export type IProductCart = {
  __typename?: 'ProductCart';
  createdAt: Scalars['DateTime'];
  etc1Name?: Maybe<Scalars['String']>;
  etc1Value?: Maybe<Scalars['String']>;
  etc2Name?: Maybe<Scalars['String']>;
  etc2Value?: Maybe<Scalars['String']>;
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
  createdAt: Scalars['DateTime'];
  isDib: Scalars['Boolean'];
  product: IProduct;
  productwishlist_id: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchComment: IComment;
  fetchComments: Array<IComment>;
  fetchCommentsCount: Scalars['Int'];
  fetchCommentsMain: Array<IComment>;
  fetchLoginUser: IUser;
  fetchProduct: IProduct;
  fetchProductCart: Array<IProductCart>;
  fetchProductCartCount: Scalars['Int'];
  fetchProductCartTotalAmount: Scalars['Int'];
  fetchProducts: Array<IProduct>;
  fetchProductsCount: Scalars['Int'];
  fetchUserPoint: IUser;
  fetchmyWishlist: Array<IProductWishlist>;
  findUserEmail: Scalars['String'];
  searchProducts: Array<IProduct>;
  searchProductsCount: Scalars['Int'];
  sortByCommentsASC: Array<IProduct>;
  sortByCommentsDESC: Array<IProduct>;
  sortByPriceASC: Array<IProduct>;
  sortByPriceDESC: Array<IProduct>;
};


export type IQueryFetchCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  page: Scalars['Float'];
  productId: Scalars['String'];
};


export type IQueryFetchCommentsCountArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
};


export type IQueryFetchProductCartArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchProductsArgs = {
  cateId?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchProductsCountArgs = {
  cateId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchmyWishlistArgs = {
  page: Scalars['Float'];
};


export type IQueryFindUserEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type IQuerySearchProductsArgs = {
  page: Scalars['Float'];
  word: Scalars['String'];
};


export type IQuerySearchProductsCountArgs = {
  word: Scalars['String'];
};


export type IQuerySortByCommentsAscArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByCommentsDescArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByPriceAscArgs = {
  page: Scalars['Float'];
};


export type IQuerySortByPriceDescArgs = {
  page: Scalars['Float'];
};

export enum IUser_Enum {
  Admin = 'ADMIN',
  User = 'USER'
}

export type IUpdateCommentInput = {
  content?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  star?: InputMaybe<Scalars['Int']>;
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
  cartTotal: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  paid: Scalars['Int'];
  phone: Scalars['String'];
  point: Scalars['Int'];
  role: IUser_Enum;
};

export type IUpdateUserInput = {
  add_detail?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<IUser_Enum>;
};
