
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model choice
 * 
 */
export type choice = $Result.DefaultSelection<Prisma.$choicePayload>
/**
 * Model menu
 * 
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>
/**
 * Model mukburim
 * 
 */
export type mukburim = $Result.DefaultSelection<Prisma.$mukburimPayload>
/**
 * Model recommend_except
 * 
 */
export type recommend_except = $Result.DefaultSelection<Prisma.$recommend_exceptPayload>
/**
 * Model report
 * 
 */
export type report = $Result.DefaultSelection<Prisma.$reportPayload>
/**
 * Model rest_image
 * 
 */
export type rest_image = $Result.DefaultSelection<Prisma.$rest_imagePayload>
/**
 * Model rest_menu
 * 
 */
export type rest_menu = $Result.DefaultSelection<Prisma.$rest_menuPayload>
/**
 * Model restaurant
 * 
 */
export type restaurant = $Result.DefaultSelection<Prisma.$restaurantPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model review_image
 * 
 */
export type review_image = $Result.DefaultSelection<Prisma.$review_imagePayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model allergy
 * 
 */
export type allergy = $Result.DefaultSelection<Prisma.$allergyPayload>
/**
 * Model prefer
 * 
 */
export type prefer = $Result.DefaultSelection<Prisma.$preferPayload>
/**
 * Model zzim
 * 
 */
export type zzim = $Result.DefaultSelection<Prisma.$zzimPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_body_type: {
  cold: 'cold',
  indigestion: 'indigestion',
  heat_type: 'heat_type',
  cold_type: 'cold_type'
};

export type user_body_type = (typeof user_body_type)[keyof typeof user_body_type]


export const user_gender: {
  male: 'male',
  female: 'female'
};

export type user_gender = (typeof user_gender)[keyof typeof user_gender]


export const user_exercise: {
  diet: 'diet',
  bulk: 'bulk',
  maintain: 'maintain'
};

export type user_exercise = (typeof user_exercise)[keyof typeof user_exercise]


export const allergy_type: {
  egg: 'egg',
  milk: 'milk',
  shellfish: 'shellfish',
  seafood: 'seafood',
  nuts: 'nuts'
};

export type allergy_type = (typeof allergy_type)[keyof typeof allergy_type]


export const prefer_type: {
  korean: 'korean',
  western: 'western',
  chinese: 'chinese',
  japanese: 'japanese',
  other: 'other'
};

export type prefer_type = (typeof prefer_type)[keyof typeof prefer_type]

}

export type user_body_type = $Enums.user_body_type

export const user_body_type: typeof $Enums.user_body_type

export type user_gender = $Enums.user_gender

export const user_gender: typeof $Enums.user_gender

export type user_exercise = $Enums.user_exercise

export const user_exercise: typeof $Enums.user_exercise

export type allergy_type = $Enums.allergy_type

export const allergy_type: typeof $Enums.allergy_type

export type prefer_type = $Enums.prefer_type

export const prefer_type: typeof $Enums.prefer_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Choices
 * const choices = await prisma.choice.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Choices
   * const choices = await prisma.choice.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.choice`: Exposes CRUD operations for the **choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.choiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mukburim`: Exposes CRUD operations for the **mukburim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mukburims
    * const mukburims = await prisma.mukburim.findMany()
    * ```
    */
  get mukburim(): Prisma.mukburimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommend_except`: Exposes CRUD operations for the **recommend_except** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommend_excepts
    * const recommend_excepts = await prisma.recommend_except.findMany()
    * ```
    */
  get recommend_except(): Prisma.recommend_exceptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rest_image`: Exposes CRUD operations for the **rest_image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rest_images
    * const rest_images = await prisma.rest_image.findMany()
    * ```
    */
  get rest_image(): Prisma.rest_imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rest_menu`: Exposes CRUD operations for the **rest_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rest_menus
    * const rest_menus = await prisma.rest_menu.findMany()
    * ```
    */
  get rest_menu(): Prisma.rest_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.restaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review_image`: Exposes CRUD operations for the **review_image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Review_images
    * const review_images = await prisma.review_image.findMany()
    * ```
    */
  get review_image(): Prisma.review_imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergy`: Exposes CRUD operations for the **allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergy.findMany()
    * ```
    */
  get allergy(): Prisma.allergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prefer`: Exposes CRUD operations for the **prefer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prefers
    * const prefers = await prisma.prefer.findMany()
    * ```
    */
  get prefer(): Prisma.preferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zzim`: Exposes CRUD operations for the **zzim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zzims
    * const zzims = await prisma.zzim.findMany()
    * ```
    */
  get zzim(): Prisma.zzimDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    choice: 'choice',
    menu: 'menu',
    mukburim: 'mukburim',
    recommend_except: 'recommend_except',
    report: 'report',
    rest_image: 'rest_image',
    rest_menu: 'rest_menu',
    restaurant: 'restaurant',
    review: 'review',
    review_image: 'review_image',
    sessions: 'sessions',
    user: 'user',
    allergy: 'allergy',
    prefer: 'prefer',
    zzim: 'zzim'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "choice" | "menu" | "mukburim" | "recommend_except" | "report" | "rest_image" | "rest_menu" | "restaurant" | "review" | "review_image" | "sessions" | "user" | "allergy" | "prefer" | "zzim"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      choice: {
        payload: Prisma.$choicePayload<ExtArgs>
        fields: Prisma.choiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.choiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.choiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          findFirst: {
            args: Prisma.choiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.choiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          findMany: {
            args: Prisma.choiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>[]
          }
          create: {
            args: Prisma.choiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          createMany: {
            args: Prisma.choiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.choiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          update: {
            args: Prisma.choiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          deleteMany: {
            args: Prisma.choiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.choiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.choiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.choiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.choiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>
        fields: Prisma.menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      mukburim: {
        payload: Prisma.$mukburimPayload<ExtArgs>
        fields: Prisma.mukburimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mukburimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mukburimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          findFirst: {
            args: Prisma.mukburimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mukburimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          findMany: {
            args: Prisma.mukburimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>[]
          }
          create: {
            args: Prisma.mukburimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          createMany: {
            args: Prisma.mukburimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mukburimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          update: {
            args: Prisma.mukburimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          deleteMany: {
            args: Prisma.mukburimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mukburimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mukburimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mukburimPayload>
          }
          aggregate: {
            args: Prisma.MukburimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMukburim>
          }
          groupBy: {
            args: Prisma.mukburimGroupByArgs<ExtArgs>
            result: $Utils.Optional<MukburimGroupByOutputType>[]
          }
          count: {
            args: Prisma.mukburimCountArgs<ExtArgs>
            result: $Utils.Optional<MukburimCountAggregateOutputType> | number
          }
        }
      }
      recommend_except: {
        payload: Prisma.$recommend_exceptPayload<ExtArgs>
        fields: Prisma.recommend_exceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recommend_exceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recommend_exceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          findFirst: {
            args: Prisma.recommend_exceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recommend_exceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          findMany: {
            args: Prisma.recommend_exceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>[]
          }
          create: {
            args: Prisma.recommend_exceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          createMany: {
            args: Prisma.recommend_exceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recommend_exceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          update: {
            args: Prisma.recommend_exceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          deleteMany: {
            args: Prisma.recommend_exceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recommend_exceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recommend_exceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recommend_exceptPayload>
          }
          aggregate: {
            args: Prisma.Recommend_exceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommend_except>
          }
          groupBy: {
            args: Prisma.recommend_exceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recommend_exceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.recommend_exceptCountArgs<ExtArgs>
            result: $Utils.Optional<Recommend_exceptCountAggregateOutputType> | number
          }
        }
      }
      report: {
        payload: Prisma.$reportPayload<ExtArgs>
        fields: Prisma.reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findFirst: {
            args: Prisma.reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findMany: {
            args: Prisma.reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          create: {
            args: Prisma.reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          createMany: {
            args: Prisma.reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          update: {
            args: Prisma.reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          deleteMany: {
            args: Prisma.reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      rest_image: {
        payload: Prisma.$rest_imagePayload<ExtArgs>
        fields: Prisma.rest_imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rest_imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rest_imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>
          }
          findFirst: {
            args: Prisma.rest_imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rest_imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>
          }
          findMany: {
            args: Prisma.rest_imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>[]
          }
          create: {
            args: Prisma.rest_imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>
          }
          createMany: {
            args: Prisma.rest_imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rest_imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>
          }
          update: {
            args: Prisma.rest_imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>
          }
          deleteMany: {
            args: Prisma.rest_imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rest_imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rest_imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_imagePayload>
          }
          aggregate: {
            args: Prisma.Rest_imageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRest_image>
          }
          groupBy: {
            args: Prisma.rest_imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rest_imageGroupByOutputType>[]
          }
          count: {
            args: Prisma.rest_imageCountArgs<ExtArgs>
            result: $Utils.Optional<Rest_imageCountAggregateOutputType> | number
          }
        }
      }
      rest_menu: {
        payload: Prisma.$rest_menuPayload<ExtArgs>
        fields: Prisma.rest_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rest_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rest_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>
          }
          findFirst: {
            args: Prisma.rest_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rest_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>
          }
          findMany: {
            args: Prisma.rest_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>[]
          }
          create: {
            args: Prisma.rest_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>
          }
          createMany: {
            args: Prisma.rest_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rest_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>
          }
          update: {
            args: Prisma.rest_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>
          }
          deleteMany: {
            args: Prisma.rest_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rest_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rest_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rest_menuPayload>
          }
          aggregate: {
            args: Prisma.Rest_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRest_menu>
          }
          groupBy: {
            args: Prisma.rest_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rest_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.rest_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Rest_menuCountAggregateOutputType> | number
          }
        }
      }
      restaurant: {
        payload: Prisma.$restaurantPayload<ExtArgs>
        fields: Prisma.restaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findFirst: {
            args: Prisma.restaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findMany: {
            args: Prisma.restaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[]
          }
          create: {
            args: Prisma.restaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          createMany: {
            args: Prisma.restaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.restaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          update: {
            args: Prisma.restaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          deleteMany: {
            args: Prisma.restaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.restaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.restaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      review_image: {
        payload: Prisma.$review_imagePayload<ExtArgs>
        fields: Prisma.review_imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.review_imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.review_imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>
          }
          findFirst: {
            args: Prisma.review_imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.review_imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>
          }
          findMany: {
            args: Prisma.review_imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>[]
          }
          create: {
            args: Prisma.review_imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>
          }
          createMany: {
            args: Prisma.review_imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.review_imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>
          }
          update: {
            args: Prisma.review_imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>
          }
          deleteMany: {
            args: Prisma.review_imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.review_imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.review_imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$review_imagePayload>
          }
          aggregate: {
            args: Prisma.Review_imageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview_image>
          }
          groupBy: {
            args: Prisma.review_imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Review_imageGroupByOutputType>[]
          }
          count: {
            args: Prisma.review_imageCountArgs<ExtArgs>
            result: $Utils.Optional<Review_imageCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      allergy: {
        payload: Prisma.$allergyPayload<ExtArgs>
        fields: Prisma.allergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.allergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.allergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          findFirst: {
            args: Prisma.allergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.allergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          findMany: {
            args: Prisma.allergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>[]
          }
          create: {
            args: Prisma.allergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          createMany: {
            args: Prisma.allergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.allergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          update: {
            args: Prisma.allergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          deleteMany: {
            args: Prisma.allergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.allergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.allergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergyPayload>
          }
          aggregate: {
            args: Prisma.AllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergy>
          }
          groupBy: {
            args: Prisma.allergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.allergyCountArgs<ExtArgs>
            result: $Utils.Optional<AllergyCountAggregateOutputType> | number
          }
        }
      }
      prefer: {
        payload: Prisma.$preferPayload<ExtArgs>
        fields: Prisma.preferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          findFirst: {
            args: Prisma.preferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          findMany: {
            args: Prisma.preferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>[]
          }
          create: {
            args: Prisma.preferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          createMany: {
            args: Prisma.preferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.preferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          update: {
            args: Prisma.preferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          deleteMany: {
            args: Prisma.preferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.preferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferPayload>
          }
          aggregate: {
            args: Prisma.PreferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrefer>
          }
          groupBy: {
            args: Prisma.preferGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferGroupByOutputType>[]
          }
          count: {
            args: Prisma.preferCountArgs<ExtArgs>
            result: $Utils.Optional<PreferCountAggregateOutputType> | number
          }
        }
      }
      zzim: {
        payload: Prisma.$zzimPayload<ExtArgs>
        fields: Prisma.zzimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zzimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zzimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>
          }
          findFirst: {
            args: Prisma.zzimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zzimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>
          }
          findMany: {
            args: Prisma.zzimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>[]
          }
          create: {
            args: Prisma.zzimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>
          }
          createMany: {
            args: Prisma.zzimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.zzimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>
          }
          update: {
            args: Prisma.zzimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>
          }
          deleteMany: {
            args: Prisma.zzimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zzimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.zzimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zzimPayload>
          }
          aggregate: {
            args: Prisma.ZzimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZzim>
          }
          groupBy: {
            args: Prisma.zzimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZzimGroupByOutputType>[]
          }
          count: {
            args: Prisma.zzimCountArgs<ExtArgs>
            result: $Utils.Optional<ZzimCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    choice?: choiceOmit
    menu?: menuOmit
    mukburim?: mukburimOmit
    recommend_except?: recommend_exceptOmit
    report?: reportOmit
    rest_image?: rest_imageOmit
    rest_menu?: rest_menuOmit
    restaurant?: restaurantOmit
    review?: reviewOmit
    review_image?: review_imageOmit
    sessions?: sessionsOmit
    user?: userOmit
    allergy?: allergyOmit
    prefer?: preferOmit
    zzim?: zzimOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    mukburim: number
    recommend_except: number
    rest_menu: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mukburim?: boolean | MenuCountOutputTypeCountMukburimArgs
    recommend_except?: boolean | MenuCountOutputTypeCountRecommend_exceptArgs
    rest_menu?: boolean | MenuCountOutputTypeCountRest_menuArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMukburimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mukburimWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountRecommend_exceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_exceptWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountRest_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rest_menuWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    rest_image: number
    rest_menu: number
    review: number
    zzim: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rest_image?: boolean | RestaurantCountOutputTypeCountRest_imageArgs
    rest_menu?: boolean | RestaurantCountOutputTypeCountRest_menuArgs
    review?: boolean | RestaurantCountOutputTypeCountReviewArgs
    zzim?: boolean | RestaurantCountOutputTypeCountZzimArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountRest_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rest_imageWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountRest_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rest_menuWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountZzimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zzimWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    report: number
    review_image: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReviewCountOutputTypeCountReportArgs
    review_image?: boolean | ReviewCountOutputTypeCountReview_imageArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReview_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: review_imageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    allergy: number
    mukburim: number
    prefer: number
    recommend_except: number
    report: number
    review: number
    zzim: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergy?: boolean | UserCountOutputTypeCountAllergyArgs
    mukburim?: boolean | UserCountOutputTypeCountMukburimArgs
    prefer?: boolean | UserCountOutputTypeCountPreferArgs
    recommend_except?: boolean | UserCountOutputTypeCountRecommend_exceptArgs
    report?: boolean | UserCountOutputTypeCountReportArgs
    review?: boolean | UserCountOutputTypeCountReviewArgs
    zzim?: boolean | UserCountOutputTypeCountZzimArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAllergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: allergyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMukburimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mukburimWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommend_exceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_exceptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountZzimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zzimWhereInput
  }


  /**
   * Models
   */

  /**
   * Model choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    id: bigint | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: bigint | null
    description: string | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: bigint | null
    description: string | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which choice to aggregate.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type choiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choiceWhereInput
    orderBy?: choiceOrderByWithAggregationInput | choiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: choiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _avg?: ChoiceAvgAggregateInputType
    _sum?: ChoiceSumAggregateInputType
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    id: bigint
    description: string | null
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends choiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type choiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["choice"]>



  export type choiceSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type choiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description", ExtArgs["result"]["choice"]>

  export type $choicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "choice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      description: string | null
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type choiceGetPayload<S extends boolean | null | undefined | choiceDefaultArgs> = $Result.GetResult<Prisma.$choicePayload, S>

  type choiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<choiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface choiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['choice'], meta: { name: 'choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {choiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends choiceFindUniqueArgs>(args: SelectSubset<T, choiceFindUniqueArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {choiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends choiceFindUniqueOrThrowArgs>(args: SelectSubset<T, choiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends choiceFindFirstArgs>(args?: SelectSubset<T, choiceFindFirstArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends choiceFindFirstOrThrowArgs>(args?: SelectSubset<T, choiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choiceWithIdOnly = await prisma.choice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends choiceFindManyArgs>(args?: SelectSubset<T, choiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choice.
     * @param {choiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends choiceCreateArgs>(args: SelectSubset<T, choiceCreateArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choices.
     * @param {choiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends choiceCreateManyArgs>(args?: SelectSubset<T, choiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Choice.
     * @param {choiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends choiceDeleteArgs>(args: SelectSubset<T, choiceDeleteArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choice.
     * @param {choiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends choiceUpdateArgs>(args: SelectSubset<T, choiceUpdateArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choices.
     * @param {choiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends choiceDeleteManyArgs>(args?: SelectSubset<T, choiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends choiceUpdateManyArgs>(args: SelectSubset<T, choiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choice.
     * @param {choiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends choiceUpsertArgs>(args: SelectSubset<T, choiceUpsertArgs<ExtArgs>>): Prisma__choiceClient<$Result.GetResult<Prisma.$choicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends choiceCountArgs>(
      args?: Subset<T, choiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends choiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: choiceGroupByArgs['orderBy'] }
        : { orderBy?: choiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, choiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the choice model
   */
  readonly fields: choiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__choiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the choice model
   */
  interface choiceFieldRefs {
    readonly id: FieldRef<"choice", 'BigInt'>
    readonly description: FieldRef<"choice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * choice findUnique
   */
  export type choiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice findUniqueOrThrow
   */
  export type choiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice findFirst
   */
  export type choiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for choices.
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * choice findFirstOrThrow
   */
  export type choiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Filter, which choice to fetch.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for choices.
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * choice findMany
   */
  export type choiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where?: choiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choiceOrderByWithRelationInput | choiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing choices.
     */
    cursor?: choiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * choice create
   */
  export type choiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * The data needed to create a choice.
     */
    data?: XOR<choiceCreateInput, choiceUncheckedCreateInput>
  }

  /**
   * choice createMany
   */
  export type choiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many choices.
     */
    data: choiceCreateManyInput | choiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * choice update
   */
  export type choiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * The data needed to update a choice.
     */
    data: XOR<choiceUpdateInput, choiceUncheckedUpdateInput>
    /**
     * Choose, which choice to update.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice updateMany
   */
  export type choiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update choices.
     */
    data: XOR<choiceUpdateManyMutationInput, choiceUncheckedUpdateManyInput>
    /**
     * Filter which choices to update
     */
    where?: choiceWhereInput
    /**
     * Limit how many choices to update.
     */
    limit?: number
  }

  /**
   * choice upsert
   */
  export type choiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * The filter to search for the choice to update in case it exists.
     */
    where: choiceWhereUniqueInput
    /**
     * In case the choice found by the `where` argument doesn't exist, create a new choice with this data.
     */
    create: XOR<choiceCreateInput, choiceUncheckedCreateInput>
    /**
     * In case the choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<choiceUpdateInput, choiceUncheckedUpdateInput>
  }

  /**
   * choice delete
   */
  export type choiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
    /**
     * Filter which choice to delete.
     */
    where: choiceWhereUniqueInput
  }

  /**
   * choice deleteMany
   */
  export type choiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which choices to delete
     */
    where?: choiceWhereInput
    /**
     * Limit how many choices to delete.
     */
    limit?: number
  }

  /**
   * choice without action
   */
  export type choiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choice
     */
    select?: choiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the choice
     */
    omit?: choiceOmit<ExtArgs> | null
  }


  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    calory: number | null
    carbo: number | null
    protein: number | null
    fat: number | null
    sodium: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: bigint | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    sodium: bigint | null
  }

  export type MenuMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    vitamin: string | null
    allergic: string | null
    sodium: bigint | null
    image_link: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    vitamin: string | null
    allergic: string | null
    sodium: bigint | null
    image_link: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    description: number
    calory: number
    carbo: number
    protein: number
    fat: number
    vitamin: number
    allergic: number
    sodium: number
    image_link: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    sodium?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    vitamin?: true
    allergic?: true
    sodium?: true
    image_link?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    vitamin?: true
    allergic?: true
    sodium?: true
    image_link?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    calory?: true
    carbo?: true
    protein?: true
    fat?: true
    vitamin?: true
    allergic?: true
    sodium?: true
    image_link?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    calory: bigint | null
    carbo: bigint | null
    protein: bigint | null
    fat: bigint | null
    vitamin: string | null
    allergic: string | null
    sodium: bigint | null
    image_link: string | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    calory?: boolean
    carbo?: boolean
    protein?: boolean
    fat?: boolean
    vitamin?: boolean
    allergic?: boolean
    sodium?: boolean
    image_link?: boolean
    mukburim?: boolean | menu$mukburimArgs<ExtArgs>
    recommend_except?: boolean | menu$recommend_exceptArgs<ExtArgs>
    rest_menu?: boolean | menu$rest_menuArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>



  export type menuSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    calory?: boolean
    carbo?: boolean
    protein?: boolean
    fat?: boolean
    vitamin?: boolean
    allergic?: boolean
    sodium?: boolean
    image_link?: boolean
  }

  export type menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "calory" | "carbo" | "protein" | "fat" | "vitamin" | "allergic" | "sodium" | "image_link", ExtArgs["result"]["menu"]>
  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mukburim?: boolean | menu$mukburimArgs<ExtArgs>
    recommend_except?: boolean | menu$recommend_exceptArgs<ExtArgs>
    rest_menu?: boolean | menu$rest_menuArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      mukburim: Prisma.$mukburimPayload<ExtArgs>[]
      recommend_except: Prisma.$recommend_exceptPayload<ExtArgs>[]
      rest_menu: Prisma.$rest_menuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      calory: bigint | null
      carbo: bigint | null
      protein: bigint | null
      fat: bigint | null
      vitamin: string | null
      allergic: string | null
      sodium: bigint | null
      image_link: string | null
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<Prisma.$menuPayload, S>

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu'], meta: { name: 'menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuFindManyArgs>(args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends menuCreateArgs>(args: SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuCreateManyArgs>(args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends menuDeleteArgs>(args: SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuUpdateArgs>(args: SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuUpdateManyArgs>(args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu model
   */
  readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mukburim<T extends menu$mukburimArgs<ExtArgs> = {}>(args?: Subset<T, menu$mukburimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommend_except<T extends menu$recommend_exceptArgs<ExtArgs> = {}>(args?: Subset<T, menu$recommend_exceptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rest_menu<T extends menu$rest_menuArgs<ExtArgs> = {}>(args?: Subset<T, menu$rest_menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu model
   */
  interface menuFieldRefs {
    readonly id: FieldRef<"menu", 'BigInt'>
    readonly name: FieldRef<"menu", 'String'>
    readonly description: FieldRef<"menu", 'String'>
    readonly calory: FieldRef<"menu", 'BigInt'>
    readonly carbo: FieldRef<"menu", 'BigInt'>
    readonly protein: FieldRef<"menu", 'BigInt'>
    readonly fat: FieldRef<"menu", 'BigInt'>
    readonly vitamin: FieldRef<"menu", 'String'>
    readonly allergic: FieldRef<"menu", 'String'>
    readonly sodium: FieldRef<"menu", 'BigInt'>
    readonly image_link: FieldRef<"menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to delete.
     */
    limit?: number
  }

  /**
   * menu.mukburim
   */
  export type menu$mukburimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    where?: mukburimWhereInput
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    cursor?: mukburimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * menu.recommend_except
   */
  export type menu$recommend_exceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    where?: recommend_exceptWhereInput
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    cursor?: recommend_exceptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * menu.rest_menu
   */
  export type menu$rest_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    where?: rest_menuWhereInput
    orderBy?: rest_menuOrderByWithRelationInput | rest_menuOrderByWithRelationInput[]
    cursor?: rest_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rest_menuScalarFieldEnum | Rest_menuScalarFieldEnum[]
  }

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
  }


  /**
   * Model mukburim
   */

  export type AggregateMukburim = {
    _count: MukburimCountAggregateOutputType | null
    _avg: MukburimAvgAggregateOutputType | null
    _sum: MukburimSumAggregateOutputType | null
    _min: MukburimMinAggregateOutputType | null
    _max: MukburimMaxAggregateOutputType | null
  }

  export type MukburimAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    menu_id: number | null
  }

  export type MukburimSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    menu_id: bigint | null
  }

  export type MukburimMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    menu_id: bigint | null
    date: Date | null
  }

  export type MukburimMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    menu_id: bigint | null
    date: Date | null
  }

  export type MukburimCountAggregateOutputType = {
    id: number
    user_id: number
    menu_id: number
    date: number
    _all: number
  }


  export type MukburimAvgAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
  }

  export type MukburimSumAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
  }

  export type MukburimMinAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
    date?: true
  }

  export type MukburimMaxAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
    date?: true
  }

  export type MukburimCountAggregateInputType = {
    id?: true
    user_id?: true
    menu_id?: true
    date?: true
    _all?: true
  }

  export type MukburimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mukburim to aggregate.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mukburims
    **/
    _count?: true | MukburimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MukburimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MukburimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MukburimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MukburimMaxAggregateInputType
  }

  export type GetMukburimAggregateType<T extends MukburimAggregateArgs> = {
        [P in keyof T & keyof AggregateMukburim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMukburim[P]>
      : GetScalarType<T[P], AggregateMukburim[P]>
  }




  export type mukburimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mukburimWhereInput
    orderBy?: mukburimOrderByWithAggregationInput | mukburimOrderByWithAggregationInput[]
    by: MukburimScalarFieldEnum[] | MukburimScalarFieldEnum
    having?: mukburimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MukburimCountAggregateInputType | true
    _avg?: MukburimAvgAggregateInputType
    _sum?: MukburimSumAggregateInputType
    _min?: MukburimMinAggregateInputType
    _max?: MukburimMaxAggregateInputType
  }

  export type MukburimGroupByOutputType = {
    id: bigint
    user_id: bigint
    menu_id: bigint
    date: Date | null
    _count: MukburimCountAggregateOutputType | null
    _avg: MukburimAvgAggregateOutputType | null
    _sum: MukburimSumAggregateOutputType | null
    _min: MukburimMinAggregateOutputType | null
    _max: MukburimMaxAggregateOutputType | null
  }

  type GetMukburimGroupByPayload<T extends mukburimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MukburimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MukburimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MukburimGroupByOutputType[P]>
            : GetScalarType<T[P], MukburimGroupByOutputType[P]>
        }
      >
    >


  export type mukburimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    menu_id?: boolean
    date?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mukburim"]>



  export type mukburimSelectScalar = {
    id?: boolean
    user_id?: boolean
    menu_id?: boolean
    date?: boolean
  }

  export type mukburimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "menu_id" | "date", ExtArgs["result"]["mukburim"]>
  export type mukburimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $mukburimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mukburim"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      menu_id: bigint
      date: Date | null
    }, ExtArgs["result"]["mukburim"]>
    composites: {}
  }

  type mukburimGetPayload<S extends boolean | null | undefined | mukburimDefaultArgs> = $Result.GetResult<Prisma.$mukburimPayload, S>

  type mukburimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mukburimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MukburimCountAggregateInputType | true
    }

  export interface mukburimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mukburim'], meta: { name: 'mukburim' } }
    /**
     * Find zero or one Mukburim that matches the filter.
     * @param {mukburimFindUniqueArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mukburimFindUniqueArgs>(args: SelectSubset<T, mukburimFindUniqueArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mukburim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mukburimFindUniqueOrThrowArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mukburimFindUniqueOrThrowArgs>(args: SelectSubset<T, mukburimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mukburim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimFindFirstArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mukburimFindFirstArgs>(args?: SelectSubset<T, mukburimFindFirstArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mukburim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimFindFirstOrThrowArgs} args - Arguments to find a Mukburim
     * @example
     * // Get one Mukburim
     * const mukburim = await prisma.mukburim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mukburimFindFirstOrThrowArgs>(args?: SelectSubset<T, mukburimFindFirstOrThrowArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mukburims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mukburims
     * const mukburims = await prisma.mukburim.findMany()
     * 
     * // Get first 10 Mukburims
     * const mukburims = await prisma.mukburim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mukburimWithIdOnly = await prisma.mukburim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mukburimFindManyArgs>(args?: SelectSubset<T, mukburimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mukburim.
     * @param {mukburimCreateArgs} args - Arguments to create a Mukburim.
     * @example
     * // Create one Mukburim
     * const Mukburim = await prisma.mukburim.create({
     *   data: {
     *     // ... data to create a Mukburim
     *   }
     * })
     * 
     */
    create<T extends mukburimCreateArgs>(args: SelectSubset<T, mukburimCreateArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mukburims.
     * @param {mukburimCreateManyArgs} args - Arguments to create many Mukburims.
     * @example
     * // Create many Mukburims
     * const mukburim = await prisma.mukburim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mukburimCreateManyArgs>(args?: SelectSubset<T, mukburimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mukburim.
     * @param {mukburimDeleteArgs} args - Arguments to delete one Mukburim.
     * @example
     * // Delete one Mukburim
     * const Mukburim = await prisma.mukburim.delete({
     *   where: {
     *     // ... filter to delete one Mukburim
     *   }
     * })
     * 
     */
    delete<T extends mukburimDeleteArgs>(args: SelectSubset<T, mukburimDeleteArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mukburim.
     * @param {mukburimUpdateArgs} args - Arguments to update one Mukburim.
     * @example
     * // Update one Mukburim
     * const mukburim = await prisma.mukburim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mukburimUpdateArgs>(args: SelectSubset<T, mukburimUpdateArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mukburims.
     * @param {mukburimDeleteManyArgs} args - Arguments to filter Mukburims to delete.
     * @example
     * // Delete a few Mukburims
     * const { count } = await prisma.mukburim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mukburimDeleteManyArgs>(args?: SelectSubset<T, mukburimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mukburims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mukburims
     * const mukburim = await prisma.mukburim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mukburimUpdateManyArgs>(args: SelectSubset<T, mukburimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mukburim.
     * @param {mukburimUpsertArgs} args - Arguments to update or create a Mukburim.
     * @example
     * // Update or create a Mukburim
     * const mukburim = await prisma.mukburim.upsert({
     *   create: {
     *     // ... data to create a Mukburim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mukburim we want to update
     *   }
     * })
     */
    upsert<T extends mukburimUpsertArgs>(args: SelectSubset<T, mukburimUpsertArgs<ExtArgs>>): Prisma__mukburimClient<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mukburims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimCountArgs} args - Arguments to filter Mukburims to count.
     * @example
     * // Count the number of Mukburims
     * const count = await prisma.mukburim.count({
     *   where: {
     *     // ... the filter for the Mukburims we want to count
     *   }
     * })
    **/
    count<T extends mukburimCountArgs>(
      args?: Subset<T, mukburimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MukburimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mukburim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MukburimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MukburimAggregateArgs>(args: Subset<T, MukburimAggregateArgs>): Prisma.PrismaPromise<GetMukburimAggregateType<T>>

    /**
     * Group by Mukburim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mukburimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mukburimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mukburimGroupByArgs['orderBy'] }
        : { orderBy?: mukburimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mukburimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMukburimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mukburim model
   */
  readonly fields: mukburimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mukburim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mukburimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mukburim model
   */
  interface mukburimFieldRefs {
    readonly id: FieldRef<"mukburim", 'BigInt'>
    readonly user_id: FieldRef<"mukburim", 'BigInt'>
    readonly menu_id: FieldRef<"mukburim", 'BigInt'>
    readonly date: FieldRef<"mukburim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mukburim findUnique
   */
  export type mukburimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim findUniqueOrThrow
   */
  export type mukburimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim findFirst
   */
  export type mukburimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mukburims.
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mukburims.
     */
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * mukburim findFirstOrThrow
   */
  export type mukburimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburim to fetch.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mukburims.
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mukburims.
     */
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * mukburim findMany
   */
  export type mukburimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter, which mukburims to fetch.
     */
    where?: mukburimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mukburims to fetch.
     */
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mukburims.
     */
    cursor?: mukburimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mukburims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mukburims.
     */
    skip?: number
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * mukburim create
   */
  export type mukburimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * The data needed to create a mukburim.
     */
    data: XOR<mukburimCreateInput, mukburimUncheckedCreateInput>
  }

  /**
   * mukburim createMany
   */
  export type mukburimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mukburims.
     */
    data: mukburimCreateManyInput | mukburimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mukburim update
   */
  export type mukburimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * The data needed to update a mukburim.
     */
    data: XOR<mukburimUpdateInput, mukburimUncheckedUpdateInput>
    /**
     * Choose, which mukburim to update.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim updateMany
   */
  export type mukburimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mukburims.
     */
    data: XOR<mukburimUpdateManyMutationInput, mukburimUncheckedUpdateManyInput>
    /**
     * Filter which mukburims to update
     */
    where?: mukburimWhereInput
    /**
     * Limit how many mukburims to update.
     */
    limit?: number
  }

  /**
   * mukburim upsert
   */
  export type mukburimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * The filter to search for the mukburim to update in case it exists.
     */
    where: mukburimWhereUniqueInput
    /**
     * In case the mukburim found by the `where` argument doesn't exist, create a new mukburim with this data.
     */
    create: XOR<mukburimCreateInput, mukburimUncheckedCreateInput>
    /**
     * In case the mukburim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mukburimUpdateInput, mukburimUncheckedUpdateInput>
  }

  /**
   * mukburim delete
   */
  export type mukburimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    /**
     * Filter which mukburim to delete.
     */
    where: mukburimWhereUniqueInput
  }

  /**
   * mukburim deleteMany
   */
  export type mukburimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mukburims to delete
     */
    where?: mukburimWhereInput
    /**
     * Limit how many mukburims to delete.
     */
    limit?: number
  }

  /**
   * mukburim without action
   */
  export type mukburimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
  }


  /**
   * Model recommend_except
   */

  export type AggregateRecommend_except = {
    _count: Recommend_exceptCountAggregateOutputType | null
    _avg: Recommend_exceptAvgAggregateOutputType | null
    _sum: Recommend_exceptSumAggregateOutputType | null
    _min: Recommend_exceptMinAggregateOutputType | null
    _max: Recommend_exceptMaxAggregateOutputType | null
  }

  export type Recommend_exceptAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    user_id: number | null
  }

  export type Recommend_exceptSumAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    user_id: bigint | null
  }

  export type Recommend_exceptMinAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    user_id: bigint | null
    bit: boolean | null
  }

  export type Recommend_exceptMaxAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    user_id: bigint | null
    bit: boolean | null
  }

  export type Recommend_exceptCountAggregateOutputType = {
    id: number
    menu_id: number
    user_id: number
    bit: number
    _all: number
  }


  export type Recommend_exceptAvgAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
  }

  export type Recommend_exceptSumAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
  }

  export type Recommend_exceptMinAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    bit?: true
  }

  export type Recommend_exceptMaxAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    bit?: true
  }

  export type Recommend_exceptCountAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    bit?: true
    _all?: true
  }

  export type Recommend_exceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_except to aggregate.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recommend_excepts
    **/
    _count?: true | Recommend_exceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recommend_exceptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recommend_exceptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recommend_exceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recommend_exceptMaxAggregateInputType
  }

  export type GetRecommend_exceptAggregateType<T extends Recommend_exceptAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommend_except]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommend_except[P]>
      : GetScalarType<T[P], AggregateRecommend_except[P]>
  }




  export type recommend_exceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_exceptWhereInput
    orderBy?: recommend_exceptOrderByWithAggregationInput | recommend_exceptOrderByWithAggregationInput[]
    by: Recommend_exceptScalarFieldEnum[] | Recommend_exceptScalarFieldEnum
    having?: recommend_exceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recommend_exceptCountAggregateInputType | true
    _avg?: Recommend_exceptAvgAggregateInputType
    _sum?: Recommend_exceptSumAggregateInputType
    _min?: Recommend_exceptMinAggregateInputType
    _max?: Recommend_exceptMaxAggregateInputType
  }

  export type Recommend_exceptGroupByOutputType = {
    id: bigint
    menu_id: bigint
    user_id: bigint
    bit: boolean | null
    _count: Recommend_exceptCountAggregateOutputType | null
    _avg: Recommend_exceptAvgAggregateOutputType | null
    _sum: Recommend_exceptSumAggregateOutputType | null
    _min: Recommend_exceptMinAggregateOutputType | null
    _max: Recommend_exceptMaxAggregateOutputType | null
  }

  type GetRecommend_exceptGroupByPayload<T extends recommend_exceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recommend_exceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recommend_exceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recommend_exceptGroupByOutputType[P]>
            : GetScalarType<T[P], Recommend_exceptGroupByOutputType[P]>
        }
      >
    >


  export type recommend_exceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_id?: boolean
    user_id?: boolean
    bit?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommend_except"]>



  export type recommend_exceptSelectScalar = {
    id?: boolean
    menu_id?: boolean
    user_id?: boolean
    bit?: boolean
  }

  export type recommend_exceptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_id" | "user_id" | "bit", ExtArgs["result"]["recommend_except"]>
  export type recommend_exceptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $recommend_exceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recommend_except"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      menu_id: bigint
      user_id: bigint
      bit: boolean | null
    }, ExtArgs["result"]["recommend_except"]>
    composites: {}
  }

  type recommend_exceptGetPayload<S extends boolean | null | undefined | recommend_exceptDefaultArgs> = $Result.GetResult<Prisma.$recommend_exceptPayload, S>

  type recommend_exceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recommend_exceptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recommend_exceptCountAggregateInputType | true
    }

  export interface recommend_exceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recommend_except'], meta: { name: 'recommend_except' } }
    /**
     * Find zero or one Recommend_except that matches the filter.
     * @param {recommend_exceptFindUniqueArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recommend_exceptFindUniqueArgs>(args: SelectSubset<T, recommend_exceptFindUniqueArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommend_except that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recommend_exceptFindUniqueOrThrowArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recommend_exceptFindUniqueOrThrowArgs>(args: SelectSubset<T, recommend_exceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommend_except that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptFindFirstArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recommend_exceptFindFirstArgs>(args?: SelectSubset<T, recommend_exceptFindFirstArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommend_except that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptFindFirstOrThrowArgs} args - Arguments to find a Recommend_except
     * @example
     * // Get one Recommend_except
     * const recommend_except = await prisma.recommend_except.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recommend_exceptFindFirstOrThrowArgs>(args?: SelectSubset<T, recommend_exceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommend_excepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommend_excepts
     * const recommend_excepts = await prisma.recommend_except.findMany()
     * 
     * // Get first 10 Recommend_excepts
     * const recommend_excepts = await prisma.recommend_except.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommend_exceptWithIdOnly = await prisma.recommend_except.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recommend_exceptFindManyArgs>(args?: SelectSubset<T, recommend_exceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommend_except.
     * @param {recommend_exceptCreateArgs} args - Arguments to create a Recommend_except.
     * @example
     * // Create one Recommend_except
     * const Recommend_except = await prisma.recommend_except.create({
     *   data: {
     *     // ... data to create a Recommend_except
     *   }
     * })
     * 
     */
    create<T extends recommend_exceptCreateArgs>(args: SelectSubset<T, recommend_exceptCreateArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommend_excepts.
     * @param {recommend_exceptCreateManyArgs} args - Arguments to create many Recommend_excepts.
     * @example
     * // Create many Recommend_excepts
     * const recommend_except = await prisma.recommend_except.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recommend_exceptCreateManyArgs>(args?: SelectSubset<T, recommend_exceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recommend_except.
     * @param {recommend_exceptDeleteArgs} args - Arguments to delete one Recommend_except.
     * @example
     * // Delete one Recommend_except
     * const Recommend_except = await prisma.recommend_except.delete({
     *   where: {
     *     // ... filter to delete one Recommend_except
     *   }
     * })
     * 
     */
    delete<T extends recommend_exceptDeleteArgs>(args: SelectSubset<T, recommend_exceptDeleteArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommend_except.
     * @param {recommend_exceptUpdateArgs} args - Arguments to update one Recommend_except.
     * @example
     * // Update one Recommend_except
     * const recommend_except = await prisma.recommend_except.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recommend_exceptUpdateArgs>(args: SelectSubset<T, recommend_exceptUpdateArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommend_excepts.
     * @param {recommend_exceptDeleteManyArgs} args - Arguments to filter Recommend_excepts to delete.
     * @example
     * // Delete a few Recommend_excepts
     * const { count } = await prisma.recommend_except.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recommend_exceptDeleteManyArgs>(args?: SelectSubset<T, recommend_exceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommend_excepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommend_excepts
     * const recommend_except = await prisma.recommend_except.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recommend_exceptUpdateManyArgs>(args: SelectSubset<T, recommend_exceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommend_except.
     * @param {recommend_exceptUpsertArgs} args - Arguments to update or create a Recommend_except.
     * @example
     * // Update or create a Recommend_except
     * const recommend_except = await prisma.recommend_except.upsert({
     *   create: {
     *     // ... data to create a Recommend_except
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommend_except we want to update
     *   }
     * })
     */
    upsert<T extends recommend_exceptUpsertArgs>(args: SelectSubset<T, recommend_exceptUpsertArgs<ExtArgs>>): Prisma__recommend_exceptClient<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommend_excepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptCountArgs} args - Arguments to filter Recommend_excepts to count.
     * @example
     * // Count the number of Recommend_excepts
     * const count = await prisma.recommend_except.count({
     *   where: {
     *     // ... the filter for the Recommend_excepts we want to count
     *   }
     * })
    **/
    count<T extends recommend_exceptCountArgs>(
      args?: Subset<T, recommend_exceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recommend_exceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommend_except.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recommend_exceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recommend_exceptAggregateArgs>(args: Subset<T, Recommend_exceptAggregateArgs>): Prisma.PrismaPromise<GetRecommend_exceptAggregateType<T>>

    /**
     * Group by Recommend_except.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_exceptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recommend_exceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recommend_exceptGroupByArgs['orderBy'] }
        : { orderBy?: recommend_exceptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recommend_exceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommend_exceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recommend_except model
   */
  readonly fields: recommend_exceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recommend_except.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recommend_exceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recommend_except model
   */
  interface recommend_exceptFieldRefs {
    readonly id: FieldRef<"recommend_except", 'BigInt'>
    readonly menu_id: FieldRef<"recommend_except", 'BigInt'>
    readonly user_id: FieldRef<"recommend_except", 'BigInt'>
    readonly bit: FieldRef<"recommend_except", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * recommend_except findUnique
   */
  export type recommend_exceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except findUniqueOrThrow
   */
  export type recommend_exceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except findFirst
   */
  export type recommend_exceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_excepts.
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_excepts.
     */
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * recommend_except findFirstOrThrow
   */
  export type recommend_exceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * Filter, which recommend_except to fetch.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_excepts.
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_excepts.
     */
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * recommend_except findMany
   */
  export type recommend_exceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * Filter, which recommend_excepts to fetch.
     */
    where?: recommend_exceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_excepts to fetch.
     */
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recommend_excepts.
     */
    cursor?: recommend_exceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_excepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_excepts.
     */
    skip?: number
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * recommend_except create
   */
  export type recommend_exceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * The data needed to create a recommend_except.
     */
    data: XOR<recommend_exceptCreateInput, recommend_exceptUncheckedCreateInput>
  }

  /**
   * recommend_except createMany
   */
  export type recommend_exceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recommend_excepts.
     */
    data: recommend_exceptCreateManyInput | recommend_exceptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recommend_except update
   */
  export type recommend_exceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * The data needed to update a recommend_except.
     */
    data: XOR<recommend_exceptUpdateInput, recommend_exceptUncheckedUpdateInput>
    /**
     * Choose, which recommend_except to update.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except updateMany
   */
  export type recommend_exceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recommend_excepts.
     */
    data: XOR<recommend_exceptUpdateManyMutationInput, recommend_exceptUncheckedUpdateManyInput>
    /**
     * Filter which recommend_excepts to update
     */
    where?: recommend_exceptWhereInput
    /**
     * Limit how many recommend_excepts to update.
     */
    limit?: number
  }

  /**
   * recommend_except upsert
   */
  export type recommend_exceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * The filter to search for the recommend_except to update in case it exists.
     */
    where: recommend_exceptWhereUniqueInput
    /**
     * In case the recommend_except found by the `where` argument doesn't exist, create a new recommend_except with this data.
     */
    create: XOR<recommend_exceptCreateInput, recommend_exceptUncheckedCreateInput>
    /**
     * In case the recommend_except was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recommend_exceptUpdateInput, recommend_exceptUncheckedUpdateInput>
  }

  /**
   * recommend_except delete
   */
  export type recommend_exceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    /**
     * Filter which recommend_except to delete.
     */
    where: recommend_exceptWhereUniqueInput
  }

  /**
   * recommend_except deleteMany
   */
  export type recommend_exceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_excepts to delete
     */
    where?: recommend_exceptWhereInput
    /**
     * Limit how many recommend_excepts to delete.
     */
    limit?: number
  }

  /**
   * recommend_except without action
   */
  export type recommend_exceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
  }


  /**
   * Model report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    review_id: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    review_id: bigint | null
  }

  export type ReportMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    review_id: bigint | null
    text: string | null
  }

  export type ReportMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    review_id: bigint | null
    text: string | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    user_id: number
    review_id: number
    text: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    user_id?: true
    review_id?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    user_id?: true
    review_id?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    user_id?: true
    review_id?: true
    text?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    user_id?: true
    review_id?: true
    text?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    user_id?: true
    review_id?: true
    text?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report to aggregate.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
    orderBy?: reportOrderByWithAggregationInput | reportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: bigint
    user_id: bigint
    review_id: bigint
    text: string | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    review_id?: boolean
    text?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    review?: boolean | reviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type reportSelectScalar = {
    id?: boolean
    user_id?: boolean
    review_id?: boolean
    text?: boolean
  }

  export type reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "review_id" | "text", ExtArgs["result"]["report"]>
  export type reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    review?: boolean | reviewDefaultArgs<ExtArgs>
  }

  export type $reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      review: Prisma.$reviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      review_id: bigint
      text: string | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type reportGetPayload<S extends boolean | null | undefined | reportDefaultArgs> = $Result.GetResult<Prisma.$reportPayload, S>

  type reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report'], meta: { name: 'report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {reportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportFindUniqueArgs>(args: SelectSubset<T, reportFindUniqueArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportFindUniqueOrThrowArgs>(args: SelectSubset<T, reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportFindFirstArgs>(args?: SelectSubset<T, reportFindFirstArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportFindFirstOrThrowArgs>(args?: SelectSubset<T, reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportFindManyArgs>(args?: SelectSubset<T, reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {reportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends reportCreateArgs>(args: SelectSubset<T, reportCreateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportCreateManyArgs>(args?: SelectSubset<T, reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {reportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends reportDeleteArgs>(args: SelectSubset<T, reportDeleteArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {reportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportUpdateArgs>(args: SelectSubset<T, reportUpdateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportDeleteManyArgs>(args?: SelectSubset<T, reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportUpdateManyArgs>(args: SelectSubset<T, reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {reportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends reportUpsertArgs>(args: SelectSubset<T, reportUpsertArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportCountArgs>(
      args?: Subset<T, reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportGroupByArgs['orderBy'] }
        : { orderBy?: reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report model
   */
  readonly fields: reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends reviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reviewDefaultArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the report model
   */
  interface reportFieldRefs {
    readonly id: FieldRef<"report", 'BigInt'>
    readonly user_id: FieldRef<"report", 'BigInt'>
    readonly review_id: FieldRef<"report", 'BigInt'>
    readonly text: FieldRef<"report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * report findUnique
   */
  export type reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findUniqueOrThrow
   */
  export type reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findFirst
   */
  export type reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findFirstOrThrow
   */
  export type reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findMany
   */
  export type reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report create
   */
  export type reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to create a report.
     */
    data: XOR<reportCreateInput, reportUncheckedCreateInput>
  }

  /**
   * report createMany
   */
  export type reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report update
   */
  export type reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to update a report.
     */
    data: XOR<reportUpdateInput, reportUncheckedUpdateInput>
    /**
     * Choose, which report to update.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report updateMany
   */
  export type reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * report upsert
   */
  export type reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The filter to search for the report to update in case it exists.
     */
    where: reportWhereUniqueInput
    /**
     * In case the report found by the `where` argument doesn't exist, create a new report with this data.
     */
    create: XOR<reportCreateInput, reportUncheckedCreateInput>
    /**
     * In case the report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportUpdateInput, reportUncheckedUpdateInput>
  }

  /**
   * report delete
   */
  export type reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter which report to delete.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report deleteMany
   */
  export type reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * report without action
   */
  export type reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
  }


  /**
   * Model rest_image
   */

  export type AggregateRest_image = {
    _count: Rest_imageCountAggregateOutputType | null
    _avg: Rest_imageAvgAggregateOutputType | null
    _sum: Rest_imageSumAggregateOutputType | null
    _min: Rest_imageMinAggregateOutputType | null
    _max: Rest_imageMaxAggregateOutputType | null
  }

  export type Rest_imageAvgAggregateOutputType = {
    id: number | null
    rest_id: number | null
  }

  export type Rest_imageSumAggregateOutputType = {
    id: bigint | null
    rest_id: bigint | null
  }

  export type Rest_imageMinAggregateOutputType = {
    id: bigint | null
    rest_id: bigint | null
    link: string | null
  }

  export type Rest_imageMaxAggregateOutputType = {
    id: bigint | null
    rest_id: bigint | null
    link: string | null
  }

  export type Rest_imageCountAggregateOutputType = {
    id: number
    rest_id: number
    link: number
    _all: number
  }


  export type Rest_imageAvgAggregateInputType = {
    id?: true
    rest_id?: true
  }

  export type Rest_imageSumAggregateInputType = {
    id?: true
    rest_id?: true
  }

  export type Rest_imageMinAggregateInputType = {
    id?: true
    rest_id?: true
    link?: true
  }

  export type Rest_imageMaxAggregateInputType = {
    id?: true
    rest_id?: true
    link?: true
  }

  export type Rest_imageCountAggregateInputType = {
    id?: true
    rest_id?: true
    link?: true
    _all?: true
  }

  export type Rest_imageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rest_image to aggregate.
     */
    where?: rest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_images to fetch.
     */
    orderBy?: rest_imageOrderByWithRelationInput | rest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rest_images
    **/
    _count?: true | Rest_imageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rest_imageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rest_imageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rest_imageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rest_imageMaxAggregateInputType
  }

  export type GetRest_imageAggregateType<T extends Rest_imageAggregateArgs> = {
        [P in keyof T & keyof AggregateRest_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRest_image[P]>
      : GetScalarType<T[P], AggregateRest_image[P]>
  }




  export type rest_imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rest_imageWhereInput
    orderBy?: rest_imageOrderByWithAggregationInput | rest_imageOrderByWithAggregationInput[]
    by: Rest_imageScalarFieldEnum[] | Rest_imageScalarFieldEnum
    having?: rest_imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rest_imageCountAggregateInputType | true
    _avg?: Rest_imageAvgAggregateInputType
    _sum?: Rest_imageSumAggregateInputType
    _min?: Rest_imageMinAggregateInputType
    _max?: Rest_imageMaxAggregateInputType
  }

  export type Rest_imageGroupByOutputType = {
    id: bigint
    rest_id: bigint
    link: string | null
    _count: Rest_imageCountAggregateOutputType | null
    _avg: Rest_imageAvgAggregateOutputType | null
    _sum: Rest_imageSumAggregateOutputType | null
    _min: Rest_imageMinAggregateOutputType | null
    _max: Rest_imageMaxAggregateOutputType | null
  }

  type GetRest_imageGroupByPayload<T extends rest_imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rest_imageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rest_imageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rest_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Rest_imageGroupByOutputType[P]>
        }
      >
    >


  export type rest_imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rest_id?: boolean
    link?: boolean
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rest_image"]>



  export type rest_imageSelectScalar = {
    id?: boolean
    rest_id?: boolean
    link?: boolean
  }

  export type rest_imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rest_id" | "link", ExtArgs["result"]["rest_image"]>
  export type rest_imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }

  export type $rest_imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rest_image"
    objects: {
      restaurant: Prisma.$restaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      rest_id: bigint
      link: string | null
    }, ExtArgs["result"]["rest_image"]>
    composites: {}
  }

  type rest_imageGetPayload<S extends boolean | null | undefined | rest_imageDefaultArgs> = $Result.GetResult<Prisma.$rest_imagePayload, S>

  type rest_imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rest_imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rest_imageCountAggregateInputType | true
    }

  export interface rest_imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rest_image'], meta: { name: 'rest_image' } }
    /**
     * Find zero or one Rest_image that matches the filter.
     * @param {rest_imageFindUniqueArgs} args - Arguments to find a Rest_image
     * @example
     * // Get one Rest_image
     * const rest_image = await prisma.rest_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rest_imageFindUniqueArgs>(args: SelectSubset<T, rest_imageFindUniqueArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rest_image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rest_imageFindUniqueOrThrowArgs} args - Arguments to find a Rest_image
     * @example
     * // Get one Rest_image
     * const rest_image = await prisma.rest_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rest_imageFindUniqueOrThrowArgs>(args: SelectSubset<T, rest_imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rest_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_imageFindFirstArgs} args - Arguments to find a Rest_image
     * @example
     * // Get one Rest_image
     * const rest_image = await prisma.rest_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rest_imageFindFirstArgs>(args?: SelectSubset<T, rest_imageFindFirstArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rest_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_imageFindFirstOrThrowArgs} args - Arguments to find a Rest_image
     * @example
     * // Get one Rest_image
     * const rest_image = await prisma.rest_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rest_imageFindFirstOrThrowArgs>(args?: SelectSubset<T, rest_imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rest_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rest_images
     * const rest_images = await prisma.rest_image.findMany()
     * 
     * // Get first 10 Rest_images
     * const rest_images = await prisma.rest_image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rest_imageWithIdOnly = await prisma.rest_image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rest_imageFindManyArgs>(args?: SelectSubset<T, rest_imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rest_image.
     * @param {rest_imageCreateArgs} args - Arguments to create a Rest_image.
     * @example
     * // Create one Rest_image
     * const Rest_image = await prisma.rest_image.create({
     *   data: {
     *     // ... data to create a Rest_image
     *   }
     * })
     * 
     */
    create<T extends rest_imageCreateArgs>(args: SelectSubset<T, rest_imageCreateArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rest_images.
     * @param {rest_imageCreateManyArgs} args - Arguments to create many Rest_images.
     * @example
     * // Create many Rest_images
     * const rest_image = await prisma.rest_image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rest_imageCreateManyArgs>(args?: SelectSubset<T, rest_imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rest_image.
     * @param {rest_imageDeleteArgs} args - Arguments to delete one Rest_image.
     * @example
     * // Delete one Rest_image
     * const Rest_image = await prisma.rest_image.delete({
     *   where: {
     *     // ... filter to delete one Rest_image
     *   }
     * })
     * 
     */
    delete<T extends rest_imageDeleteArgs>(args: SelectSubset<T, rest_imageDeleteArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rest_image.
     * @param {rest_imageUpdateArgs} args - Arguments to update one Rest_image.
     * @example
     * // Update one Rest_image
     * const rest_image = await prisma.rest_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rest_imageUpdateArgs>(args: SelectSubset<T, rest_imageUpdateArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rest_images.
     * @param {rest_imageDeleteManyArgs} args - Arguments to filter Rest_images to delete.
     * @example
     * // Delete a few Rest_images
     * const { count } = await prisma.rest_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rest_imageDeleteManyArgs>(args?: SelectSubset<T, rest_imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rest_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rest_images
     * const rest_image = await prisma.rest_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rest_imageUpdateManyArgs>(args: SelectSubset<T, rest_imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rest_image.
     * @param {rest_imageUpsertArgs} args - Arguments to update or create a Rest_image.
     * @example
     * // Update or create a Rest_image
     * const rest_image = await prisma.rest_image.upsert({
     *   create: {
     *     // ... data to create a Rest_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rest_image we want to update
     *   }
     * })
     */
    upsert<T extends rest_imageUpsertArgs>(args: SelectSubset<T, rest_imageUpsertArgs<ExtArgs>>): Prisma__rest_imageClient<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rest_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_imageCountArgs} args - Arguments to filter Rest_images to count.
     * @example
     * // Count the number of Rest_images
     * const count = await prisma.rest_image.count({
     *   where: {
     *     // ... the filter for the Rest_images we want to count
     *   }
     * })
    **/
    count<T extends rest_imageCountArgs>(
      args?: Subset<T, rest_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rest_imageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rest_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rest_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rest_imageAggregateArgs>(args: Subset<T, Rest_imageAggregateArgs>): Prisma.PrismaPromise<GetRest_imageAggregateType<T>>

    /**
     * Group by Rest_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_imageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rest_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rest_imageGroupByArgs['orderBy'] }
        : { orderBy?: rest_imageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rest_imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRest_imageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rest_image model
   */
  readonly fields: rest_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rest_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rest_imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rest_image model
   */
  interface rest_imageFieldRefs {
    readonly id: FieldRef<"rest_image", 'BigInt'>
    readonly rest_id: FieldRef<"rest_image", 'BigInt'>
    readonly link: FieldRef<"rest_image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rest_image findUnique
   */
  export type rest_imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * Filter, which rest_image to fetch.
     */
    where: rest_imageWhereUniqueInput
  }

  /**
   * rest_image findUniqueOrThrow
   */
  export type rest_imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * Filter, which rest_image to fetch.
     */
    where: rest_imageWhereUniqueInput
  }

  /**
   * rest_image findFirst
   */
  export type rest_imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * Filter, which rest_image to fetch.
     */
    where?: rest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_images to fetch.
     */
    orderBy?: rest_imageOrderByWithRelationInput | rest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rest_images.
     */
    cursor?: rest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rest_images.
     */
    distinct?: Rest_imageScalarFieldEnum | Rest_imageScalarFieldEnum[]
  }

  /**
   * rest_image findFirstOrThrow
   */
  export type rest_imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * Filter, which rest_image to fetch.
     */
    where?: rest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_images to fetch.
     */
    orderBy?: rest_imageOrderByWithRelationInput | rest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rest_images.
     */
    cursor?: rest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rest_images.
     */
    distinct?: Rest_imageScalarFieldEnum | Rest_imageScalarFieldEnum[]
  }

  /**
   * rest_image findMany
   */
  export type rest_imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * Filter, which rest_images to fetch.
     */
    where?: rest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_images to fetch.
     */
    orderBy?: rest_imageOrderByWithRelationInput | rest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rest_images.
     */
    cursor?: rest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_images.
     */
    skip?: number
    distinct?: Rest_imageScalarFieldEnum | Rest_imageScalarFieldEnum[]
  }

  /**
   * rest_image create
   */
  export type rest_imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * The data needed to create a rest_image.
     */
    data: XOR<rest_imageCreateInput, rest_imageUncheckedCreateInput>
  }

  /**
   * rest_image createMany
   */
  export type rest_imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rest_images.
     */
    data: rest_imageCreateManyInput | rest_imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rest_image update
   */
  export type rest_imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * The data needed to update a rest_image.
     */
    data: XOR<rest_imageUpdateInput, rest_imageUncheckedUpdateInput>
    /**
     * Choose, which rest_image to update.
     */
    where: rest_imageWhereUniqueInput
  }

  /**
   * rest_image updateMany
   */
  export type rest_imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rest_images.
     */
    data: XOR<rest_imageUpdateManyMutationInput, rest_imageUncheckedUpdateManyInput>
    /**
     * Filter which rest_images to update
     */
    where?: rest_imageWhereInput
    /**
     * Limit how many rest_images to update.
     */
    limit?: number
  }

  /**
   * rest_image upsert
   */
  export type rest_imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * The filter to search for the rest_image to update in case it exists.
     */
    where: rest_imageWhereUniqueInput
    /**
     * In case the rest_image found by the `where` argument doesn't exist, create a new rest_image with this data.
     */
    create: XOR<rest_imageCreateInput, rest_imageUncheckedCreateInput>
    /**
     * In case the rest_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rest_imageUpdateInput, rest_imageUncheckedUpdateInput>
  }

  /**
   * rest_image delete
   */
  export type rest_imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    /**
     * Filter which rest_image to delete.
     */
    where: rest_imageWhereUniqueInput
  }

  /**
   * rest_image deleteMany
   */
  export type rest_imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rest_images to delete
     */
    where?: rest_imageWhereInput
    /**
     * Limit how many rest_images to delete.
     */
    limit?: number
  }

  /**
   * rest_image without action
   */
  export type rest_imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
  }


  /**
   * Model rest_menu
   */

  export type AggregateRest_menu = {
    _count: Rest_menuCountAggregateOutputType | null
    _avg: Rest_menuAvgAggregateOutputType | null
    _sum: Rest_menuSumAggregateOutputType | null
    _min: Rest_menuMinAggregateOutputType | null
    _max: Rest_menuMaxAggregateOutputType | null
  }

  export type Rest_menuAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    rest_id: number | null
  }

  export type Rest_menuSumAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    rest_id: bigint | null
  }

  export type Rest_menuMinAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    rest_id: bigint | null
  }

  export type Rest_menuMaxAggregateOutputType = {
    id: bigint | null
    menu_id: bigint | null
    rest_id: bigint | null
  }

  export type Rest_menuCountAggregateOutputType = {
    id: number
    menu_id: number
    rest_id: number
    _all: number
  }


  export type Rest_menuAvgAggregateInputType = {
    id?: true
    menu_id?: true
    rest_id?: true
  }

  export type Rest_menuSumAggregateInputType = {
    id?: true
    menu_id?: true
    rest_id?: true
  }

  export type Rest_menuMinAggregateInputType = {
    id?: true
    menu_id?: true
    rest_id?: true
  }

  export type Rest_menuMaxAggregateInputType = {
    id?: true
    menu_id?: true
    rest_id?: true
  }

  export type Rest_menuCountAggregateInputType = {
    id?: true
    menu_id?: true
    rest_id?: true
    _all?: true
  }

  export type Rest_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rest_menu to aggregate.
     */
    where?: rest_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_menus to fetch.
     */
    orderBy?: rest_menuOrderByWithRelationInput | rest_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rest_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rest_menus
    **/
    _count?: true | Rest_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rest_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rest_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rest_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rest_menuMaxAggregateInputType
  }

  export type GetRest_menuAggregateType<T extends Rest_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateRest_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRest_menu[P]>
      : GetScalarType<T[P], AggregateRest_menu[P]>
  }




  export type rest_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rest_menuWhereInput
    orderBy?: rest_menuOrderByWithAggregationInput | rest_menuOrderByWithAggregationInput[]
    by: Rest_menuScalarFieldEnum[] | Rest_menuScalarFieldEnum
    having?: rest_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rest_menuCountAggregateInputType | true
    _avg?: Rest_menuAvgAggregateInputType
    _sum?: Rest_menuSumAggregateInputType
    _min?: Rest_menuMinAggregateInputType
    _max?: Rest_menuMaxAggregateInputType
  }

  export type Rest_menuGroupByOutputType = {
    id: bigint
    menu_id: bigint
    rest_id: bigint
    _count: Rest_menuCountAggregateOutputType | null
    _avg: Rest_menuAvgAggregateOutputType | null
    _sum: Rest_menuSumAggregateOutputType | null
    _min: Rest_menuMinAggregateOutputType | null
    _max: Rest_menuMaxAggregateOutputType | null
  }

  type GetRest_menuGroupByPayload<T extends rest_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rest_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rest_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rest_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Rest_menuGroupByOutputType[P]>
        }
      >
    >


  export type rest_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_id?: boolean
    rest_id?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rest_menu"]>



  export type rest_menuSelectScalar = {
    id?: boolean
    menu_id?: boolean
    rest_id?: boolean
  }

  export type rest_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_id" | "rest_id", ExtArgs["result"]["rest_menu"]>
  export type rest_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }

  export type $rest_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rest_menu"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>
      restaurant: Prisma.$restaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      menu_id: bigint
      rest_id: bigint
    }, ExtArgs["result"]["rest_menu"]>
    composites: {}
  }

  type rest_menuGetPayload<S extends boolean | null | undefined | rest_menuDefaultArgs> = $Result.GetResult<Prisma.$rest_menuPayload, S>

  type rest_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rest_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rest_menuCountAggregateInputType | true
    }

  export interface rest_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rest_menu'], meta: { name: 'rest_menu' } }
    /**
     * Find zero or one Rest_menu that matches the filter.
     * @param {rest_menuFindUniqueArgs} args - Arguments to find a Rest_menu
     * @example
     * // Get one Rest_menu
     * const rest_menu = await prisma.rest_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rest_menuFindUniqueArgs>(args: SelectSubset<T, rest_menuFindUniqueArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rest_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rest_menuFindUniqueOrThrowArgs} args - Arguments to find a Rest_menu
     * @example
     * // Get one Rest_menu
     * const rest_menu = await prisma.rest_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rest_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, rest_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rest_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_menuFindFirstArgs} args - Arguments to find a Rest_menu
     * @example
     * // Get one Rest_menu
     * const rest_menu = await prisma.rest_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rest_menuFindFirstArgs>(args?: SelectSubset<T, rest_menuFindFirstArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rest_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_menuFindFirstOrThrowArgs} args - Arguments to find a Rest_menu
     * @example
     * // Get one Rest_menu
     * const rest_menu = await prisma.rest_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rest_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, rest_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rest_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rest_menus
     * const rest_menus = await prisma.rest_menu.findMany()
     * 
     * // Get first 10 Rest_menus
     * const rest_menus = await prisma.rest_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rest_menuWithIdOnly = await prisma.rest_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rest_menuFindManyArgs>(args?: SelectSubset<T, rest_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rest_menu.
     * @param {rest_menuCreateArgs} args - Arguments to create a Rest_menu.
     * @example
     * // Create one Rest_menu
     * const Rest_menu = await prisma.rest_menu.create({
     *   data: {
     *     // ... data to create a Rest_menu
     *   }
     * })
     * 
     */
    create<T extends rest_menuCreateArgs>(args: SelectSubset<T, rest_menuCreateArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rest_menus.
     * @param {rest_menuCreateManyArgs} args - Arguments to create many Rest_menus.
     * @example
     * // Create many Rest_menus
     * const rest_menu = await prisma.rest_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rest_menuCreateManyArgs>(args?: SelectSubset<T, rest_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rest_menu.
     * @param {rest_menuDeleteArgs} args - Arguments to delete one Rest_menu.
     * @example
     * // Delete one Rest_menu
     * const Rest_menu = await prisma.rest_menu.delete({
     *   where: {
     *     // ... filter to delete one Rest_menu
     *   }
     * })
     * 
     */
    delete<T extends rest_menuDeleteArgs>(args: SelectSubset<T, rest_menuDeleteArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rest_menu.
     * @param {rest_menuUpdateArgs} args - Arguments to update one Rest_menu.
     * @example
     * // Update one Rest_menu
     * const rest_menu = await prisma.rest_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rest_menuUpdateArgs>(args: SelectSubset<T, rest_menuUpdateArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rest_menus.
     * @param {rest_menuDeleteManyArgs} args - Arguments to filter Rest_menus to delete.
     * @example
     * // Delete a few Rest_menus
     * const { count } = await prisma.rest_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rest_menuDeleteManyArgs>(args?: SelectSubset<T, rest_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rest_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rest_menus
     * const rest_menu = await prisma.rest_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rest_menuUpdateManyArgs>(args: SelectSubset<T, rest_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rest_menu.
     * @param {rest_menuUpsertArgs} args - Arguments to update or create a Rest_menu.
     * @example
     * // Update or create a Rest_menu
     * const rest_menu = await prisma.rest_menu.upsert({
     *   create: {
     *     // ... data to create a Rest_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rest_menu we want to update
     *   }
     * })
     */
    upsert<T extends rest_menuUpsertArgs>(args: SelectSubset<T, rest_menuUpsertArgs<ExtArgs>>): Prisma__rest_menuClient<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rest_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_menuCountArgs} args - Arguments to filter Rest_menus to count.
     * @example
     * // Count the number of Rest_menus
     * const count = await prisma.rest_menu.count({
     *   where: {
     *     // ... the filter for the Rest_menus we want to count
     *   }
     * })
    **/
    count<T extends rest_menuCountArgs>(
      args?: Subset<T, rest_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rest_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rest_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rest_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rest_menuAggregateArgs>(args: Subset<T, Rest_menuAggregateArgs>): Prisma.PrismaPromise<GetRest_menuAggregateType<T>>

    /**
     * Group by Rest_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rest_menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rest_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rest_menuGroupByArgs['orderBy'] }
        : { orderBy?: rest_menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rest_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRest_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rest_menu model
   */
  readonly fields: rest_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rest_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rest_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rest_menu model
   */
  interface rest_menuFieldRefs {
    readonly id: FieldRef<"rest_menu", 'BigInt'>
    readonly menu_id: FieldRef<"rest_menu", 'BigInt'>
    readonly rest_id: FieldRef<"rest_menu", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * rest_menu findUnique
   */
  export type rest_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * Filter, which rest_menu to fetch.
     */
    where: rest_menuWhereUniqueInput
  }

  /**
   * rest_menu findUniqueOrThrow
   */
  export type rest_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * Filter, which rest_menu to fetch.
     */
    where: rest_menuWhereUniqueInput
  }

  /**
   * rest_menu findFirst
   */
  export type rest_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * Filter, which rest_menu to fetch.
     */
    where?: rest_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_menus to fetch.
     */
    orderBy?: rest_menuOrderByWithRelationInput | rest_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rest_menus.
     */
    cursor?: rest_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rest_menus.
     */
    distinct?: Rest_menuScalarFieldEnum | Rest_menuScalarFieldEnum[]
  }

  /**
   * rest_menu findFirstOrThrow
   */
  export type rest_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * Filter, which rest_menu to fetch.
     */
    where?: rest_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_menus to fetch.
     */
    orderBy?: rest_menuOrderByWithRelationInput | rest_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rest_menus.
     */
    cursor?: rest_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rest_menus.
     */
    distinct?: Rest_menuScalarFieldEnum | Rest_menuScalarFieldEnum[]
  }

  /**
   * rest_menu findMany
   */
  export type rest_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * Filter, which rest_menus to fetch.
     */
    where?: rest_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rest_menus to fetch.
     */
    orderBy?: rest_menuOrderByWithRelationInput | rest_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rest_menus.
     */
    cursor?: rest_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rest_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rest_menus.
     */
    skip?: number
    distinct?: Rest_menuScalarFieldEnum | Rest_menuScalarFieldEnum[]
  }

  /**
   * rest_menu create
   */
  export type rest_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a rest_menu.
     */
    data: XOR<rest_menuCreateInput, rest_menuUncheckedCreateInput>
  }

  /**
   * rest_menu createMany
   */
  export type rest_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rest_menus.
     */
    data: rest_menuCreateManyInput | rest_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rest_menu update
   */
  export type rest_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a rest_menu.
     */
    data: XOR<rest_menuUpdateInput, rest_menuUncheckedUpdateInput>
    /**
     * Choose, which rest_menu to update.
     */
    where: rest_menuWhereUniqueInput
  }

  /**
   * rest_menu updateMany
   */
  export type rest_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rest_menus.
     */
    data: XOR<rest_menuUpdateManyMutationInput, rest_menuUncheckedUpdateManyInput>
    /**
     * Filter which rest_menus to update
     */
    where?: rest_menuWhereInput
    /**
     * Limit how many rest_menus to update.
     */
    limit?: number
  }

  /**
   * rest_menu upsert
   */
  export type rest_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the rest_menu to update in case it exists.
     */
    where: rest_menuWhereUniqueInput
    /**
     * In case the rest_menu found by the `where` argument doesn't exist, create a new rest_menu with this data.
     */
    create: XOR<rest_menuCreateInput, rest_menuUncheckedCreateInput>
    /**
     * In case the rest_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rest_menuUpdateInput, rest_menuUncheckedUpdateInput>
  }

  /**
   * rest_menu delete
   */
  export type rest_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    /**
     * Filter which rest_menu to delete.
     */
    where: rest_menuWhereUniqueInput
  }

  /**
   * rest_menu deleteMany
   */
  export type rest_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rest_menus to delete
     */
    where?: rest_menuWhereInput
    /**
     * Limit how many rest_menus to delete.
     */
    limit?: number
  }

  /**
   * rest_menu without action
   */
  export type rest_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
  }


  /**
   * Model restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    id: bigint | null
    rating: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: bigint | null
    location1: string | null
    location2: string | null
    location3: string | null
    name: string | null
    repre_menu: string | null
    close_day: string | null
    start_time: string | null
    end_time: string | null
    address: string | null
    detail_address: string | null
    rating: number | null
    day_open_time: string | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: bigint | null
    location1: string | null
    location2: string | null
    location3: string | null
    name: string | null
    repre_menu: string | null
    close_day: string | null
    start_time: string | null
    end_time: string | null
    address: string | null
    detail_address: string | null
    rating: number | null
    day_open_time: string | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    location1: number
    location2: number
    location3: number
    name: number
    repre_menu: number
    close_day: number
    start_time: number
    end_time: number
    address: number
    detail_address: number
    rating: number
    day_open_time: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type RestaurantSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    location1?: true
    location2?: true
    location3?: true
    name?: true
    repre_menu?: true
    close_day?: true
    start_time?: true
    end_time?: true
    address?: true
    detail_address?: true
    rating?: true
    day_open_time?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    location1?: true
    location2?: true
    location3?: true
    name?: true
    repre_menu?: true
    close_day?: true
    start_time?: true
    end_time?: true
    address?: true
    detail_address?: true
    rating?: true
    day_open_time?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    location1?: true
    location2?: true
    location3?: true
    name?: true
    repre_menu?: true
    close_day?: true
    start_time?: true
    end_time?: true
    address?: true
    detail_address?: true
    rating?: true
    day_open_time?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant to aggregate.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantWhereInput
    orderBy?: restaurantOrderByWithAggregationInput | restaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: restaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: bigint
    location1: string | null
    location2: string | null
    location3: string | null
    name: string | null
    repre_menu: string | null
    close_day: string | null
    start_time: string | null
    end_time: string | null
    address: string | null
    detail_address: string | null
    rating: number | null
    day_open_time: string | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location1?: boolean
    location2?: boolean
    location3?: boolean
    name?: boolean
    repre_menu?: boolean
    close_day?: boolean
    start_time?: boolean
    end_time?: boolean
    address?: boolean
    detail_address?: boolean
    rating?: boolean
    day_open_time?: boolean
    rest_image?: boolean | restaurant$rest_imageArgs<ExtArgs>
    rest_menu?: boolean | restaurant$rest_menuArgs<ExtArgs>
    review?: boolean | restaurant$reviewArgs<ExtArgs>
    zzim?: boolean | restaurant$zzimArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>



  export type restaurantSelectScalar = {
    id?: boolean
    location1?: boolean
    location2?: boolean
    location3?: boolean
    name?: boolean
    repre_menu?: boolean
    close_day?: boolean
    start_time?: boolean
    end_time?: boolean
    address?: boolean
    detail_address?: boolean
    rating?: boolean
    day_open_time?: boolean
  }

  export type restaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location1" | "location2" | "location3" | "name" | "repre_menu" | "close_day" | "start_time" | "end_time" | "address" | "detail_address" | "rating" | "day_open_time", ExtArgs["result"]["restaurant"]>
  export type restaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rest_image?: boolean | restaurant$rest_imageArgs<ExtArgs>
    rest_menu?: boolean | restaurant$rest_menuArgs<ExtArgs>
    review?: boolean | restaurant$reviewArgs<ExtArgs>
    zzim?: boolean | restaurant$zzimArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurant"
    objects: {
      rest_image: Prisma.$rest_imagePayload<ExtArgs>[]
      rest_menu: Prisma.$rest_menuPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
      zzim: Prisma.$zzimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      location1: string | null
      location2: string | null
      location3: string | null
      name: string | null
      repre_menu: string | null
      close_day: string | null
      start_time: string | null
      end_time: string | null
      address: string | null
      detail_address: string | null
      rating: number | null
      day_open_time: string | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type restaurantGetPayload<S extends boolean | null | undefined | restaurantDefaultArgs> = $Result.GetResult<Prisma.$restaurantPayload, S>

  type restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant'], meta: { name: 'restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {restaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantFindUniqueArgs>(args: SelectSubset<T, restaurantFindUniqueArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantFindFirstArgs>(args?: SelectSubset<T, restaurantFindFirstArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends restaurantFindManyArgs>(args?: SelectSubset<T, restaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {restaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends restaurantCreateArgs>(args: SelectSubset<T, restaurantCreateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantCreateManyArgs>(args?: SelectSubset<T, restaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {restaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends restaurantDeleteArgs>(args: SelectSubset<T, restaurantDeleteArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {restaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantUpdateArgs>(args: SelectSubset<T, restaurantUpdateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantDeleteManyArgs>(args?: SelectSubset<T, restaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantUpdateManyArgs>(args: SelectSubset<T, restaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {restaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends restaurantUpsertArgs>(args: SelectSubset<T, restaurantUpsertArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantCountArgs>(
      args?: Subset<T, restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends restaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantGroupByArgs['orderBy'] }
        : { orderBy?: restaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, restaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurant model
   */
  readonly fields: restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rest_image<T extends restaurant$rest_imageArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$rest_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rest_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rest_menu<T extends restaurant$rest_menuArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$rest_menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rest_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends restaurant$reviewArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zzim<T extends restaurant$zzimArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$zzimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the restaurant model
   */
  interface restaurantFieldRefs {
    readonly id: FieldRef<"restaurant", 'BigInt'>
    readonly location1: FieldRef<"restaurant", 'String'>
    readonly location2: FieldRef<"restaurant", 'String'>
    readonly location3: FieldRef<"restaurant", 'String'>
    readonly name: FieldRef<"restaurant", 'String'>
    readonly repre_menu: FieldRef<"restaurant", 'String'>
    readonly close_day: FieldRef<"restaurant", 'String'>
    readonly start_time: FieldRef<"restaurant", 'String'>
    readonly end_time: FieldRef<"restaurant", 'String'>
    readonly address: FieldRef<"restaurant", 'String'>
    readonly detail_address: FieldRef<"restaurant", 'String'>
    readonly rating: FieldRef<"restaurant", 'Float'>
    readonly day_open_time: FieldRef<"restaurant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * restaurant findUnique
   */
  export type restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findUniqueOrThrow
   */
  export type restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findFirst
   */
  export type restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findFirstOrThrow
   */
  export type restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findMany
   */
  export type restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant create
   */
  export type restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a restaurant.
     */
    data?: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
  }

  /**
   * restaurant createMany
   */
  export type restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant update
   */
  export type restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a restaurant.
     */
    data: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
    /**
     * Choose, which restaurant to update.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant updateMany
   */
  export type restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurant upsert
   */
  export type restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the restaurant to update in case it exists.
     */
    where: restaurantWhereUniqueInput
    /**
     * In case the restaurant found by the `where` argument doesn't exist, create a new restaurant with this data.
     */
    create: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
    /**
     * In case the restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
  }

  /**
   * restaurant delete
   */
  export type restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter which restaurant to delete.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant deleteMany
   */
  export type restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurant.rest_image
   */
  export type restaurant$rest_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_image
     */
    select?: rest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_image
     */
    omit?: rest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_imageInclude<ExtArgs> | null
    where?: rest_imageWhereInput
    orderBy?: rest_imageOrderByWithRelationInput | rest_imageOrderByWithRelationInput[]
    cursor?: rest_imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rest_imageScalarFieldEnum | Rest_imageScalarFieldEnum[]
  }

  /**
   * restaurant.rest_menu
   */
  export type restaurant$rest_menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rest_menu
     */
    select?: rest_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rest_menu
     */
    omit?: rest_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rest_menuInclude<ExtArgs> | null
    where?: rest_menuWhereInput
    orderBy?: rest_menuOrderByWithRelationInput | rest_menuOrderByWithRelationInput[]
    cursor?: rest_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rest_menuScalarFieldEnum | Rest_menuScalarFieldEnum[]
  }

  /**
   * restaurant.review
   */
  export type restaurant$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * restaurant.zzim
   */
  export type restaurant$zzimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    where?: zzimWhereInput
    orderBy?: zzimOrderByWithRelationInput | zzimOrderByWithRelationInput[]
    cursor?: zzimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZzimScalarFieldEnum | ZzimScalarFieldEnum[]
  }

  /**
   * restaurant without action
   */
  export type restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    rest_id: number | null
    rating: number | null
    like: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    rest_id: bigint | null
    rating: bigint | null
    like: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    rest_id: bigint | null
    rating: bigint | null
    text: string | null
    created_at: Date | null
    like: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    rest_id: bigint | null
    rating: bigint | null
    text: string | null
    created_at: Date | null
    like: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    user_id: number
    rest_id: number
    rating: number
    tag: number
    text: number
    created_at: number
    like: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    rating?: true
    like?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    rating?: true
    like?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    rating?: true
    text?: true
    created_at?: true
    like?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    rating?: true
    text?: true
    created_at?: true
    like?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    rating?: true
    tag?: true
    text?: true
    created_at?: true
    like?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: bigint
    user_id: bigint
    rest_id: bigint
    rating: bigint | null
    tag: JsonValue | null
    text: string | null
    created_at: Date | null
    like: number | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rest_id?: boolean
    rating?: boolean
    tag?: boolean
    text?: boolean
    created_at?: boolean
    like?: boolean
    report?: boolean | review$reportArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
    review_image?: boolean | review$review_imageArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    user_id?: boolean
    rest_id?: boolean
    rating?: boolean
    tag?: boolean
    text?: boolean
    created_at?: boolean
    like?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "rest_id" | "rating" | "tag" | "text" | "created_at" | "like", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | review$reportArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
    review_image?: boolean | review$review_imageArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      restaurant: Prisma.$restaurantPayload<ExtArgs>
      review_image: Prisma.$review_imagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      rest_id: bigint
      rating: bigint | null
      tag: Prisma.JsonValue | null
      text: string | null
      created_at: Date | null
      like: number | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends review$reportArgs<ExtArgs> = {}>(args?: Subset<T, review$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review_image<T extends review$review_imageArgs<ExtArgs> = {}>(args?: Subset<T, review$review_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'BigInt'>
    readonly user_id: FieldRef<"review", 'BigInt'>
    readonly rest_id: FieldRef<"review", 'BigInt'>
    readonly rating: FieldRef<"review", 'BigInt'>
    readonly tag: FieldRef<"review", 'Json'>
    readonly text: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
    readonly like: FieldRef<"review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review.report
   */
  export type review$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * review.review_image
   */
  export type review$review_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    where?: review_imageWhereInput
    orderBy?: review_imageOrderByWithRelationInput | review_imageOrderByWithRelationInput[]
    cursor?: review_imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Review_imageScalarFieldEnum | Review_imageScalarFieldEnum[]
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model review_image
   */

  export type AggregateReview_image = {
    _count: Review_imageCountAggregateOutputType | null
    _avg: Review_imageAvgAggregateOutputType | null
    _sum: Review_imageSumAggregateOutputType | null
    _min: Review_imageMinAggregateOutputType | null
    _max: Review_imageMaxAggregateOutputType | null
  }

  export type Review_imageAvgAggregateOutputType = {
    id: number | null
    review_id: number | null
  }

  export type Review_imageSumAggregateOutputType = {
    id: bigint | null
    review_id: bigint | null
  }

  export type Review_imageMinAggregateOutputType = {
    id: bigint | null
    review_id: bigint | null
    link: string | null
  }

  export type Review_imageMaxAggregateOutputType = {
    id: bigint | null
    review_id: bigint | null
    link: string | null
  }

  export type Review_imageCountAggregateOutputType = {
    id: number
    review_id: number
    link: number
    _all: number
  }


  export type Review_imageAvgAggregateInputType = {
    id?: true
    review_id?: true
  }

  export type Review_imageSumAggregateInputType = {
    id?: true
    review_id?: true
  }

  export type Review_imageMinAggregateInputType = {
    id?: true
    review_id?: true
    link?: true
  }

  export type Review_imageMaxAggregateInputType = {
    id?: true
    review_id?: true
    link?: true
  }

  export type Review_imageCountAggregateInputType = {
    id?: true
    review_id?: true
    link?: true
    _all?: true
  }

  export type Review_imageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review_image to aggregate.
     */
    where?: review_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_images to fetch.
     */
    orderBy?: review_imageOrderByWithRelationInput | review_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: review_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned review_images
    **/
    _count?: true | Review_imageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Review_imageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Review_imageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Review_imageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Review_imageMaxAggregateInputType
  }

  export type GetReview_imageAggregateType<T extends Review_imageAggregateArgs> = {
        [P in keyof T & keyof AggregateReview_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview_image[P]>
      : GetScalarType<T[P], AggregateReview_image[P]>
  }




  export type review_imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: review_imageWhereInput
    orderBy?: review_imageOrderByWithAggregationInput | review_imageOrderByWithAggregationInput[]
    by: Review_imageScalarFieldEnum[] | Review_imageScalarFieldEnum
    having?: review_imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Review_imageCountAggregateInputType | true
    _avg?: Review_imageAvgAggregateInputType
    _sum?: Review_imageSumAggregateInputType
    _min?: Review_imageMinAggregateInputType
    _max?: Review_imageMaxAggregateInputType
  }

  export type Review_imageGroupByOutputType = {
    id: bigint
    review_id: bigint
    link: string | null
    _count: Review_imageCountAggregateOutputType | null
    _avg: Review_imageAvgAggregateOutputType | null
    _sum: Review_imageSumAggregateOutputType | null
    _min: Review_imageMinAggregateOutputType | null
    _max: Review_imageMaxAggregateOutputType | null
  }

  type GetReview_imageGroupByPayload<T extends review_imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Review_imageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Review_imageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Review_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Review_imageGroupByOutputType[P]>
        }
      >
    >


  export type review_imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    review_id?: boolean
    link?: boolean
    review?: boolean | reviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review_image"]>



  export type review_imageSelectScalar = {
    id?: boolean
    review_id?: boolean
    link?: boolean
  }

  export type review_imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "review_id" | "link", ExtArgs["result"]["review_image"]>
  export type review_imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | reviewDefaultArgs<ExtArgs>
  }

  export type $review_imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review_image"
    objects: {
      review: Prisma.$reviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      review_id: bigint
      link: string | null
    }, ExtArgs["result"]["review_image"]>
    composites: {}
  }

  type review_imageGetPayload<S extends boolean | null | undefined | review_imageDefaultArgs> = $Result.GetResult<Prisma.$review_imagePayload, S>

  type review_imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<review_imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Review_imageCountAggregateInputType | true
    }

  export interface review_imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review_image'], meta: { name: 'review_image' } }
    /**
     * Find zero or one Review_image that matches the filter.
     * @param {review_imageFindUniqueArgs} args - Arguments to find a Review_image
     * @example
     * // Get one Review_image
     * const review_image = await prisma.review_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends review_imageFindUniqueArgs>(args: SelectSubset<T, review_imageFindUniqueArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review_image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {review_imageFindUniqueOrThrowArgs} args - Arguments to find a Review_image
     * @example
     * // Get one Review_image
     * const review_image = await prisma.review_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends review_imageFindUniqueOrThrowArgs>(args: SelectSubset<T, review_imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_imageFindFirstArgs} args - Arguments to find a Review_image
     * @example
     * // Get one Review_image
     * const review_image = await prisma.review_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends review_imageFindFirstArgs>(args?: SelectSubset<T, review_imageFindFirstArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_imageFindFirstOrThrowArgs} args - Arguments to find a Review_image
     * @example
     * // Get one Review_image
     * const review_image = await prisma.review_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends review_imageFindFirstOrThrowArgs>(args?: SelectSubset<T, review_imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Review_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Review_images
     * const review_images = await prisma.review_image.findMany()
     * 
     * // Get first 10 Review_images
     * const review_images = await prisma.review_image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const review_imageWithIdOnly = await prisma.review_image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends review_imageFindManyArgs>(args?: SelectSubset<T, review_imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review_image.
     * @param {review_imageCreateArgs} args - Arguments to create a Review_image.
     * @example
     * // Create one Review_image
     * const Review_image = await prisma.review_image.create({
     *   data: {
     *     // ... data to create a Review_image
     *   }
     * })
     * 
     */
    create<T extends review_imageCreateArgs>(args: SelectSubset<T, review_imageCreateArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Review_images.
     * @param {review_imageCreateManyArgs} args - Arguments to create many Review_images.
     * @example
     * // Create many Review_images
     * const review_image = await prisma.review_image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends review_imageCreateManyArgs>(args?: SelectSubset<T, review_imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review_image.
     * @param {review_imageDeleteArgs} args - Arguments to delete one Review_image.
     * @example
     * // Delete one Review_image
     * const Review_image = await prisma.review_image.delete({
     *   where: {
     *     // ... filter to delete one Review_image
     *   }
     * })
     * 
     */
    delete<T extends review_imageDeleteArgs>(args: SelectSubset<T, review_imageDeleteArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review_image.
     * @param {review_imageUpdateArgs} args - Arguments to update one Review_image.
     * @example
     * // Update one Review_image
     * const review_image = await prisma.review_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends review_imageUpdateArgs>(args: SelectSubset<T, review_imageUpdateArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Review_images.
     * @param {review_imageDeleteManyArgs} args - Arguments to filter Review_images to delete.
     * @example
     * // Delete a few Review_images
     * const { count } = await prisma.review_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends review_imageDeleteManyArgs>(args?: SelectSubset<T, review_imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Review_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Review_images
     * const review_image = await prisma.review_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends review_imageUpdateManyArgs>(args: SelectSubset<T, review_imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review_image.
     * @param {review_imageUpsertArgs} args - Arguments to update or create a Review_image.
     * @example
     * // Update or create a Review_image
     * const review_image = await prisma.review_image.upsert({
     *   create: {
     *     // ... data to create a Review_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review_image we want to update
     *   }
     * })
     */
    upsert<T extends review_imageUpsertArgs>(args: SelectSubset<T, review_imageUpsertArgs<ExtArgs>>): Prisma__review_imageClient<$Result.GetResult<Prisma.$review_imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Review_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_imageCountArgs} args - Arguments to filter Review_images to count.
     * @example
     * // Count the number of Review_images
     * const count = await prisma.review_image.count({
     *   where: {
     *     // ... the filter for the Review_images we want to count
     *   }
     * })
    **/
    count<T extends review_imageCountArgs>(
      args?: Subset<T, review_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Review_imageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Review_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Review_imageAggregateArgs>(args: Subset<T, Review_imageAggregateArgs>): Prisma.PrismaPromise<GetReview_imageAggregateType<T>>

    /**
     * Group by Review_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {review_imageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends review_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: review_imageGroupByArgs['orderBy'] }
        : { orderBy?: review_imageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, review_imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReview_imageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review_image model
   */
  readonly fields: review_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__review_imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends reviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reviewDefaultArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review_image model
   */
  interface review_imageFieldRefs {
    readonly id: FieldRef<"review_image", 'BigInt'>
    readonly review_id: FieldRef<"review_image", 'BigInt'>
    readonly link: FieldRef<"review_image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * review_image findUnique
   */
  export type review_imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * Filter, which review_image to fetch.
     */
    where: review_imageWhereUniqueInput
  }

  /**
   * review_image findUniqueOrThrow
   */
  export type review_imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * Filter, which review_image to fetch.
     */
    where: review_imageWhereUniqueInput
  }

  /**
   * review_image findFirst
   */
  export type review_imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * Filter, which review_image to fetch.
     */
    where?: review_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_images to fetch.
     */
    orderBy?: review_imageOrderByWithRelationInput | review_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for review_images.
     */
    cursor?: review_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of review_images.
     */
    distinct?: Review_imageScalarFieldEnum | Review_imageScalarFieldEnum[]
  }

  /**
   * review_image findFirstOrThrow
   */
  export type review_imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * Filter, which review_image to fetch.
     */
    where?: review_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_images to fetch.
     */
    orderBy?: review_imageOrderByWithRelationInput | review_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for review_images.
     */
    cursor?: review_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of review_images.
     */
    distinct?: Review_imageScalarFieldEnum | Review_imageScalarFieldEnum[]
  }

  /**
   * review_image findMany
   */
  export type review_imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * Filter, which review_images to fetch.
     */
    where?: review_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of review_images to fetch.
     */
    orderBy?: review_imageOrderByWithRelationInput | review_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing review_images.
     */
    cursor?: review_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` review_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` review_images.
     */
    skip?: number
    distinct?: Review_imageScalarFieldEnum | Review_imageScalarFieldEnum[]
  }

  /**
   * review_image create
   */
  export type review_imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * The data needed to create a review_image.
     */
    data: XOR<review_imageCreateInput, review_imageUncheckedCreateInput>
  }

  /**
   * review_image createMany
   */
  export type review_imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many review_images.
     */
    data: review_imageCreateManyInput | review_imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review_image update
   */
  export type review_imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * The data needed to update a review_image.
     */
    data: XOR<review_imageUpdateInput, review_imageUncheckedUpdateInput>
    /**
     * Choose, which review_image to update.
     */
    where: review_imageWhereUniqueInput
  }

  /**
   * review_image updateMany
   */
  export type review_imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update review_images.
     */
    data: XOR<review_imageUpdateManyMutationInput, review_imageUncheckedUpdateManyInput>
    /**
     * Filter which review_images to update
     */
    where?: review_imageWhereInput
    /**
     * Limit how many review_images to update.
     */
    limit?: number
  }

  /**
   * review_image upsert
   */
  export type review_imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * The filter to search for the review_image to update in case it exists.
     */
    where: review_imageWhereUniqueInput
    /**
     * In case the review_image found by the `where` argument doesn't exist, create a new review_image with this data.
     */
    create: XOR<review_imageCreateInput, review_imageUncheckedCreateInput>
    /**
     * In case the review_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<review_imageUpdateInput, review_imageUncheckedUpdateInput>
  }

  /**
   * review_image delete
   */
  export type review_imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
    /**
     * Filter which review_image to delete.
     */
    where: review_imageWhereUniqueInput
  }

  /**
   * review_image deleteMany
   */
  export type review_imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review_images to delete
     */
    where?: review_imageWhereInput
    /**
     * Limit how many review_images to delete.
     */
    limit?: number
  }

  /**
   * review_image without action
   */
  export type review_imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review_image
     */
    select?: review_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review_image
     */
    omit?: review_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: review_imageInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    expires: number | null
  }

  export type SessionsSumAggregateOutputType = {
    expires: number | null
  }

  export type SessionsMinAggregateOutputType = {
    session_id: string | null
    expires: number | null
    data: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    session_id: string | null
    expires: number | null
    data: string | null
  }

  export type SessionsCountAggregateOutputType = {
    session_id: number
    expires: number
    data: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    expires?: true
  }

  export type SessionsSumAggregateInputType = {
    expires?: true
  }

  export type SessionsMinAggregateInputType = {
    session_id?: true
    expires?: true
    data?: true
  }

  export type SessionsMaxAggregateInputType = {
    session_id?: true
    expires?: true
    data?: true
  }

  export type SessionsCountAggregateInputType = {
    session_id?: true
    expires?: true
    data?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    session_id: string
    expires: number
    data: string | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    expires?: boolean
    data?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    session_id?: boolean
    expires?: boolean
    data?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "expires" | "data", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      session_id: string
      expires: number
      data: string | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly session_id: FieldRef<"sessions", 'String'>
    readonly expires: FieldRef<"sessions", 'Int'>
    readonly data: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    phone_num: string | null
    is_verified: boolean | null
    nickname: string | null
    body_type: $Enums.user_body_type | null
    gender: $Enums.user_gender | null
    exercise: $Enums.user_exercise | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    profileImageUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    phone_num: string | null
    is_verified: boolean | null
    nickname: string | null
    body_type: $Enums.user_body_type | null
    gender: $Enums.user_gender | null
    exercise: $Enums.user_exercise | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    profileImageUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone_num: number
    is_verified: number
    nickname: number
    body_type: number
    gender: number
    exercise: number
    password: number
    created_at: number
    updated_at: number
    profileImageUrl: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone_num?: true
    is_verified?: true
    nickname?: true
    body_type?: true
    gender?: true
    exercise?: true
    password?: true
    created_at?: true
    updated_at?: true
    profileImageUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone_num?: true
    is_verified?: true
    nickname?: true
    body_type?: true
    gender?: true
    exercise?: true
    password?: true
    created_at?: true
    updated_at?: true
    profileImageUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone_num?: true
    is_verified?: true
    nickname?: true
    body_type?: true
    gender?: true
    exercise?: true
    password?: true
    created_at?: true
    updated_at?: true
    profileImageUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string | null
    phone_num: string | null
    is_verified: boolean | null
    nickname: string | null
    body_type: $Enums.user_body_type | null
    gender: $Enums.user_gender | null
    exercise: $Enums.user_exercise | null
    password: string
    created_at: Date | null
    updated_at: Date | null
    profileImageUrl: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone_num?: boolean
    is_verified?: boolean
    nickname?: boolean
    body_type?: boolean
    gender?: boolean
    exercise?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    profileImageUrl?: boolean
    allergy?: boolean | user$allergyArgs<ExtArgs>
    mukburim?: boolean | user$mukburimArgs<ExtArgs>
    prefer?: boolean | user$preferArgs<ExtArgs>
    recommend_except?: boolean | user$recommend_exceptArgs<ExtArgs>
    report?: boolean | user$reportArgs<ExtArgs>
    review?: boolean | user$reviewArgs<ExtArgs>
    zzim?: boolean | user$zzimArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    phone_num?: boolean
    is_verified?: boolean
    nickname?: boolean
    body_type?: boolean
    gender?: boolean
    exercise?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    profileImageUrl?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone_num" | "is_verified" | "nickname" | "body_type" | "gender" | "exercise" | "password" | "created_at" | "updated_at" | "profileImageUrl", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergy?: boolean | user$allergyArgs<ExtArgs>
    mukburim?: boolean | user$mukburimArgs<ExtArgs>
    prefer?: boolean | user$preferArgs<ExtArgs>
    recommend_except?: boolean | user$recommend_exceptArgs<ExtArgs>
    report?: boolean | user$reportArgs<ExtArgs>
    review?: boolean | user$reviewArgs<ExtArgs>
    zzim?: boolean | user$zzimArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      allergy: Prisma.$allergyPayload<ExtArgs>[]
      mukburim: Prisma.$mukburimPayload<ExtArgs>[]
      prefer: Prisma.$preferPayload<ExtArgs>[]
      recommend_except: Prisma.$recommend_exceptPayload<ExtArgs>[]
      report: Prisma.$reportPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
      zzim: Prisma.$zzimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string | null
      phone_num: string | null
      is_verified: boolean | null
      nickname: string | null
      body_type: $Enums.user_body_type | null
      gender: $Enums.user_gender | null
      exercise: $Enums.user_exercise | null
      password: string
      created_at: Date | null
      updated_at: Date | null
      profileImageUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allergy<T extends user$allergyArgs<ExtArgs> = {}>(args?: Subset<T, user$allergyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mukburim<T extends user$mukburimArgs<ExtArgs> = {}>(args?: Subset<T, user$mukburimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mukburimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prefer<T extends user$preferArgs<ExtArgs> = {}>(args?: Subset<T, user$preferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommend_except<T extends user$recommend_exceptArgs<ExtArgs> = {}>(args?: Subset<T, user$recommend_exceptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_exceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends user$reportArgs<ExtArgs> = {}>(args?: Subset<T, user$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends user$reviewArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zzim<T extends user$zzimArgs<ExtArgs> = {}>(args?: Subset<T, user$zzimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'BigInt'>
    readonly email: FieldRef<"user", 'String'>
    readonly phone_num: FieldRef<"user", 'String'>
    readonly is_verified: FieldRef<"user", 'Boolean'>
    readonly nickname: FieldRef<"user", 'String'>
    readonly body_type: FieldRef<"user", 'user_body_type'>
    readonly gender: FieldRef<"user", 'user_gender'>
    readonly exercise: FieldRef<"user", 'user_exercise'>
    readonly password: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
    readonly profileImageUrl: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.allergy
   */
  export type user$allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    where?: allergyWhereInput
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    cursor?: allergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * user.mukburim
   */
  export type user$mukburimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mukburim
     */
    select?: mukburimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mukburim
     */
    omit?: mukburimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mukburimInclude<ExtArgs> | null
    where?: mukburimWhereInput
    orderBy?: mukburimOrderByWithRelationInput | mukburimOrderByWithRelationInput[]
    cursor?: mukburimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MukburimScalarFieldEnum | MukburimScalarFieldEnum[]
  }

  /**
   * user.prefer
   */
  export type user$preferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    where?: preferWhereInput
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    cursor?: preferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * user.recommend_except
   */
  export type user$recommend_exceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_except
     */
    select?: recommend_exceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recommend_except
     */
    omit?: recommend_exceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recommend_exceptInclude<ExtArgs> | null
    where?: recommend_exceptWhereInput
    orderBy?: recommend_exceptOrderByWithRelationInput | recommend_exceptOrderByWithRelationInput[]
    cursor?: recommend_exceptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_exceptScalarFieldEnum | Recommend_exceptScalarFieldEnum[]
  }

  /**
   * user.report
   */
  export type user$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user.zzim
   */
  export type user$zzimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    where?: zzimWhereInput
    orderBy?: zzimOrderByWithRelationInput | zzimOrderByWithRelationInput[]
    cursor?: zzimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZzimScalarFieldEnum | ZzimScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model allergy
   */

  export type AggregateAllergy = {
    _count: AllergyCountAggregateOutputType | null
    _avg: AllergyAvgAggregateOutputType | null
    _sum: AllergySumAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  export type AllergyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AllergySumAggregateOutputType = {
    id: number | null
    userId: bigint | null
  }

  export type AllergyMinAggregateOutputType = {
    id: number | null
    userId: bigint | null
    allergy: $Enums.allergy_type | null
  }

  export type AllergyMaxAggregateOutputType = {
    id: number | null
    userId: bigint | null
    allergy: $Enums.allergy_type | null
  }

  export type AllergyCountAggregateOutputType = {
    id: number
    userId: number
    allergy: number
    _all: number
  }


  export type AllergyAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AllergySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AllergyMinAggregateInputType = {
    id?: true
    userId?: true
    allergy?: true
  }

  export type AllergyMaxAggregateInputType = {
    id?: true
    userId?: true
    allergy?: true
  }

  export type AllergyCountAggregateInputType = {
    id?: true
    userId?: true
    allergy?: true
    _all?: true
  }

  export type AllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergy to aggregate.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned allergies
    **/
    _count?: true | AllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergyMaxAggregateInputType
  }

  export type GetAllergyAggregateType<T extends AllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergy[P]>
      : GetScalarType<T[P], AggregateAllergy[P]>
  }




  export type allergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: allergyWhereInput
    orderBy?: allergyOrderByWithAggregationInput | allergyOrderByWithAggregationInput[]
    by: AllergyScalarFieldEnum[] | AllergyScalarFieldEnum
    having?: allergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergyCountAggregateInputType | true
    _avg?: AllergyAvgAggregateInputType
    _sum?: AllergySumAggregateInputType
    _min?: AllergyMinAggregateInputType
    _max?: AllergyMaxAggregateInputType
  }

  export type AllergyGroupByOutputType = {
    id: number
    userId: bigint
    allergy: $Enums.allergy_type
    _count: AllergyCountAggregateOutputType | null
    _avg: AllergyAvgAggregateOutputType | null
    _sum: AllergySumAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  type GetAllergyGroupByPayload<T extends allergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergyGroupByOutputType[P]>
            : GetScalarType<T[P], AllergyGroupByOutputType[P]>
        }
      >
    >


  export type allergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allergy?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>



  export type allergySelectScalar = {
    id?: boolean
    userId?: boolean
    allergy?: boolean
  }

  export type allergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "allergy", ExtArgs["result"]["allergy"]>
  export type allergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $allergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "allergy"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: bigint
      allergy: $Enums.allergy_type
    }, ExtArgs["result"]["allergy"]>
    composites: {}
  }

  type allergyGetPayload<S extends boolean | null | undefined | allergyDefaultArgs> = $Result.GetResult<Prisma.$allergyPayload, S>

  type allergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<allergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergyCountAggregateInputType | true
    }

  export interface allergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['allergy'], meta: { name: 'allergy' } }
    /**
     * Find zero or one Allergy that matches the filter.
     * @param {allergyFindUniqueArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends allergyFindUniqueArgs>(args: SelectSubset<T, allergyFindUniqueArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {allergyFindUniqueOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends allergyFindUniqueOrThrowArgs>(args: SelectSubset<T, allergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyFindFirstArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends allergyFindFirstArgs>(args?: SelectSubset<T, allergyFindFirstArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyFindFirstOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends allergyFindFirstOrThrowArgs>(args?: SelectSubset<T, allergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergy.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergyWithIdOnly = await prisma.allergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends allergyFindManyArgs>(args?: SelectSubset<T, allergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergy.
     * @param {allergyCreateArgs} args - Arguments to create a Allergy.
     * @example
     * // Create one Allergy
     * const Allergy = await prisma.allergy.create({
     *   data: {
     *     // ... data to create a Allergy
     *   }
     * })
     * 
     */
    create<T extends allergyCreateArgs>(args: SelectSubset<T, allergyCreateArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {allergyCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends allergyCreateManyArgs>(args?: SelectSubset<T, allergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Allergy.
     * @param {allergyDeleteArgs} args - Arguments to delete one Allergy.
     * @example
     * // Delete one Allergy
     * const Allergy = await prisma.allergy.delete({
     *   where: {
     *     // ... filter to delete one Allergy
     *   }
     * })
     * 
     */
    delete<T extends allergyDeleteArgs>(args: SelectSubset<T, allergyDeleteArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergy.
     * @param {allergyUpdateArgs} args - Arguments to update one Allergy.
     * @example
     * // Update one Allergy
     * const allergy = await prisma.allergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends allergyUpdateArgs>(args: SelectSubset<T, allergyUpdateArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {allergyDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends allergyDeleteManyArgs>(args?: SelectSubset<T, allergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends allergyUpdateManyArgs>(args: SelectSubset<T, allergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Allergy.
     * @param {allergyUpsertArgs} args - Arguments to update or create a Allergy.
     * @example
     * // Update or create a Allergy
     * const allergy = await prisma.allergy.upsert({
     *   create: {
     *     // ... data to create a Allergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergy we want to update
     *   }
     * })
     */
    upsert<T extends allergyUpsertArgs>(args: SelectSubset<T, allergyUpsertArgs<ExtArgs>>): Prisma__allergyClient<$Result.GetResult<Prisma.$allergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergy.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends allergyCountArgs>(
      args?: Subset<T, allergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllergyAggregateArgs>(args: Subset<T, AllergyAggregateArgs>): Prisma.PrismaPromise<GetAllergyAggregateType<T>>

    /**
     * Group by Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends allergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: allergyGroupByArgs['orderBy'] }
        : { orderBy?: allergyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, allergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the allergy model
   */
  readonly fields: allergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for allergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__allergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the allergy model
   */
  interface allergyFieldRefs {
    readonly id: FieldRef<"allergy", 'Int'>
    readonly userId: FieldRef<"allergy", 'BigInt'>
    readonly allergy: FieldRef<"allergy", 'allergy_type'>
  }
    

  // Custom InputTypes
  /**
   * allergy findUnique
   */
  export type allergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy findUniqueOrThrow
   */
  export type allergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy findFirst
   */
  export type allergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergies.
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * allergy findFirstOrThrow
   */
  export type allergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergy to fetch.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergies.
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * allergy findMany
   */
  export type allergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where?: allergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergyOrderByWithRelationInput | allergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing allergies.
     */
    cursor?: allergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * allergy create
   */
  export type allergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * The data needed to create a allergy.
     */
    data: XOR<allergyCreateInput, allergyUncheckedCreateInput>
  }

  /**
   * allergy createMany
   */
  export type allergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many allergies.
     */
    data: allergyCreateManyInput | allergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * allergy update
   */
  export type allergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * The data needed to update a allergy.
     */
    data: XOR<allergyUpdateInput, allergyUncheckedUpdateInput>
    /**
     * Choose, which allergy to update.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy updateMany
   */
  export type allergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update allergies.
     */
    data: XOR<allergyUpdateManyMutationInput, allergyUncheckedUpdateManyInput>
    /**
     * Filter which allergies to update
     */
    where?: allergyWhereInput
    /**
     * Limit how many allergies to update.
     */
    limit?: number
  }

  /**
   * allergy upsert
   */
  export type allergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * The filter to search for the allergy to update in case it exists.
     */
    where: allergyWhereUniqueInput
    /**
     * In case the allergy found by the `where` argument doesn't exist, create a new allergy with this data.
     */
    create: XOR<allergyCreateInput, allergyUncheckedCreateInput>
    /**
     * In case the allergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<allergyUpdateInput, allergyUncheckedUpdateInput>
  }

  /**
   * allergy delete
   */
  export type allergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
    /**
     * Filter which allergy to delete.
     */
    where: allergyWhereUniqueInput
  }

  /**
   * allergy deleteMany
   */
  export type allergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergies to delete
     */
    where?: allergyWhereInput
    /**
     * Limit how many allergies to delete.
     */
    limit?: number
  }

  /**
   * allergy without action
   */
  export type allergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergy
     */
    select?: allergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergy
     */
    omit?: allergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergyInclude<ExtArgs> | null
  }


  /**
   * Model prefer
   */

  export type AggregatePrefer = {
    _count: PreferCountAggregateOutputType | null
    _avg: PreferAvgAggregateOutputType | null
    _sum: PreferSumAggregateOutputType | null
    _min: PreferMinAggregateOutputType | null
    _max: PreferMaxAggregateOutputType | null
  }

  export type PreferAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PreferSumAggregateOutputType = {
    id: number | null
    userId: bigint | null
  }

  export type PreferMinAggregateOutputType = {
    id: number | null
    userId: bigint | null
    prefer: $Enums.prefer_type | null
  }

  export type PreferMaxAggregateOutputType = {
    id: number | null
    userId: bigint | null
    prefer: $Enums.prefer_type | null
  }

  export type PreferCountAggregateOutputType = {
    id: number
    userId: number
    prefer: number
    _all: number
  }


  export type PreferAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PreferSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PreferMinAggregateInputType = {
    id?: true
    userId?: true
    prefer?: true
  }

  export type PreferMaxAggregateInputType = {
    id?: true
    userId?: true
    prefer?: true
  }

  export type PreferCountAggregateInputType = {
    id?: true
    userId?: true
    prefer?: true
    _all?: true
  }

  export type PreferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prefer to aggregate.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prefers
    **/
    _count?: true | PreferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferMaxAggregateInputType
  }

  export type GetPreferAggregateType<T extends PreferAggregateArgs> = {
        [P in keyof T & keyof AggregatePrefer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrefer[P]>
      : GetScalarType<T[P], AggregatePrefer[P]>
  }




  export type preferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preferWhereInput
    orderBy?: preferOrderByWithAggregationInput | preferOrderByWithAggregationInput[]
    by: PreferScalarFieldEnum[] | PreferScalarFieldEnum
    having?: preferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferCountAggregateInputType | true
    _avg?: PreferAvgAggregateInputType
    _sum?: PreferSumAggregateInputType
    _min?: PreferMinAggregateInputType
    _max?: PreferMaxAggregateInputType
  }

  export type PreferGroupByOutputType = {
    id: number
    userId: bigint
    prefer: $Enums.prefer_type
    _count: PreferCountAggregateOutputType | null
    _avg: PreferAvgAggregateOutputType | null
    _sum: PreferSumAggregateOutputType | null
    _min: PreferMinAggregateOutputType | null
    _max: PreferMaxAggregateOutputType | null
  }

  type GetPreferGroupByPayload<T extends preferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferGroupByOutputType[P]>
            : GetScalarType<T[P], PreferGroupByOutputType[P]>
        }
      >
    >


  export type preferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prefer?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prefer"]>



  export type preferSelectScalar = {
    id?: boolean
    userId?: boolean
    prefer?: boolean
  }

  export type preferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "prefer", ExtArgs["result"]["prefer"]>
  export type preferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $preferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prefer"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: bigint
      prefer: $Enums.prefer_type
    }, ExtArgs["result"]["prefer"]>
    composites: {}
  }

  type preferGetPayload<S extends boolean | null | undefined | preferDefaultArgs> = $Result.GetResult<Prisma.$preferPayload, S>

  type preferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferCountAggregateInputType | true
    }

  export interface preferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prefer'], meta: { name: 'prefer' } }
    /**
     * Find zero or one Prefer that matches the filter.
     * @param {preferFindUniqueArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preferFindUniqueArgs>(args: SelectSubset<T, preferFindUniqueArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prefer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preferFindUniqueOrThrowArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preferFindUniqueOrThrowArgs>(args: SelectSubset<T, preferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferFindFirstArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preferFindFirstArgs>(args?: SelectSubset<T, preferFindFirstArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferFindFirstOrThrowArgs} args - Arguments to find a Prefer
     * @example
     * // Get one Prefer
     * const prefer = await prisma.prefer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preferFindFirstOrThrowArgs>(args?: SelectSubset<T, preferFindFirstOrThrowArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prefers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prefers
     * const prefers = await prisma.prefer.findMany()
     * 
     * // Get first 10 Prefers
     * const prefers = await prisma.prefer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferWithIdOnly = await prisma.prefer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends preferFindManyArgs>(args?: SelectSubset<T, preferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prefer.
     * @param {preferCreateArgs} args - Arguments to create a Prefer.
     * @example
     * // Create one Prefer
     * const Prefer = await prisma.prefer.create({
     *   data: {
     *     // ... data to create a Prefer
     *   }
     * })
     * 
     */
    create<T extends preferCreateArgs>(args: SelectSubset<T, preferCreateArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prefers.
     * @param {preferCreateManyArgs} args - Arguments to create many Prefers.
     * @example
     * // Create many Prefers
     * const prefer = await prisma.prefer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preferCreateManyArgs>(args?: SelectSubset<T, preferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prefer.
     * @param {preferDeleteArgs} args - Arguments to delete one Prefer.
     * @example
     * // Delete one Prefer
     * const Prefer = await prisma.prefer.delete({
     *   where: {
     *     // ... filter to delete one Prefer
     *   }
     * })
     * 
     */
    delete<T extends preferDeleteArgs>(args: SelectSubset<T, preferDeleteArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prefer.
     * @param {preferUpdateArgs} args - Arguments to update one Prefer.
     * @example
     * // Update one Prefer
     * const prefer = await prisma.prefer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preferUpdateArgs>(args: SelectSubset<T, preferUpdateArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prefers.
     * @param {preferDeleteManyArgs} args - Arguments to filter Prefers to delete.
     * @example
     * // Delete a few Prefers
     * const { count } = await prisma.prefer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preferDeleteManyArgs>(args?: SelectSubset<T, preferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prefers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prefers
     * const prefer = await prisma.prefer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preferUpdateManyArgs>(args: SelectSubset<T, preferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prefer.
     * @param {preferUpsertArgs} args - Arguments to update or create a Prefer.
     * @example
     * // Update or create a Prefer
     * const prefer = await prisma.prefer.upsert({
     *   create: {
     *     // ... data to create a Prefer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prefer we want to update
     *   }
     * })
     */
    upsert<T extends preferUpsertArgs>(args: SelectSubset<T, preferUpsertArgs<ExtArgs>>): Prisma__preferClient<$Result.GetResult<Prisma.$preferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prefers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferCountArgs} args - Arguments to filter Prefers to count.
     * @example
     * // Count the number of Prefers
     * const count = await prisma.prefer.count({
     *   where: {
     *     // ... the filter for the Prefers we want to count
     *   }
     * })
    **/
    count<T extends preferCountArgs>(
      args?: Subset<T, preferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prefer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferAggregateArgs>(args: Subset<T, PreferAggregateArgs>): Prisma.PrismaPromise<GetPreferAggregateType<T>>

    /**
     * Group by Prefer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends preferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preferGroupByArgs['orderBy'] }
        : { orderBy?: preferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, preferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prefer model
   */
  readonly fields: preferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prefer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prefer model
   */
  interface preferFieldRefs {
    readonly id: FieldRef<"prefer", 'Int'>
    readonly userId: FieldRef<"prefer", 'BigInt'>
    readonly prefer: FieldRef<"prefer", 'prefer_type'>
  }
    

  // Custom InputTypes
  /**
   * prefer findUnique
   */
  export type preferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer findUniqueOrThrow
   */
  export type preferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer findFirst
   */
  export type preferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prefers.
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prefers.
     */
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * prefer findFirstOrThrow
   */
  export type preferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefer to fetch.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prefers.
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prefers.
     */
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * prefer findMany
   */
  export type preferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter, which prefers to fetch.
     */
    where?: preferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prefers to fetch.
     */
    orderBy?: preferOrderByWithRelationInput | preferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prefers.
     */
    cursor?: preferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prefers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prefers.
     */
    skip?: number
    distinct?: PreferScalarFieldEnum | PreferScalarFieldEnum[]
  }

  /**
   * prefer create
   */
  export type preferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * The data needed to create a prefer.
     */
    data: XOR<preferCreateInput, preferUncheckedCreateInput>
  }

  /**
   * prefer createMany
   */
  export type preferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prefers.
     */
    data: preferCreateManyInput | preferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prefer update
   */
  export type preferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * The data needed to update a prefer.
     */
    data: XOR<preferUpdateInput, preferUncheckedUpdateInput>
    /**
     * Choose, which prefer to update.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer updateMany
   */
  export type preferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prefers.
     */
    data: XOR<preferUpdateManyMutationInput, preferUncheckedUpdateManyInput>
    /**
     * Filter which prefers to update
     */
    where?: preferWhereInput
    /**
     * Limit how many prefers to update.
     */
    limit?: number
  }

  /**
   * prefer upsert
   */
  export type preferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * The filter to search for the prefer to update in case it exists.
     */
    where: preferWhereUniqueInput
    /**
     * In case the prefer found by the `where` argument doesn't exist, create a new prefer with this data.
     */
    create: XOR<preferCreateInput, preferUncheckedCreateInput>
    /**
     * In case the prefer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preferUpdateInput, preferUncheckedUpdateInput>
  }

  /**
   * prefer delete
   */
  export type preferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
    /**
     * Filter which prefer to delete.
     */
    where: preferWhereUniqueInput
  }

  /**
   * prefer deleteMany
   */
  export type preferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prefers to delete
     */
    where?: preferWhereInput
    /**
     * Limit how many prefers to delete.
     */
    limit?: number
  }

  /**
   * prefer without action
   */
  export type preferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prefer
     */
    select?: preferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prefer
     */
    omit?: preferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preferInclude<ExtArgs> | null
  }


  /**
   * Model zzim
   */

  export type AggregateZzim = {
    _count: ZzimCountAggregateOutputType | null
    _avg: ZzimAvgAggregateOutputType | null
    _sum: ZzimSumAggregateOutputType | null
    _min: ZzimMinAggregateOutputType | null
    _max: ZzimMaxAggregateOutputType | null
  }

  export type ZzimAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    rest_id: number | null
  }

  export type ZzimSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    rest_id: bigint | null
  }

  export type ZzimMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    rest_id: bigint | null
    created_at: Date | null
  }

  export type ZzimMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    rest_id: bigint | null
    created_at: Date | null
  }

  export type ZzimCountAggregateOutputType = {
    id: number
    user_id: number
    rest_id: number
    created_at: number
    _all: number
  }


  export type ZzimAvgAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
  }

  export type ZzimSumAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
  }

  export type ZzimMinAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    created_at?: true
  }

  export type ZzimMaxAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    created_at?: true
  }

  export type ZzimCountAggregateInputType = {
    id?: true
    user_id?: true
    rest_id?: true
    created_at?: true
    _all?: true
  }

  export type ZzimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zzim to aggregate.
     */
    where?: zzimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zzims to fetch.
     */
    orderBy?: zzimOrderByWithRelationInput | zzimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zzimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zzims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zzims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zzims
    **/
    _count?: true | ZzimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZzimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZzimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZzimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZzimMaxAggregateInputType
  }

  export type GetZzimAggregateType<T extends ZzimAggregateArgs> = {
        [P in keyof T & keyof AggregateZzim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZzim[P]>
      : GetScalarType<T[P], AggregateZzim[P]>
  }




  export type zzimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zzimWhereInput
    orderBy?: zzimOrderByWithAggregationInput | zzimOrderByWithAggregationInput[]
    by: ZzimScalarFieldEnum[] | ZzimScalarFieldEnum
    having?: zzimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZzimCountAggregateInputType | true
    _avg?: ZzimAvgAggregateInputType
    _sum?: ZzimSumAggregateInputType
    _min?: ZzimMinAggregateInputType
    _max?: ZzimMaxAggregateInputType
  }

  export type ZzimGroupByOutputType = {
    id: bigint
    user_id: bigint
    rest_id: bigint
    created_at: Date | null
    _count: ZzimCountAggregateOutputType | null
    _avg: ZzimAvgAggregateOutputType | null
    _sum: ZzimSumAggregateOutputType | null
    _min: ZzimMinAggregateOutputType | null
    _max: ZzimMaxAggregateOutputType | null
  }

  type GetZzimGroupByPayload<T extends zzimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZzimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZzimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZzimGroupByOutputType[P]>
            : GetScalarType<T[P], ZzimGroupByOutputType[P]>
        }
      >
    >


  export type zzimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rest_id?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zzim"]>



  export type zzimSelectScalar = {
    id?: boolean
    user_id?: boolean
    rest_id?: boolean
    created_at?: boolean
  }

  export type zzimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "rest_id" | "created_at", ExtArgs["result"]["zzim"]>
  export type zzimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }

  export type $zzimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zzim"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      restaurant: Prisma.$restaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      rest_id: bigint
      created_at: Date | null
    }, ExtArgs["result"]["zzim"]>
    composites: {}
  }

  type zzimGetPayload<S extends boolean | null | undefined | zzimDefaultArgs> = $Result.GetResult<Prisma.$zzimPayload, S>

  type zzimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zzimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZzimCountAggregateInputType | true
    }

  export interface zzimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zzim'], meta: { name: 'zzim' } }
    /**
     * Find zero or one Zzim that matches the filter.
     * @param {zzimFindUniqueArgs} args - Arguments to find a Zzim
     * @example
     * // Get one Zzim
     * const zzim = await prisma.zzim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zzimFindUniqueArgs>(args: SelectSubset<T, zzimFindUniqueArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zzim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zzimFindUniqueOrThrowArgs} args - Arguments to find a Zzim
     * @example
     * // Get one Zzim
     * const zzim = await prisma.zzim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zzimFindUniqueOrThrowArgs>(args: SelectSubset<T, zzimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zzim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zzimFindFirstArgs} args - Arguments to find a Zzim
     * @example
     * // Get one Zzim
     * const zzim = await prisma.zzim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zzimFindFirstArgs>(args?: SelectSubset<T, zzimFindFirstArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zzim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zzimFindFirstOrThrowArgs} args - Arguments to find a Zzim
     * @example
     * // Get one Zzim
     * const zzim = await prisma.zzim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zzimFindFirstOrThrowArgs>(args?: SelectSubset<T, zzimFindFirstOrThrowArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zzims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zzimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zzims
     * const zzims = await prisma.zzim.findMany()
     * 
     * // Get first 10 Zzims
     * const zzims = await prisma.zzim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zzimWithIdOnly = await prisma.zzim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zzimFindManyArgs>(args?: SelectSubset<T, zzimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zzim.
     * @param {zzimCreateArgs} args - Arguments to create a Zzim.
     * @example
     * // Create one Zzim
     * const Zzim = await prisma.zzim.create({
     *   data: {
     *     // ... data to create a Zzim
     *   }
     * })
     * 
     */
    create<T extends zzimCreateArgs>(args: SelectSubset<T, zzimCreateArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zzims.
     * @param {zzimCreateManyArgs} args - Arguments to create many Zzims.
     * @example
     * // Create many Zzims
     * const zzim = await prisma.zzim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zzimCreateManyArgs>(args?: SelectSubset<T, zzimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Zzim.
     * @param {zzimDeleteArgs} args - Arguments to delete one Zzim.
     * @example
     * // Delete one Zzim
     * const Zzim = await prisma.zzim.delete({
     *   where: {
     *     // ... filter to delete one Zzim
     *   }
     * })
     * 
     */
    delete<T extends zzimDeleteArgs>(args: SelectSubset<T, zzimDeleteArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zzim.
     * @param {zzimUpdateArgs} args - Arguments to update one Zzim.
     * @example
     * // Update one Zzim
     * const zzim = await prisma.zzim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zzimUpdateArgs>(args: SelectSubset<T, zzimUpdateArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zzims.
     * @param {zzimDeleteManyArgs} args - Arguments to filter Zzims to delete.
     * @example
     * // Delete a few Zzims
     * const { count } = await prisma.zzim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zzimDeleteManyArgs>(args?: SelectSubset<T, zzimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zzims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zzimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zzims
     * const zzim = await prisma.zzim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zzimUpdateManyArgs>(args: SelectSubset<T, zzimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zzim.
     * @param {zzimUpsertArgs} args - Arguments to update or create a Zzim.
     * @example
     * // Update or create a Zzim
     * const zzim = await prisma.zzim.upsert({
     *   create: {
     *     // ... data to create a Zzim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zzim we want to update
     *   }
     * })
     */
    upsert<T extends zzimUpsertArgs>(args: SelectSubset<T, zzimUpsertArgs<ExtArgs>>): Prisma__zzimClient<$Result.GetResult<Prisma.$zzimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zzims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zzimCountArgs} args - Arguments to filter Zzims to count.
     * @example
     * // Count the number of Zzims
     * const count = await prisma.zzim.count({
     *   where: {
     *     // ... the filter for the Zzims we want to count
     *   }
     * })
    **/
    count<T extends zzimCountArgs>(
      args?: Subset<T, zzimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZzimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zzim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZzimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZzimAggregateArgs>(args: Subset<T, ZzimAggregateArgs>): Prisma.PrismaPromise<GetZzimAggregateType<T>>

    /**
     * Group by Zzim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zzimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends zzimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zzimGroupByArgs['orderBy'] }
        : { orderBy?: zzimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zzimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZzimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zzim model
   */
  readonly fields: zzimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zzim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zzimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zzim model
   */
  interface zzimFieldRefs {
    readonly id: FieldRef<"zzim", 'BigInt'>
    readonly user_id: FieldRef<"zzim", 'BigInt'>
    readonly rest_id: FieldRef<"zzim", 'BigInt'>
    readonly created_at: FieldRef<"zzim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * zzim findUnique
   */
  export type zzimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * Filter, which zzim to fetch.
     */
    where: zzimWhereUniqueInput
  }

  /**
   * zzim findUniqueOrThrow
   */
  export type zzimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * Filter, which zzim to fetch.
     */
    where: zzimWhereUniqueInput
  }

  /**
   * zzim findFirst
   */
  export type zzimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * Filter, which zzim to fetch.
     */
    where?: zzimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zzims to fetch.
     */
    orderBy?: zzimOrderByWithRelationInput | zzimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zzims.
     */
    cursor?: zzimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zzims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zzims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zzims.
     */
    distinct?: ZzimScalarFieldEnum | ZzimScalarFieldEnum[]
  }

  /**
   * zzim findFirstOrThrow
   */
  export type zzimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * Filter, which zzim to fetch.
     */
    where?: zzimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zzims to fetch.
     */
    orderBy?: zzimOrderByWithRelationInput | zzimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zzims.
     */
    cursor?: zzimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zzims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zzims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zzims.
     */
    distinct?: ZzimScalarFieldEnum | ZzimScalarFieldEnum[]
  }

  /**
   * zzim findMany
   */
  export type zzimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * Filter, which zzims to fetch.
     */
    where?: zzimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zzims to fetch.
     */
    orderBy?: zzimOrderByWithRelationInput | zzimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zzims.
     */
    cursor?: zzimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zzims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zzims.
     */
    skip?: number
    distinct?: ZzimScalarFieldEnum | ZzimScalarFieldEnum[]
  }

  /**
   * zzim create
   */
  export type zzimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * The data needed to create a zzim.
     */
    data: XOR<zzimCreateInput, zzimUncheckedCreateInput>
  }

  /**
   * zzim createMany
   */
  export type zzimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zzims.
     */
    data: zzimCreateManyInput | zzimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zzim update
   */
  export type zzimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * The data needed to update a zzim.
     */
    data: XOR<zzimUpdateInput, zzimUncheckedUpdateInput>
    /**
     * Choose, which zzim to update.
     */
    where: zzimWhereUniqueInput
  }

  /**
   * zzim updateMany
   */
  export type zzimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zzims.
     */
    data: XOR<zzimUpdateManyMutationInput, zzimUncheckedUpdateManyInput>
    /**
     * Filter which zzims to update
     */
    where?: zzimWhereInput
    /**
     * Limit how many zzims to update.
     */
    limit?: number
  }

  /**
   * zzim upsert
   */
  export type zzimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * The filter to search for the zzim to update in case it exists.
     */
    where: zzimWhereUniqueInput
    /**
     * In case the zzim found by the `where` argument doesn't exist, create a new zzim with this data.
     */
    create: XOR<zzimCreateInput, zzimUncheckedCreateInput>
    /**
     * In case the zzim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zzimUpdateInput, zzimUncheckedUpdateInput>
  }

  /**
   * zzim delete
   */
  export type zzimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
    /**
     * Filter which zzim to delete.
     */
    where: zzimWhereUniqueInput
  }

  /**
   * zzim deleteMany
   */
  export type zzimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zzims to delete
     */
    where?: zzimWhereInput
    /**
     * Limit how many zzims to delete.
     */
    limit?: number
  }

  /**
   * zzim without action
   */
  export type zzimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zzim
     */
    select?: zzimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zzim
     */
    omit?: zzimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zzimInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    calory: 'calory',
    carbo: 'carbo',
    protein: 'protein',
    fat: 'fat',
    vitamin: 'vitamin',
    allergic: 'allergic',
    sodium: 'sodium',
    image_link: 'image_link'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const MukburimScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    menu_id: 'menu_id',
    date: 'date'
  };

  export type MukburimScalarFieldEnum = (typeof MukburimScalarFieldEnum)[keyof typeof MukburimScalarFieldEnum]


  export const Recommend_exceptScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    user_id: 'user_id',
    bit: 'bit'
  };

  export type Recommend_exceptScalarFieldEnum = (typeof Recommend_exceptScalarFieldEnum)[keyof typeof Recommend_exceptScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    review_id: 'review_id',
    text: 'text'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const Rest_imageScalarFieldEnum: {
    id: 'id',
    rest_id: 'rest_id',
    link: 'link'
  };

  export type Rest_imageScalarFieldEnum = (typeof Rest_imageScalarFieldEnum)[keyof typeof Rest_imageScalarFieldEnum]


  export const Rest_menuScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    rest_id: 'rest_id'
  };

  export type Rest_menuScalarFieldEnum = (typeof Rest_menuScalarFieldEnum)[keyof typeof Rest_menuScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    location1: 'location1',
    location2: 'location2',
    location3: 'location3',
    name: 'name',
    repre_menu: 'repre_menu',
    close_day: 'close_day',
    start_time: 'start_time',
    end_time: 'end_time',
    address: 'address',
    detail_address: 'detail_address',
    rating: 'rating',
    day_open_time: 'day_open_time'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    rest_id: 'rest_id',
    rating: 'rating',
    tag: 'tag',
    text: 'text',
    created_at: 'created_at',
    like: 'like'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const Review_imageScalarFieldEnum: {
    id: 'id',
    review_id: 'review_id',
    link: 'link'
  };

  export type Review_imageScalarFieldEnum = (typeof Review_imageScalarFieldEnum)[keyof typeof Review_imageScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    session_id: 'session_id',
    expires: 'expires',
    data: 'data'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone_num: 'phone_num',
    is_verified: 'is_verified',
    nickname: 'nickname',
    body_type: 'body_type',
    gender: 'gender',
    exercise: 'exercise',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at',
    profileImageUrl: 'profileImageUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AllergyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    allergy: 'allergy'
  };

  export type AllergyScalarFieldEnum = (typeof AllergyScalarFieldEnum)[keyof typeof AllergyScalarFieldEnum]


  export const PreferScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    prefer: 'prefer'
  };

  export type PreferScalarFieldEnum = (typeof PreferScalarFieldEnum)[keyof typeof PreferScalarFieldEnum]


  export const ZzimScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    rest_id: 'rest_id',
    created_at: 'created_at'
  };

  export type ZzimScalarFieldEnum = (typeof ZzimScalarFieldEnum)[keyof typeof ZzimScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const choiceOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type choiceOrderByRelevanceFieldEnum = (typeof choiceOrderByRelevanceFieldEnum)[keyof typeof choiceOrderByRelevanceFieldEnum]


  export const menuOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    vitamin: 'vitamin',
    allergic: 'allergic',
    image_link: 'image_link'
  };

  export type menuOrderByRelevanceFieldEnum = (typeof menuOrderByRelevanceFieldEnum)[keyof typeof menuOrderByRelevanceFieldEnum]


  export const reportOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type reportOrderByRelevanceFieldEnum = (typeof reportOrderByRelevanceFieldEnum)[keyof typeof reportOrderByRelevanceFieldEnum]


  export const rest_imageOrderByRelevanceFieldEnum: {
    link: 'link'
  };

  export type rest_imageOrderByRelevanceFieldEnum = (typeof rest_imageOrderByRelevanceFieldEnum)[keyof typeof rest_imageOrderByRelevanceFieldEnum]


  export const restaurantOrderByRelevanceFieldEnum: {
    location1: 'location1',
    location2: 'location2',
    location3: 'location3',
    name: 'name',
    repre_menu: 'repre_menu',
    close_day: 'close_day',
    start_time: 'start_time',
    end_time: 'end_time',
    address: 'address',
    detail_address: 'detail_address',
    day_open_time: 'day_open_time'
  };

  export type restaurantOrderByRelevanceFieldEnum = (typeof restaurantOrderByRelevanceFieldEnum)[keyof typeof restaurantOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const reviewOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type reviewOrderByRelevanceFieldEnum = (typeof reviewOrderByRelevanceFieldEnum)[keyof typeof reviewOrderByRelevanceFieldEnum]


  export const review_imageOrderByRelevanceFieldEnum: {
    link: 'link'
  };

  export type review_imageOrderByRelevanceFieldEnum = (typeof review_imageOrderByRelevanceFieldEnum)[keyof typeof review_imageOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    session_id: 'session_id',
    data: 'data'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    email: 'email',
    phone_num: 'phone_num',
    nickname: 'nickname',
    password: 'password',
    profileImageUrl: 'profileImageUrl'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'user_body_type'
   */
  export type Enumuser_body_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_body_type'>
    


  /**
   * Reference to a field of type 'user_gender'
   */
  export type Enumuser_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_gender'>
    


  /**
   * Reference to a field of type 'user_exercise'
   */
  export type Enumuser_exerciseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_exercise'>
    


  /**
   * Reference to a field of type 'allergy_type'
   */
  export type Enumallergy_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'allergy_type'>
    


  /**
   * Reference to a field of type 'prefer_type'
   */
  export type Enumprefer_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'prefer_type'>
    
  /**
   * Deep Input Types
   */


  export type choiceWhereInput = {
    AND?: choiceWhereInput | choiceWhereInput[]
    OR?: choiceWhereInput[]
    NOT?: choiceWhereInput | choiceWhereInput[]
    id?: BigIntFilter<"choice"> | bigint | number
    description?: StringNullableFilter<"choice"> | string | null
  }

  export type choiceOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: choiceOrderByRelevanceInput
  }

  export type choiceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: choiceWhereInput | choiceWhereInput[]
    OR?: choiceWhereInput[]
    NOT?: choiceWhereInput | choiceWhereInput[]
    description?: StringNullableFilter<"choice"> | string | null
  }, "id">

  export type choiceOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: choiceCountOrderByAggregateInput
    _avg?: choiceAvgOrderByAggregateInput
    _max?: choiceMaxOrderByAggregateInput
    _min?: choiceMinOrderByAggregateInput
    _sum?: choiceSumOrderByAggregateInput
  }

  export type choiceScalarWhereWithAggregatesInput = {
    AND?: choiceScalarWhereWithAggregatesInput | choiceScalarWhereWithAggregatesInput[]
    OR?: choiceScalarWhereWithAggregatesInput[]
    NOT?: choiceScalarWhereWithAggregatesInput | choiceScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"choice"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"choice"> | string | null
  }

  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    id?: BigIntFilter<"menu"> | bigint | number
    name?: StringFilter<"menu"> | string
    description?: StringNullableFilter<"menu"> | string | null
    calory?: BigIntNullableFilter<"menu"> | bigint | number | null
    carbo?: BigIntNullableFilter<"menu"> | bigint | number | null
    protein?: BigIntNullableFilter<"menu"> | bigint | number | null
    fat?: BigIntNullableFilter<"menu"> | bigint | number | null
    vitamin?: StringNullableFilter<"menu"> | string | null
    allergic?: StringNullableFilter<"menu"> | string | null
    sodium?: BigIntNullableFilter<"menu"> | bigint | number | null
    image_link?: StringNullableFilter<"menu"> | string | null
    mukburim?: MukburimListRelationFilter
    recommend_except?: Recommend_exceptListRelationFilter
    rest_menu?: Rest_menuListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    calory?: SortOrderInput | SortOrder
    carbo?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    vitamin?: SortOrderInput | SortOrder
    allergic?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    image_link?: SortOrderInput | SortOrder
    mukburim?: mukburimOrderByRelationAggregateInput
    recommend_except?: recommend_exceptOrderByRelationAggregateInput
    rest_menu?: rest_menuOrderByRelationAggregateInput
    _relevance?: menuOrderByRelevanceInput
  }

  export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    name?: StringFilter<"menu"> | string
    description?: StringNullableFilter<"menu"> | string | null
    calory?: BigIntNullableFilter<"menu"> | bigint | number | null
    carbo?: BigIntNullableFilter<"menu"> | bigint | number | null
    protein?: BigIntNullableFilter<"menu"> | bigint | number | null
    fat?: BigIntNullableFilter<"menu"> | bigint | number | null
    vitamin?: StringNullableFilter<"menu"> | string | null
    allergic?: StringNullableFilter<"menu"> | string | null
    sodium?: BigIntNullableFilter<"menu"> | bigint | number | null
    image_link?: StringNullableFilter<"menu"> | string | null
    mukburim?: MukburimListRelationFilter
    recommend_except?: Recommend_exceptListRelationFilter
    rest_menu?: Rest_menuListRelationFilter
  }, "id">

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    calory?: SortOrderInput | SortOrder
    carbo?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    vitamin?: SortOrderInput | SortOrder
    allergic?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    image_link?: SortOrderInput | SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    OR?: menuScalarWhereWithAggregatesInput[]
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"menu"> | bigint | number
    name?: StringWithAggregatesFilter<"menu"> | string
    description?: StringNullableWithAggregatesFilter<"menu"> | string | null
    calory?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    carbo?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    protein?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    fat?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    vitamin?: StringNullableWithAggregatesFilter<"menu"> | string | null
    allergic?: StringNullableWithAggregatesFilter<"menu"> | string | null
    sodium?: BigIntNullableWithAggregatesFilter<"menu"> | bigint | number | null
    image_link?: StringNullableWithAggregatesFilter<"menu"> | string | null
  }

  export type mukburimWhereInput = {
    AND?: mukburimWhereInput | mukburimWhereInput[]
    OR?: mukburimWhereInput[]
    NOT?: mukburimWhereInput | mukburimWhereInput[]
    id?: BigIntFilter<"mukburim"> | bigint | number
    user_id?: BigIntFilter<"mukburim"> | bigint | number
    menu_id?: BigIntFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableFilter<"mukburim"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type mukburimOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    date?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
  }

  export type mukburimWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: mukburimWhereInput | mukburimWhereInput[]
    OR?: mukburimWhereInput[]
    NOT?: mukburimWhereInput | mukburimWhereInput[]
    user_id?: BigIntFilter<"mukburim"> | bigint | number
    menu_id?: BigIntFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableFilter<"mukburim"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type mukburimOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    date?: SortOrderInput | SortOrder
    _count?: mukburimCountOrderByAggregateInput
    _avg?: mukburimAvgOrderByAggregateInput
    _max?: mukburimMaxOrderByAggregateInput
    _min?: mukburimMinOrderByAggregateInput
    _sum?: mukburimSumOrderByAggregateInput
  }

  export type mukburimScalarWhereWithAggregatesInput = {
    AND?: mukburimScalarWhereWithAggregatesInput | mukburimScalarWhereWithAggregatesInput[]
    OR?: mukburimScalarWhereWithAggregatesInput[]
    NOT?: mukburimScalarWhereWithAggregatesInput | mukburimScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"mukburim"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"mukburim"> | bigint | number
    menu_id?: BigIntWithAggregatesFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableWithAggregatesFilter<"mukburim"> | Date | string | null
  }

  export type recommend_exceptWhereInput = {
    AND?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    OR?: recommend_exceptWhereInput[]
    NOT?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    id?: BigIntFilter<"recommend_except"> | bigint | number
    menu_id?: BigIntFilter<"recommend_except"> | bigint | number
    user_id?: BigIntFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableFilter<"recommend_except"> | boolean | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type recommend_exceptOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    bit?: SortOrderInput | SortOrder
    menu?: menuOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type recommend_exceptWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    OR?: recommend_exceptWhereInput[]
    NOT?: recommend_exceptWhereInput | recommend_exceptWhereInput[]
    menu_id?: BigIntFilter<"recommend_except"> | bigint | number
    user_id?: BigIntFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableFilter<"recommend_except"> | boolean | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type recommend_exceptOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    bit?: SortOrderInput | SortOrder
    _count?: recommend_exceptCountOrderByAggregateInput
    _avg?: recommend_exceptAvgOrderByAggregateInput
    _max?: recommend_exceptMaxOrderByAggregateInput
    _min?: recommend_exceptMinOrderByAggregateInput
    _sum?: recommend_exceptSumOrderByAggregateInput
  }

  export type recommend_exceptScalarWhereWithAggregatesInput = {
    AND?: recommend_exceptScalarWhereWithAggregatesInput | recommend_exceptScalarWhereWithAggregatesInput[]
    OR?: recommend_exceptScalarWhereWithAggregatesInput[]
    NOT?: recommend_exceptScalarWhereWithAggregatesInput | recommend_exceptScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"recommend_except"> | bigint | number
    menu_id?: BigIntWithAggregatesFilter<"recommend_except"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableWithAggregatesFilter<"recommend_except"> | boolean | null
  }

  export type reportWhereInput = {
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    id?: BigIntFilter<"report"> | bigint | number
    user_id?: BigIntFilter<"report"> | bigint | number
    review_id?: BigIntFilter<"report"> | bigint | number
    text?: StringNullableFilter<"report"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    review?: XOR<ReviewScalarRelationFilter, reviewWhereInput>
  }

  export type reportOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
    text?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    review?: reviewOrderByWithRelationInput
    _relevance?: reportOrderByRelevanceInput
  }

  export type reportWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    user_id?: BigIntFilter<"report"> | bigint | number
    review_id?: BigIntFilter<"report"> | bigint | number
    text?: StringNullableFilter<"report"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    review?: XOR<ReviewScalarRelationFilter, reviewWhereInput>
  }, "id">

  export type reportOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
    text?: SortOrderInput | SortOrder
    _count?: reportCountOrderByAggregateInput
    _avg?: reportAvgOrderByAggregateInput
    _max?: reportMaxOrderByAggregateInput
    _min?: reportMinOrderByAggregateInput
    _sum?: reportSumOrderByAggregateInput
  }

  export type reportScalarWhereWithAggregatesInput = {
    AND?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    OR?: reportScalarWhereWithAggregatesInput[]
    NOT?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"report"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"report"> | bigint | number
    review_id?: BigIntWithAggregatesFilter<"report"> | bigint | number
    text?: StringNullableWithAggregatesFilter<"report"> | string | null
  }

  export type rest_imageWhereInput = {
    AND?: rest_imageWhereInput | rest_imageWhereInput[]
    OR?: rest_imageWhereInput[]
    NOT?: rest_imageWhereInput | rest_imageWhereInput[]
    id?: BigIntFilter<"rest_image"> | bigint | number
    rest_id?: BigIntFilter<"rest_image"> | bigint | number
    link?: StringNullableFilter<"rest_image"> | string | null
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }

  export type rest_imageOrderByWithRelationInput = {
    id?: SortOrder
    rest_id?: SortOrder
    link?: SortOrderInput | SortOrder
    restaurant?: restaurantOrderByWithRelationInput
    _relevance?: rest_imageOrderByRelevanceInput
  }

  export type rest_imageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: rest_imageWhereInput | rest_imageWhereInput[]
    OR?: rest_imageWhereInput[]
    NOT?: rest_imageWhereInput | rest_imageWhereInput[]
    rest_id?: BigIntFilter<"rest_image"> | bigint | number
    link?: StringNullableFilter<"rest_image"> | string | null
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }, "id">

  export type rest_imageOrderByWithAggregationInput = {
    id?: SortOrder
    rest_id?: SortOrder
    link?: SortOrderInput | SortOrder
    _count?: rest_imageCountOrderByAggregateInput
    _avg?: rest_imageAvgOrderByAggregateInput
    _max?: rest_imageMaxOrderByAggregateInput
    _min?: rest_imageMinOrderByAggregateInput
    _sum?: rest_imageSumOrderByAggregateInput
  }

  export type rest_imageScalarWhereWithAggregatesInput = {
    AND?: rest_imageScalarWhereWithAggregatesInput | rest_imageScalarWhereWithAggregatesInput[]
    OR?: rest_imageScalarWhereWithAggregatesInput[]
    NOT?: rest_imageScalarWhereWithAggregatesInput | rest_imageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"rest_image"> | bigint | number
    rest_id?: BigIntWithAggregatesFilter<"rest_image"> | bigint | number
    link?: StringNullableWithAggregatesFilter<"rest_image"> | string | null
  }

  export type rest_menuWhereInput = {
    AND?: rest_menuWhereInput | rest_menuWhereInput[]
    OR?: rest_menuWhereInput[]
    NOT?: rest_menuWhereInput | rest_menuWhereInput[]
    id?: BigIntFilter<"rest_menu"> | bigint | number
    menu_id?: BigIntFilter<"rest_menu"> | bigint | number
    rest_id?: BigIntFilter<"rest_menu"> | bigint | number
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }

  export type rest_menuOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
    menu?: menuOrderByWithRelationInput
    restaurant?: restaurantOrderByWithRelationInput
  }

  export type rest_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: rest_menuWhereInput | rest_menuWhereInput[]
    OR?: rest_menuWhereInput[]
    NOT?: rest_menuWhereInput | rest_menuWhereInput[]
    menu_id?: BigIntFilter<"rest_menu"> | bigint | number
    rest_id?: BigIntFilter<"rest_menu"> | bigint | number
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }, "id">

  export type rest_menuOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
    _count?: rest_menuCountOrderByAggregateInput
    _avg?: rest_menuAvgOrderByAggregateInput
    _max?: rest_menuMaxOrderByAggregateInput
    _min?: rest_menuMinOrderByAggregateInput
    _sum?: rest_menuSumOrderByAggregateInput
  }

  export type rest_menuScalarWhereWithAggregatesInput = {
    AND?: rest_menuScalarWhereWithAggregatesInput | rest_menuScalarWhereWithAggregatesInput[]
    OR?: rest_menuScalarWhereWithAggregatesInput[]
    NOT?: rest_menuScalarWhereWithAggregatesInput | rest_menuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"rest_menu"> | bigint | number
    menu_id?: BigIntWithAggregatesFilter<"rest_menu"> | bigint | number
    rest_id?: BigIntWithAggregatesFilter<"rest_menu"> | bigint | number
  }

  export type restaurantWhereInput = {
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    id?: BigIntFilter<"restaurant"> | bigint | number
    location1?: StringNullableFilter<"restaurant"> | string | null
    location2?: StringNullableFilter<"restaurant"> | string | null
    location3?: StringNullableFilter<"restaurant"> | string | null
    name?: StringNullableFilter<"restaurant"> | string | null
    repre_menu?: StringNullableFilter<"restaurant"> | string | null
    close_day?: StringNullableFilter<"restaurant"> | string | null
    start_time?: StringNullableFilter<"restaurant"> | string | null
    end_time?: StringNullableFilter<"restaurant"> | string | null
    address?: StringNullableFilter<"restaurant"> | string | null
    detail_address?: StringNullableFilter<"restaurant"> | string | null
    rating?: FloatNullableFilter<"restaurant"> | number | null
    day_open_time?: StringNullableFilter<"restaurant"> | string | null
    rest_image?: Rest_imageListRelationFilter
    rest_menu?: Rest_menuListRelationFilter
    review?: ReviewListRelationFilter
    zzim?: ZzimListRelationFilter
  }

  export type restaurantOrderByWithRelationInput = {
    id?: SortOrder
    location1?: SortOrderInput | SortOrder
    location2?: SortOrderInput | SortOrder
    location3?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    repre_menu?: SortOrderInput | SortOrder
    close_day?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    detail_address?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    day_open_time?: SortOrderInput | SortOrder
    rest_image?: rest_imageOrderByRelationAggregateInput
    rest_menu?: rest_menuOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    zzim?: zzimOrderByRelationAggregateInput
    _relevance?: restaurantOrderByRelevanceInput
  }

  export type restaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    location1?: StringNullableFilter<"restaurant"> | string | null
    location2?: StringNullableFilter<"restaurant"> | string | null
    location3?: StringNullableFilter<"restaurant"> | string | null
    name?: StringNullableFilter<"restaurant"> | string | null
    repre_menu?: StringNullableFilter<"restaurant"> | string | null
    close_day?: StringNullableFilter<"restaurant"> | string | null
    start_time?: StringNullableFilter<"restaurant"> | string | null
    end_time?: StringNullableFilter<"restaurant"> | string | null
    address?: StringNullableFilter<"restaurant"> | string | null
    detail_address?: StringNullableFilter<"restaurant"> | string | null
    rating?: FloatNullableFilter<"restaurant"> | number | null
    day_open_time?: StringNullableFilter<"restaurant"> | string | null
    rest_image?: Rest_imageListRelationFilter
    rest_menu?: Rest_menuListRelationFilter
    review?: ReviewListRelationFilter
    zzim?: ZzimListRelationFilter
  }, "id">

  export type restaurantOrderByWithAggregationInput = {
    id?: SortOrder
    location1?: SortOrderInput | SortOrder
    location2?: SortOrderInput | SortOrder
    location3?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    repre_menu?: SortOrderInput | SortOrder
    close_day?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    detail_address?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    day_open_time?: SortOrderInput | SortOrder
    _count?: restaurantCountOrderByAggregateInput
    _avg?: restaurantAvgOrderByAggregateInput
    _max?: restaurantMaxOrderByAggregateInput
    _min?: restaurantMinOrderByAggregateInput
    _sum?: restaurantSumOrderByAggregateInput
  }

  export type restaurantScalarWhereWithAggregatesInput = {
    AND?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    OR?: restaurantScalarWhereWithAggregatesInput[]
    NOT?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"restaurant"> | bigint | number
    location1?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    location2?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    location3?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    name?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    repre_menu?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    close_day?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    start_time?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    end_time?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    address?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    detail_address?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"restaurant"> | number | null
    day_open_time?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: BigIntFilter<"review"> | bigint | number
    user_id?: BigIntFilter<"review"> | bigint | number
    rest_id?: BigIntFilter<"review"> | bigint | number
    rating?: BigIntNullableFilter<"review"> | bigint | number | null
    tag?: JsonNullableFilter<"review">
    text?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    like?: IntNullableFilter<"review"> | number | null
    report?: ReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
    review_image?: Review_imageListRelationFilter
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    like?: SortOrderInput | SortOrder
    report?: reportOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    restaurant?: restaurantOrderByWithRelationInput
    review_image?: review_imageOrderByRelationAggregateInput
    _relevance?: reviewOrderByRelevanceInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    user_id?: BigIntFilter<"review"> | bigint | number
    rest_id?: BigIntFilter<"review"> | bigint | number
    rating?: BigIntNullableFilter<"review"> | bigint | number | null
    tag?: JsonNullableFilter<"review">
    text?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    like?: IntNullableFilter<"review"> | number | null
    report?: ReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
    review_image?: Review_imageListRelationFilter
  }, "id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    like?: SortOrderInput | SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"review"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"review"> | bigint | number
    rest_id?: BigIntWithAggregatesFilter<"review"> | bigint | number
    rating?: BigIntNullableWithAggregatesFilter<"review"> | bigint | number | null
    tag?: JsonNullableWithAggregatesFilter<"review">
    text?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"review"> | Date | string | null
    like?: IntNullableWithAggregatesFilter<"review"> | number | null
  }

  export type review_imageWhereInput = {
    AND?: review_imageWhereInput | review_imageWhereInput[]
    OR?: review_imageWhereInput[]
    NOT?: review_imageWhereInput | review_imageWhereInput[]
    id?: BigIntFilter<"review_image"> | bigint | number
    review_id?: BigIntFilter<"review_image"> | bigint | number
    link?: StringNullableFilter<"review_image"> | string | null
    review?: XOR<ReviewScalarRelationFilter, reviewWhereInput>
  }

  export type review_imageOrderByWithRelationInput = {
    id?: SortOrder
    review_id?: SortOrder
    link?: SortOrderInput | SortOrder
    review?: reviewOrderByWithRelationInput
    _relevance?: review_imageOrderByRelevanceInput
  }

  export type review_imageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: review_imageWhereInput | review_imageWhereInput[]
    OR?: review_imageWhereInput[]
    NOT?: review_imageWhereInput | review_imageWhereInput[]
    review_id?: BigIntFilter<"review_image"> | bigint | number
    link?: StringNullableFilter<"review_image"> | string | null
    review?: XOR<ReviewScalarRelationFilter, reviewWhereInput>
  }, "id">

  export type review_imageOrderByWithAggregationInput = {
    id?: SortOrder
    review_id?: SortOrder
    link?: SortOrderInput | SortOrder
    _count?: review_imageCountOrderByAggregateInput
    _avg?: review_imageAvgOrderByAggregateInput
    _max?: review_imageMaxOrderByAggregateInput
    _min?: review_imageMinOrderByAggregateInput
    _sum?: review_imageSumOrderByAggregateInput
  }

  export type review_imageScalarWhereWithAggregatesInput = {
    AND?: review_imageScalarWhereWithAggregatesInput | review_imageScalarWhereWithAggregatesInput[]
    OR?: review_imageScalarWhereWithAggregatesInput[]
    NOT?: review_imageScalarWhereWithAggregatesInput | review_imageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"review_image"> | bigint | number
    review_id?: BigIntWithAggregatesFilter<"review_image"> | bigint | number
    link?: StringNullableWithAggregatesFilter<"review_image"> | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    session_id?: StringFilter<"sessions"> | string
    expires?: IntFilter<"sessions"> | number
    data?: StringNullableFilter<"sessions"> | string | null
  }

  export type sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrderInput | SortOrder
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    expires?: IntFilter<"sessions"> | number
    data?: StringNullableFilter<"sessions"> | string | null
  }, "session_id">

  export type sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    session_id?: StringWithAggregatesFilter<"sessions"> | string
    expires?: IntWithAggregatesFilter<"sessions"> | number
    data?: StringNullableWithAggregatesFilter<"sessions"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: BigIntFilter<"user"> | bigint | number
    email?: StringNullableFilter<"user"> | string | null
    phone_num?: StringNullableFilter<"user"> | string | null
    is_verified?: BoolNullableFilter<"user"> | boolean | null
    nickname?: StringNullableFilter<"user"> | string | null
    body_type?: Enumuser_body_typeNullableFilter<"user"> | $Enums.user_body_type | null
    gender?: Enumuser_genderNullableFilter<"user"> | $Enums.user_gender | null
    exercise?: Enumuser_exerciseNullableFilter<"user"> | $Enums.user_exercise | null
    password?: StringFilter<"user"> | string
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    profileImageUrl?: StringNullableFilter<"user"> | string | null
    allergy?: AllergyListRelationFilter
    mukburim?: MukburimListRelationFilter
    prefer?: PreferListRelationFilter
    recommend_except?: Recommend_exceptListRelationFilter
    report?: ReportListRelationFilter
    review?: ReviewListRelationFilter
    zzim?: ZzimListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_num?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    body_type?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    exercise?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    allergy?: allergyOrderByRelationAggregateInput
    mukburim?: mukburimOrderByRelationAggregateInput
    prefer?: preferOrderByRelationAggregateInput
    recommend_except?: recommend_exceptOrderByRelationAggregateInput
    report?: reportOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    zzim?: zzimOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    email?: StringNullableFilter<"user"> | string | null
    phone_num?: StringNullableFilter<"user"> | string | null
    is_verified?: BoolNullableFilter<"user"> | boolean | null
    nickname?: StringNullableFilter<"user"> | string | null
    body_type?: Enumuser_body_typeNullableFilter<"user"> | $Enums.user_body_type | null
    gender?: Enumuser_genderNullableFilter<"user"> | $Enums.user_gender | null
    exercise?: Enumuser_exerciseNullableFilter<"user"> | $Enums.user_exercise | null
    password?: StringFilter<"user"> | string
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    profileImageUrl?: StringNullableFilter<"user"> | string | null
    allergy?: AllergyListRelationFilter
    mukburim?: MukburimListRelationFilter
    prefer?: PreferListRelationFilter
    recommend_except?: Recommend_exceptListRelationFilter
    report?: ReportListRelationFilter
    review?: ReviewListRelationFilter
    zzim?: ZzimListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_num?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    body_type?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    exercise?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"user"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone_num?: StringNullableWithAggregatesFilter<"user"> | string | null
    is_verified?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    nickname?: StringNullableWithAggregatesFilter<"user"> | string | null
    body_type?: Enumuser_body_typeNullableWithAggregatesFilter<"user"> | $Enums.user_body_type | null
    gender?: Enumuser_genderNullableWithAggregatesFilter<"user"> | $Enums.user_gender | null
    exercise?: Enumuser_exerciseNullableWithAggregatesFilter<"user"> | $Enums.user_exercise | null
    password?: StringWithAggregatesFilter<"user"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type allergyWhereInput = {
    AND?: allergyWhereInput | allergyWhereInput[]
    OR?: allergyWhereInput[]
    NOT?: allergyWhereInput | allergyWhereInput[]
    id?: IntFilter<"allergy"> | number
    userId?: BigIntFilter<"allergy"> | bigint | number
    allergy?: Enumallergy_typeFilter<"allergy"> | $Enums.allergy_type
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type allergyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    allergy?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type allergyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: allergyWhereInput | allergyWhereInput[]
    OR?: allergyWhereInput[]
    NOT?: allergyWhereInput | allergyWhereInput[]
    userId?: BigIntFilter<"allergy"> | bigint | number
    allergy?: Enumallergy_typeFilter<"allergy"> | $Enums.allergy_type
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type allergyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    allergy?: SortOrder
    _count?: allergyCountOrderByAggregateInput
    _avg?: allergyAvgOrderByAggregateInput
    _max?: allergyMaxOrderByAggregateInput
    _min?: allergyMinOrderByAggregateInput
    _sum?: allergySumOrderByAggregateInput
  }

  export type allergyScalarWhereWithAggregatesInput = {
    AND?: allergyScalarWhereWithAggregatesInput | allergyScalarWhereWithAggregatesInput[]
    OR?: allergyScalarWhereWithAggregatesInput[]
    NOT?: allergyScalarWhereWithAggregatesInput | allergyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"allergy"> | number
    userId?: BigIntWithAggregatesFilter<"allergy"> | bigint | number
    allergy?: Enumallergy_typeWithAggregatesFilter<"allergy"> | $Enums.allergy_type
  }

  export type preferWhereInput = {
    AND?: preferWhereInput | preferWhereInput[]
    OR?: preferWhereInput[]
    NOT?: preferWhereInput | preferWhereInput[]
    id?: IntFilter<"prefer"> | number
    userId?: BigIntFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_typeFilter<"prefer"> | $Enums.prefer_type
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type preferOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    prefer?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type preferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: preferWhereInput | preferWhereInput[]
    OR?: preferWhereInput[]
    NOT?: preferWhereInput | preferWhereInput[]
    userId?: BigIntFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_typeFilter<"prefer"> | $Enums.prefer_type
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type preferOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    prefer?: SortOrder
    _count?: preferCountOrderByAggregateInput
    _avg?: preferAvgOrderByAggregateInput
    _max?: preferMaxOrderByAggregateInput
    _min?: preferMinOrderByAggregateInput
    _sum?: preferSumOrderByAggregateInput
  }

  export type preferScalarWhereWithAggregatesInput = {
    AND?: preferScalarWhereWithAggregatesInput | preferScalarWhereWithAggregatesInput[]
    OR?: preferScalarWhereWithAggregatesInput[]
    NOT?: preferScalarWhereWithAggregatesInput | preferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prefer"> | number
    userId?: BigIntWithAggregatesFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_typeWithAggregatesFilter<"prefer"> | $Enums.prefer_type
  }

  export type zzimWhereInput = {
    AND?: zzimWhereInput | zzimWhereInput[]
    OR?: zzimWhereInput[]
    NOT?: zzimWhereInput | zzimWhereInput[]
    id?: BigIntFilter<"zzim"> | bigint | number
    user_id?: BigIntFilter<"zzim"> | bigint | number
    rest_id?: BigIntFilter<"zzim"> | bigint | number
    created_at?: DateTimeNullableFilter<"zzim"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }

  export type zzimOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    restaurant?: restaurantOrderByWithRelationInput
  }

  export type zzimWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: zzimWhereInput | zzimWhereInput[]
    OR?: zzimWhereInput[]
    NOT?: zzimWhereInput | zzimWhereInput[]
    user_id?: BigIntFilter<"zzim"> | bigint | number
    rest_id?: BigIntFilter<"zzim"> | bigint | number
    created_at?: DateTimeNullableFilter<"zzim"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }, "id">

  export type zzimOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: zzimCountOrderByAggregateInput
    _avg?: zzimAvgOrderByAggregateInput
    _max?: zzimMaxOrderByAggregateInput
    _min?: zzimMinOrderByAggregateInput
    _sum?: zzimSumOrderByAggregateInput
  }

  export type zzimScalarWhereWithAggregatesInput = {
    AND?: zzimScalarWhereWithAggregatesInput | zzimScalarWhereWithAggregatesInput[]
    OR?: zzimScalarWhereWithAggregatesInput[]
    NOT?: zzimScalarWhereWithAggregatesInput | zzimScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"zzim"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"zzim"> | bigint | number
    rest_id?: BigIntWithAggregatesFilter<"zzim"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"zzim"> | Date | string | null
  }

  export type choiceCreateInput = {
    id?: bigint | number
    description?: string | null
  }

  export type choiceUncheckedCreateInput = {
    id?: bigint | number
    description?: string | null
  }

  export type choiceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type choiceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type choiceCreateManyInput = {
    id?: bigint | number
    description?: string | null
  }

  export type choiceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type choiceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menuCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutMenuInput
    rest_menu?: rest_menuCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutMenuInput
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutMenuNestedInput
    rest_menu?: rest_menuUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutMenuNestedInput
    rest_menu?: rest_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
  }

  export type menuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mukburimCreateInput = {
    id?: bigint | number
    date?: Date | string | null
    user: userCreateNestedOneWithoutMukburimInput
    menu: menuCreateNestedOneWithoutMukburimInput
  }

  export type mukburimUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    menu_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutMukburimNestedInput
    menu?: menuUpdateOneRequiredWithoutMukburimNestedInput
  }

  export type mukburimUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    menu_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recommend_exceptCreateInput = {
    id?: bigint | number
    bit?: boolean | null
    menu: menuCreateNestedOneWithoutRecommend_exceptInput
    user: userCreateNestedOneWithoutRecommend_exceptInput
  }

  export type recommend_exceptUncheckedCreateInput = {
    id?: bigint | number
    menu_id: bigint | number
    user_id: bigint | number
    bit?: boolean | null
  }

  export type recommend_exceptUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    menu?: menuUpdateOneRequiredWithoutRecommend_exceptNestedInput
    user?: userUpdateOneRequiredWithoutRecommend_exceptNestedInput
  }

  export type recommend_exceptUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type recommend_exceptCreateManyInput = {
    id?: bigint | number
    menu_id: bigint | number
    user_id: bigint | number
    bit?: boolean | null
  }

  export type recommend_exceptUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type recommend_exceptUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportCreateInput = {
    id?: bigint | number
    text?: string | null
    user: userCreateNestedOneWithoutReportInput
    review: reviewCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    review_id: bigint | number
    text?: string | null
  }

  export type reportUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutReportNestedInput
    review?: reviewUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    review_id: bigint | number
    text?: string | null
  }

  export type reportUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_imageCreateInput = {
    id?: bigint | number
    link?: string | null
    restaurant: restaurantCreateNestedOneWithoutRest_imageInput
  }

  export type rest_imageUncheckedCreateInput = {
    id?: bigint | number
    rest_id: bigint | number
    link?: string | null
  }

  export type rest_imageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: restaurantUpdateOneRequiredWithoutRest_imageNestedInput
  }

  export type rest_imageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_imageCreateManyInput = {
    id?: bigint | number
    rest_id: bigint | number
    link?: string | null
  }

  export type rest_imageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_imageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_menuCreateInput = {
    id?: bigint | number
    menu: menuCreateNestedOneWithoutRest_menuInput
    restaurant: restaurantCreateNestedOneWithoutRest_menuInput
  }

  export type rest_menuUncheckedCreateInput = {
    id?: bigint | number
    menu_id: bigint | number
    rest_id: bigint | number
  }

  export type rest_menuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu?: menuUpdateOneRequiredWithoutRest_menuNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutRest_menuNestedInput
  }

  export type rest_menuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type rest_menuCreateManyInput = {
    id?: bigint | number
    menu_id: bigint | number
    rest_id: bigint | number
  }

  export type rest_menuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type rest_menuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type restaurantCreateInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageCreateNestedManyWithoutRestaurantInput
    rest_menu?: rest_menuCreateNestedManyWithoutRestaurantInput
    review?: reviewCreateNestedManyWithoutRestaurantInput
    zzim?: zzimCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageUncheckedCreateNestedManyWithoutRestaurantInput
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutRestaurantInput
    review?: reviewUncheckedCreateNestedManyWithoutRestaurantInput
    zzim?: zzimUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUpdateManyWithoutRestaurantNestedInput
    rest_menu?: rest_menuUpdateManyWithoutRestaurantNestedInput
    review?: reviewUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUncheckedUpdateManyWithoutRestaurantNestedInput
    rest_menu?: rest_menuUncheckedUpdateManyWithoutRestaurantNestedInput
    review?: reviewUncheckedUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantCreateManyInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
  }

  export type restaurantUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateInput = {
    id?: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportCreateNestedManyWithoutReviewInput
    user: userCreateNestedOneWithoutReviewInput
    restaurant: restaurantCreateNestedOneWithoutReviewInput
    review_image?: review_imageCreateNestedManyWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    rest_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportUncheckedCreateNestedManyWithoutReviewInput
    review_image?: review_imageUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUpdateManyWithoutReviewNestedInput
    user?: userUpdateOneRequiredWithoutReviewNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutReviewNestedInput
    review_image?: review_imageUpdateManyWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUncheckedUpdateManyWithoutReviewNestedInput
    review_image?: review_imageUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type reviewCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    rest_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
  }

  export type reviewUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type review_imageCreateInput = {
    id?: bigint | number
    link?: string | null
    review: reviewCreateNestedOneWithoutReview_imageInput
  }

  export type review_imageUncheckedCreateInput = {
    id?: bigint | number
    review_id: bigint | number
    link?: string | null
  }

  export type review_imageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateOneRequiredWithoutReview_imageNestedInput
  }

  export type review_imageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type review_imageCreateManyInput = {
    id?: bigint | number
    review_id: bigint | number
    link?: string | null
  }

  export type review_imageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type review_imageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateInput = {
    session_id: string
    expires: number
    data?: string | null
  }

  export type sessionsUncheckedCreateInput = {
    session_id: string
    expires: number
    data?: string | null
  }

  export type sessionsUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateManyInput = {
    session_id: string
    expires: number
    data?: string | null
  }

  export type sessionsUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    expires?: IntFieldUpdateOperationsInput | number
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergyCreateInput = {
    allergy: $Enums.allergy_type
    user: userCreateNestedOneWithoutAllergyInput
  }

  export type allergyUncheckedCreateInput = {
    id?: number
    userId: bigint | number
    allergy: $Enums.allergy_type
  }

  export type allergyUpdateInput = {
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
    user?: userUpdateOneRequiredWithoutAllergyNestedInput
  }

  export type allergyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
  }

  export type allergyCreateManyInput = {
    id?: number
    userId: bigint | number
    allergy: $Enums.allergy_type
  }

  export type allergyUpdateManyMutationInput = {
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
  }

  export type allergyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
  }

  export type preferCreateInput = {
    prefer: $Enums.prefer_type
    user: userCreateNestedOneWithoutPreferInput
  }

  export type preferUncheckedCreateInput = {
    id?: number
    userId: bigint | number
    prefer: $Enums.prefer_type
  }

  export type preferUpdateInput = {
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
    user?: userUpdateOneRequiredWithoutPreferNestedInput
  }

  export type preferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
  }

  export type preferCreateManyInput = {
    id?: number
    userId: bigint | number
    prefer: $Enums.prefer_type
  }

  export type preferUpdateManyMutationInput = {
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
  }

  export type preferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
  }

  export type zzimCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutZzimInput
    restaurant: restaurantCreateNestedOneWithoutZzimInput
  }

  export type zzimUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    rest_id: bigint | number
    created_at?: Date | string | null
  }

  export type zzimUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutZzimNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutZzimNestedInput
  }

  export type zzimUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type zzimCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    rest_id: bigint | number
    created_at?: Date | string | null
  }

  export type zzimUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type zzimUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type choiceOrderByRelevanceInput = {
    fields: choiceOrderByRelevanceFieldEnum | choiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type choiceCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type choiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type choiceMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type choiceMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type choiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type MukburimListRelationFilter = {
    every?: mukburimWhereInput
    some?: mukburimWhereInput
    none?: mukburimWhereInput
  }

  export type Recommend_exceptListRelationFilter = {
    every?: recommend_exceptWhereInput
    some?: recommend_exceptWhereInput
    none?: recommend_exceptWhereInput
  }

  export type Rest_menuListRelationFilter = {
    every?: rest_menuWhereInput
    some?: rest_menuWhereInput
    none?: rest_menuWhereInput
  }

  export type mukburimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recommend_exceptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rest_menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuOrderByRelevanceInput = {
    fields: menuOrderByRelevanceFieldEnum | menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    vitamin?: SortOrder
    allergic?: SortOrder
    sodium?: SortOrder
    image_link?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    id?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    vitamin?: SortOrder
    allergic?: SortOrder
    sodium?: SortOrder
    image_link?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    vitamin?: SortOrder
    allergic?: SortOrder
    sodium?: SortOrder
    image_link?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    id?: SortOrder
    calory?: SortOrder
    carbo?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    sodium?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type MenuScalarRelationFilter = {
    is?: menuWhereInput
    isNot?: menuWhereInput
  }

  export type mukburimCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    date?: SortOrder
  }

  export type mukburimAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
  }

  export type mukburimMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    date?: SortOrder
  }

  export type mukburimMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
    date?: SortOrder
  }

  export type mukburimSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    menu_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type recommend_exceptCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    bit?: SortOrder
  }

  export type recommend_exceptAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
  }

  export type recommend_exceptMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    bit?: SortOrder
  }

  export type recommend_exceptMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    bit?: SortOrder
  }

  export type recommend_exceptSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ReviewScalarRelationFilter = {
    is?: reviewWhereInput
    isNot?: reviewWhereInput
  }

  export type reportOrderByRelevanceInput = {
    fields: reportOrderByRelevanceFieldEnum | reportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reportCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
    text?: SortOrder
  }

  export type reportAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
  }

  export type reportMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
    text?: SortOrder
  }

  export type reportMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
    text?: SortOrder
  }

  export type reportSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    review_id?: SortOrder
  }

  export type RestaurantScalarRelationFilter = {
    is?: restaurantWhereInput
    isNot?: restaurantWhereInput
  }

  export type rest_imageOrderByRelevanceInput = {
    fields: rest_imageOrderByRelevanceFieldEnum | rest_imageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rest_imageCountOrderByAggregateInput = {
    id?: SortOrder
    rest_id?: SortOrder
    link?: SortOrder
  }

  export type rest_imageAvgOrderByAggregateInput = {
    id?: SortOrder
    rest_id?: SortOrder
  }

  export type rest_imageMaxOrderByAggregateInput = {
    id?: SortOrder
    rest_id?: SortOrder
    link?: SortOrder
  }

  export type rest_imageMinOrderByAggregateInput = {
    id?: SortOrder
    rest_id?: SortOrder
    link?: SortOrder
  }

  export type rest_imageSumOrderByAggregateInput = {
    id?: SortOrder
    rest_id?: SortOrder
  }

  export type rest_menuCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
  }

  export type rest_menuAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
  }

  export type rest_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
  }

  export type rest_menuMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
  }

  export type rest_menuSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    rest_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Rest_imageListRelationFilter = {
    every?: rest_imageWhereInput
    some?: rest_imageWhereInput
    none?: rest_imageWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type ZzimListRelationFilter = {
    every?: zzimWhereInput
    some?: zzimWhereInput
    none?: zzimWhereInput
  }

  export type rest_imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type zzimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type restaurantOrderByRelevanceInput = {
    fields: restaurantOrderByRelevanceFieldEnum | restaurantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type restaurantCountOrderByAggregateInput = {
    id?: SortOrder
    location1?: SortOrder
    location2?: SortOrder
    location3?: SortOrder
    name?: SortOrder
    repre_menu?: SortOrder
    close_day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    address?: SortOrder
    detail_address?: SortOrder
    rating?: SortOrder
    day_open_time?: SortOrder
  }

  export type restaurantAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type restaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    location1?: SortOrder
    location2?: SortOrder
    location3?: SortOrder
    name?: SortOrder
    repre_menu?: SortOrder
    close_day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    address?: SortOrder
    detail_address?: SortOrder
    rating?: SortOrder
    day_open_time?: SortOrder
  }

  export type restaurantMinOrderByAggregateInput = {
    id?: SortOrder
    location1?: SortOrder
    location2?: SortOrder
    location3?: SortOrder
    name?: SortOrder
    repre_menu?: SortOrder
    close_day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    address?: SortOrder
    detail_address?: SortOrder
    rating?: SortOrder
    day_open_time?: SortOrder
  }

  export type restaurantSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ReportListRelationFilter = {
    every?: reportWhereInput
    some?: reportWhereInput
    none?: reportWhereInput
  }

  export type Review_imageListRelationFilter = {
    every?: review_imageWhereInput
    some?: review_imageWhereInput
    none?: review_imageWhereInput
  }

  export type reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type review_imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelevanceInput = {
    fields: reviewOrderByRelevanceFieldEnum | reviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrder
    tag?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    like?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrder
    like?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    like?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    like?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    rating?: SortOrder
    like?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type review_imageOrderByRelevanceInput = {
    fields: review_imageOrderByRelevanceFieldEnum | review_imageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type review_imageCountOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
    link?: SortOrder
  }

  export type review_imageAvgOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
  }

  export type review_imageMaxOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
    link?: SortOrder
  }

  export type review_imageMinOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
    link?: SortOrder
  }

  export type review_imageSumOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    data?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumuser_body_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_body_type | Enumuser_body_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_body_type[] | null
    notIn?: $Enums.user_body_type[] | null
    not?: NestedEnumuser_body_typeNullableFilter<$PrismaModel> | $Enums.user_body_type | null
  }

  export type Enumuser_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableFilter<$PrismaModel> | $Enums.user_gender | null
  }

  export type Enumuser_exerciseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableFilter<$PrismaModel> | $Enums.user_exercise | null
  }

  export type AllergyListRelationFilter = {
    every?: allergyWhereInput
    some?: allergyWhereInput
    none?: allergyWhereInput
  }

  export type PreferListRelationFilter = {
    every?: preferWhereInput
    some?: preferWhereInput
    none?: preferWhereInput
  }

  export type allergyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type preferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_num?: SortOrder
    is_verified?: SortOrder
    nickname?: SortOrder
    body_type?: SortOrder
    gender?: SortOrder
    exercise?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profileImageUrl?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_num?: SortOrder
    is_verified?: SortOrder
    nickname?: SortOrder
    body_type?: SortOrder
    gender?: SortOrder
    exercise?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profileImageUrl?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_num?: SortOrder
    is_verified?: SortOrder
    nickname?: SortOrder
    body_type?: SortOrder
    gender?: SortOrder
    exercise?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profileImageUrl?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_body_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_body_type | Enumuser_body_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_body_type[] | null
    notIn?: $Enums.user_body_type[] | null
    not?: NestedEnumuser_body_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_body_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_body_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_body_typeNullableFilter<$PrismaModel>
  }

  export type Enumuser_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_genderNullableFilter<$PrismaModel>
  }

  export type Enumuser_exerciseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_exercise | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
  }

  export type Enumallergy_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.allergy_type | Enumallergy_typeFieldRefInput<$PrismaModel>
    in?: $Enums.allergy_type[]
    notIn?: $Enums.allergy_type[]
    not?: NestedEnumallergy_typeFilter<$PrismaModel> | $Enums.allergy_type
  }

  export type allergyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergy?: SortOrder
  }

  export type allergyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type allergyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergy?: SortOrder
  }

  export type allergyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allergy?: SortOrder
  }

  export type allergySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enumallergy_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.allergy_type | Enumallergy_typeFieldRefInput<$PrismaModel>
    in?: $Enums.allergy_type[]
    notIn?: $Enums.allergy_type[]
    not?: NestedEnumallergy_typeWithAggregatesFilter<$PrismaModel> | $Enums.allergy_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumallergy_typeFilter<$PrismaModel>
    _max?: NestedEnumallergy_typeFilter<$PrismaModel>
  }

  export type Enumprefer_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_type | Enumprefer_typeFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_type[]
    notIn?: $Enums.prefer_type[]
    not?: NestedEnumprefer_typeFilter<$PrismaModel> | $Enums.prefer_type
  }

  export type preferCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prefer?: SortOrder
  }

  export type preferAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type preferMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prefer?: SortOrder
  }

  export type preferMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prefer?: SortOrder
  }

  export type preferSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enumprefer_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_type | Enumprefer_typeFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_type[]
    notIn?: $Enums.prefer_type[]
    not?: NestedEnumprefer_typeWithAggregatesFilter<$PrismaModel> | $Enums.prefer_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprefer_typeFilter<$PrismaModel>
    _max?: NestedEnumprefer_typeFilter<$PrismaModel>
  }

  export type zzimCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    created_at?: SortOrder
  }

  export type zzimAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
  }

  export type zzimMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    created_at?: SortOrder
  }

  export type zzimMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
    created_at?: SortOrder
  }

  export type zzimSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rest_id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type mukburimCreateNestedManyWithoutMenuInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
  }

  export type recommend_exceptCreateNestedManyWithoutMenuInput = {
    create?: XOR<recommend_exceptCreateWithoutMenuInput, recommend_exceptUncheckedCreateWithoutMenuInput> | recommend_exceptCreateWithoutMenuInput[] | recommend_exceptUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutMenuInput | recommend_exceptCreateOrConnectWithoutMenuInput[]
    createMany?: recommend_exceptCreateManyMenuInputEnvelope
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
  }

  export type rest_menuCreateNestedManyWithoutMenuInput = {
    create?: XOR<rest_menuCreateWithoutMenuInput, rest_menuUncheckedCreateWithoutMenuInput> | rest_menuCreateWithoutMenuInput[] | rest_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutMenuInput | rest_menuCreateOrConnectWithoutMenuInput[]
    createMany?: rest_menuCreateManyMenuInputEnvelope
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
  }

  export type mukburimUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
  }

  export type recommend_exceptUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<recommend_exceptCreateWithoutMenuInput, recommend_exceptUncheckedCreateWithoutMenuInput> | recommend_exceptCreateWithoutMenuInput[] | recommend_exceptUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutMenuInput | recommend_exceptCreateOrConnectWithoutMenuInput[]
    createMany?: recommend_exceptCreateManyMenuInputEnvelope
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
  }

  export type rest_menuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<rest_menuCreateWithoutMenuInput, rest_menuUncheckedCreateWithoutMenuInput> | rest_menuCreateWithoutMenuInput[] | rest_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutMenuInput | rest_menuCreateOrConnectWithoutMenuInput[]
    createMany?: rest_menuCreateManyMenuInputEnvelope
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type mukburimUpdateManyWithoutMenuNestedInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    upsert?: mukburimUpsertWithWhereUniqueWithoutMenuInput | mukburimUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    set?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    disconnect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    delete?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    update?: mukburimUpdateWithWhereUniqueWithoutMenuInput | mukburimUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: mukburimUpdateManyWithWhereWithoutMenuInput | mukburimUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
  }

  export type recommend_exceptUpdateManyWithoutMenuNestedInput = {
    create?: XOR<recommend_exceptCreateWithoutMenuInput, recommend_exceptUncheckedCreateWithoutMenuInput> | recommend_exceptCreateWithoutMenuInput[] | recommend_exceptUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutMenuInput | recommend_exceptCreateOrConnectWithoutMenuInput[]
    upsert?: recommend_exceptUpsertWithWhereUniqueWithoutMenuInput | recommend_exceptUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: recommend_exceptCreateManyMenuInputEnvelope
    set?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    disconnect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    delete?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    update?: recommend_exceptUpdateWithWhereUniqueWithoutMenuInput | recommend_exceptUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: recommend_exceptUpdateManyWithWhereWithoutMenuInput | recommend_exceptUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: recommend_exceptScalarWhereInput | recommend_exceptScalarWhereInput[]
  }

  export type rest_menuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<rest_menuCreateWithoutMenuInput, rest_menuUncheckedCreateWithoutMenuInput> | rest_menuCreateWithoutMenuInput[] | rest_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutMenuInput | rest_menuCreateOrConnectWithoutMenuInput[]
    upsert?: rest_menuUpsertWithWhereUniqueWithoutMenuInput | rest_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: rest_menuCreateManyMenuInputEnvelope
    set?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    disconnect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    delete?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    update?: rest_menuUpdateWithWhereUniqueWithoutMenuInput | rest_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: rest_menuUpdateManyWithWhereWithoutMenuInput | rest_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: rest_menuScalarWhereInput | rest_menuScalarWhereInput[]
  }

  export type mukburimUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput> | mukburimCreateWithoutMenuInput[] | mukburimUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutMenuInput | mukburimCreateOrConnectWithoutMenuInput[]
    upsert?: mukburimUpsertWithWhereUniqueWithoutMenuInput | mukburimUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: mukburimCreateManyMenuInputEnvelope
    set?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    disconnect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    delete?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    update?: mukburimUpdateWithWhereUniqueWithoutMenuInput | mukburimUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: mukburimUpdateManyWithWhereWithoutMenuInput | mukburimUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
  }

  export type recommend_exceptUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<recommend_exceptCreateWithoutMenuInput, recommend_exceptUncheckedCreateWithoutMenuInput> | recommend_exceptCreateWithoutMenuInput[] | recommend_exceptUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutMenuInput | recommend_exceptCreateOrConnectWithoutMenuInput[]
    upsert?: recommend_exceptUpsertWithWhereUniqueWithoutMenuInput | recommend_exceptUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: recommend_exceptCreateManyMenuInputEnvelope
    set?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    disconnect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    delete?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    update?: recommend_exceptUpdateWithWhereUniqueWithoutMenuInput | recommend_exceptUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: recommend_exceptUpdateManyWithWhereWithoutMenuInput | recommend_exceptUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: recommend_exceptScalarWhereInput | recommend_exceptScalarWhereInput[]
  }

  export type rest_menuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<rest_menuCreateWithoutMenuInput, rest_menuUncheckedCreateWithoutMenuInput> | rest_menuCreateWithoutMenuInput[] | rest_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutMenuInput | rest_menuCreateOrConnectWithoutMenuInput[]
    upsert?: rest_menuUpsertWithWhereUniqueWithoutMenuInput | rest_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: rest_menuCreateManyMenuInputEnvelope
    set?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    disconnect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    delete?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    update?: rest_menuUpdateWithWhereUniqueWithoutMenuInput | rest_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: rest_menuUpdateManyWithWhereWithoutMenuInput | rest_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: rest_menuScalarWhereInput | rest_menuScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutMukburimInput = {
    create?: XOR<userCreateWithoutMukburimInput, userUncheckedCreateWithoutMukburimInput>
    connectOrCreate?: userCreateOrConnectWithoutMukburimInput
    connect?: userWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutMukburimInput = {
    create?: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
    connectOrCreate?: menuCreateOrConnectWithoutMukburimInput
    connect?: menuWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutMukburimNestedInput = {
    create?: XOR<userCreateWithoutMukburimInput, userUncheckedCreateWithoutMukburimInput>
    connectOrCreate?: userCreateOrConnectWithoutMukburimInput
    upsert?: userUpsertWithoutMukburimInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMukburimInput, userUpdateWithoutMukburimInput>, userUncheckedUpdateWithoutMukburimInput>
  }

  export type menuUpdateOneRequiredWithoutMukburimNestedInput = {
    create?: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
    connectOrCreate?: menuCreateOrConnectWithoutMukburimInput
    upsert?: menuUpsertWithoutMukburimInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutMukburimInput, menuUpdateWithoutMukburimInput>, menuUncheckedUpdateWithoutMukburimInput>
  }

  export type menuCreateNestedOneWithoutRecommend_exceptInput = {
    create?: XOR<menuCreateWithoutRecommend_exceptInput, menuUncheckedCreateWithoutRecommend_exceptInput>
    connectOrCreate?: menuCreateOrConnectWithoutRecommend_exceptInput
    connect?: menuWhereUniqueInput
  }

  export type userCreateNestedOneWithoutRecommend_exceptInput = {
    create?: XOR<userCreateWithoutRecommend_exceptInput, userUncheckedCreateWithoutRecommend_exceptInput>
    connectOrCreate?: userCreateOrConnectWithoutRecommend_exceptInput
    connect?: userWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type menuUpdateOneRequiredWithoutRecommend_exceptNestedInput = {
    create?: XOR<menuCreateWithoutRecommend_exceptInput, menuUncheckedCreateWithoutRecommend_exceptInput>
    connectOrCreate?: menuCreateOrConnectWithoutRecommend_exceptInput
    upsert?: menuUpsertWithoutRecommend_exceptInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutRecommend_exceptInput, menuUpdateWithoutRecommend_exceptInput>, menuUncheckedUpdateWithoutRecommend_exceptInput>
  }

  export type userUpdateOneRequiredWithoutRecommend_exceptNestedInput = {
    create?: XOR<userCreateWithoutRecommend_exceptInput, userUncheckedCreateWithoutRecommend_exceptInput>
    connectOrCreate?: userCreateOrConnectWithoutRecommend_exceptInput
    upsert?: userUpsertWithoutRecommend_exceptInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRecommend_exceptInput, userUpdateWithoutRecommend_exceptInput>, userUncheckedUpdateWithoutRecommend_exceptInput>
  }

  export type userCreateNestedOneWithoutReportInput = {
    create?: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
    connectOrCreate?: userCreateOrConnectWithoutReportInput
    connect?: userWhereUniqueInput
  }

  export type reviewCreateNestedOneWithoutReportInput = {
    create?: XOR<reviewCreateWithoutReportInput, reviewUncheckedCreateWithoutReportInput>
    connectOrCreate?: reviewCreateOrConnectWithoutReportInput
    connect?: reviewWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
    connectOrCreate?: userCreateOrConnectWithoutReportInput
    upsert?: userUpsertWithoutReportInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReportInput, userUpdateWithoutReportInput>, userUncheckedUpdateWithoutReportInput>
  }

  export type reviewUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<reviewCreateWithoutReportInput, reviewUncheckedCreateWithoutReportInput>
    connectOrCreate?: reviewCreateOrConnectWithoutReportInput
    upsert?: reviewUpsertWithoutReportInput
    connect?: reviewWhereUniqueInput
    update?: XOR<XOR<reviewUpdateToOneWithWhereWithoutReportInput, reviewUpdateWithoutReportInput>, reviewUncheckedUpdateWithoutReportInput>
  }

  export type restaurantCreateNestedOneWithoutRest_imageInput = {
    create?: XOR<restaurantCreateWithoutRest_imageInput, restaurantUncheckedCreateWithoutRest_imageInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutRest_imageInput
    connect?: restaurantWhereUniqueInput
  }

  export type restaurantUpdateOneRequiredWithoutRest_imageNestedInput = {
    create?: XOR<restaurantCreateWithoutRest_imageInput, restaurantUncheckedCreateWithoutRest_imageInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutRest_imageInput
    upsert?: restaurantUpsertWithoutRest_imageInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutRest_imageInput, restaurantUpdateWithoutRest_imageInput>, restaurantUncheckedUpdateWithoutRest_imageInput>
  }

  export type menuCreateNestedOneWithoutRest_menuInput = {
    create?: XOR<menuCreateWithoutRest_menuInput, menuUncheckedCreateWithoutRest_menuInput>
    connectOrCreate?: menuCreateOrConnectWithoutRest_menuInput
    connect?: menuWhereUniqueInput
  }

  export type restaurantCreateNestedOneWithoutRest_menuInput = {
    create?: XOR<restaurantCreateWithoutRest_menuInput, restaurantUncheckedCreateWithoutRest_menuInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutRest_menuInput
    connect?: restaurantWhereUniqueInput
  }

  export type menuUpdateOneRequiredWithoutRest_menuNestedInput = {
    create?: XOR<menuCreateWithoutRest_menuInput, menuUncheckedCreateWithoutRest_menuInput>
    connectOrCreate?: menuCreateOrConnectWithoutRest_menuInput
    upsert?: menuUpsertWithoutRest_menuInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutRest_menuInput, menuUpdateWithoutRest_menuInput>, menuUncheckedUpdateWithoutRest_menuInput>
  }

  export type restaurantUpdateOneRequiredWithoutRest_menuNestedInput = {
    create?: XOR<restaurantCreateWithoutRest_menuInput, restaurantUncheckedCreateWithoutRest_menuInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutRest_menuInput
    upsert?: restaurantUpsertWithoutRest_menuInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutRest_menuInput, restaurantUpdateWithoutRest_menuInput>, restaurantUncheckedUpdateWithoutRest_menuInput>
  }

  export type rest_imageCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<rest_imageCreateWithoutRestaurantInput, rest_imageUncheckedCreateWithoutRestaurantInput> | rest_imageCreateWithoutRestaurantInput[] | rest_imageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_imageCreateOrConnectWithoutRestaurantInput | rest_imageCreateOrConnectWithoutRestaurantInput[]
    createMany?: rest_imageCreateManyRestaurantInputEnvelope
    connect?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
  }

  export type rest_menuCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<rest_menuCreateWithoutRestaurantInput, rest_menuUncheckedCreateWithoutRestaurantInput> | rest_menuCreateWithoutRestaurantInput[] | rest_menuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutRestaurantInput | rest_menuCreateOrConnectWithoutRestaurantInput[]
    createMany?: rest_menuCreateManyRestaurantInputEnvelope
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput> | reviewCreateWithoutRestaurantInput[] | reviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[]
    createMany?: reviewCreateManyRestaurantInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type zzimCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<zzimCreateWithoutRestaurantInput, zzimUncheckedCreateWithoutRestaurantInput> | zzimCreateWithoutRestaurantInput[] | zzimUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutRestaurantInput | zzimCreateOrConnectWithoutRestaurantInput[]
    createMany?: zzimCreateManyRestaurantInputEnvelope
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
  }

  export type rest_imageUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<rest_imageCreateWithoutRestaurantInput, rest_imageUncheckedCreateWithoutRestaurantInput> | rest_imageCreateWithoutRestaurantInput[] | rest_imageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_imageCreateOrConnectWithoutRestaurantInput | rest_imageCreateOrConnectWithoutRestaurantInput[]
    createMany?: rest_imageCreateManyRestaurantInputEnvelope
    connect?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
  }

  export type rest_menuUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<rest_menuCreateWithoutRestaurantInput, rest_menuUncheckedCreateWithoutRestaurantInput> | rest_menuCreateWithoutRestaurantInput[] | rest_menuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutRestaurantInput | rest_menuCreateOrConnectWithoutRestaurantInput[]
    createMany?: rest_menuCreateManyRestaurantInputEnvelope
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput> | reviewCreateWithoutRestaurantInput[] | reviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[]
    createMany?: reviewCreateManyRestaurantInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type zzimUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<zzimCreateWithoutRestaurantInput, zzimUncheckedCreateWithoutRestaurantInput> | zzimCreateWithoutRestaurantInput[] | zzimUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutRestaurantInput | zzimCreateOrConnectWithoutRestaurantInput[]
    createMany?: zzimCreateManyRestaurantInputEnvelope
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rest_imageUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<rest_imageCreateWithoutRestaurantInput, rest_imageUncheckedCreateWithoutRestaurantInput> | rest_imageCreateWithoutRestaurantInput[] | rest_imageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_imageCreateOrConnectWithoutRestaurantInput | rest_imageCreateOrConnectWithoutRestaurantInput[]
    upsert?: rest_imageUpsertWithWhereUniqueWithoutRestaurantInput | rest_imageUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: rest_imageCreateManyRestaurantInputEnvelope
    set?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    disconnect?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    delete?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    connect?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    update?: rest_imageUpdateWithWhereUniqueWithoutRestaurantInput | rest_imageUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: rest_imageUpdateManyWithWhereWithoutRestaurantInput | rest_imageUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: rest_imageScalarWhereInput | rest_imageScalarWhereInput[]
  }

  export type rest_menuUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<rest_menuCreateWithoutRestaurantInput, rest_menuUncheckedCreateWithoutRestaurantInput> | rest_menuCreateWithoutRestaurantInput[] | rest_menuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutRestaurantInput | rest_menuCreateOrConnectWithoutRestaurantInput[]
    upsert?: rest_menuUpsertWithWhereUniqueWithoutRestaurantInput | rest_menuUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: rest_menuCreateManyRestaurantInputEnvelope
    set?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    disconnect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    delete?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    update?: rest_menuUpdateWithWhereUniqueWithoutRestaurantInput | rest_menuUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: rest_menuUpdateManyWithWhereWithoutRestaurantInput | rest_menuUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: rest_menuScalarWhereInput | rest_menuScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput> | reviewCreateWithoutRestaurantInput[] | reviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutRestaurantInput | reviewUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: reviewCreateManyRestaurantInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutRestaurantInput | reviewUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutRestaurantInput | reviewUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type zzimUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<zzimCreateWithoutRestaurantInput, zzimUncheckedCreateWithoutRestaurantInput> | zzimCreateWithoutRestaurantInput[] | zzimUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutRestaurantInput | zzimCreateOrConnectWithoutRestaurantInput[]
    upsert?: zzimUpsertWithWhereUniqueWithoutRestaurantInput | zzimUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: zzimCreateManyRestaurantInputEnvelope
    set?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    disconnect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    delete?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    update?: zzimUpdateWithWhereUniqueWithoutRestaurantInput | zzimUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: zzimUpdateManyWithWhereWithoutRestaurantInput | zzimUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: zzimScalarWhereInput | zzimScalarWhereInput[]
  }

  export type rest_imageUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<rest_imageCreateWithoutRestaurantInput, rest_imageUncheckedCreateWithoutRestaurantInput> | rest_imageCreateWithoutRestaurantInput[] | rest_imageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_imageCreateOrConnectWithoutRestaurantInput | rest_imageCreateOrConnectWithoutRestaurantInput[]
    upsert?: rest_imageUpsertWithWhereUniqueWithoutRestaurantInput | rest_imageUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: rest_imageCreateManyRestaurantInputEnvelope
    set?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    disconnect?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    delete?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    connect?: rest_imageWhereUniqueInput | rest_imageWhereUniqueInput[]
    update?: rest_imageUpdateWithWhereUniqueWithoutRestaurantInput | rest_imageUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: rest_imageUpdateManyWithWhereWithoutRestaurantInput | rest_imageUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: rest_imageScalarWhereInput | rest_imageScalarWhereInput[]
  }

  export type rest_menuUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<rest_menuCreateWithoutRestaurantInput, rest_menuUncheckedCreateWithoutRestaurantInput> | rest_menuCreateWithoutRestaurantInput[] | rest_menuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rest_menuCreateOrConnectWithoutRestaurantInput | rest_menuCreateOrConnectWithoutRestaurantInput[]
    upsert?: rest_menuUpsertWithWhereUniqueWithoutRestaurantInput | rest_menuUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: rest_menuCreateManyRestaurantInputEnvelope
    set?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    disconnect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    delete?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    connect?: rest_menuWhereUniqueInput | rest_menuWhereUniqueInput[]
    update?: rest_menuUpdateWithWhereUniqueWithoutRestaurantInput | rest_menuUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: rest_menuUpdateManyWithWhereWithoutRestaurantInput | rest_menuUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: rest_menuScalarWhereInput | rest_menuScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput> | reviewCreateWithoutRestaurantInput[] | reviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRestaurantInput | reviewCreateOrConnectWithoutRestaurantInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutRestaurantInput | reviewUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: reviewCreateManyRestaurantInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutRestaurantInput | reviewUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutRestaurantInput | reviewUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type zzimUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<zzimCreateWithoutRestaurantInput, zzimUncheckedCreateWithoutRestaurantInput> | zzimCreateWithoutRestaurantInput[] | zzimUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutRestaurantInput | zzimCreateOrConnectWithoutRestaurantInput[]
    upsert?: zzimUpsertWithWhereUniqueWithoutRestaurantInput | zzimUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: zzimCreateManyRestaurantInputEnvelope
    set?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    disconnect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    delete?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    update?: zzimUpdateWithWhereUniqueWithoutRestaurantInput | zzimUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: zzimUpdateManyWithWhereWithoutRestaurantInput | zzimUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: zzimScalarWhereInput | zzimScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutReviewInput = {
    create?: XOR<reportCreateWithoutReviewInput, reportUncheckedCreateWithoutReviewInput> | reportCreateWithoutReviewInput[] | reportUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: reportCreateOrConnectWithoutReviewInput | reportCreateOrConnectWithoutReviewInput[]
    createMany?: reportCreateManyReviewInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    connect?: userWhereUniqueInput
  }

  export type restaurantCreateNestedOneWithoutReviewInput = {
    create?: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutReviewInput
    connect?: restaurantWhereUniqueInput
  }

  export type review_imageCreateNestedManyWithoutReviewInput = {
    create?: XOR<review_imageCreateWithoutReviewInput, review_imageUncheckedCreateWithoutReviewInput> | review_imageCreateWithoutReviewInput[] | review_imageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: review_imageCreateOrConnectWithoutReviewInput | review_imageCreateOrConnectWithoutReviewInput[]
    createMany?: review_imageCreateManyReviewInputEnvelope
    connect?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<reportCreateWithoutReviewInput, reportUncheckedCreateWithoutReviewInput> | reportCreateWithoutReviewInput[] | reportUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: reportCreateOrConnectWithoutReviewInput | reportCreateOrConnectWithoutReviewInput[]
    createMany?: reportCreateManyReviewInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type review_imageUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<review_imageCreateWithoutReviewInput, review_imageUncheckedCreateWithoutReviewInput> | review_imageCreateWithoutReviewInput[] | review_imageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: review_imageCreateOrConnectWithoutReviewInput | review_imageCreateOrConnectWithoutReviewInput[]
    createMany?: review_imageCreateManyReviewInputEnvelope
    connect?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reportUpdateManyWithoutReviewNestedInput = {
    create?: XOR<reportCreateWithoutReviewInput, reportUncheckedCreateWithoutReviewInput> | reportCreateWithoutReviewInput[] | reportUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: reportCreateOrConnectWithoutReviewInput | reportCreateOrConnectWithoutReviewInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutReviewInput | reportUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: reportCreateManyReviewInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutReviewInput | reportUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: reportUpdateManyWithWhereWithoutReviewInput | reportUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    upsert?: userUpsertWithoutReviewInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>, userUncheckedUpdateWithoutReviewInput>
  }

  export type restaurantUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutReviewInput
    upsert?: restaurantUpsertWithoutReviewInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutReviewInput, restaurantUpdateWithoutReviewInput>, restaurantUncheckedUpdateWithoutReviewInput>
  }

  export type review_imageUpdateManyWithoutReviewNestedInput = {
    create?: XOR<review_imageCreateWithoutReviewInput, review_imageUncheckedCreateWithoutReviewInput> | review_imageCreateWithoutReviewInput[] | review_imageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: review_imageCreateOrConnectWithoutReviewInput | review_imageCreateOrConnectWithoutReviewInput[]
    upsert?: review_imageUpsertWithWhereUniqueWithoutReviewInput | review_imageUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: review_imageCreateManyReviewInputEnvelope
    set?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    disconnect?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    delete?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    connect?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    update?: review_imageUpdateWithWhereUniqueWithoutReviewInput | review_imageUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: review_imageUpdateManyWithWhereWithoutReviewInput | review_imageUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: review_imageScalarWhereInput | review_imageScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<reportCreateWithoutReviewInput, reportUncheckedCreateWithoutReviewInput> | reportCreateWithoutReviewInput[] | reportUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: reportCreateOrConnectWithoutReviewInput | reportCreateOrConnectWithoutReviewInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutReviewInput | reportUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: reportCreateManyReviewInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutReviewInput | reportUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: reportUpdateManyWithWhereWithoutReviewInput | reportUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type review_imageUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<review_imageCreateWithoutReviewInput, review_imageUncheckedCreateWithoutReviewInput> | review_imageCreateWithoutReviewInput[] | review_imageUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: review_imageCreateOrConnectWithoutReviewInput | review_imageCreateOrConnectWithoutReviewInput[]
    upsert?: review_imageUpsertWithWhereUniqueWithoutReviewInput | review_imageUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: review_imageCreateManyReviewInputEnvelope
    set?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    disconnect?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    delete?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    connect?: review_imageWhereUniqueInput | review_imageWhereUniqueInput[]
    update?: review_imageUpdateWithWhereUniqueWithoutReviewInput | review_imageUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: review_imageUpdateManyWithWhereWithoutReviewInput | review_imageUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: review_imageScalarWhereInput | review_imageScalarWhereInput[]
  }

  export type reviewCreateNestedOneWithoutReview_imageInput = {
    create?: XOR<reviewCreateWithoutReview_imageInput, reviewUncheckedCreateWithoutReview_imageInput>
    connectOrCreate?: reviewCreateOrConnectWithoutReview_imageInput
    connect?: reviewWhereUniqueInput
  }

  export type reviewUpdateOneRequiredWithoutReview_imageNestedInput = {
    create?: XOR<reviewCreateWithoutReview_imageInput, reviewUncheckedCreateWithoutReview_imageInput>
    connectOrCreate?: reviewCreateOrConnectWithoutReview_imageInput
    upsert?: reviewUpsertWithoutReview_imageInput
    connect?: reviewWhereUniqueInput
    update?: XOR<XOR<reviewUpdateToOneWithWhereWithoutReview_imageInput, reviewUpdateWithoutReview_imageInput>, reviewUncheckedUpdateWithoutReview_imageInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type allergyCreateNestedManyWithoutUserInput = {
    create?: XOR<allergyCreateWithoutUserInput, allergyUncheckedCreateWithoutUserInput> | allergyCreateWithoutUserInput[] | allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: allergyCreateOrConnectWithoutUserInput | allergyCreateOrConnectWithoutUserInput[]
    createMany?: allergyCreateManyUserInputEnvelope
    connect?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
  }

  export type mukburimCreateNestedManyWithoutUserInput = {
    create?: XOR<mukburimCreateWithoutUserInput, mukburimUncheckedCreateWithoutUserInput> | mukburimCreateWithoutUserInput[] | mukburimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutUserInput | mukburimCreateOrConnectWithoutUserInput[]
    createMany?: mukburimCreateManyUserInputEnvelope
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
  }

  export type preferCreateNestedManyWithoutUserInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
  }

  export type recommend_exceptCreateNestedManyWithoutUserInput = {
    create?: XOR<recommend_exceptCreateWithoutUserInput, recommend_exceptUncheckedCreateWithoutUserInput> | recommend_exceptCreateWithoutUserInput[] | recommend_exceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutUserInput | recommend_exceptCreateOrConnectWithoutUserInput[]
    createMany?: recommend_exceptCreateManyUserInputEnvelope
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
  }

  export type reportCreateNestedManyWithoutUserInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type zzimCreateNestedManyWithoutUserInput = {
    create?: XOR<zzimCreateWithoutUserInput, zzimUncheckedCreateWithoutUserInput> | zzimCreateWithoutUserInput[] | zzimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutUserInput | zzimCreateOrConnectWithoutUserInput[]
    createMany?: zzimCreateManyUserInputEnvelope
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
  }

  export type allergyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<allergyCreateWithoutUserInput, allergyUncheckedCreateWithoutUserInput> | allergyCreateWithoutUserInput[] | allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: allergyCreateOrConnectWithoutUserInput | allergyCreateOrConnectWithoutUserInput[]
    createMany?: allergyCreateManyUserInputEnvelope
    connect?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
  }

  export type mukburimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<mukburimCreateWithoutUserInput, mukburimUncheckedCreateWithoutUserInput> | mukburimCreateWithoutUserInput[] | mukburimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutUserInput | mukburimCreateOrConnectWithoutUserInput[]
    createMany?: mukburimCreateManyUserInputEnvelope
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
  }

  export type preferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
  }

  export type recommend_exceptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<recommend_exceptCreateWithoutUserInput, recommend_exceptUncheckedCreateWithoutUserInput> | recommend_exceptCreateWithoutUserInput[] | recommend_exceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutUserInput | recommend_exceptCreateOrConnectWithoutUserInput[]
    createMany?: recommend_exceptCreateManyUserInputEnvelope
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type zzimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<zzimCreateWithoutUserInput, zzimUncheckedCreateWithoutUserInput> | zzimCreateWithoutUserInput[] | zzimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutUserInput | zzimCreateOrConnectWithoutUserInput[]
    createMany?: zzimCreateManyUserInputEnvelope
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
  }

  export type NullableEnumuser_body_typeFieldUpdateOperationsInput = {
    set?: $Enums.user_body_type | null
  }

  export type NullableEnumuser_genderFieldUpdateOperationsInput = {
    set?: $Enums.user_gender | null
  }

  export type NullableEnumuser_exerciseFieldUpdateOperationsInput = {
    set?: $Enums.user_exercise | null
  }

  export type allergyUpdateManyWithoutUserNestedInput = {
    create?: XOR<allergyCreateWithoutUserInput, allergyUncheckedCreateWithoutUserInput> | allergyCreateWithoutUserInput[] | allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: allergyCreateOrConnectWithoutUserInput | allergyCreateOrConnectWithoutUserInput[]
    upsert?: allergyUpsertWithWhereUniqueWithoutUserInput | allergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: allergyCreateManyUserInputEnvelope
    set?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    disconnect?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    delete?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    connect?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    update?: allergyUpdateWithWhereUniqueWithoutUserInput | allergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: allergyUpdateManyWithWhereWithoutUserInput | allergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: allergyScalarWhereInput | allergyScalarWhereInput[]
  }

  export type mukburimUpdateManyWithoutUserNestedInput = {
    create?: XOR<mukburimCreateWithoutUserInput, mukburimUncheckedCreateWithoutUserInput> | mukburimCreateWithoutUserInput[] | mukburimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutUserInput | mukburimCreateOrConnectWithoutUserInput[]
    upsert?: mukburimUpsertWithWhereUniqueWithoutUserInput | mukburimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: mukburimCreateManyUserInputEnvelope
    set?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    disconnect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    delete?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    update?: mukburimUpdateWithWhereUniqueWithoutUserInput | mukburimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: mukburimUpdateManyWithWhereWithoutUserInput | mukburimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
  }

  export type preferUpdateManyWithoutUserNestedInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    upsert?: preferUpsertWithWhereUniqueWithoutUserInput | preferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    set?: preferWhereUniqueInput | preferWhereUniqueInput[]
    disconnect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    delete?: preferWhereUniqueInput | preferWhereUniqueInput[]
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    update?: preferUpdateWithWhereUniqueWithoutUserInput | preferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: preferUpdateManyWithWhereWithoutUserInput | preferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: preferScalarWhereInput | preferScalarWhereInput[]
  }

  export type recommend_exceptUpdateManyWithoutUserNestedInput = {
    create?: XOR<recommend_exceptCreateWithoutUserInput, recommend_exceptUncheckedCreateWithoutUserInput> | recommend_exceptCreateWithoutUserInput[] | recommend_exceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutUserInput | recommend_exceptCreateOrConnectWithoutUserInput[]
    upsert?: recommend_exceptUpsertWithWhereUniqueWithoutUserInput | recommend_exceptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: recommend_exceptCreateManyUserInputEnvelope
    set?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    disconnect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    delete?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    update?: recommend_exceptUpdateWithWhereUniqueWithoutUserInput | recommend_exceptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: recommend_exceptUpdateManyWithWhereWithoutUserInput | recommend_exceptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: recommend_exceptScalarWhereInput | recommend_exceptScalarWhereInput[]
  }

  export type reportUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutUserInput | reportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutUserInput | reportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportUpdateManyWithWhereWithoutUserInput | reportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type zzimUpdateManyWithoutUserNestedInput = {
    create?: XOR<zzimCreateWithoutUserInput, zzimUncheckedCreateWithoutUserInput> | zzimCreateWithoutUserInput[] | zzimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutUserInput | zzimCreateOrConnectWithoutUserInput[]
    upsert?: zzimUpsertWithWhereUniqueWithoutUserInput | zzimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: zzimCreateManyUserInputEnvelope
    set?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    disconnect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    delete?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    update?: zzimUpdateWithWhereUniqueWithoutUserInput | zzimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: zzimUpdateManyWithWhereWithoutUserInput | zzimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: zzimScalarWhereInput | zzimScalarWhereInput[]
  }

  export type allergyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<allergyCreateWithoutUserInput, allergyUncheckedCreateWithoutUserInput> | allergyCreateWithoutUserInput[] | allergyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: allergyCreateOrConnectWithoutUserInput | allergyCreateOrConnectWithoutUserInput[]
    upsert?: allergyUpsertWithWhereUniqueWithoutUserInput | allergyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: allergyCreateManyUserInputEnvelope
    set?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    disconnect?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    delete?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    connect?: allergyWhereUniqueInput | allergyWhereUniqueInput[]
    update?: allergyUpdateWithWhereUniqueWithoutUserInput | allergyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: allergyUpdateManyWithWhereWithoutUserInput | allergyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: allergyScalarWhereInput | allergyScalarWhereInput[]
  }

  export type mukburimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<mukburimCreateWithoutUserInput, mukburimUncheckedCreateWithoutUserInput> | mukburimCreateWithoutUserInput[] | mukburimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mukburimCreateOrConnectWithoutUserInput | mukburimCreateOrConnectWithoutUserInput[]
    upsert?: mukburimUpsertWithWhereUniqueWithoutUserInput | mukburimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: mukburimCreateManyUserInputEnvelope
    set?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    disconnect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    delete?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    connect?: mukburimWhereUniqueInput | mukburimWhereUniqueInput[]
    update?: mukburimUpdateWithWhereUniqueWithoutUserInput | mukburimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: mukburimUpdateManyWithWhereWithoutUserInput | mukburimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
  }

  export type preferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput> | preferCreateWithoutUserInput[] | preferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: preferCreateOrConnectWithoutUserInput | preferCreateOrConnectWithoutUserInput[]
    upsert?: preferUpsertWithWhereUniqueWithoutUserInput | preferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: preferCreateManyUserInputEnvelope
    set?: preferWhereUniqueInput | preferWhereUniqueInput[]
    disconnect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    delete?: preferWhereUniqueInput | preferWhereUniqueInput[]
    connect?: preferWhereUniqueInput | preferWhereUniqueInput[]
    update?: preferUpdateWithWhereUniqueWithoutUserInput | preferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: preferUpdateManyWithWhereWithoutUserInput | preferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: preferScalarWhereInput | preferScalarWhereInput[]
  }

  export type recommend_exceptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<recommend_exceptCreateWithoutUserInput, recommend_exceptUncheckedCreateWithoutUserInput> | recommend_exceptCreateWithoutUserInput[] | recommend_exceptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recommend_exceptCreateOrConnectWithoutUserInput | recommend_exceptCreateOrConnectWithoutUserInput[]
    upsert?: recommend_exceptUpsertWithWhereUniqueWithoutUserInput | recommend_exceptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: recommend_exceptCreateManyUserInputEnvelope
    set?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    disconnect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    delete?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    connect?: recommend_exceptWhereUniqueInput | recommend_exceptWhereUniqueInput[]
    update?: recommend_exceptUpdateWithWhereUniqueWithoutUserInput | recommend_exceptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: recommend_exceptUpdateManyWithWhereWithoutUserInput | recommend_exceptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: recommend_exceptScalarWhereInput | recommend_exceptScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutUserInput | reportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutUserInput | reportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportUpdateManyWithWhereWithoutUserInput | reportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type zzimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<zzimCreateWithoutUserInput, zzimUncheckedCreateWithoutUserInput> | zzimCreateWithoutUserInput[] | zzimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: zzimCreateOrConnectWithoutUserInput | zzimCreateOrConnectWithoutUserInput[]
    upsert?: zzimUpsertWithWhereUniqueWithoutUserInput | zzimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: zzimCreateManyUserInputEnvelope
    set?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    disconnect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    delete?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    connect?: zzimWhereUniqueInput | zzimWhereUniqueInput[]
    update?: zzimUpdateWithWhereUniqueWithoutUserInput | zzimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: zzimUpdateManyWithWhereWithoutUserInput | zzimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: zzimScalarWhereInput | zzimScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAllergyInput = {
    create?: XOR<userCreateWithoutAllergyInput, userUncheckedCreateWithoutAllergyInput>
    connectOrCreate?: userCreateOrConnectWithoutAllergyInput
    connect?: userWhereUniqueInput
  }

  export type Enumallergy_typeFieldUpdateOperationsInput = {
    set?: $Enums.allergy_type
  }

  export type userUpdateOneRequiredWithoutAllergyNestedInput = {
    create?: XOR<userCreateWithoutAllergyInput, userUncheckedCreateWithoutAllergyInput>
    connectOrCreate?: userCreateOrConnectWithoutAllergyInput
    upsert?: userUpsertWithoutAllergyInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAllergyInput, userUpdateWithoutAllergyInput>, userUncheckedUpdateWithoutAllergyInput>
  }

  export type userCreateNestedOneWithoutPreferInput = {
    create?: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
    connectOrCreate?: userCreateOrConnectWithoutPreferInput
    connect?: userWhereUniqueInput
  }

  export type Enumprefer_typeFieldUpdateOperationsInput = {
    set?: $Enums.prefer_type
  }

  export type userUpdateOneRequiredWithoutPreferNestedInput = {
    create?: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
    connectOrCreate?: userCreateOrConnectWithoutPreferInput
    upsert?: userUpsertWithoutPreferInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPreferInput, userUpdateWithoutPreferInput>, userUncheckedUpdateWithoutPreferInput>
  }

  export type userCreateNestedOneWithoutZzimInput = {
    create?: XOR<userCreateWithoutZzimInput, userUncheckedCreateWithoutZzimInput>
    connectOrCreate?: userCreateOrConnectWithoutZzimInput
    connect?: userWhereUniqueInput
  }

  export type restaurantCreateNestedOneWithoutZzimInput = {
    create?: XOR<restaurantCreateWithoutZzimInput, restaurantUncheckedCreateWithoutZzimInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutZzimInput
    connect?: restaurantWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutZzimNestedInput = {
    create?: XOR<userCreateWithoutZzimInput, userUncheckedCreateWithoutZzimInput>
    connectOrCreate?: userCreateOrConnectWithoutZzimInput
    upsert?: userUpsertWithoutZzimInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutZzimInput, userUpdateWithoutZzimInput>, userUncheckedUpdateWithoutZzimInput>
  }

  export type restaurantUpdateOneRequiredWithoutZzimNestedInput = {
    create?: XOR<restaurantCreateWithoutZzimInput, restaurantUncheckedCreateWithoutZzimInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutZzimInput
    upsert?: restaurantUpsertWithoutZzimInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutZzimInput, restaurantUpdateWithoutZzimInput>, restaurantUncheckedUpdateWithoutZzimInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumuser_body_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_body_type | Enumuser_body_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_body_type[] | null
    notIn?: $Enums.user_body_type[] | null
    not?: NestedEnumuser_body_typeNullableFilter<$PrismaModel> | $Enums.user_body_type | null
  }

  export type NestedEnumuser_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableFilter<$PrismaModel> | $Enums.user_gender | null
  }

  export type NestedEnumuser_exerciseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableFilter<$PrismaModel> | $Enums.user_exercise | null
  }

  export type NestedEnumuser_body_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_body_type | Enumuser_body_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_body_type[] | null
    notIn?: $Enums.user_body_type[] | null
    not?: NestedEnumuser_body_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_body_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_body_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_body_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_genderNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_exerciseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_exercise | Enumuser_exerciseFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_exercise[] | null
    notIn?: $Enums.user_exercise[] | null
    not?: NestedEnumuser_exerciseNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_exercise | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_exerciseNullableFilter<$PrismaModel>
  }

  export type NestedEnumallergy_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.allergy_type | Enumallergy_typeFieldRefInput<$PrismaModel>
    in?: $Enums.allergy_type[]
    notIn?: $Enums.allergy_type[]
    not?: NestedEnumallergy_typeFilter<$PrismaModel> | $Enums.allergy_type
  }

  export type NestedEnumallergy_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.allergy_type | Enumallergy_typeFieldRefInput<$PrismaModel>
    in?: $Enums.allergy_type[]
    notIn?: $Enums.allergy_type[]
    not?: NestedEnumallergy_typeWithAggregatesFilter<$PrismaModel> | $Enums.allergy_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumallergy_typeFilter<$PrismaModel>
    _max?: NestedEnumallergy_typeFilter<$PrismaModel>
  }

  export type NestedEnumprefer_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_type | Enumprefer_typeFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_type[]
    notIn?: $Enums.prefer_type[]
    not?: NestedEnumprefer_typeFilter<$PrismaModel> | $Enums.prefer_type
  }

  export type NestedEnumprefer_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.prefer_type | Enumprefer_typeFieldRefInput<$PrismaModel>
    in?: $Enums.prefer_type[]
    notIn?: $Enums.prefer_type[]
    not?: NestedEnumprefer_typeWithAggregatesFilter<$PrismaModel> | $Enums.prefer_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprefer_typeFilter<$PrismaModel>
    _max?: NestedEnumprefer_typeFilter<$PrismaModel>
  }

  export type mukburimCreateWithoutMenuInput = {
    id?: bigint | number
    date?: Date | string | null
    user: userCreateNestedOneWithoutMukburimInput
  }

  export type mukburimUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimCreateOrConnectWithoutMenuInput = {
    where: mukburimWhereUniqueInput
    create: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput>
  }

  export type mukburimCreateManyMenuInputEnvelope = {
    data: mukburimCreateManyMenuInput | mukburimCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type recommend_exceptCreateWithoutMenuInput = {
    id?: bigint | number
    bit?: boolean | null
    user: userCreateNestedOneWithoutRecommend_exceptInput
  }

  export type recommend_exceptUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    user_id: bigint | number
    bit?: boolean | null
  }

  export type recommend_exceptCreateOrConnectWithoutMenuInput = {
    where: recommend_exceptWhereUniqueInput
    create: XOR<recommend_exceptCreateWithoutMenuInput, recommend_exceptUncheckedCreateWithoutMenuInput>
  }

  export type recommend_exceptCreateManyMenuInputEnvelope = {
    data: recommend_exceptCreateManyMenuInput | recommend_exceptCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type rest_menuCreateWithoutMenuInput = {
    id?: bigint | number
    restaurant: restaurantCreateNestedOneWithoutRest_menuInput
  }

  export type rest_menuUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    rest_id: bigint | number
  }

  export type rest_menuCreateOrConnectWithoutMenuInput = {
    where: rest_menuWhereUniqueInput
    create: XOR<rest_menuCreateWithoutMenuInput, rest_menuUncheckedCreateWithoutMenuInput>
  }

  export type rest_menuCreateManyMenuInputEnvelope = {
    data: rest_menuCreateManyMenuInput | rest_menuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type mukburimUpsertWithWhereUniqueWithoutMenuInput = {
    where: mukburimWhereUniqueInput
    update: XOR<mukburimUpdateWithoutMenuInput, mukburimUncheckedUpdateWithoutMenuInput>
    create: XOR<mukburimCreateWithoutMenuInput, mukburimUncheckedCreateWithoutMenuInput>
  }

  export type mukburimUpdateWithWhereUniqueWithoutMenuInput = {
    where: mukburimWhereUniqueInput
    data: XOR<mukburimUpdateWithoutMenuInput, mukburimUncheckedUpdateWithoutMenuInput>
  }

  export type mukburimUpdateManyWithWhereWithoutMenuInput = {
    where: mukburimScalarWhereInput
    data: XOR<mukburimUpdateManyMutationInput, mukburimUncheckedUpdateManyWithoutMenuInput>
  }

  export type mukburimScalarWhereInput = {
    AND?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
    OR?: mukburimScalarWhereInput[]
    NOT?: mukburimScalarWhereInput | mukburimScalarWhereInput[]
    id?: BigIntFilter<"mukburim"> | bigint | number
    user_id?: BigIntFilter<"mukburim"> | bigint | number
    menu_id?: BigIntFilter<"mukburim"> | bigint | number
    date?: DateTimeNullableFilter<"mukburim"> | Date | string | null
  }

  export type recommend_exceptUpsertWithWhereUniqueWithoutMenuInput = {
    where: recommend_exceptWhereUniqueInput
    update: XOR<recommend_exceptUpdateWithoutMenuInput, recommend_exceptUncheckedUpdateWithoutMenuInput>
    create: XOR<recommend_exceptCreateWithoutMenuInput, recommend_exceptUncheckedCreateWithoutMenuInput>
  }

  export type recommend_exceptUpdateWithWhereUniqueWithoutMenuInput = {
    where: recommend_exceptWhereUniqueInput
    data: XOR<recommend_exceptUpdateWithoutMenuInput, recommend_exceptUncheckedUpdateWithoutMenuInput>
  }

  export type recommend_exceptUpdateManyWithWhereWithoutMenuInput = {
    where: recommend_exceptScalarWhereInput
    data: XOR<recommend_exceptUpdateManyMutationInput, recommend_exceptUncheckedUpdateManyWithoutMenuInput>
  }

  export type recommend_exceptScalarWhereInput = {
    AND?: recommend_exceptScalarWhereInput | recommend_exceptScalarWhereInput[]
    OR?: recommend_exceptScalarWhereInput[]
    NOT?: recommend_exceptScalarWhereInput | recommend_exceptScalarWhereInput[]
    id?: BigIntFilter<"recommend_except"> | bigint | number
    menu_id?: BigIntFilter<"recommend_except"> | bigint | number
    user_id?: BigIntFilter<"recommend_except"> | bigint | number
    bit?: BoolNullableFilter<"recommend_except"> | boolean | null
  }

  export type rest_menuUpsertWithWhereUniqueWithoutMenuInput = {
    where: rest_menuWhereUniqueInput
    update: XOR<rest_menuUpdateWithoutMenuInput, rest_menuUncheckedUpdateWithoutMenuInput>
    create: XOR<rest_menuCreateWithoutMenuInput, rest_menuUncheckedCreateWithoutMenuInput>
  }

  export type rest_menuUpdateWithWhereUniqueWithoutMenuInput = {
    where: rest_menuWhereUniqueInput
    data: XOR<rest_menuUpdateWithoutMenuInput, rest_menuUncheckedUpdateWithoutMenuInput>
  }

  export type rest_menuUpdateManyWithWhereWithoutMenuInput = {
    where: rest_menuScalarWhereInput
    data: XOR<rest_menuUpdateManyMutationInput, rest_menuUncheckedUpdateManyWithoutMenuInput>
  }

  export type rest_menuScalarWhereInput = {
    AND?: rest_menuScalarWhereInput | rest_menuScalarWhereInput[]
    OR?: rest_menuScalarWhereInput[]
    NOT?: rest_menuScalarWhereInput | rest_menuScalarWhereInput[]
    id?: BigIntFilter<"rest_menu"> | bigint | number
    menu_id?: BigIntFilter<"rest_menu"> | bigint | number
    rest_id?: BigIntFilter<"rest_menu"> | bigint | number
  }

  export type userCreateWithoutMukburimInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMukburimInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMukburimInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMukburimInput, userUncheckedCreateWithoutMukburimInput>
  }

  export type menuCreateWithoutMukburimInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    recommend_except?: recommend_exceptCreateNestedManyWithoutMenuInput
    rest_menu?: rest_menuCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutMukburimInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutMenuInput
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutMukburimInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
  }

  export type userUpsertWithoutMukburimInput = {
    update: XOR<userUpdateWithoutMukburimInput, userUncheckedUpdateWithoutMukburimInput>
    create: XOR<userCreateWithoutMukburimInput, userUncheckedCreateWithoutMukburimInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMukburimInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMukburimInput, userUncheckedUpdateWithoutMukburimInput>
  }

  export type userUpdateWithoutMukburimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMukburimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type menuUpsertWithoutMukburimInput = {
    update: XOR<menuUpdateWithoutMukburimInput, menuUncheckedUpdateWithoutMukburimInput>
    create: XOR<menuCreateWithoutMukburimInput, menuUncheckedCreateWithoutMukburimInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutMukburimInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutMukburimInput, menuUncheckedUpdateWithoutMukburimInput>
  }

  export type menuUpdateWithoutMukburimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    recommend_except?: recommend_exceptUpdateManyWithoutMenuNestedInput
    rest_menu?: rest_menuUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutMukburimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutMenuNestedInput
    rest_menu?: rest_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateWithoutRecommend_exceptInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    rest_menu?: rest_menuCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutRecommend_exceptInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutRecommend_exceptInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutRecommend_exceptInput, menuUncheckedCreateWithoutRecommend_exceptInput>
  }

  export type userCreateWithoutRecommend_exceptInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRecommend_exceptInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRecommend_exceptInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRecommend_exceptInput, userUncheckedCreateWithoutRecommend_exceptInput>
  }

  export type menuUpsertWithoutRecommend_exceptInput = {
    update: XOR<menuUpdateWithoutRecommend_exceptInput, menuUncheckedUpdateWithoutRecommend_exceptInput>
    create: XOR<menuCreateWithoutRecommend_exceptInput, menuUncheckedCreateWithoutRecommend_exceptInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutRecommend_exceptInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutRecommend_exceptInput, menuUncheckedUpdateWithoutRecommend_exceptInput>
  }

  export type menuUpdateWithoutRecommend_exceptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    rest_menu?: rest_menuUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutRecommend_exceptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    rest_menu?: rest_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type userUpsertWithoutRecommend_exceptInput = {
    update: XOR<userUpdateWithoutRecommend_exceptInput, userUncheckedUpdateWithoutRecommend_exceptInput>
    create: XOR<userCreateWithoutRecommend_exceptInput, userUncheckedCreateWithoutRecommend_exceptInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRecommend_exceptInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRecommend_exceptInput, userUncheckedUpdateWithoutRecommend_exceptInput>
  }

  export type userUpdateWithoutRecommend_exceptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRecommend_exceptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutReportInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutReportInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutReportInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
  }

  export type reviewCreateWithoutReportInput = {
    id?: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    user: userCreateNestedOneWithoutReviewInput
    restaurant: restaurantCreateNestedOneWithoutReviewInput
    review_image?: review_imageCreateNestedManyWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutReportInput = {
    id?: bigint | number
    user_id: bigint | number
    rest_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    review_image?: review_imageUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewCreateOrConnectWithoutReportInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutReportInput, reviewUncheckedCreateWithoutReportInput>
  }

  export type userUpsertWithoutReportInput = {
    update: XOR<userUpdateWithoutReportInput, userUncheckedUpdateWithoutReportInput>
    create: XOR<userCreateWithoutReportInput, userUncheckedCreateWithoutReportInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReportInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReportInput, userUncheckedUpdateWithoutReportInput>
  }

  export type userUpdateWithoutReportInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReportInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type reviewUpsertWithoutReportInput = {
    update: XOR<reviewUpdateWithoutReportInput, reviewUncheckedUpdateWithoutReportInput>
    create: XOR<reviewCreateWithoutReportInput, reviewUncheckedCreateWithoutReportInput>
    where?: reviewWhereInput
  }

  export type reviewUpdateToOneWithWhereWithoutReportInput = {
    where?: reviewWhereInput
    data: XOR<reviewUpdateWithoutReportInput, reviewUncheckedUpdateWithoutReportInput>
  }

  export type reviewUpdateWithoutReportInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneRequiredWithoutReviewNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutReviewNestedInput
    review_image?: review_imageUpdateManyWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutReportInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    review_image?: review_imageUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type restaurantCreateWithoutRest_imageInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_menu?: rest_menuCreateNestedManyWithoutRestaurantInput
    review?: reviewCreateNestedManyWithoutRestaurantInput
    zzim?: zzimCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateWithoutRest_imageInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutRestaurantInput
    review?: reviewUncheckedCreateNestedManyWithoutRestaurantInput
    zzim?: zzimUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantCreateOrConnectWithoutRest_imageInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutRest_imageInput, restaurantUncheckedCreateWithoutRest_imageInput>
  }

  export type restaurantUpsertWithoutRest_imageInput = {
    update: XOR<restaurantUpdateWithoutRest_imageInput, restaurantUncheckedUpdateWithoutRest_imageInput>
    create: XOR<restaurantCreateWithoutRest_imageInput, restaurantUncheckedCreateWithoutRest_imageInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutRest_imageInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutRest_imageInput, restaurantUncheckedUpdateWithoutRest_imageInput>
  }

  export type restaurantUpdateWithoutRest_imageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_menu?: rest_menuUpdateManyWithoutRestaurantNestedInput
    review?: reviewUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateWithoutRest_imageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_menu?: rest_menuUncheckedUpdateManyWithoutRestaurantNestedInput
    review?: reviewUncheckedUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type menuCreateWithoutRest_menuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    mukburim?: mukburimCreateNestedManyWithoutMenuInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutRest_menuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    calory?: bigint | number | null
    carbo?: bigint | number | null
    protein?: bigint | number | null
    fat?: bigint | number | null
    vitamin?: string | null
    allergic?: string | null
    sodium?: bigint | number | null
    image_link?: string | null
    mukburim?: mukburimUncheckedCreateNestedManyWithoutMenuInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutRest_menuInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutRest_menuInput, menuUncheckedCreateWithoutRest_menuInput>
  }

  export type restaurantCreateWithoutRest_menuInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageCreateNestedManyWithoutRestaurantInput
    review?: reviewCreateNestedManyWithoutRestaurantInput
    zzim?: zzimCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateWithoutRest_menuInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageUncheckedCreateNestedManyWithoutRestaurantInput
    review?: reviewUncheckedCreateNestedManyWithoutRestaurantInput
    zzim?: zzimUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantCreateOrConnectWithoutRest_menuInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutRest_menuInput, restaurantUncheckedCreateWithoutRest_menuInput>
  }

  export type menuUpsertWithoutRest_menuInput = {
    update: XOR<menuUpdateWithoutRest_menuInput, menuUncheckedUpdateWithoutRest_menuInput>
    create: XOR<menuCreateWithoutRest_menuInput, menuUncheckedCreateWithoutRest_menuInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutRest_menuInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutRest_menuInput, menuUncheckedUpdateWithoutRest_menuInput>
  }

  export type menuUpdateWithoutRest_menuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUpdateManyWithoutMenuNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutRest_menuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    calory?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    carbo?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    protein?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vitamin?: NullableStringFieldUpdateOperationsInput | string | null
    allergic?: NullableStringFieldUpdateOperationsInput | string | null
    sodium?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    image_link?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUncheckedUpdateManyWithoutMenuNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type restaurantUpsertWithoutRest_menuInput = {
    update: XOR<restaurantUpdateWithoutRest_menuInput, restaurantUncheckedUpdateWithoutRest_menuInput>
    create: XOR<restaurantCreateWithoutRest_menuInput, restaurantUncheckedCreateWithoutRest_menuInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutRest_menuInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutRest_menuInput, restaurantUncheckedUpdateWithoutRest_menuInput>
  }

  export type restaurantUpdateWithoutRest_menuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUpdateManyWithoutRestaurantNestedInput
    review?: reviewUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateWithoutRest_menuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUncheckedUpdateManyWithoutRestaurantNestedInput
    review?: reviewUncheckedUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type rest_imageCreateWithoutRestaurantInput = {
    id?: bigint | number
    link?: string | null
  }

  export type rest_imageUncheckedCreateWithoutRestaurantInput = {
    id?: bigint | number
    link?: string | null
  }

  export type rest_imageCreateOrConnectWithoutRestaurantInput = {
    where: rest_imageWhereUniqueInput
    create: XOR<rest_imageCreateWithoutRestaurantInput, rest_imageUncheckedCreateWithoutRestaurantInput>
  }

  export type rest_imageCreateManyRestaurantInputEnvelope = {
    data: rest_imageCreateManyRestaurantInput | rest_imageCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type rest_menuCreateWithoutRestaurantInput = {
    id?: bigint | number
    menu: menuCreateNestedOneWithoutRest_menuInput
  }

  export type rest_menuUncheckedCreateWithoutRestaurantInput = {
    id?: bigint | number
    menu_id: bigint | number
  }

  export type rest_menuCreateOrConnectWithoutRestaurantInput = {
    where: rest_menuWhereUniqueInput
    create: XOR<rest_menuCreateWithoutRestaurantInput, rest_menuUncheckedCreateWithoutRestaurantInput>
  }

  export type rest_menuCreateManyRestaurantInputEnvelope = {
    data: rest_menuCreateManyRestaurantInput | rest_menuCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutRestaurantInput = {
    id?: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportCreateNestedManyWithoutReviewInput
    user: userCreateNestedOneWithoutReviewInput
    review_image?: review_imageCreateNestedManyWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutRestaurantInput = {
    id?: bigint | number
    user_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportUncheckedCreateNestedManyWithoutReviewInput
    review_image?: review_imageUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewCreateOrConnectWithoutRestaurantInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>
  }

  export type reviewCreateManyRestaurantInputEnvelope = {
    data: reviewCreateManyRestaurantInput | reviewCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type zzimCreateWithoutRestaurantInput = {
    id?: bigint | number
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutZzimInput
  }

  export type zzimUncheckedCreateWithoutRestaurantInput = {
    id?: bigint | number
    user_id: bigint | number
    created_at?: Date | string | null
  }

  export type zzimCreateOrConnectWithoutRestaurantInput = {
    where: zzimWhereUniqueInput
    create: XOR<zzimCreateWithoutRestaurantInput, zzimUncheckedCreateWithoutRestaurantInput>
  }

  export type zzimCreateManyRestaurantInputEnvelope = {
    data: zzimCreateManyRestaurantInput | zzimCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type rest_imageUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: rest_imageWhereUniqueInput
    update: XOR<rest_imageUpdateWithoutRestaurantInput, rest_imageUncheckedUpdateWithoutRestaurantInput>
    create: XOR<rest_imageCreateWithoutRestaurantInput, rest_imageUncheckedCreateWithoutRestaurantInput>
  }

  export type rest_imageUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: rest_imageWhereUniqueInput
    data: XOR<rest_imageUpdateWithoutRestaurantInput, rest_imageUncheckedUpdateWithoutRestaurantInput>
  }

  export type rest_imageUpdateManyWithWhereWithoutRestaurantInput = {
    where: rest_imageScalarWhereInput
    data: XOR<rest_imageUpdateManyMutationInput, rest_imageUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type rest_imageScalarWhereInput = {
    AND?: rest_imageScalarWhereInput | rest_imageScalarWhereInput[]
    OR?: rest_imageScalarWhereInput[]
    NOT?: rest_imageScalarWhereInput | rest_imageScalarWhereInput[]
    id?: BigIntFilter<"rest_image"> | bigint | number
    rest_id?: BigIntFilter<"rest_image"> | bigint | number
    link?: StringNullableFilter<"rest_image"> | string | null
  }

  export type rest_menuUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: rest_menuWhereUniqueInput
    update: XOR<rest_menuUpdateWithoutRestaurantInput, rest_menuUncheckedUpdateWithoutRestaurantInput>
    create: XOR<rest_menuCreateWithoutRestaurantInput, rest_menuUncheckedCreateWithoutRestaurantInput>
  }

  export type rest_menuUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: rest_menuWhereUniqueInput
    data: XOR<rest_menuUpdateWithoutRestaurantInput, rest_menuUncheckedUpdateWithoutRestaurantInput>
  }

  export type rest_menuUpdateManyWithWhereWithoutRestaurantInput = {
    where: rest_menuScalarWhereInput
    data: XOR<rest_menuUpdateManyMutationInput, rest_menuUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutRestaurantInput, reviewUncheckedUpdateWithoutRestaurantInput>
    create: XOR<reviewCreateWithoutRestaurantInput, reviewUncheckedCreateWithoutRestaurantInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutRestaurantInput, reviewUncheckedUpdateWithoutRestaurantInput>
  }

  export type reviewUpdateManyWithWhereWithoutRestaurantInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: BigIntFilter<"review"> | bigint | number
    user_id?: BigIntFilter<"review"> | bigint | number
    rest_id?: BigIntFilter<"review"> | bigint | number
    rating?: BigIntNullableFilter<"review"> | bigint | number | null
    tag?: JsonNullableFilter<"review">
    text?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    like?: IntNullableFilter<"review"> | number | null
  }

  export type zzimUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: zzimWhereUniqueInput
    update: XOR<zzimUpdateWithoutRestaurantInput, zzimUncheckedUpdateWithoutRestaurantInput>
    create: XOR<zzimCreateWithoutRestaurantInput, zzimUncheckedCreateWithoutRestaurantInput>
  }

  export type zzimUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: zzimWhereUniqueInput
    data: XOR<zzimUpdateWithoutRestaurantInput, zzimUncheckedUpdateWithoutRestaurantInput>
  }

  export type zzimUpdateManyWithWhereWithoutRestaurantInput = {
    where: zzimScalarWhereInput
    data: XOR<zzimUpdateManyMutationInput, zzimUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type zzimScalarWhereInput = {
    AND?: zzimScalarWhereInput | zzimScalarWhereInput[]
    OR?: zzimScalarWhereInput[]
    NOT?: zzimScalarWhereInput | zzimScalarWhereInput[]
    id?: BigIntFilter<"zzim"> | bigint | number
    user_id?: BigIntFilter<"zzim"> | bigint | number
    rest_id?: BigIntFilter<"zzim"> | bigint | number
    created_at?: DateTimeNullableFilter<"zzim"> | Date | string | null
  }

  export type reportCreateWithoutReviewInput = {
    id?: bigint | number
    text?: string | null
    user: userCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutReviewInput = {
    id?: bigint | number
    user_id: bigint | number
    text?: string | null
  }

  export type reportCreateOrConnectWithoutReviewInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutReviewInput, reportUncheckedCreateWithoutReviewInput>
  }

  export type reportCreateManyReviewInputEnvelope = {
    data: reportCreateManyReviewInput | reportCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutReviewInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutReviewInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
  }

  export type restaurantCreateWithoutReviewInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageCreateNestedManyWithoutRestaurantInput
    rest_menu?: rest_menuCreateNestedManyWithoutRestaurantInput
    zzim?: zzimCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateWithoutReviewInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageUncheckedCreateNestedManyWithoutRestaurantInput
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutRestaurantInput
    zzim?: zzimUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantCreateOrConnectWithoutReviewInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>
  }

  export type review_imageCreateWithoutReviewInput = {
    id?: bigint | number
    link?: string | null
  }

  export type review_imageUncheckedCreateWithoutReviewInput = {
    id?: bigint | number
    link?: string | null
  }

  export type review_imageCreateOrConnectWithoutReviewInput = {
    where: review_imageWhereUniqueInput
    create: XOR<review_imageCreateWithoutReviewInput, review_imageUncheckedCreateWithoutReviewInput>
  }

  export type review_imageCreateManyReviewInputEnvelope = {
    data: review_imageCreateManyReviewInput | review_imageCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutReviewInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutReviewInput, reportUncheckedUpdateWithoutReviewInput>
    create: XOR<reportCreateWithoutReviewInput, reportUncheckedCreateWithoutReviewInput>
  }

  export type reportUpdateWithWhereUniqueWithoutReviewInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutReviewInput, reportUncheckedUpdateWithoutReviewInput>
  }

  export type reportUpdateManyWithWhereWithoutReviewInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutReviewInput>
  }

  export type reportScalarWhereInput = {
    AND?: reportScalarWhereInput | reportScalarWhereInput[]
    OR?: reportScalarWhereInput[]
    NOT?: reportScalarWhereInput | reportScalarWhereInput[]
    id?: BigIntFilter<"report"> | bigint | number
    user_id?: BigIntFilter<"report"> | bigint | number
    review_id?: BigIntFilter<"report"> | bigint | number
    text?: StringNullableFilter<"report"> | string | null
  }

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
  }

  export type userUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type restaurantUpsertWithoutReviewInput = {
    update: XOR<restaurantUpdateWithoutReviewInput, restaurantUncheckedUpdateWithoutReviewInput>
    create: XOR<restaurantCreateWithoutReviewInput, restaurantUncheckedCreateWithoutReviewInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutReviewInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutReviewInput, restaurantUncheckedUpdateWithoutReviewInput>
  }

  export type restaurantUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUpdateManyWithoutRestaurantNestedInput
    rest_menu?: rest_menuUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUncheckedUpdateManyWithoutRestaurantNestedInput
    rest_menu?: rest_menuUncheckedUpdateManyWithoutRestaurantNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type review_imageUpsertWithWhereUniqueWithoutReviewInput = {
    where: review_imageWhereUniqueInput
    update: XOR<review_imageUpdateWithoutReviewInput, review_imageUncheckedUpdateWithoutReviewInput>
    create: XOR<review_imageCreateWithoutReviewInput, review_imageUncheckedCreateWithoutReviewInput>
  }

  export type review_imageUpdateWithWhereUniqueWithoutReviewInput = {
    where: review_imageWhereUniqueInput
    data: XOR<review_imageUpdateWithoutReviewInput, review_imageUncheckedUpdateWithoutReviewInput>
  }

  export type review_imageUpdateManyWithWhereWithoutReviewInput = {
    where: review_imageScalarWhereInput
    data: XOR<review_imageUpdateManyMutationInput, review_imageUncheckedUpdateManyWithoutReviewInput>
  }

  export type review_imageScalarWhereInput = {
    AND?: review_imageScalarWhereInput | review_imageScalarWhereInput[]
    OR?: review_imageScalarWhereInput[]
    NOT?: review_imageScalarWhereInput | review_imageScalarWhereInput[]
    id?: BigIntFilter<"review_image"> | bigint | number
    review_id?: BigIntFilter<"review_image"> | bigint | number
    link?: StringNullableFilter<"review_image"> | string | null
  }

  export type reviewCreateWithoutReview_imageInput = {
    id?: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportCreateNestedManyWithoutReviewInput
    user: userCreateNestedOneWithoutReviewInput
    restaurant: restaurantCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutReview_imageInput = {
    id?: bigint | number
    user_id: bigint | number
    rest_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewCreateOrConnectWithoutReview_imageInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutReview_imageInput, reviewUncheckedCreateWithoutReview_imageInput>
  }

  export type reviewUpsertWithoutReview_imageInput = {
    update: XOR<reviewUpdateWithoutReview_imageInput, reviewUncheckedUpdateWithoutReview_imageInput>
    create: XOR<reviewCreateWithoutReview_imageInput, reviewUncheckedCreateWithoutReview_imageInput>
    where?: reviewWhereInput
  }

  export type reviewUpdateToOneWithWhereWithoutReview_imageInput = {
    where?: reviewWhereInput
    data: XOR<reviewUpdateWithoutReview_imageInput, reviewUncheckedUpdateWithoutReview_imageInput>
  }

  export type reviewUpdateWithoutReview_imageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUpdateManyWithoutReviewNestedInput
    user?: userUpdateOneRequiredWithoutReviewNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutReview_imageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type allergyCreateWithoutUserInput = {
    allergy: $Enums.allergy_type
  }

  export type allergyUncheckedCreateWithoutUserInput = {
    id?: number
    allergy: $Enums.allergy_type
  }

  export type allergyCreateOrConnectWithoutUserInput = {
    where: allergyWhereUniqueInput
    create: XOR<allergyCreateWithoutUserInput, allergyUncheckedCreateWithoutUserInput>
  }

  export type allergyCreateManyUserInputEnvelope = {
    data: allergyCreateManyUserInput | allergyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type mukburimCreateWithoutUserInput = {
    id?: bigint | number
    date?: Date | string | null
    menu: menuCreateNestedOneWithoutMukburimInput
  }

  export type mukburimUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    menu_id: bigint | number
    date?: Date | string | null
  }

  export type mukburimCreateOrConnectWithoutUserInput = {
    where: mukburimWhereUniqueInput
    create: XOR<mukburimCreateWithoutUserInput, mukburimUncheckedCreateWithoutUserInput>
  }

  export type mukburimCreateManyUserInputEnvelope = {
    data: mukburimCreateManyUserInput | mukburimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type preferCreateWithoutUserInput = {
    prefer: $Enums.prefer_type
  }

  export type preferUncheckedCreateWithoutUserInput = {
    id?: number
    prefer: $Enums.prefer_type
  }

  export type preferCreateOrConnectWithoutUserInput = {
    where: preferWhereUniqueInput
    create: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput>
  }

  export type preferCreateManyUserInputEnvelope = {
    data: preferCreateManyUserInput | preferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type recommend_exceptCreateWithoutUserInput = {
    id?: bigint | number
    bit?: boolean | null
    menu: menuCreateNestedOneWithoutRecommend_exceptInput
  }

  export type recommend_exceptUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    menu_id: bigint | number
    bit?: boolean | null
  }

  export type recommend_exceptCreateOrConnectWithoutUserInput = {
    where: recommend_exceptWhereUniqueInput
    create: XOR<recommend_exceptCreateWithoutUserInput, recommend_exceptUncheckedCreateWithoutUserInput>
  }

  export type recommend_exceptCreateManyUserInputEnvelope = {
    data: recommend_exceptCreateManyUserInput | recommend_exceptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reportCreateWithoutUserInput = {
    id?: bigint | number
    text?: string | null
    review: reviewCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    review_id: bigint | number
    text?: string | null
  }

  export type reportCreateOrConnectWithoutUserInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput>
  }

  export type reportCreateManyUserInputEnvelope = {
    data: reportCreateManyUserInput | reportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUserInput = {
    id?: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportCreateNestedManyWithoutReviewInput
    restaurant: restaurantCreateNestedOneWithoutReviewInput
    review_image?: review_imageCreateNestedManyWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    rest_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
    report?: reportUncheckedCreateNestedManyWithoutReviewInput
    review_image?: review_imageUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type zzimCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string | null
    restaurant: restaurantCreateNestedOneWithoutZzimInput
  }

  export type zzimUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    rest_id: bigint | number
    created_at?: Date | string | null
  }

  export type zzimCreateOrConnectWithoutUserInput = {
    where: zzimWhereUniqueInput
    create: XOR<zzimCreateWithoutUserInput, zzimUncheckedCreateWithoutUserInput>
  }

  export type zzimCreateManyUserInputEnvelope = {
    data: zzimCreateManyUserInput | zzimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type allergyUpsertWithWhereUniqueWithoutUserInput = {
    where: allergyWhereUniqueInput
    update: XOR<allergyUpdateWithoutUserInput, allergyUncheckedUpdateWithoutUserInput>
    create: XOR<allergyCreateWithoutUserInput, allergyUncheckedCreateWithoutUserInput>
  }

  export type allergyUpdateWithWhereUniqueWithoutUserInput = {
    where: allergyWhereUniqueInput
    data: XOR<allergyUpdateWithoutUserInput, allergyUncheckedUpdateWithoutUserInput>
  }

  export type allergyUpdateManyWithWhereWithoutUserInput = {
    where: allergyScalarWhereInput
    data: XOR<allergyUpdateManyMutationInput, allergyUncheckedUpdateManyWithoutUserInput>
  }

  export type allergyScalarWhereInput = {
    AND?: allergyScalarWhereInput | allergyScalarWhereInput[]
    OR?: allergyScalarWhereInput[]
    NOT?: allergyScalarWhereInput | allergyScalarWhereInput[]
    id?: IntFilter<"allergy"> | number
    userId?: BigIntFilter<"allergy"> | bigint | number
    allergy?: Enumallergy_typeFilter<"allergy"> | $Enums.allergy_type
  }

  export type mukburimUpsertWithWhereUniqueWithoutUserInput = {
    where: mukburimWhereUniqueInput
    update: XOR<mukburimUpdateWithoutUserInput, mukburimUncheckedUpdateWithoutUserInput>
    create: XOR<mukburimCreateWithoutUserInput, mukburimUncheckedCreateWithoutUserInput>
  }

  export type mukburimUpdateWithWhereUniqueWithoutUserInput = {
    where: mukburimWhereUniqueInput
    data: XOR<mukburimUpdateWithoutUserInput, mukburimUncheckedUpdateWithoutUserInput>
  }

  export type mukburimUpdateManyWithWhereWithoutUserInput = {
    where: mukburimScalarWhereInput
    data: XOR<mukburimUpdateManyMutationInput, mukburimUncheckedUpdateManyWithoutUserInput>
  }

  export type preferUpsertWithWhereUniqueWithoutUserInput = {
    where: preferWhereUniqueInput
    update: XOR<preferUpdateWithoutUserInput, preferUncheckedUpdateWithoutUserInput>
    create: XOR<preferCreateWithoutUserInput, preferUncheckedCreateWithoutUserInput>
  }

  export type preferUpdateWithWhereUniqueWithoutUserInput = {
    where: preferWhereUniqueInput
    data: XOR<preferUpdateWithoutUserInput, preferUncheckedUpdateWithoutUserInput>
  }

  export type preferUpdateManyWithWhereWithoutUserInput = {
    where: preferScalarWhereInput
    data: XOR<preferUpdateManyMutationInput, preferUncheckedUpdateManyWithoutUserInput>
  }

  export type preferScalarWhereInput = {
    AND?: preferScalarWhereInput | preferScalarWhereInput[]
    OR?: preferScalarWhereInput[]
    NOT?: preferScalarWhereInput | preferScalarWhereInput[]
    id?: IntFilter<"prefer"> | number
    userId?: BigIntFilter<"prefer"> | bigint | number
    prefer?: Enumprefer_typeFilter<"prefer"> | $Enums.prefer_type
  }

  export type recommend_exceptUpsertWithWhereUniqueWithoutUserInput = {
    where: recommend_exceptWhereUniqueInput
    update: XOR<recommend_exceptUpdateWithoutUserInput, recommend_exceptUncheckedUpdateWithoutUserInput>
    create: XOR<recommend_exceptCreateWithoutUserInput, recommend_exceptUncheckedCreateWithoutUserInput>
  }

  export type recommend_exceptUpdateWithWhereUniqueWithoutUserInput = {
    where: recommend_exceptWhereUniqueInput
    data: XOR<recommend_exceptUpdateWithoutUserInput, recommend_exceptUncheckedUpdateWithoutUserInput>
  }

  export type recommend_exceptUpdateManyWithWhereWithoutUserInput = {
    where: recommend_exceptScalarWhereInput
    data: XOR<recommend_exceptUpdateManyMutationInput, recommend_exceptUncheckedUpdateManyWithoutUserInput>
  }

  export type reportUpsertWithWhereUniqueWithoutUserInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutUserInput, reportUncheckedUpdateWithoutUserInput>
    create: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput>
  }

  export type reportUpdateWithWhereUniqueWithoutUserInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutUserInput, reportUncheckedUpdateWithoutUserInput>
  }

  export type reportUpdateManyWithWhereWithoutUserInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type zzimUpsertWithWhereUniqueWithoutUserInput = {
    where: zzimWhereUniqueInput
    update: XOR<zzimUpdateWithoutUserInput, zzimUncheckedUpdateWithoutUserInput>
    create: XOR<zzimCreateWithoutUserInput, zzimUncheckedCreateWithoutUserInput>
  }

  export type zzimUpdateWithWhereUniqueWithoutUserInput = {
    where: zzimWhereUniqueInput
    data: XOR<zzimUpdateWithoutUserInput, zzimUncheckedUpdateWithoutUserInput>
  }

  export type zzimUpdateManyWithWhereWithoutUserInput = {
    where: zzimScalarWhereInput
    data: XOR<zzimUpdateManyMutationInput, zzimUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutAllergyInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAllergyInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAllergyInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAllergyInput, userUncheckedCreateWithoutAllergyInput>
  }

  export type userUpsertWithoutAllergyInput = {
    update: XOR<userUpdateWithoutAllergyInput, userUncheckedUpdateWithoutAllergyInput>
    create: XOR<userCreateWithoutAllergyInput, userUncheckedCreateWithoutAllergyInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAllergyInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAllergyInput, userUncheckedUpdateWithoutAllergyInput>
  }

  export type userUpdateWithoutAllergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAllergyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutPreferInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
    zzim?: zzimCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPreferInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    zzim?: zzimUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPreferInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
  }

  export type userUpsertWithoutPreferInput = {
    update: XOR<userUpdateWithoutPreferInput, userUncheckedUpdateWithoutPreferInput>
    create: XOR<userCreateWithoutPreferInput, userUncheckedCreateWithoutPreferInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPreferInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPreferInput, userUncheckedUpdateWithoutPreferInput>
  }

  export type userUpdateWithoutPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
    zzim?: zzimUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPreferInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    zzim?: zzimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutZzimInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyCreateNestedManyWithoutUserInput
    mukburim?: mukburimCreateNestedManyWithoutUserInput
    prefer?: preferCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptCreateNestedManyWithoutUserInput
    report?: reportCreateNestedManyWithoutUserInput
    review?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutZzimInput = {
    id?: bigint | number
    email?: string | null
    phone_num?: string | null
    is_verified?: boolean | null
    nickname?: string | null
    body_type?: $Enums.user_body_type | null
    gender?: $Enums.user_gender | null
    exercise?: $Enums.user_exercise | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profileImageUrl?: string | null
    allergy?: allergyUncheckedCreateNestedManyWithoutUserInput
    mukburim?: mukburimUncheckedCreateNestedManyWithoutUserInput
    prefer?: preferUncheckedCreateNestedManyWithoutUserInput
    recommend_except?: recommend_exceptUncheckedCreateNestedManyWithoutUserInput
    report?: reportUncheckedCreateNestedManyWithoutUserInput
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutZzimInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutZzimInput, userUncheckedCreateWithoutZzimInput>
  }

  export type restaurantCreateWithoutZzimInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageCreateNestedManyWithoutRestaurantInput
    rest_menu?: rest_menuCreateNestedManyWithoutRestaurantInput
    review?: reviewCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateWithoutZzimInput = {
    id?: bigint | number
    location1?: string | null
    location2?: string | null
    location3?: string | null
    name?: string | null
    repre_menu?: string | null
    close_day?: string | null
    start_time?: string | null
    end_time?: string | null
    address?: string | null
    detail_address?: string | null
    rating?: number | null
    day_open_time?: string | null
    rest_image?: rest_imageUncheckedCreateNestedManyWithoutRestaurantInput
    rest_menu?: rest_menuUncheckedCreateNestedManyWithoutRestaurantInput
    review?: reviewUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantCreateOrConnectWithoutZzimInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutZzimInput, restaurantUncheckedCreateWithoutZzimInput>
  }

  export type userUpsertWithoutZzimInput = {
    update: XOR<userUpdateWithoutZzimInput, userUncheckedUpdateWithoutZzimInput>
    create: XOR<userCreateWithoutZzimInput, userUncheckedCreateWithoutZzimInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutZzimInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutZzimInput, userUncheckedUpdateWithoutZzimInput>
  }

  export type userUpdateWithoutZzimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUpdateManyWithoutUserNestedInput
    prefer?: preferUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUpdateManyWithoutUserNestedInput
    report?: reportUpdateManyWithoutUserNestedInput
    review?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutZzimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_num?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    body_type?: NullableEnumuser_body_typeFieldUpdateOperationsInput | $Enums.user_body_type | null
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    exercise?: NullableEnumuser_exerciseFieldUpdateOperationsInput | $Enums.user_exercise | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allergy?: allergyUncheckedUpdateManyWithoutUserNestedInput
    mukburim?: mukburimUncheckedUpdateManyWithoutUserNestedInput
    prefer?: preferUncheckedUpdateManyWithoutUserNestedInput
    recommend_except?: recommend_exceptUncheckedUpdateManyWithoutUserNestedInput
    report?: reportUncheckedUpdateManyWithoutUserNestedInput
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type restaurantUpsertWithoutZzimInput = {
    update: XOR<restaurantUpdateWithoutZzimInput, restaurantUncheckedUpdateWithoutZzimInput>
    create: XOR<restaurantCreateWithoutZzimInput, restaurantUncheckedCreateWithoutZzimInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutZzimInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutZzimInput, restaurantUncheckedUpdateWithoutZzimInput>
  }

  export type restaurantUpdateWithoutZzimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUpdateManyWithoutRestaurantNestedInput
    rest_menu?: rest_menuUpdateManyWithoutRestaurantNestedInput
    review?: reviewUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateWithoutZzimInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    location1?: NullableStringFieldUpdateOperationsInput | string | null
    location2?: NullableStringFieldUpdateOperationsInput | string | null
    location3?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    repre_menu?: NullableStringFieldUpdateOperationsInput | string | null
    close_day?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    detail_address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    day_open_time?: NullableStringFieldUpdateOperationsInput | string | null
    rest_image?: rest_imageUncheckedUpdateManyWithoutRestaurantNestedInput
    rest_menu?: rest_menuUncheckedUpdateManyWithoutRestaurantNestedInput
    review?: reviewUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type mukburimCreateManyMenuInput = {
    id?: bigint | number
    user_id: bigint | number
    date?: Date | string | null
  }

  export type recommend_exceptCreateManyMenuInput = {
    id?: bigint | number
    user_id: bigint | number
    bit?: boolean | null
  }

  export type rest_menuCreateManyMenuInput = {
    id?: bigint | number
    rest_id: bigint | number
  }

  export type mukburimUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutMukburimNestedInput
  }

  export type mukburimUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recommend_exceptUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: userUpdateOneRequiredWithoutRecommend_exceptNestedInput
  }

  export type recommend_exceptUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type recommend_exceptUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type rest_menuUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    restaurant?: restaurantUpdateOneRequiredWithoutRest_menuNestedInput
  }

  export type rest_menuUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type rest_menuUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type rest_imageCreateManyRestaurantInput = {
    id?: bigint | number
    link?: string | null
  }

  export type rest_menuCreateManyRestaurantInput = {
    id?: bigint | number
    menu_id: bigint | number
  }

  export type reviewCreateManyRestaurantInput = {
    id?: bigint | number
    user_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
  }

  export type zzimCreateManyRestaurantInput = {
    id?: bigint | number
    user_id: bigint | number
    created_at?: Date | string | null
  }

  export type rest_imageUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_imageUncheckedUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_imageUncheckedUpdateManyWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rest_menuUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu?: menuUpdateOneRequiredWithoutRest_menuNestedInput
  }

  export type rest_menuUncheckedUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type rest_menuUncheckedUpdateManyWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type reviewUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUpdateManyWithoutReviewNestedInput
    user?: userUpdateOneRequiredWithoutReviewNestedInput
    review_image?: review_imageUpdateManyWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUncheckedUpdateManyWithoutReviewNestedInput
    review_image?: review_imageUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateManyWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type zzimUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutZzimNestedInput
  }

  export type zzimUncheckedUpdateWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type zzimUncheckedUpdateManyWithoutRestaurantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportCreateManyReviewInput = {
    id?: bigint | number
    user_id: bigint | number
    text?: string | null
  }

  export type review_imageCreateManyReviewInput = {
    id?: bigint | number
    link?: string | null
  }

  export type reportUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportUncheckedUpdateManyWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type review_imageUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type review_imageUncheckedUpdateWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type review_imageUncheckedUpdateManyWithoutReviewInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type allergyCreateManyUserInput = {
    id?: number
    allergy: $Enums.allergy_type
  }

  export type mukburimCreateManyUserInput = {
    id?: bigint | number
    menu_id: bigint | number
    date?: Date | string | null
  }

  export type preferCreateManyUserInput = {
    id?: number
    prefer: $Enums.prefer_type
  }

  export type recommend_exceptCreateManyUserInput = {
    id?: bigint | number
    menu_id: bigint | number
    bit?: boolean | null
  }

  export type reportCreateManyUserInput = {
    id?: bigint | number
    review_id: bigint | number
    text?: string | null
  }

  export type reviewCreateManyUserInput = {
    id?: bigint | number
    rest_id: bigint | number
    rating?: bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    created_at?: Date | string | null
    like?: number | null
  }

  export type zzimCreateManyUserInput = {
    id?: bigint | number
    rest_id: bigint | number
    created_at?: Date | string | null
  }

  export type allergyUpdateWithoutUserInput = {
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
  }

  export type allergyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
  }

  export type allergyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergy?: Enumallergy_typeFieldUpdateOperationsInput | $Enums.allergy_type
  }

  export type mukburimUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu?: menuUpdateOneRequiredWithoutMukburimNestedInput
  }

  export type mukburimUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mukburimUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type preferUpdateWithoutUserInput = {
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
  }

  export type preferUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
  }

  export type preferUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefer?: Enumprefer_typeFieldUpdateOperationsInput | $Enums.prefer_type
  }

  export type recommend_exceptUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    menu?: menuUpdateOneRequiredWithoutRecommend_exceptNestedInput
  }

  export type recommend_exceptUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type recommend_exceptUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menu_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateOneRequiredWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    review_id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUpdateManyWithoutReviewNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutReviewNestedInput
    review_image?: review_imageUpdateManyWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
    report?: reportUncheckedUpdateManyWithoutReviewNestedInput
    review_image?: review_imageUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    like?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type zzimUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurant?: restaurantUpdateOneRequiredWithoutZzimNestedInput
  }

  export type zzimUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type zzimUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rest_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}