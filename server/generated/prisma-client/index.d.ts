// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  location: (where?: LocationWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  location: (where: LocationWhereUniqueInput) => LocationNullablePromise;
  locations: (args?: {
    where?: LocationWhereInput;
    orderBy?: LocationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Location>;
  locationsConnection: (args?: {
    where?: LocationWhereInput;
    orderBy?: LocationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LocationConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLocation: (data: LocationCreateInput) => LocationPromise;
  updateLocation: (args: {
    data: LocationUpdateInput;
    where: LocationWhereUniqueInput;
  }) => LocationPromise;
  updateManyLocations: (args: {
    data: LocationUpdateManyMutationInput;
    where?: LocationWhereInput;
  }) => BatchPayloadPromise;
  upsertLocation: (args: {
    where: LocationWhereUniqueInput;
    create: LocationCreateInput;
    update: LocationUpdateInput;
  }) => LocationPromise;
  deleteLocation: (where: LocationWhereUniqueInput) => LocationPromise;
  deleteManyLocations: (where?: LocationWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  location: (
    where?: LocationSubscriptionWhereInput
  ) => LocationSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LocationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "noOfFemales_ASC"
  | "noOfFemales_DESC"
  | "noOfMales_ASC"
  | "noOfMales_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface LocationCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  noOfFemales: Int;
  noOfMales: Int;
  parentLocation?: Maybe<LocationCreateOneWithoutParentLocationInput>;
}

export type LocationWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface LocationCreateWithoutParentLocationInput {
  id?: Maybe<ID_Input>;
  name: String;
  noOfFemales: Int;
  noOfMales: Int;
}

export interface LocationWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  noOfFemales?: Maybe<Int>;
  noOfFemales_not?: Maybe<Int>;
  noOfFemales_in?: Maybe<Int[] | Int>;
  noOfFemales_not_in?: Maybe<Int[] | Int>;
  noOfFemales_lt?: Maybe<Int>;
  noOfFemales_lte?: Maybe<Int>;
  noOfFemales_gt?: Maybe<Int>;
  noOfFemales_gte?: Maybe<Int>;
  noOfMales?: Maybe<Int>;
  noOfMales_not?: Maybe<Int>;
  noOfMales_in?: Maybe<Int[] | Int>;
  noOfMales_not_in?: Maybe<Int[] | Int>;
  noOfMales_lt?: Maybe<Int>;
  noOfMales_lte?: Maybe<Int>;
  noOfMales_gt?: Maybe<Int>;
  noOfMales_gte?: Maybe<Int>;
  parentLocation?: Maybe<LocationWhereInput>;
  AND?: Maybe<LocationWhereInput[] | LocationWhereInput>;
  OR?: Maybe<LocationWhereInput[] | LocationWhereInput>;
  NOT?: Maybe<LocationWhereInput[] | LocationWhereInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
}

export interface LocationCreateOneWithoutParentLocationInput {
  create?: Maybe<LocationCreateWithoutParentLocationInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
}

export interface LocationUpdateManyMutationInput {
  name?: Maybe<String>;
  noOfFemales?: Maybe<Int>;
  noOfMales?: Maybe<Int>;
}

export interface LocationUpdateInput {
  name?: Maybe<String>;
  noOfFemales?: Maybe<Int>;
  noOfMales?: Maybe<Int>;
  parentLocation?: Maybe<LocationUpdateOneWithoutParentLocationInput>;
}

export interface LocationSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<LocationWhereInput>;
  AND?: Maybe<
    LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  >;
  OR?: Maybe<LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput>;
  NOT?: Maybe<
    LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  >;
}

export interface LocationUpdateOneWithoutParentLocationInput {
  create?: Maybe<LocationCreateWithoutParentLocationInput>;
  update?: Maybe<LocationUpdateWithoutParentLocationDataInput>;
  upsert?: Maybe<LocationUpsertWithoutParentLocationInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<LocationWhereUniqueInput>;
}

export interface LocationUpdateWithoutParentLocationDataInput {
  name?: Maybe<String>;
  noOfFemales?: Maybe<Int>;
  noOfMales?: Maybe<Int>;
}

export interface LocationUpsertWithoutParentLocationInput {
  update: LocationUpdateWithoutParentLocationDataInput;
  create: LocationCreateWithoutParentLocationInput;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface LocationConnection {
  pageInfo: PageInfo;
  edges: LocationEdge[];
}

export interface LocationConnectionPromise
  extends Promise<LocationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LocationEdge>>() => T;
  aggregate: <T = AggregateLocationPromise>() => T;
}

export interface LocationConnectionSubscription
  extends Promise<AsyncIterator<LocationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LocationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLocationSubscription>() => T;
}

export interface Location {
  id: ID_Output;
  name: String;
  noOfFemales: Int;
  noOfMales: Int;
}

export interface LocationPromise extends Promise<Location>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  noOfFemales: () => Promise<Int>;
  noOfMales: () => Promise<Int>;
  parentLocation: <T = LocationPromise>() => T;
}

export interface LocationSubscription
  extends Promise<AsyncIterator<Location>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  noOfFemales: () => Promise<AsyncIterator<Int>>;
  noOfMales: () => Promise<AsyncIterator<Int>>;
  parentLocation: <T = LocationSubscription>() => T;
}

export interface LocationNullablePromise
  extends Promise<Location | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  noOfFemales: () => Promise<Int>;
  noOfMales: () => Promise<Int>;
  parentLocation: <T = LocationPromise>() => T;
}

export interface LocationSubscriptionPayload {
  mutation: MutationType;
  node: Location;
  updatedFields: String[];
  previousValues: LocationPreviousValues;
}

export interface LocationSubscriptionPayloadPromise
  extends Promise<LocationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LocationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LocationPreviousValuesPromise>() => T;
}

export interface LocationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LocationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LocationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LocationPreviousValuesSubscription>() => T;
}

export interface AggregateLocation {
  count: Int;
}

export interface AggregateLocationPromise
  extends Promise<AggregateLocation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLocationSubscription
  extends Promise<AsyncIterator<AggregateLocation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface LocationPreviousValues {
  id: ID_Output;
  name: String;
  noOfFemales: Int;
  noOfMales: Int;
}

export interface LocationPreviousValuesPromise
  extends Promise<LocationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  noOfFemales: () => Promise<Int>;
  noOfMales: () => Promise<Int>;
}

export interface LocationPreviousValuesSubscription
  extends Promise<AsyncIterator<LocationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  noOfFemales: () => Promise<AsyncIterator<Int>>;
  noOfMales: () => Promise<AsyncIterator<Int>>;
}

export interface LocationEdge {
  node: Location;
  cursor: String;
}

export interface LocationEdgePromise
  extends Promise<LocationEdge>,
    Fragmentable {
  node: <T = LocationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LocationEdgeSubscription
  extends Promise<AsyncIterator<LocationEdge>>,
    Fragmentable {
  node: <T = LocationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
