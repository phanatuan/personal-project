// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
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
  artist: (where?: ArtistWhereInput) => Promise<boolean>;
  category: (where?: CategoryWhereInput) => Promise<boolean>;
  record: (where?: RecordWhereInput) => Promise<boolean>;
  track: (where?: TrackWhereInput) => Promise<boolean>;
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

  artist: (where: ArtistWhereUniqueInput) => ArtistNullablePromise;
  artists: (args?: {
    where?: ArtistWhereInput;
    orderBy?: ArtistOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Artist>;
  artistsConnection: (args?: {
    where?: ArtistWhereInput;
    orderBy?: ArtistOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ArtistConnectionPromise;
  category: (where: CategoryWhereUniqueInput) => CategoryNullablePromise;
  categories: (args?: {
    where?: CategoryWhereInput;
    orderBy?: CategoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Category>;
  categoriesConnection: (args?: {
    where?: CategoryWhereInput;
    orderBy?: CategoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CategoryConnectionPromise;
  record: (where: RecordWhereUniqueInput) => RecordNullablePromise;
  records: (args?: {
    where?: RecordWhereInput;
    orderBy?: RecordOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Record>;
  recordsConnection: (args?: {
    where?: RecordWhereInput;
    orderBy?: RecordOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RecordConnectionPromise;
  track: (where: TrackWhereUniqueInput) => TrackNullablePromise;
  tracks: (args?: {
    where?: TrackWhereInput;
    orderBy?: TrackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Track>;
  tracksConnection: (args?: {
    where?: TrackWhereInput;
    orderBy?: TrackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TrackConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createArtist: (data: ArtistCreateInput) => ArtistPromise;
  updateArtist: (args: {
    data: ArtistUpdateInput;
    where: ArtistWhereUniqueInput;
  }) => ArtistPromise;
  updateManyArtists: (args: {
    data: ArtistUpdateManyMutationInput;
    where?: ArtistWhereInput;
  }) => BatchPayloadPromise;
  upsertArtist: (args: {
    where: ArtistWhereUniqueInput;
    create: ArtistCreateInput;
    update: ArtistUpdateInput;
  }) => ArtistPromise;
  deleteArtist: (where: ArtistWhereUniqueInput) => ArtistPromise;
  deleteManyArtists: (where?: ArtistWhereInput) => BatchPayloadPromise;
  createCategory: (data: CategoryCreateInput) => CategoryPromise;
  updateCategory: (args: {
    data: CategoryUpdateInput;
    where: CategoryWhereUniqueInput;
  }) => CategoryPromise;
  updateManyCategories: (args: {
    data: CategoryUpdateManyMutationInput;
    where?: CategoryWhereInput;
  }) => BatchPayloadPromise;
  upsertCategory: (args: {
    where: CategoryWhereUniqueInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
  }) => CategoryPromise;
  deleteCategory: (where: CategoryWhereUniqueInput) => CategoryPromise;
  deleteManyCategories: (where?: CategoryWhereInput) => BatchPayloadPromise;
  createRecord: (data: RecordCreateInput) => RecordPromise;
  updateRecord: (args: {
    data: RecordUpdateInput;
    where: RecordWhereUniqueInput;
  }) => RecordPromise;
  updateManyRecords: (args: {
    data: RecordUpdateManyMutationInput;
    where?: RecordWhereInput;
  }) => BatchPayloadPromise;
  upsertRecord: (args: {
    where: RecordWhereUniqueInput;
    create: RecordCreateInput;
    update: RecordUpdateInput;
  }) => RecordPromise;
  deleteRecord: (where: RecordWhereUniqueInput) => RecordPromise;
  deleteManyRecords: (where?: RecordWhereInput) => BatchPayloadPromise;
  createTrack: (data: TrackCreateInput) => TrackPromise;
  updateTrack: (args: {
    data: TrackUpdateInput;
    where: TrackWhereUniqueInput;
  }) => TrackPromise;
  updateManyTracks: (args: {
    data: TrackUpdateManyMutationInput;
    where?: TrackWhereInput;
  }) => BatchPayloadPromise;
  upsertTrack: (args: {
    where: TrackWhereUniqueInput;
    create: TrackCreateInput;
    update: TrackUpdateInput;
  }) => TrackPromise;
  deleteTrack: (where: TrackWhereUniqueInput) => TrackPromise;
  deleteManyTracks: (where?: TrackWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  artist: (
    where?: ArtistSubscriptionWhereInput
  ) => ArtistSubscriptionPayloadSubscription;
  category: (
    where?: CategorySubscriptionWhereInput
  ) => CategorySubscriptionPayloadSubscription;
  record: (
    where?: RecordSubscriptionWhereInput
  ) => RecordSubscriptionPayloadSubscription;
  track: (
    where?: TrackSubscriptionWhereInput
  ) => TrackSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RecordOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC";

export type TrackOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "track_no_ASC"
  | "track_no_DESC";

export type ArtistOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC";

export type CategoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TrackCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  track_no?: Maybe<Int>;
}

export type ArtistWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RecordUpdateManyDataInput {
  name?: Maybe<String>;
}

export interface TrackUpsertWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput;
  update: TrackUpdateDataInput;
  create: TrackCreateInput;
}

export interface RecordUpdateManyWithWhereNestedInput {
  where: RecordScalarWhereInput;
  data: RecordUpdateManyDataInput;
}

export interface RecordUpdateDataInput {
  name?: Maybe<String>;
  tracks?: Maybe<TrackUpdateManyInput>;
}

export type TrackWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TrackSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TrackWhereInput>;
  AND?: Maybe<TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput>;
  OR?: Maybe<TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput>;
  NOT?: Maybe<TrackSubscriptionWhereInput[] | TrackSubscriptionWhereInput>;
}

export interface RecordScalarWhereInput {
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
  AND?: Maybe<RecordScalarWhereInput[] | RecordScalarWhereInput>;
  OR?: Maybe<RecordScalarWhereInput[] | RecordScalarWhereInput>;
  NOT?: Maybe<RecordScalarWhereInput[] | RecordScalarWhereInput>;
}

export interface RecordWhereInput {
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
  tracks_every?: Maybe<TrackWhereInput>;
  tracks_some?: Maybe<TrackWhereInput>;
  tracks_none?: Maybe<TrackWhereInput>;
  AND?: Maybe<RecordWhereInput[] | RecordWhereInput>;
  OR?: Maybe<RecordWhereInput[] | RecordWhereInput>;
  NOT?: Maybe<RecordWhereInput[] | RecordWhereInput>;
}

export interface RecordUpsertWithWhereUniqueNestedInput {
  where: RecordWhereUniqueInput;
  update: RecordUpdateDataInput;
  create: RecordCreateInput;
}

export interface CategorySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CategoryWhereInput>;
  AND?: Maybe<
    CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  >;
  OR?: Maybe<CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput>;
  NOT?: Maybe<
    CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  >;
}

export interface TrackUpdateManyDataInput {
  name?: Maybe<String>;
  track_no?: Maybe<Int>;
}

export interface TrackUpdateManyMutationInput {
  name?: Maybe<String>;
  track_no?: Maybe<Int>;
}

export type CategoryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CategoryWhereInput {
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
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<CategoryWhereInput[] | CategoryWhereInput>;
  OR?: Maybe<CategoryWhereInput[] | CategoryWhereInput>;
  NOT?: Maybe<CategoryWhereInput[] | CategoryWhereInput>;
}

export interface ArtistCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  records?: Maybe<RecordCreateManyInput>;
}

export interface CategoryUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface RecordCreateManyInput {
  create?: Maybe<RecordCreateInput[] | RecordCreateInput>;
  connect?: Maybe<RecordWhereUniqueInput[] | RecordWhereUniqueInput>;
}

export interface CategoryCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description?: Maybe<String>;
}

export interface RecordCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  tracks?: Maybe<TrackCreateManyInput>;
}

export interface ArtistUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface TrackCreateManyInput {
  create?: Maybe<TrackCreateInput[] | TrackCreateInput>;
  connect?: Maybe<TrackWhereUniqueInput[] | TrackWhereUniqueInput>;
}

export interface ArtistWhereInput {
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
  records_every?: Maybe<RecordWhereInput>;
  records_some?: Maybe<RecordWhereInput>;
  records_none?: Maybe<RecordWhereInput>;
  AND?: Maybe<ArtistWhereInput[] | ArtistWhereInput>;
  OR?: Maybe<ArtistWhereInput[] | ArtistWhereInput>;
  NOT?: Maybe<ArtistWhereInput[] | ArtistWhereInput>;
}

export interface TrackUpdateManyWithWhereNestedInput {
  where: TrackScalarWhereInput;
  data: TrackUpdateManyDataInput;
}

export interface ArtistSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ArtistWhereInput>;
  AND?: Maybe<ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput>;
  OR?: Maybe<ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput>;
  NOT?: Maybe<ArtistSubscriptionWhereInput[] | ArtistSubscriptionWhereInput>;
}

export interface ArtistUpdateInput {
  name?: Maybe<String>;
  records?: Maybe<RecordUpdateManyInput>;
}

export interface RecordUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface RecordUpdateManyInput {
  create?: Maybe<RecordCreateInput[] | RecordCreateInput>;
  update?: Maybe<
    | RecordUpdateWithWhereUniqueNestedInput[]
    | RecordUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | RecordUpsertWithWhereUniqueNestedInput[]
    | RecordUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<RecordWhereUniqueInput[] | RecordWhereUniqueInput>;
  connect?: Maybe<RecordWhereUniqueInput[] | RecordWhereUniqueInput>;
  set?: Maybe<RecordWhereUniqueInput[] | RecordWhereUniqueInput>;
  disconnect?: Maybe<RecordWhereUniqueInput[] | RecordWhereUniqueInput>;
  deleteMany?: Maybe<RecordScalarWhereInput[] | RecordScalarWhereInput>;
  updateMany?: Maybe<
    | RecordUpdateManyWithWhereNestedInput[]
    | RecordUpdateManyWithWhereNestedInput
  >;
}

export interface CategoryUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface RecordUpdateWithWhereUniqueNestedInput {
  where: RecordWhereUniqueInput;
  data: RecordUpdateDataInput;
}

export interface TrackWhereInput {
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
  track_no?: Maybe<Int>;
  track_no_not?: Maybe<Int>;
  track_no_in?: Maybe<Int[] | Int>;
  track_no_not_in?: Maybe<Int[] | Int>;
  track_no_lt?: Maybe<Int>;
  track_no_lte?: Maybe<Int>;
  track_no_gt?: Maybe<Int>;
  track_no_gte?: Maybe<Int>;
  AND?: Maybe<TrackWhereInput[] | TrackWhereInput>;
  OR?: Maybe<TrackWhereInput[] | TrackWhereInput>;
  NOT?: Maybe<TrackWhereInput[] | TrackWhereInput>;
}

export interface TrackUpdateDataInput {
  name?: Maybe<String>;
  track_no?: Maybe<Int>;
}

export interface TrackUpdateWithWhereUniqueNestedInput {
  where: TrackWhereUniqueInput;
  data: TrackUpdateDataInput;
}

export interface TrackUpdateManyInput {
  create?: Maybe<TrackCreateInput[] | TrackCreateInput>;
  update?: Maybe<
    | TrackUpdateWithWhereUniqueNestedInput[]
    | TrackUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | TrackUpsertWithWhereUniqueNestedInput[]
    | TrackUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<TrackWhereUniqueInput[] | TrackWhereUniqueInput>;
  connect?: Maybe<TrackWhereUniqueInput[] | TrackWhereUniqueInput>;
  set?: Maybe<TrackWhereUniqueInput[] | TrackWhereUniqueInput>;
  disconnect?: Maybe<TrackWhereUniqueInput[] | TrackWhereUniqueInput>;
  deleteMany?: Maybe<TrackScalarWhereInput[] | TrackScalarWhereInput>;
  updateMany?: Maybe<
    TrackUpdateManyWithWhereNestedInput[] | TrackUpdateManyWithWhereNestedInput
  >;
}

export interface TrackScalarWhereInput {
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
  track_no?: Maybe<Int>;
  track_no_not?: Maybe<Int>;
  track_no_in?: Maybe<Int[] | Int>;
  track_no_not_in?: Maybe<Int[] | Int>;
  track_no_lt?: Maybe<Int>;
  track_no_lte?: Maybe<Int>;
  track_no_gt?: Maybe<Int>;
  track_no_gte?: Maybe<Int>;
  AND?: Maybe<TrackScalarWhereInput[] | TrackScalarWhereInput>;
  OR?: Maybe<TrackScalarWhereInput[] | TrackScalarWhereInput>;
  NOT?: Maybe<TrackScalarWhereInput[] | TrackScalarWhereInput>;
}

export interface RecordSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RecordWhereInput>;
  AND?: Maybe<RecordSubscriptionWhereInput[] | RecordSubscriptionWhereInput>;
  OR?: Maybe<RecordSubscriptionWhereInput[] | RecordSubscriptionWhereInput>;
  NOT?: Maybe<RecordSubscriptionWhereInput[] | RecordSubscriptionWhereInput>;
}

export type RecordWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RecordUpdateInput {
  name?: Maybe<String>;
  tracks?: Maybe<TrackUpdateManyInput>;
}

export interface TrackUpdateInput {
  name?: Maybe<String>;
  track_no?: Maybe<Int>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TrackPreviousValues {
  id: ID_Output;
  name: String;
  track_no?: Int;
}

export interface TrackPreviousValuesPromise
  extends Promise<TrackPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  track_no: () => Promise<Int>;
}

export interface TrackPreviousValuesSubscription
  extends Promise<AsyncIterator<TrackPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  track_no: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateArtist {
  count: Int;
}

export interface AggregateArtistPromise
  extends Promise<AggregateArtist>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateArtistSubscription
  extends Promise<AsyncIterator<AggregateArtist>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Record {
  id: ID_Output;
  name: String;
}

export interface RecordPromise extends Promise<Record>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  tracks: <T = FragmentableArray<Track>>(args?: {
    where?: TrackWhereInput;
    orderBy?: TrackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RecordSubscription
  extends Promise<AsyncIterator<Record>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  tracks: <T = Promise<AsyncIterator<TrackSubscription>>>(args?: {
    where?: TrackWhereInput;
    orderBy?: TrackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RecordNullablePromise
  extends Promise<Record | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  tracks: <T = FragmentableArray<Track>>(args?: {
    where?: TrackWhereInput;
    orderBy?: TrackOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ArtistEdge {
  node: Artist;
  cursor: String;
}

export interface ArtistEdgePromise extends Promise<ArtistEdge>, Fragmentable {
  node: <T = ArtistPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ArtistEdgeSubscription
  extends Promise<AsyncIterator<ArtistEdge>>,
    Fragmentable {
  node: <T = ArtistSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTrack {
  count: Int;
}

export interface AggregateTrackPromise
  extends Promise<AggregateTrack>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTrackSubscription
  extends Promise<AsyncIterator<AggregateTrack>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RecordPreviousValues {
  id: ID_Output;
  name: String;
}

export interface RecordPreviousValuesPromise
  extends Promise<RecordPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface RecordPreviousValuesSubscription
  extends Promise<AsyncIterator<RecordPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface RecordSubscriptionPayload {
  mutation: MutationType;
  node: Record;
  updatedFields: String[];
  previousValues: RecordPreviousValues;
}

export interface RecordSubscriptionPayloadPromise
  extends Promise<RecordSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RecordPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RecordPreviousValuesPromise>() => T;
}

export interface RecordSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RecordSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RecordSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RecordPreviousValuesSubscription>() => T;
}

export interface TrackEdge {
  node: Track;
  cursor: String;
}

export interface TrackEdgePromise extends Promise<TrackEdge>, Fragmentable {
  node: <T = TrackPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TrackEdgeSubscription
  extends Promise<AsyncIterator<TrackEdge>>,
    Fragmentable {
  node: <T = TrackSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TrackConnection {
  pageInfo: PageInfo;
  edges: TrackEdge[];
}

export interface TrackConnectionPromise
  extends Promise<TrackConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TrackEdge>>() => T;
  aggregate: <T = AggregateTrackPromise>() => T;
}

export interface TrackConnectionSubscription
  extends Promise<AsyncIterator<TrackConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TrackEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTrackSubscription>() => T;
}

export interface AggregateRecord {
  count: Int;
}

export interface AggregateRecordPromise
  extends Promise<AggregateRecord>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRecordSubscription
  extends Promise<AsyncIterator<AggregateRecord>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RecordConnection {
  pageInfo: PageInfo;
  edges: RecordEdge[];
}

export interface RecordConnectionPromise
  extends Promise<RecordConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RecordEdge>>() => T;
  aggregate: <T = AggregateRecordPromise>() => T;
}

export interface RecordConnectionSubscription
  extends Promise<AsyncIterator<RecordConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RecordEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRecordSubscription>() => T;
}

export interface Artist {
  id: ID_Output;
  name: String;
}

export interface ArtistPromise extends Promise<Artist>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  records: <T = FragmentableArray<Record>>(args?: {
    where?: RecordWhereInput;
    orderBy?: RecordOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ArtistSubscription
  extends Promise<AsyncIterator<Artist>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  records: <T = Promise<AsyncIterator<RecordSubscription>>>(args?: {
    where?: RecordWhereInput;
    orderBy?: RecordOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ArtistNullablePromise
  extends Promise<Artist | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  records: <T = FragmentableArray<Record>>(args?: {
    where?: RecordWhereInput;
    orderBy?: RecordOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TrackSubscriptionPayload {
  mutation: MutationType;
  node: Track;
  updatedFields: String[];
  previousValues: TrackPreviousValues;
}

export interface TrackSubscriptionPayloadPromise
  extends Promise<TrackSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TrackPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TrackPreviousValuesPromise>() => T;
}

export interface TrackSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TrackSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TrackSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TrackPreviousValuesSubscription>() => T;
}

export interface ArtistSubscriptionPayload {
  mutation: MutationType;
  node: Artist;
  updatedFields: String[];
  previousValues: ArtistPreviousValues;
}

export interface ArtistSubscriptionPayloadPromise
  extends Promise<ArtistSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ArtistPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ArtistPreviousValuesPromise>() => T;
}

export interface ArtistSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ArtistSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ArtistSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ArtistPreviousValuesSubscription>() => T;
}

export interface CategoryEdge {
  node: Category;
  cursor: String;
}

export interface CategoryEdgePromise
  extends Promise<CategoryEdge>,
    Fragmentable {
  node: <T = CategoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CategoryEdgeSubscription
  extends Promise<AsyncIterator<CategoryEdge>>,
    Fragmentable {
  node: <T = CategorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ArtistPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ArtistPreviousValuesPromise
  extends Promise<ArtistPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ArtistPreviousValuesSubscription
  extends Promise<AsyncIterator<ArtistPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface Track {
  id: ID_Output;
  name: String;
  track_no?: Int;
}

export interface TrackPromise extends Promise<Track>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  track_no: () => Promise<Int>;
}

export interface TrackSubscription
  extends Promise<AsyncIterator<Track>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  track_no: () => Promise<AsyncIterator<Int>>;
}

export interface TrackNullablePromise
  extends Promise<Track | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  track_no: () => Promise<Int>;
}

export interface RecordEdge {
  node: Record;
  cursor: String;
}

export interface RecordEdgePromise extends Promise<RecordEdge>, Fragmentable {
  node: <T = RecordPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RecordEdgeSubscription
  extends Promise<AsyncIterator<RecordEdge>>,
    Fragmentable {
  node: <T = RecordSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ArtistConnection {
  pageInfo: PageInfo;
  edges: ArtistEdge[];
}

export interface ArtistConnectionPromise
  extends Promise<ArtistConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ArtistEdge>>() => T;
  aggregate: <T = AggregateArtistPromise>() => T;
}

export interface ArtistConnectionSubscription
  extends Promise<AsyncIterator<ArtistConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ArtistEdgeSubscription>>>() => T;
  aggregate: <T = AggregateArtistSubscription>() => T;
}

export interface CategoryPreviousValues {
  id: ID_Output;
  name: String;
  description?: String;
}

export interface CategoryPreviousValuesPromise
  extends Promise<CategoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface CategoryPreviousValuesSubscription
  extends Promise<AsyncIterator<CategoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface CategorySubscriptionPayload {
  mutation: MutationType;
  node: Category;
  updatedFields: String[];
  previousValues: CategoryPreviousValues;
}

export interface CategorySubscriptionPayloadPromise
  extends Promise<CategorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CategoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CategoryPreviousValuesPromise>() => T;
}

export interface CategorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CategorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CategorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CategoryPreviousValuesSubscription>() => T;
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

export interface Category {
  id: ID_Output;
  name: String;
  description?: String;
}

export interface CategoryPromise extends Promise<Category>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface CategorySubscription
  extends Promise<AsyncIterator<Category>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface CategoryNullablePromise
  extends Promise<Category | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface CategoryConnection {
  pageInfo: PageInfo;
  edges: CategoryEdge[];
}

export interface CategoryConnectionPromise
  extends Promise<CategoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CategoryEdge>>() => T;
  aggregate: <T = AggregateCategoryPromise>() => T;
}

export interface CategoryConnectionSubscription
  extends Promise<AsyncIterator<CategoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CategoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCategorySubscription>() => T;
}

export interface AggregateCategory {
  count: Int;
}

export interface AggregateCategoryPromise
  extends Promise<AggregateCategory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCategorySubscription
  extends Promise<AsyncIterator<AggregateCategory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Artist",
    embedded: false
  },
  {
    name: "Record",
    embedded: false
  },
  {
    name: "Track",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
