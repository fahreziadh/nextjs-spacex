/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query LatestLaunch {\n    launchLatest {\n      id\n      mission_name\n      details\n      launch_date_utc\n      links {\n        video_link\n      }\n    }\n  }\n": types.LatestLaunchDocument,
    "\n  query GetLaunchDetail($id: ID!) {\n    launch(id: $id) {\n      mission_name\n      launch_date_utc\n      rocket {\n        rocket {\n          id\n        }\n      }\n      links {\n        mission_patch\n        video_link\n      }\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      mission_id\n      upcoming\n      tentative_max_precision\n      static_fire_date_utc\n      static_fire_date_unix\n    }\n  }\n": types.GetLaunchDetailDocument,
    "\n  query GetRocket($id: ID!) {\n    rocket(id: $id) {\n      active\n      boosters\n      company\n      cost_per_launch\n      country\n      description\n      diameter {\n        feet\n        meters\n      }\n      engines {\n        engine_loss_max\n        layout\n        number\n        propellant_1\n        propellant_2\n        thrust_sea_level {\n          kN\n          lbf\n        }\n        thrust_to_weight\n        thrust_vacuum {\n          kN\n          lbf\n        }\n        type\n        version\n      }\n      first_flight\n  \n      height {\n        feet\n        meters\n      }\n      id\n      landing_legs {\n        material\n        number\n      }\n      mass {\n        kg\n        lb\n      }\n      name\n      payload_weights {\n        id\n        kg\n        lb\n        name\n      }\n  \n      stages\n      success_rate_pct\n      type\n      wikipedia\n    }\n  }\n": types.GetRocketDocument,
    "\n  query GetLaunches {\n    launches {\n      id\n      mission_name\n      launch_date_utc\n      rocket {\n        rocket_name\n      }\n      links {\n        mission_patch\n        video_link\n      }\n    }\n  }\n": types.GetLaunchesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LatestLaunch {\n    launchLatest {\n      id\n      mission_name\n      details\n      launch_date_utc\n      links {\n        video_link\n      }\n    }\n  }\n"): (typeof documents)["\n  query LatestLaunch {\n    launchLatest {\n      id\n      mission_name\n      details\n      launch_date_utc\n      links {\n        video_link\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLaunchDetail($id: ID!) {\n    launch(id: $id) {\n      mission_name\n      launch_date_utc\n      rocket {\n        rocket {\n          id\n        }\n      }\n      links {\n        mission_patch\n        video_link\n      }\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      mission_id\n      upcoming\n      tentative_max_precision\n      static_fire_date_utc\n      static_fire_date_unix\n    }\n  }\n"): (typeof documents)["\n  query GetLaunchDetail($id: ID!) {\n    launch(id: $id) {\n      mission_name\n      launch_date_utc\n      rocket {\n        rocket {\n          id\n        }\n      }\n      links {\n        mission_patch\n        video_link\n      }\n      details\n      id\n      is_tentative\n      launch_date_local\n      launch_date_unix\n      launch_site {\n        site_id\n        site_name\n        site_name_long\n      }\n      launch_success\n      launch_year\n      mission_id\n      upcoming\n      tentative_max_precision\n      static_fire_date_utc\n      static_fire_date_unix\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRocket($id: ID!) {\n    rocket(id: $id) {\n      active\n      boosters\n      company\n      cost_per_launch\n      country\n      description\n      diameter {\n        feet\n        meters\n      }\n      engines {\n        engine_loss_max\n        layout\n        number\n        propellant_1\n        propellant_2\n        thrust_sea_level {\n          kN\n          lbf\n        }\n        thrust_to_weight\n        thrust_vacuum {\n          kN\n          lbf\n        }\n        type\n        version\n      }\n      first_flight\n  \n      height {\n        feet\n        meters\n      }\n      id\n      landing_legs {\n        material\n        number\n      }\n      mass {\n        kg\n        lb\n      }\n      name\n      payload_weights {\n        id\n        kg\n        lb\n        name\n      }\n  \n      stages\n      success_rate_pct\n      type\n      wikipedia\n    }\n  }\n"): (typeof documents)["\n  query GetRocket($id: ID!) {\n    rocket(id: $id) {\n      active\n      boosters\n      company\n      cost_per_launch\n      country\n      description\n      diameter {\n        feet\n        meters\n      }\n      engines {\n        engine_loss_max\n        layout\n        number\n        propellant_1\n        propellant_2\n        thrust_sea_level {\n          kN\n          lbf\n        }\n        thrust_to_weight\n        thrust_vacuum {\n          kN\n          lbf\n        }\n        type\n        version\n      }\n      first_flight\n  \n      height {\n        feet\n        meters\n      }\n      id\n      landing_legs {\n        material\n        number\n      }\n      mass {\n        kg\n        lb\n      }\n      name\n      payload_weights {\n        id\n        kg\n        lb\n        name\n      }\n  \n      stages\n      success_rate_pct\n      type\n      wikipedia\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLaunches {\n    launches {\n      id\n      mission_name\n      launch_date_utc\n      rocket {\n        rocket_name\n      }\n      links {\n        mission_patch\n        video_link\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLaunches {\n    launches {\n      id\n      mission_name\n      launch_date_utc\n      rocket {\n        rocket_name\n      }\n      links {\n        mission_patch\n        video_link\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;