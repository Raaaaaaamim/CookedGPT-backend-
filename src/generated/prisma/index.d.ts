
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model Keys
 * 
 */
export type Keys = $Result.DefaultSelection<Prisma.$KeysPayload>
/**
 * Model Transformations
 * 
 */
export type Transformations = $Result.DefaultSelection<Prisma.$TransformationsPayload>
/**
 * Model Models
 * 
 */
export type Models = $Result.DefaultSelection<Prisma.$ModelsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PERFORMANCE: {
  AVERAGE: 'AVERAGE',
  GOOD: 'GOOD',
  EXCELLENT: 'EXCELLENT'
};

export type PERFORMANCE = (typeof PERFORMANCE)[keyof typeof PERFORMANCE]


export const TYPE: {
  OPENAI: 'OPENAI',
  OPENROUTER: 'OPENROUTER',
  GEMINI: 'GEMINI'
};

export type TYPE = (typeof TYPE)[keyof typeof TYPE]


export const ROLE: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]

}

export type PERFORMANCE = $Enums.PERFORMANCE

export const PERFORMANCE: typeof $Enums.PERFORMANCE

export type TYPE = $Enums.TYPE

export const TYPE: typeof $Enums.TYPE

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keys`: Exposes CRUD operations for the **Keys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.keys.findMany()
    * ```
    */
  get keys(): Prisma.KeysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transformations`: Exposes CRUD operations for the **Transformations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transformations
    * const transformations = await prisma.transformations.findMany()
    * ```
    */
  get transformations(): Prisma.TransformationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.models`: Exposes CRUD operations for the **Models** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.models.findMany()
    * ```
    */
  get models(): Prisma.ModelsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Users: 'Users',
    Tags: 'Tags',
    Keys: 'Keys',
    Transformations: 'Transformations',
    Models: 'Models'
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
      modelProps: "users" | "tags" | "keys" | "transformations" | "models"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      Keys: {
        payload: Prisma.$KeysPayload<ExtArgs>
        fields: Prisma.KeysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          findFirst: {
            args: Prisma.KeysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          findMany: {
            args: Prisma.KeysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>[]
          }
          create: {
            args: Prisma.KeysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          createMany: {
            args: Prisma.KeysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>[]
          }
          delete: {
            args: Prisma.KeysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          update: {
            args: Prisma.KeysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          deleteMany: {
            args: Prisma.KeysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>[]
          }
          upsert: {
            args: Prisma.KeysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          aggregate: {
            args: Prisma.KeysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeys>
          }
          groupBy: {
            args: Prisma.KeysGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeysGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeysCountArgs<ExtArgs>
            result: $Utils.Optional<KeysCountAggregateOutputType> | number
          }
        }
      }
      Transformations: {
        payload: Prisma.$TransformationsPayload<ExtArgs>
        fields: Prisma.TransformationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransformationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransformationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>
          }
          findFirst: {
            args: Prisma.TransformationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransformationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>
          }
          findMany: {
            args: Prisma.TransformationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>[]
          }
          create: {
            args: Prisma.TransformationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>
          }
          createMany: {
            args: Prisma.TransformationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransformationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>[]
          }
          delete: {
            args: Prisma.TransformationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>
          }
          update: {
            args: Prisma.TransformationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>
          }
          deleteMany: {
            args: Prisma.TransformationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransformationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransformationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>[]
          }
          upsert: {
            args: Prisma.TransformationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformationsPayload>
          }
          aggregate: {
            args: Prisma.TransformationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransformations>
          }
          groupBy: {
            args: Prisma.TransformationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransformationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransformationsCountArgs<ExtArgs>
            result: $Utils.Optional<TransformationsCountAggregateOutputType> | number
          }
        }
      }
      Models: {
        payload: Prisma.$ModelsPayload<ExtArgs>
        fields: Prisma.ModelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findFirst: {
            args: Prisma.ModelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findMany: {
            args: Prisma.ModelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          create: {
            args: Prisma.ModelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          createMany: {
            args: Prisma.ModelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          delete: {
            args: Prisma.ModelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          update: {
            args: Prisma.ModelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          deleteMany: {
            args: Prisma.ModelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          upsert: {
            args: Prisma.ModelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          aggregate: {
            args: Prisma.ModelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModels>
          }
          groupBy: {
            args: Prisma.ModelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelsCountArgs<ExtArgs>
            result: $Utils.Optional<ModelsCountAggregateOutputType> | number
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
    users?: UsersOmit
    tags?: TagsOmit
    keys?: KeysOmit
    transformations?: TransformationsOmit
    models?: ModelsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    transformations: number
    apiKeys: number
    Tags: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transformations?: boolean | UsersCountOutputTypeCountTransformationsArgs
    apiKeys?: boolean | UsersCountOutputTypeCountApiKeysArgs
    Tags?: boolean | UsersCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransformationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransformationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeysWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
  }


  /**
   * Count Type ModelsCountOutputType
   */

  export type ModelsCountOutputType = {
    transformations: number
  }

  export type ModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transformations?: boolean | ModelsCountOutputTypeCountTransformationsArgs
  }

  // Custom InputTypes
  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelsCountOutputType
     */
    select?: ModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeCountTransformationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransformationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    fullName: string | null
    clerkId: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.ROLE | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    fullName: string | null
    clerkId: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.ROLE | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    fullName: number
    clerkId: number
    avatar: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    fullName?: true
    clerkId?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    fullName?: true
    clerkId?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    fullName?: true
    clerkId?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.ROLE
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    fullName?: boolean
    clerkId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    transformations?: boolean | Users$transformationsArgs<ExtArgs>
    apiKeys?: boolean | Users$apiKeysArgs<ExtArgs>
    Tags?: boolean | Users$TagsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    fullName?: boolean
    clerkId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    fullName?: boolean
    clerkId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    fullName?: boolean
    clerkId?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "fullName" | "clerkId" | "avatar" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transformations?: boolean | Users$transformationsArgs<ExtArgs>
    apiKeys?: boolean | Users$apiKeysArgs<ExtArgs>
    Tags?: boolean | Users$TagsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      transformations: Prisma.$TransformationsPayload<ExtArgs>[]
      apiKeys: Prisma.$KeysPayload<ExtArgs>[]
      Tags: Prisma.$TagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      fullName: string
      clerkId: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.ROLE
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transformations<T extends Users$transformationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$transformationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Users$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Users$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tags<T extends Users$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Users$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly clerkId: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly role: FieldRef<"Users", 'ROLE'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.transformations
   */
  export type Users$transformationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    where?: TransformationsWhereInput
    orderBy?: TransformationsOrderByWithRelationInput | TransformationsOrderByWithRelationInput[]
    cursor?: TransformationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransformationsScalarFieldEnum | TransformationsScalarFieldEnum[]
  }

  /**
   * Users.apiKeys
   */
  export type Users$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    where?: KeysWhereInput
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    cursor?: KeysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Users.Tags
   */
  export type Users$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    cursor?: TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    name: string | null
    prompt: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    prompt: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    prompt: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    prompt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    prompt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    prompt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    name: string
    prompt: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    prompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    prompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    prompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
    prompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "prompt" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["tags"]>
  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      prompt: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsFindUniqueArgs>(args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsFindFirstArgs>(args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagsFindManyArgs>(args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends TagsCreateArgs>(args: SelectSubset<T, TagsCreateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsCreateManyArgs>(args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagsCreateManyAndReturnArgs>(args?: SelectSubset<T, TagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends TagsDeleteArgs>(args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsUpdateArgs>(args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsDeleteManyArgs>(args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsUpdateManyArgs>(args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagsUpdateManyAndReturnArgs>(args: SelectSubset<T, TagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends TagsUpsertArgs>(args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
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
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tags model
   */
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'String'>
    readonly name: FieldRef<"Tags", 'String'>
    readonly prompt: FieldRef<"Tags", 'String'>
    readonly authorId: FieldRef<"Tags", 'String'>
    readonly createdAt: FieldRef<"Tags", 'DateTime'>
    readonly updatedAt: FieldRef<"Tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }

  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tags createManyAndReturn
   */
  export type TagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags updateManyAndReturn
   */
  export type TagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }

  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
  }


  /**
   * Model Keys
   */

  export type AggregateKeys = {
    _count: KeysCountAggregateOutputType | null
    _min: KeysMinAggregateOutputType | null
    _max: KeysMaxAggregateOutputType | null
  }

  export type KeysMinAggregateOutputType = {
    id: string | null
    apiKey: string | null
    authorId: string | null
    type: $Enums.TYPE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeysMaxAggregateOutputType = {
    id: string | null
    apiKey: string | null
    authorId: string | null
    type: $Enums.TYPE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeysCountAggregateOutputType = {
    id: number
    apiKey: number
    authorId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KeysMinAggregateInputType = {
    id?: true
    apiKey?: true
    authorId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeysMaxAggregateInputType = {
    id?: true
    apiKey?: true
    authorId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeysCountAggregateInputType = {
    id?: true
    apiKey?: true
    authorId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KeysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to aggregate.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keys
    **/
    _count?: true | KeysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeysMaxAggregateInputType
  }

  export type GetKeysAggregateType<T extends KeysAggregateArgs> = {
        [P in keyof T & keyof AggregateKeys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeys[P]>
      : GetScalarType<T[P], AggregateKeys[P]>
  }




  export type KeysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeysWhereInput
    orderBy?: KeysOrderByWithAggregationInput | KeysOrderByWithAggregationInput[]
    by: KeysScalarFieldEnum[] | KeysScalarFieldEnum
    having?: KeysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeysCountAggregateInputType | true
    _min?: KeysMinAggregateInputType
    _max?: KeysMaxAggregateInputType
  }

  export type KeysGroupByOutputType = {
    id: string
    apiKey: string
    authorId: string
    type: $Enums.TYPE
    createdAt: Date
    updatedAt: Date
    _count: KeysCountAggregateOutputType | null
    _min: KeysMinAggregateOutputType | null
    _max: KeysMaxAggregateOutputType | null
  }

  type GetKeysGroupByPayload<T extends KeysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeysGroupByOutputType[P]>
            : GetScalarType<T[P], KeysGroupByOutputType[P]>
        }
      >
    >


  export type KeysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKey?: boolean
    authorId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keys"]>

  export type KeysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKey?: boolean
    authorId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keys"]>

  export type KeysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKey?: boolean
    authorId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keys"]>

  export type KeysSelectScalar = {
    id?: boolean
    apiKey?: boolean
    authorId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KeysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKey" | "authorId" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["keys"]>
  export type KeysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type KeysIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type KeysIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $KeysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keys"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKey: string
      authorId: string
      type: $Enums.TYPE
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["keys"]>
    composites: {}
  }

  type KeysGetPayload<S extends boolean | null | undefined | KeysDefaultArgs> = $Result.GetResult<Prisma.$KeysPayload, S>

  type KeysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeysCountAggregateInputType | true
    }

  export interface KeysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keys'], meta: { name: 'Keys' } }
    /**
     * Find zero or one Keys that matches the filter.
     * @param {KeysFindUniqueArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeysFindUniqueArgs>(args: SelectSubset<T, KeysFindUniqueArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeysFindUniqueOrThrowArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeysFindUniqueOrThrowArgs>(args: SelectSubset<T, KeysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysFindFirstArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeysFindFirstArgs>(args?: SelectSubset<T, KeysFindFirstArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysFindFirstOrThrowArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeysFindFirstOrThrowArgs>(args?: SelectSubset<T, KeysFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keys
     * const keys = await prisma.keys.findMany()
     * 
     * // Get first 10 Keys
     * const keys = await prisma.keys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keysWithIdOnly = await prisma.keys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeysFindManyArgs>(args?: SelectSubset<T, KeysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keys.
     * @param {KeysCreateArgs} args - Arguments to create a Keys.
     * @example
     * // Create one Keys
     * const Keys = await prisma.keys.create({
     *   data: {
     *     // ... data to create a Keys
     *   }
     * })
     * 
     */
    create<T extends KeysCreateArgs>(args: SelectSubset<T, KeysCreateArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keys.
     * @param {KeysCreateManyArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const keys = await prisma.keys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeysCreateManyArgs>(args?: SelectSubset<T, KeysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keys and returns the data saved in the database.
     * @param {KeysCreateManyAndReturnArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const keys = await prisma.keys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keys and only return the `id`
     * const keysWithIdOnly = await prisma.keys.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeysCreateManyAndReturnArgs>(args?: SelectSubset<T, KeysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keys.
     * @param {KeysDeleteArgs} args - Arguments to delete one Keys.
     * @example
     * // Delete one Keys
     * const Keys = await prisma.keys.delete({
     *   where: {
     *     // ... filter to delete one Keys
     *   }
     * })
     * 
     */
    delete<T extends KeysDeleteArgs>(args: SelectSubset<T, KeysDeleteArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keys.
     * @param {KeysUpdateArgs} args - Arguments to update one Keys.
     * @example
     * // Update one Keys
     * const keys = await prisma.keys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeysUpdateArgs>(args: SelectSubset<T, KeysUpdateArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keys.
     * @param {KeysDeleteManyArgs} args - Arguments to filter Keys to delete.
     * @example
     * // Delete a few Keys
     * const { count } = await prisma.keys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeysDeleteManyArgs>(args?: SelectSubset<T, KeysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keys
     * const keys = await prisma.keys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeysUpdateManyArgs>(args: SelectSubset<T, KeysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys and returns the data updated in the database.
     * @param {KeysUpdateManyAndReturnArgs} args - Arguments to update many Keys.
     * @example
     * // Update many Keys
     * const keys = await prisma.keys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keys and only return the `id`
     * const keysWithIdOnly = await prisma.keys.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeysUpdateManyAndReturnArgs>(args: SelectSubset<T, KeysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keys.
     * @param {KeysUpsertArgs} args - Arguments to update or create a Keys.
     * @example
     * // Update or create a Keys
     * const keys = await prisma.keys.upsert({
     *   create: {
     *     // ... data to create a Keys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keys we want to update
     *   }
     * })
     */
    upsert<T extends KeysUpsertArgs>(args: SelectSubset<T, KeysUpsertArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysCountArgs} args - Arguments to filter Keys to count.
     * @example
     * // Count the number of Keys
     * const count = await prisma.keys.count({
     *   where: {
     *     // ... the filter for the Keys we want to count
     *   }
     * })
    **/
    count<T extends KeysCountArgs>(
      args?: Subset<T, KeysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeysAggregateArgs>(args: Subset<T, KeysAggregateArgs>): Prisma.PrismaPromise<GetKeysAggregateType<T>>

    /**
     * Group by Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysGroupByArgs} args - Group by arguments.
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
      T extends KeysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeysGroupByArgs['orderBy'] }
        : { orderBy?: KeysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keys model
   */
  readonly fields: KeysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Keys model
   */
  interface KeysFieldRefs {
    readonly id: FieldRef<"Keys", 'String'>
    readonly apiKey: FieldRef<"Keys", 'String'>
    readonly authorId: FieldRef<"Keys", 'String'>
    readonly type: FieldRef<"Keys", 'TYPE'>
    readonly createdAt: FieldRef<"Keys", 'DateTime'>
    readonly updatedAt: FieldRef<"Keys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Keys findUnique
   */
  export type KeysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys findUniqueOrThrow
   */
  export type KeysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys findFirst
   */
  export type KeysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Keys findFirstOrThrow
   */
  export type KeysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Keys findMany
   */
  export type KeysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keys.
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Keys create
   */
  export type KeysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * The data needed to create a Keys.
     */
    data: XOR<KeysCreateInput, KeysUncheckedCreateInput>
  }

  /**
   * Keys createMany
   */
  export type KeysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keys.
     */
    data: KeysCreateManyInput | KeysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keys createManyAndReturn
   */
  export type KeysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The data used to create many Keys.
     */
    data: KeysCreateManyInput | KeysCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keys update
   */
  export type KeysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * The data needed to update a Keys.
     */
    data: XOR<KeysUpdateInput, KeysUncheckedUpdateInput>
    /**
     * Choose, which Keys to update.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys updateMany
   */
  export type KeysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keys.
     */
    data: XOR<KeysUpdateManyMutationInput, KeysUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeysWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Keys updateManyAndReturn
   */
  export type KeysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The data used to update Keys.
     */
    data: XOR<KeysUpdateManyMutationInput, KeysUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeysWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keys upsert
   */
  export type KeysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * The filter to search for the Keys to update in case it exists.
     */
    where: KeysWhereUniqueInput
    /**
     * In case the Keys found by the `where` argument doesn't exist, create a new Keys with this data.
     */
    create: XOR<KeysCreateInput, KeysUncheckedCreateInput>
    /**
     * In case the Keys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeysUpdateInput, KeysUncheckedUpdateInput>
  }

  /**
   * Keys delete
   */
  export type KeysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
    /**
     * Filter which Keys to delete.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys deleteMany
   */
  export type KeysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to delete
     */
    where?: KeysWhereInput
    /**
     * Limit how many Keys to delete.
     */
    limit?: number
  }

  /**
   * Keys without action
   */
  export type KeysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeysInclude<ExtArgs> | null
  }


  /**
   * Model Transformations
   */

  export type AggregateTransformations = {
    _count: TransformationsCountAggregateOutputType | null
    _min: TransformationsMinAggregateOutputType | null
    _max: TransformationsMaxAggregateOutputType | null
  }

  export type TransformationsMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    content: string | null
    input: string | null
    createdAt: Date | null
    updatedAt: Date | null
    modelName: string | null
    modelId: string | null
  }

  export type TransformationsMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    content: string | null
    input: string | null
    createdAt: Date | null
    updatedAt: Date | null
    modelName: string | null
    modelId: string | null
  }

  export type TransformationsCountAggregateOutputType = {
    id: number
    authorId: number
    content: number
    input: number
    createdAt: number
    updatedAt: number
    tags: number
    modelName: number
    modelId: number
    _all: number
  }


  export type TransformationsMinAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    input?: true
    createdAt?: true
    updatedAt?: true
    modelName?: true
    modelId?: true
  }

  export type TransformationsMaxAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    input?: true
    createdAt?: true
    updatedAt?: true
    modelName?: true
    modelId?: true
  }

  export type TransformationsCountAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    input?: true
    createdAt?: true
    updatedAt?: true
    tags?: true
    modelName?: true
    modelId?: true
    _all?: true
  }

  export type TransformationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transformations to aggregate.
     */
    where?: TransformationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformations to fetch.
     */
    orderBy?: TransformationsOrderByWithRelationInput | TransformationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransformationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transformations
    **/
    _count?: true | TransformationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransformationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransformationsMaxAggregateInputType
  }

  export type GetTransformationsAggregateType<T extends TransformationsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransformations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransformations[P]>
      : GetScalarType<T[P], AggregateTransformations[P]>
  }




  export type TransformationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransformationsWhereInput
    orderBy?: TransformationsOrderByWithAggregationInput | TransformationsOrderByWithAggregationInput[]
    by: TransformationsScalarFieldEnum[] | TransformationsScalarFieldEnum
    having?: TransformationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransformationsCountAggregateInputType | true
    _min?: TransformationsMinAggregateInputType
    _max?: TransformationsMaxAggregateInputType
  }

  export type TransformationsGroupByOutputType = {
    id: string
    authorId: string
    content: string
    input: string
    createdAt: Date
    updatedAt: Date
    tags: string[]
    modelName: string
    modelId: string
    _count: TransformationsCountAggregateOutputType | null
    _min: TransformationsMinAggregateOutputType | null
    _max: TransformationsMaxAggregateOutputType | null
  }

  type GetTransformationsGroupByPayload<T extends TransformationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransformationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransformationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransformationsGroupByOutputType[P]>
            : GetScalarType<T[P], TransformationsGroupByOutputType[P]>
        }
      >
    >


  export type TransformationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    input?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean
    modelName?: boolean
    modelId?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transformations"]>

  export type TransformationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    input?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean
    modelName?: boolean
    modelId?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transformations"]>

  export type TransformationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    input?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean
    modelName?: boolean
    modelId?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transformations"]>

  export type TransformationsSelectScalar = {
    id?: boolean
    authorId?: boolean
    content?: boolean
    input?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean
    modelName?: boolean
    modelId?: boolean
  }

  export type TransformationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "content" | "input" | "createdAt" | "updatedAt" | "tags" | "modelName" | "modelId", ExtArgs["result"]["transformations"]>
  export type TransformationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }
  export type TransformationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }
  export type TransformationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }

  export type $TransformationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transformations"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
      model: Prisma.$ModelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      content: string
      input: string
      createdAt: Date
      updatedAt: Date
      tags: string[]
      modelName: string
      modelId: string
    }, ExtArgs["result"]["transformations"]>
    composites: {}
  }

  type TransformationsGetPayload<S extends boolean | null | undefined | TransformationsDefaultArgs> = $Result.GetResult<Prisma.$TransformationsPayload, S>

  type TransformationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransformationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransformationsCountAggregateInputType | true
    }

  export interface TransformationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transformations'], meta: { name: 'Transformations' } }
    /**
     * Find zero or one Transformations that matches the filter.
     * @param {TransformationsFindUniqueArgs} args - Arguments to find a Transformations
     * @example
     * // Get one Transformations
     * const transformations = await prisma.transformations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransformationsFindUniqueArgs>(args: SelectSubset<T, TransformationsFindUniqueArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transformations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransformationsFindUniqueOrThrowArgs} args - Arguments to find a Transformations
     * @example
     * // Get one Transformations
     * const transformations = await prisma.transformations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransformationsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransformationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsFindFirstArgs} args - Arguments to find a Transformations
     * @example
     * // Get one Transformations
     * const transformations = await prisma.transformations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransformationsFindFirstArgs>(args?: SelectSubset<T, TransformationsFindFirstArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transformations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsFindFirstOrThrowArgs} args - Arguments to find a Transformations
     * @example
     * // Get one Transformations
     * const transformations = await prisma.transformations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransformationsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransformationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transformations
     * const transformations = await prisma.transformations.findMany()
     * 
     * // Get first 10 Transformations
     * const transformations = await prisma.transformations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transformationsWithIdOnly = await prisma.transformations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransformationsFindManyArgs>(args?: SelectSubset<T, TransformationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transformations.
     * @param {TransformationsCreateArgs} args - Arguments to create a Transformations.
     * @example
     * // Create one Transformations
     * const Transformations = await prisma.transformations.create({
     *   data: {
     *     // ... data to create a Transformations
     *   }
     * })
     * 
     */
    create<T extends TransformationsCreateArgs>(args: SelectSubset<T, TransformationsCreateArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transformations.
     * @param {TransformationsCreateManyArgs} args - Arguments to create many Transformations.
     * @example
     * // Create many Transformations
     * const transformations = await prisma.transformations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransformationsCreateManyArgs>(args?: SelectSubset<T, TransformationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transformations and returns the data saved in the database.
     * @param {TransformationsCreateManyAndReturnArgs} args - Arguments to create many Transformations.
     * @example
     * // Create many Transformations
     * const transformations = await prisma.transformations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transformations and only return the `id`
     * const transformationsWithIdOnly = await prisma.transformations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransformationsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransformationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transformations.
     * @param {TransformationsDeleteArgs} args - Arguments to delete one Transformations.
     * @example
     * // Delete one Transformations
     * const Transformations = await prisma.transformations.delete({
     *   where: {
     *     // ... filter to delete one Transformations
     *   }
     * })
     * 
     */
    delete<T extends TransformationsDeleteArgs>(args: SelectSubset<T, TransformationsDeleteArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transformations.
     * @param {TransformationsUpdateArgs} args - Arguments to update one Transformations.
     * @example
     * // Update one Transformations
     * const transformations = await prisma.transformations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransformationsUpdateArgs>(args: SelectSubset<T, TransformationsUpdateArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transformations.
     * @param {TransformationsDeleteManyArgs} args - Arguments to filter Transformations to delete.
     * @example
     * // Delete a few Transformations
     * const { count } = await prisma.transformations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransformationsDeleteManyArgs>(args?: SelectSubset<T, TransformationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transformations
     * const transformations = await prisma.transformations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransformationsUpdateManyArgs>(args: SelectSubset<T, TransformationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transformations and returns the data updated in the database.
     * @param {TransformationsUpdateManyAndReturnArgs} args - Arguments to update many Transformations.
     * @example
     * // Update many Transformations
     * const transformations = await prisma.transformations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transformations and only return the `id`
     * const transformationsWithIdOnly = await prisma.transformations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransformationsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransformationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transformations.
     * @param {TransformationsUpsertArgs} args - Arguments to update or create a Transformations.
     * @example
     * // Update or create a Transformations
     * const transformations = await prisma.transformations.upsert({
     *   create: {
     *     // ... data to create a Transformations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transformations we want to update
     *   }
     * })
     */
    upsert<T extends TransformationsUpsertArgs>(args: SelectSubset<T, TransformationsUpsertArgs<ExtArgs>>): Prisma__TransformationsClient<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsCountArgs} args - Arguments to filter Transformations to count.
     * @example
     * // Count the number of Transformations
     * const count = await prisma.transformations.count({
     *   where: {
     *     // ... the filter for the Transformations we want to count
     *   }
     * })
    **/
    count<T extends TransformationsCountArgs>(
      args?: Subset<T, TransformationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransformationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransformationsAggregateArgs>(args: Subset<T, TransformationsAggregateArgs>): Prisma.PrismaPromise<GetTransformationsAggregateType<T>>

    /**
     * Group by Transformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformationsGroupByArgs} args - Group by arguments.
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
      T extends TransformationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransformationsGroupByArgs['orderBy'] }
        : { orderBy?: TransformationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransformationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransformationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transformations model
   */
  readonly fields: TransformationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transformations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransformationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends ModelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelsDefaultArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transformations model
   */
  interface TransformationsFieldRefs {
    readonly id: FieldRef<"Transformations", 'String'>
    readonly authorId: FieldRef<"Transformations", 'String'>
    readonly content: FieldRef<"Transformations", 'String'>
    readonly input: FieldRef<"Transformations", 'String'>
    readonly createdAt: FieldRef<"Transformations", 'DateTime'>
    readonly updatedAt: FieldRef<"Transformations", 'DateTime'>
    readonly tags: FieldRef<"Transformations", 'String[]'>
    readonly modelName: FieldRef<"Transformations", 'String'>
    readonly modelId: FieldRef<"Transformations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transformations findUnique
   */
  export type TransformationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * Filter, which Transformations to fetch.
     */
    where: TransformationsWhereUniqueInput
  }

  /**
   * Transformations findUniqueOrThrow
   */
  export type TransformationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * Filter, which Transformations to fetch.
     */
    where: TransformationsWhereUniqueInput
  }

  /**
   * Transformations findFirst
   */
  export type TransformationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * Filter, which Transformations to fetch.
     */
    where?: TransformationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformations to fetch.
     */
    orderBy?: TransformationsOrderByWithRelationInput | TransformationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transformations.
     */
    cursor?: TransformationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transformations.
     */
    distinct?: TransformationsScalarFieldEnum | TransformationsScalarFieldEnum[]
  }

  /**
   * Transformations findFirstOrThrow
   */
  export type TransformationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * Filter, which Transformations to fetch.
     */
    where?: TransformationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformations to fetch.
     */
    orderBy?: TransformationsOrderByWithRelationInput | TransformationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transformations.
     */
    cursor?: TransformationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transformations.
     */
    distinct?: TransformationsScalarFieldEnum | TransformationsScalarFieldEnum[]
  }

  /**
   * Transformations findMany
   */
  export type TransformationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * Filter, which Transformations to fetch.
     */
    where?: TransformationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformations to fetch.
     */
    orderBy?: TransformationsOrderByWithRelationInput | TransformationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transformations.
     */
    cursor?: TransformationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformations.
     */
    skip?: number
    distinct?: TransformationsScalarFieldEnum | TransformationsScalarFieldEnum[]
  }

  /**
   * Transformations create
   */
  export type TransformationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transformations.
     */
    data: XOR<TransformationsCreateInput, TransformationsUncheckedCreateInput>
  }

  /**
   * Transformations createMany
   */
  export type TransformationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transformations.
     */
    data: TransformationsCreateManyInput | TransformationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transformations createManyAndReturn
   */
  export type TransformationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * The data used to create many Transformations.
     */
    data: TransformationsCreateManyInput | TransformationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transformations update
   */
  export type TransformationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transformations.
     */
    data: XOR<TransformationsUpdateInput, TransformationsUncheckedUpdateInput>
    /**
     * Choose, which Transformations to update.
     */
    where: TransformationsWhereUniqueInput
  }

  /**
   * Transformations updateMany
   */
  export type TransformationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transformations.
     */
    data: XOR<TransformationsUpdateManyMutationInput, TransformationsUncheckedUpdateManyInput>
    /**
     * Filter which Transformations to update
     */
    where?: TransformationsWhereInput
    /**
     * Limit how many Transformations to update.
     */
    limit?: number
  }

  /**
   * Transformations updateManyAndReturn
   */
  export type TransformationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * The data used to update Transformations.
     */
    data: XOR<TransformationsUpdateManyMutationInput, TransformationsUncheckedUpdateManyInput>
    /**
     * Filter which Transformations to update
     */
    where?: TransformationsWhereInput
    /**
     * Limit how many Transformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transformations upsert
   */
  export type TransformationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transformations to update in case it exists.
     */
    where: TransformationsWhereUniqueInput
    /**
     * In case the Transformations found by the `where` argument doesn't exist, create a new Transformations with this data.
     */
    create: XOR<TransformationsCreateInput, TransformationsUncheckedCreateInput>
    /**
     * In case the Transformations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransformationsUpdateInput, TransformationsUncheckedUpdateInput>
  }

  /**
   * Transformations delete
   */
  export type TransformationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    /**
     * Filter which Transformations to delete.
     */
    where: TransformationsWhereUniqueInput
  }

  /**
   * Transformations deleteMany
   */
  export type TransformationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transformations to delete
     */
    where?: TransformationsWhereInput
    /**
     * Limit how many Transformations to delete.
     */
    limit?: number
  }

  /**
   * Transformations without action
   */
  export type TransformationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
  }


  /**
   * Model Models
   */

  export type AggregateModels = {
    _count: ModelsCountAggregateOutputType | null
    _avg: ModelsAvgAggregateOutputType | null
    _sum: ModelsSumAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  export type ModelsAvgAggregateOutputType = {
    speed: number | null
    accuracy: number | null
  }

  export type ModelsSumAggregateOutputType = {
    speed: number | null
    accuracy: number | null
  }

  export type ModelsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    performance: $Enums.PERFORMANCE | null
    type: $Enums.TYPE | null
    pro: boolean | null
    speed: number | null
    accuracy: number | null
  }

  export type ModelsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    performance: $Enums.PERFORMANCE | null
    type: $Enums.TYPE | null
    pro: boolean | null
    speed: number | null
    accuracy: number | null
  }

  export type ModelsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    performance: number
    type: number
    pro: number
    speed: number
    accuracy: number
    _all: number
  }


  export type ModelsAvgAggregateInputType = {
    speed?: true
    accuracy?: true
  }

  export type ModelsSumAggregateInputType = {
    speed?: true
    accuracy?: true
  }

  export type ModelsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    performance?: true
    type?: true
    pro?: true
    speed?: true
    accuracy?: true
  }

  export type ModelsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    performance?: true
    type?: true
    pro?: true
    speed?: true
    accuracy?: true
  }

  export type ModelsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    performance?: true
    type?: true
    pro?: true
    speed?: true
    accuracy?: true
    _all?: true
  }

  export type ModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to aggregate.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelsMaxAggregateInputType
  }

  export type GetModelsAggregateType<T extends ModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModels[P]>
      : GetScalarType<T[P], AggregateModels[P]>
  }




  export type ModelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelsWhereInput
    orderBy?: ModelsOrderByWithAggregationInput | ModelsOrderByWithAggregationInput[]
    by: ModelsScalarFieldEnum[] | ModelsScalarFieldEnum
    having?: ModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelsCountAggregateInputType | true
    _avg?: ModelsAvgAggregateInputType
    _sum?: ModelsSumAggregateInputType
    _min?: ModelsMinAggregateInputType
    _max?: ModelsMaxAggregateInputType
  }

  export type ModelsGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    performance: $Enums.PERFORMANCE
    type: $Enums.TYPE
    pro: boolean
    speed: number
    accuracy: number
    _count: ModelsCountAggregateOutputType | null
    _avg: ModelsAvgAggregateOutputType | null
    _sum: ModelsSumAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  type GetModelsGroupByPayload<T extends ModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelsGroupByOutputType[P]>
            : GetScalarType<T[P], ModelsGroupByOutputType[P]>
        }
      >
    >


  export type ModelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    performance?: boolean
    type?: boolean
    pro?: boolean
    speed?: boolean
    accuracy?: boolean
    transformations?: boolean | Models$transformationsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    performance?: boolean
    type?: boolean
    pro?: boolean
    speed?: boolean
    accuracy?: boolean
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    performance?: boolean
    type?: boolean
    pro?: boolean
    speed?: boolean
    accuracy?: boolean
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    performance?: boolean
    type?: boolean
    pro?: boolean
    speed?: boolean
    accuracy?: boolean
  }

  export type ModelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "performance" | "type" | "pro" | "speed" | "accuracy", ExtArgs["result"]["models"]>
  export type ModelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transformations?: boolean | Models$transformationsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Models"
    objects: {
      transformations: Prisma.$TransformationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      performance: $Enums.PERFORMANCE
      type: $Enums.TYPE
      pro: boolean
      speed: number
      accuracy: number
    }, ExtArgs["result"]["models"]>
    composites: {}
  }

  type ModelsGetPayload<S extends boolean | null | undefined | ModelsDefaultArgs> = $Result.GetResult<Prisma.$ModelsPayload, S>

  type ModelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelsCountAggregateInputType | true
    }

  export interface ModelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Models'], meta: { name: 'Models' } }
    /**
     * Find zero or one Models that matches the filter.
     * @param {ModelsFindUniqueArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelsFindUniqueArgs>(args: SelectSubset<T, ModelsFindUniqueArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Models that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelsFindUniqueOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelsFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelsFindFirstArgs>(args?: SelectSubset<T, ModelsFindFirstArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelsFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.models.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.models.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelsWithIdOnly = await prisma.models.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelsFindManyArgs>(args?: SelectSubset<T, ModelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Models.
     * @param {ModelsCreateArgs} args - Arguments to create a Models.
     * @example
     * // Create one Models
     * const Models = await prisma.models.create({
     *   data: {
     *     // ... data to create a Models
     *   }
     * })
     * 
     */
    create<T extends ModelsCreateArgs>(args: SelectSubset<T, ModelsCreateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelsCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelsCreateManyArgs>(args?: SelectSubset<T, ModelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelsCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelsCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Models.
     * @param {ModelsDeleteArgs} args - Arguments to delete one Models.
     * @example
     * // Delete one Models
     * const Models = await prisma.models.delete({
     *   where: {
     *     // ... filter to delete one Models
     *   }
     * })
     * 
     */
    delete<T extends ModelsDeleteArgs>(args: SelectSubset<T, ModelsDeleteArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Models.
     * @param {ModelsUpdateArgs} args - Arguments to update one Models.
     * @example
     * // Update one Models
     * const models = await prisma.models.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelsUpdateArgs>(args: SelectSubset<T, ModelsUpdateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelsDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.models.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelsDeleteManyArgs>(args?: SelectSubset<T, ModelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelsUpdateManyArgs>(args: SelectSubset<T, ModelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelsUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelsUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Models.
     * @param {ModelsUpsertArgs} args - Arguments to update or create a Models.
     * @example
     * // Update or create a Models
     * const models = await prisma.models.upsert({
     *   create: {
     *     // ... data to create a Models
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Models we want to update
     *   }
     * })
     */
    upsert<T extends ModelsUpsertArgs>(args: SelectSubset<T, ModelsUpsertArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.models.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelsCountArgs>(
      args?: Subset<T, ModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelsAggregateArgs>(args: Subset<T, ModelsAggregateArgs>): Prisma.PrismaPromise<GetModelsAggregateType<T>>

    /**
     * Group by Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsGroupByArgs} args - Group by arguments.
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
      T extends ModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelsGroupByArgs['orderBy'] }
        : { orderBy?: ModelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Models model
   */
  readonly fields: ModelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Models.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transformations<T extends Models$transformationsArgs<ExtArgs> = {}>(args?: Subset<T, Models$transformationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Models model
   */
  interface ModelsFieldRefs {
    readonly id: FieldRef<"Models", 'String'>
    readonly name: FieldRef<"Models", 'String'>
    readonly createdAt: FieldRef<"Models", 'DateTime'>
    readonly updatedAt: FieldRef<"Models", 'DateTime'>
    readonly performance: FieldRef<"Models", 'PERFORMANCE'>
    readonly type: FieldRef<"Models", 'TYPE'>
    readonly pro: FieldRef<"Models", 'Boolean'>
    readonly speed: FieldRef<"Models", 'Float'>
    readonly accuracy: FieldRef<"Models", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Models findUnique
   */
  export type ModelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findUniqueOrThrow
   */
  export type ModelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findFirst
   */
  export type ModelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findFirstOrThrow
   */
  export type ModelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findMany
   */
  export type ModelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models create
   */
  export type ModelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Models.
     */
    data: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
  }

  /**
   * Models createMany
   */
  export type ModelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models createManyAndReturn
   */
  export type ModelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models update
   */
  export type ModelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Models.
     */
    data: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
    /**
     * Choose, which Models to update.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models updateMany
   */
  export type ModelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models updateManyAndReturn
   */
  export type ModelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models upsert
   */
  export type ModelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Models to update in case it exists.
     */
    where: ModelsWhereUniqueInput
    /**
     * In case the Models found by the `where` argument doesn't exist, create a new Models with this data.
     */
    create: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
    /**
     * In case the Models was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
  }

  /**
   * Models delete
   */
  export type ModelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter which Models to delete.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models deleteMany
   */
  export type ModelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Models.transformations
   */
  export type Models$transformationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformations
     */
    select?: TransformationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transformations
     */
    omit?: TransformationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformationsInclude<ExtArgs> | null
    where?: TransformationsWhereInput
    orderBy?: TransformationsOrderByWithRelationInput | TransformationsOrderByWithRelationInput[]
    cursor?: TransformationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransformationsScalarFieldEnum | TransformationsScalarFieldEnum[]
  }

  /**
   * Models without action
   */
  export type ModelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    fullName: 'fullName',
    clerkId: 'clerkId',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    prompt: 'prompt',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const KeysScalarFieldEnum: {
    id: 'id',
    apiKey: 'apiKey',
    authorId: 'authorId',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KeysScalarFieldEnum = (typeof KeysScalarFieldEnum)[keyof typeof KeysScalarFieldEnum]


  export const TransformationsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    content: 'content',
    input: 'input',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tags: 'tags',
    modelName: 'modelName',
    modelId: 'modelId'
  };

  export type TransformationsScalarFieldEnum = (typeof TransformationsScalarFieldEnum)[keyof typeof TransformationsScalarFieldEnum]


  export const ModelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    performance: 'performance',
    type: 'type',
    pro: 'pro',
    speed: 'speed',
    accuracy: 'accuracy'
  };

  export type ModelsScalarFieldEnum = (typeof ModelsScalarFieldEnum)[keyof typeof ModelsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'TYPE'
   */
  export type EnumTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TYPE'>
    


  /**
   * Reference to a field of type 'TYPE[]'
   */
  export type ListEnumTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TYPE[]'>
    


  /**
   * Reference to a field of type 'PERFORMANCE'
   */
  export type EnumPERFORMANCEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PERFORMANCE'>
    


  /**
   * Reference to a field of type 'PERFORMANCE[]'
   */
  export type ListEnumPERFORMANCEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PERFORMANCE[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: UuidFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    clerkId?: StringFilter<"Users"> | string
    avatar?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    role?: EnumROLEFilter<"Users"> | $Enums.ROLE
    transformations?: TransformationsListRelationFilter
    apiKeys?: KeysListRelationFilter
    Tags?: TagsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    clerkId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    transformations?: TransformationsOrderByRelationAggregateInput
    apiKeys?: KeysOrderByRelationAggregateInput
    Tags?: TagsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    clerkId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringFilter<"Users"> | string
    avatar?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    role?: EnumROLEFilter<"Users"> | $Enums.ROLE
    transformations?: TransformationsListRelationFilter
    apiKeys?: KeysListRelationFilter
    Tags?: TagsListRelationFilter
  }, "id" | "username" | "email" | "clerkId">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    clerkId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    clerkId?: StringWithAggregatesFilter<"Users"> | string
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    role?: EnumROLEWithAggregatesFilter<"Users"> | $Enums.ROLE
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: UuidFilter<"Tags"> | string
    name?: StringFilter<"Tags"> | string
    prompt?: StringFilter<"Tags"> | string
    authorId?: UuidFilter<"Tags"> | string
    createdAt?: DateTimeFilter<"Tags"> | Date | string
    updatedAt?: DateTimeFilter<"Tags"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UsersOrderByWithRelationInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    name?: StringFilter<"Tags"> | string
    prompt?: StringFilter<"Tags"> | string
    authorId?: UuidFilter<"Tags"> | string
    createdAt?: DateTimeFilter<"Tags"> | Date | string
    updatedAt?: DateTimeFilter<"Tags"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "id">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tags"> | string
    name?: StringWithAggregatesFilter<"Tags"> | string
    prompt?: StringWithAggregatesFilter<"Tags"> | string
    authorId?: UuidWithAggregatesFilter<"Tags"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tags"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tags"> | Date | string
  }

  export type KeysWhereInput = {
    AND?: KeysWhereInput | KeysWhereInput[]
    OR?: KeysWhereInput[]
    NOT?: KeysWhereInput | KeysWhereInput[]
    id?: UuidFilter<"Keys"> | string
    apiKey?: StringFilter<"Keys"> | string
    authorId?: UuidFilter<"Keys"> | string
    type?: EnumTYPEFilter<"Keys"> | $Enums.TYPE
    createdAt?: DateTimeFilter<"Keys"> | Date | string
    updatedAt?: DateTimeFilter<"Keys"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type KeysOrderByWithRelationInput = {
    id?: SortOrder
    apiKey?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UsersOrderByWithRelationInput
  }

  export type KeysWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiKey?: string
    AND?: KeysWhereInput | KeysWhereInput[]
    OR?: KeysWhereInput[]
    NOT?: KeysWhereInput | KeysWhereInput[]
    authorId?: UuidFilter<"Keys"> | string
    type?: EnumTYPEFilter<"Keys"> | $Enums.TYPE
    createdAt?: DateTimeFilter<"Keys"> | Date | string
    updatedAt?: DateTimeFilter<"Keys"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "id" | "apiKey">

  export type KeysOrderByWithAggregationInput = {
    id?: SortOrder
    apiKey?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KeysCountOrderByAggregateInput
    _max?: KeysMaxOrderByAggregateInput
    _min?: KeysMinOrderByAggregateInput
  }

  export type KeysScalarWhereWithAggregatesInput = {
    AND?: KeysScalarWhereWithAggregatesInput | KeysScalarWhereWithAggregatesInput[]
    OR?: KeysScalarWhereWithAggregatesInput[]
    NOT?: KeysScalarWhereWithAggregatesInput | KeysScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Keys"> | string
    apiKey?: StringWithAggregatesFilter<"Keys"> | string
    authorId?: UuidWithAggregatesFilter<"Keys"> | string
    type?: EnumTYPEWithAggregatesFilter<"Keys"> | $Enums.TYPE
    createdAt?: DateTimeWithAggregatesFilter<"Keys"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Keys"> | Date | string
  }

  export type TransformationsWhereInput = {
    AND?: TransformationsWhereInput | TransformationsWhereInput[]
    OR?: TransformationsWhereInput[]
    NOT?: TransformationsWhereInput | TransformationsWhereInput[]
    id?: UuidFilter<"Transformations"> | string
    authorId?: UuidFilter<"Transformations"> | string
    content?: StringFilter<"Transformations"> | string
    input?: StringFilter<"Transformations"> | string
    createdAt?: DateTimeFilter<"Transformations"> | Date | string
    updatedAt?: DateTimeFilter<"Transformations"> | Date | string
    tags?: StringNullableListFilter<"Transformations">
    modelName?: StringFilter<"Transformations"> | string
    modelId?: UuidFilter<"Transformations"> | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
  }

  export type TransformationsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    input?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: SortOrder
    modelName?: SortOrder
    modelId?: SortOrder
    author?: UsersOrderByWithRelationInput
    model?: ModelsOrderByWithRelationInput
  }

  export type TransformationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransformationsWhereInput | TransformationsWhereInput[]
    OR?: TransformationsWhereInput[]
    NOT?: TransformationsWhereInput | TransformationsWhereInput[]
    authorId?: UuidFilter<"Transformations"> | string
    content?: StringFilter<"Transformations"> | string
    input?: StringFilter<"Transformations"> | string
    createdAt?: DateTimeFilter<"Transformations"> | Date | string
    updatedAt?: DateTimeFilter<"Transformations"> | Date | string
    tags?: StringNullableListFilter<"Transformations">
    modelName?: StringFilter<"Transformations"> | string
    modelId?: UuidFilter<"Transformations"> | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
  }, "id">

  export type TransformationsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    input?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: SortOrder
    modelName?: SortOrder
    modelId?: SortOrder
    _count?: TransformationsCountOrderByAggregateInput
    _max?: TransformationsMaxOrderByAggregateInput
    _min?: TransformationsMinOrderByAggregateInput
  }

  export type TransformationsScalarWhereWithAggregatesInput = {
    AND?: TransformationsScalarWhereWithAggregatesInput | TransformationsScalarWhereWithAggregatesInput[]
    OR?: TransformationsScalarWhereWithAggregatesInput[]
    NOT?: TransformationsScalarWhereWithAggregatesInput | TransformationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transformations"> | string
    authorId?: UuidWithAggregatesFilter<"Transformations"> | string
    content?: StringWithAggregatesFilter<"Transformations"> | string
    input?: StringWithAggregatesFilter<"Transformations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transformations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transformations"> | Date | string
    tags?: StringNullableListFilter<"Transformations">
    modelName?: StringWithAggregatesFilter<"Transformations"> | string
    modelId?: UuidWithAggregatesFilter<"Transformations"> | string
  }

  export type ModelsWhereInput = {
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    id?: UuidFilter<"Models"> | string
    name?: StringFilter<"Models"> | string
    createdAt?: DateTimeFilter<"Models"> | Date | string
    updatedAt?: DateTimeFilter<"Models"> | Date | string
    performance?: EnumPERFORMANCEFilter<"Models"> | $Enums.PERFORMANCE
    type?: EnumTYPEFilter<"Models"> | $Enums.TYPE
    pro?: BoolFilter<"Models"> | boolean
    speed?: FloatFilter<"Models"> | number
    accuracy?: FloatFilter<"Models"> | number
    transformations?: TransformationsListRelationFilter
  }

  export type ModelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    performance?: SortOrder
    type?: SortOrder
    pro?: SortOrder
    speed?: SortOrder
    accuracy?: SortOrder
    transformations?: TransformationsOrderByRelationAggregateInput
  }

  export type ModelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    createdAt?: DateTimeFilter<"Models"> | Date | string
    updatedAt?: DateTimeFilter<"Models"> | Date | string
    performance?: EnumPERFORMANCEFilter<"Models"> | $Enums.PERFORMANCE
    type?: EnumTYPEFilter<"Models"> | $Enums.TYPE
    pro?: BoolFilter<"Models"> | boolean
    speed?: FloatFilter<"Models"> | number
    accuracy?: FloatFilter<"Models"> | number
    transformations?: TransformationsListRelationFilter
  }, "id" | "name">

  export type ModelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    performance?: SortOrder
    type?: SortOrder
    pro?: SortOrder
    speed?: SortOrder
    accuracy?: SortOrder
    _count?: ModelsCountOrderByAggregateInput
    _avg?: ModelsAvgOrderByAggregateInput
    _max?: ModelsMaxOrderByAggregateInput
    _min?: ModelsMinOrderByAggregateInput
    _sum?: ModelsSumOrderByAggregateInput
  }

  export type ModelsScalarWhereWithAggregatesInput = {
    AND?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    OR?: ModelsScalarWhereWithAggregatesInput[]
    NOT?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Models"> | string
    name?: StringWithAggregatesFilter<"Models"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Models"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Models"> | Date | string
    performance?: EnumPERFORMANCEWithAggregatesFilter<"Models"> | $Enums.PERFORMANCE
    type?: EnumTYPEWithAggregatesFilter<"Models"> | $Enums.TYPE
    pro?: BoolWithAggregatesFilter<"Models"> | boolean
    speed?: FloatWithAggregatesFilter<"Models"> | number
    accuracy?: FloatWithAggregatesFilter<"Models"> | number
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    transformations?: TransformationsCreateNestedManyWithoutAuthorInput
    apiKeys?: KeysCreateNestedManyWithoutAuthorInput
    Tags?: TagsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    transformations?: TransformationsUncheckedCreateNestedManyWithoutAuthorInput
    apiKeys?: KeysUncheckedCreateNestedManyWithoutAuthorInput
    Tags?: TagsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    transformations?: TransformationsUpdateManyWithoutAuthorNestedInput
    apiKeys?: KeysUpdateManyWithoutAuthorNestedInput
    Tags?: TagsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    transformations?: TransformationsUncheckedUpdateManyWithoutAuthorNestedInput
    apiKeys?: KeysUncheckedUpdateManyWithoutAuthorNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
  }

  export type TagsCreateInput = {
    id?: string
    name: string
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UsersCreateNestedOneWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: string
    name: string
    prompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsCreateManyInput = {
    id?: string
    name: string
    prompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeysCreateInput = {
    id?: string
    apiKey: string
    type: $Enums.TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UsersCreateNestedOneWithoutApiKeysInput
  }

  export type KeysUncheckedCreateInput = {
    id?: string
    apiKey: string
    authorId: string
    type: $Enums.TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type KeysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeysCreateManyInput = {
    id?: string
    apiKey: string
    authorId: string
    type: $Enums.TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransformationsCreateInput = {
    id?: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    author: UsersCreateNestedOneWithoutTransformationsInput
    model: ModelsCreateNestedOneWithoutTransformationsInput
  }

  export type TransformationsUncheckedCreateInput = {
    id?: string
    authorId: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    modelId: string
  }

  export type TransformationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    author?: UsersUpdateOneRequiredWithoutTransformationsNestedInput
    model?: ModelsUpdateOneRequiredWithoutTransformationsNestedInput
  }

  export type TransformationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type TransformationsCreateManyInput = {
    id?: string
    authorId: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    modelId: string
  }

  export type TransformationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
  }

  export type TransformationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type ModelsCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performance: $Enums.PERFORMANCE
    type: $Enums.TYPE
    pro?: boolean
    speed?: number
    accuracy?: number
    transformations?: TransformationsCreateNestedManyWithoutModelInput
  }

  export type ModelsUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performance: $Enums.PERFORMANCE
    type: $Enums.TYPE
    pro?: boolean
    speed?: number
    accuracy?: number
    transformations?: TransformationsUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: EnumPERFORMANCEFieldUpdateOperationsInput | $Enums.PERFORMANCE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    pro?: BoolFieldUpdateOperationsInput | boolean
    speed?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    transformations?: TransformationsUpdateManyWithoutModelNestedInput
  }

  export type ModelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: EnumPERFORMANCEFieldUpdateOperationsInput | $Enums.PERFORMANCE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    pro?: BoolFieldUpdateOperationsInput | boolean
    speed?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    transformations?: TransformationsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelsCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performance: $Enums.PERFORMANCE
    type: $Enums.TYPE
    pro?: boolean
    speed?: number
    accuracy?: number
  }

  export type ModelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: EnumPERFORMANCEFieldUpdateOperationsInput | $Enums.PERFORMANCE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    pro?: BoolFieldUpdateOperationsInput | boolean
    speed?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
  }

  export type ModelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: EnumPERFORMANCEFieldUpdateOperationsInput | $Enums.PERFORMANCE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    pro?: BoolFieldUpdateOperationsInput | boolean
    speed?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type TransformationsListRelationFilter = {
    every?: TransformationsWhereInput
    some?: TransformationsWhereInput
    none?: TransformationsWhereInput
  }

  export type KeysListRelationFilter = {
    every?: KeysWhereInput
    some?: KeysWhereInput
    none?: KeysWhereInput
  }

  export type TagsListRelationFilter = {
    every?: TagsWhereInput
    some?: TagsWhereInput
    none?: TagsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransformationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    clerkId?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    clerkId?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    clerkId?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEFilter<$PrismaModel> | $Enums.TYPE
  }

  export type KeysCountOrderByAggregateInput = {
    id?: SortOrder
    apiKey?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeysMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKey?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeysMinOrderByAggregateInput = {
    id?: SortOrder
    apiKey?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEWithAggregatesFilter<$PrismaModel> | $Enums.TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTYPEFilter<$PrismaModel>
    _max?: NestedEnumTYPEFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ModelsScalarRelationFilter = {
    is?: ModelsWhereInput
    isNot?: ModelsWhereInput
  }

  export type TransformationsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    input?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: SortOrder
    modelName?: SortOrder
    modelId?: SortOrder
  }

  export type TransformationsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    input?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelName?: SortOrder
    modelId?: SortOrder
  }

  export type TransformationsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    input?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelName?: SortOrder
    modelId?: SortOrder
  }

  export type EnumPERFORMANCEFilter<$PrismaModel = never> = {
    equals?: $Enums.PERFORMANCE | EnumPERFORMANCEFieldRefInput<$PrismaModel>
    in?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumPERFORMANCEFilter<$PrismaModel> | $Enums.PERFORMANCE
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ModelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    performance?: SortOrder
    type?: SortOrder
    pro?: SortOrder
    speed?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelsAvgOrderByAggregateInput = {
    speed?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    performance?: SortOrder
    type?: SortOrder
    pro?: SortOrder
    speed?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    performance?: SortOrder
    type?: SortOrder
    pro?: SortOrder
    speed?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelsSumOrderByAggregateInput = {
    speed?: SortOrder
    accuracy?: SortOrder
  }

  export type EnumPERFORMANCEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PERFORMANCE | EnumPERFORMANCEFieldRefInput<$PrismaModel>
    in?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumPERFORMANCEWithAggregatesFilter<$PrismaModel> | $Enums.PERFORMANCE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPERFORMANCEFilter<$PrismaModel>
    _max?: NestedEnumPERFORMANCEFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TransformationsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TransformationsCreateWithoutAuthorInput, TransformationsUncheckedCreateWithoutAuthorInput> | TransformationsCreateWithoutAuthorInput[] | TransformationsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutAuthorInput | TransformationsCreateOrConnectWithoutAuthorInput[]
    createMany?: TransformationsCreateManyAuthorInputEnvelope
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
  }

  export type KeysCreateNestedManyWithoutAuthorInput = {
    create?: XOR<KeysCreateWithoutAuthorInput, KeysUncheckedCreateWithoutAuthorInput> | KeysCreateWithoutAuthorInput[] | KeysUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KeysCreateOrConnectWithoutAuthorInput | KeysCreateOrConnectWithoutAuthorInput[]
    createMany?: KeysCreateManyAuthorInputEnvelope
    connect?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
  }

  export type TagsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TagsCreateWithoutAuthorInput, TagsUncheckedCreateWithoutAuthorInput> | TagsCreateWithoutAuthorInput[] | TagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutAuthorInput | TagsCreateOrConnectWithoutAuthorInput[]
    createMany?: TagsCreateManyAuthorInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type TransformationsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TransformationsCreateWithoutAuthorInput, TransformationsUncheckedCreateWithoutAuthorInput> | TransformationsCreateWithoutAuthorInput[] | TransformationsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutAuthorInput | TransformationsCreateOrConnectWithoutAuthorInput[]
    createMany?: TransformationsCreateManyAuthorInputEnvelope
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
  }

  export type KeysUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<KeysCreateWithoutAuthorInput, KeysUncheckedCreateWithoutAuthorInput> | KeysCreateWithoutAuthorInput[] | KeysUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KeysCreateOrConnectWithoutAuthorInput | KeysCreateOrConnectWithoutAuthorInput[]
    createMany?: KeysCreateManyAuthorInputEnvelope
    connect?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
  }

  export type TagsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TagsCreateWithoutAuthorInput, TagsUncheckedCreateWithoutAuthorInput> | TagsCreateWithoutAuthorInput[] | TagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutAuthorInput | TagsCreateOrConnectWithoutAuthorInput[]
    createMany?: TagsCreateManyAuthorInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type TransformationsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TransformationsCreateWithoutAuthorInput, TransformationsUncheckedCreateWithoutAuthorInput> | TransformationsCreateWithoutAuthorInput[] | TransformationsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutAuthorInput | TransformationsCreateOrConnectWithoutAuthorInput[]
    upsert?: TransformationsUpsertWithWhereUniqueWithoutAuthorInput | TransformationsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TransformationsCreateManyAuthorInputEnvelope
    set?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    disconnect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    delete?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    update?: TransformationsUpdateWithWhereUniqueWithoutAuthorInput | TransformationsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TransformationsUpdateManyWithWhereWithoutAuthorInput | TransformationsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TransformationsScalarWhereInput | TransformationsScalarWhereInput[]
  }

  export type KeysUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<KeysCreateWithoutAuthorInput, KeysUncheckedCreateWithoutAuthorInput> | KeysCreateWithoutAuthorInput[] | KeysUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KeysCreateOrConnectWithoutAuthorInput | KeysCreateOrConnectWithoutAuthorInput[]
    upsert?: KeysUpsertWithWhereUniqueWithoutAuthorInput | KeysUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: KeysCreateManyAuthorInputEnvelope
    set?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    disconnect?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    delete?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    connect?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    update?: KeysUpdateWithWhereUniqueWithoutAuthorInput | KeysUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: KeysUpdateManyWithWhereWithoutAuthorInput | KeysUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: KeysScalarWhereInput | KeysScalarWhereInput[]
  }

  export type TagsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TagsCreateWithoutAuthorInput, TagsUncheckedCreateWithoutAuthorInput> | TagsCreateWithoutAuthorInput[] | TagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutAuthorInput | TagsCreateOrConnectWithoutAuthorInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutAuthorInput | TagsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TagsCreateManyAuthorInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutAuthorInput | TagsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutAuthorInput | TagsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type TransformationsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TransformationsCreateWithoutAuthorInput, TransformationsUncheckedCreateWithoutAuthorInput> | TransformationsCreateWithoutAuthorInput[] | TransformationsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutAuthorInput | TransformationsCreateOrConnectWithoutAuthorInput[]
    upsert?: TransformationsUpsertWithWhereUniqueWithoutAuthorInput | TransformationsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TransformationsCreateManyAuthorInputEnvelope
    set?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    disconnect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    delete?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    update?: TransformationsUpdateWithWhereUniqueWithoutAuthorInput | TransformationsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TransformationsUpdateManyWithWhereWithoutAuthorInput | TransformationsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TransformationsScalarWhereInput | TransformationsScalarWhereInput[]
  }

  export type KeysUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<KeysCreateWithoutAuthorInput, KeysUncheckedCreateWithoutAuthorInput> | KeysCreateWithoutAuthorInput[] | KeysUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KeysCreateOrConnectWithoutAuthorInput | KeysCreateOrConnectWithoutAuthorInput[]
    upsert?: KeysUpsertWithWhereUniqueWithoutAuthorInput | KeysUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: KeysCreateManyAuthorInputEnvelope
    set?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    disconnect?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    delete?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    connect?: KeysWhereUniqueInput | KeysWhereUniqueInput[]
    update?: KeysUpdateWithWhereUniqueWithoutAuthorInput | KeysUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: KeysUpdateManyWithWhereWithoutAuthorInput | KeysUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: KeysScalarWhereInput | KeysScalarWhereInput[]
  }

  export type TagsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TagsCreateWithoutAuthorInput, TagsUncheckedCreateWithoutAuthorInput> | TagsCreateWithoutAuthorInput[] | TagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutAuthorInput | TagsCreateOrConnectWithoutAuthorInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutAuthorInput | TagsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TagsCreateManyAuthorInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutAuthorInput | TagsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutAuthorInput | TagsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTagsInput = {
    create?: XOR<UsersCreateWithoutTagsInput, UsersUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTagsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<UsersCreateWithoutTagsInput, UsersUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTagsInput
    upsert?: UsersUpsertWithoutTagsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTagsInput, UsersUpdateWithoutTagsInput>, UsersUncheckedUpdateWithoutTagsInput>
  }

  export type UsersCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UsersCreateWithoutApiKeysInput, UsersUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApiKeysInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumTYPEFieldUpdateOperationsInput = {
    set?: $Enums.TYPE
  }

  export type UsersUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UsersCreateWithoutApiKeysInput, UsersUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApiKeysInput
    upsert?: UsersUpsertWithoutApiKeysInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApiKeysInput, UsersUpdateWithoutApiKeysInput>, UsersUncheckedUpdateWithoutApiKeysInput>
  }

  export type TransformationsCreatetagsInput = {
    set: string[]
  }

  export type UsersCreateNestedOneWithoutTransformationsInput = {
    create?: XOR<UsersCreateWithoutTransformationsInput, UsersUncheckedCreateWithoutTransformationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransformationsInput
    connect?: UsersWhereUniqueInput
  }

  export type ModelsCreateNestedOneWithoutTransformationsInput = {
    create?: XOR<ModelsCreateWithoutTransformationsInput, ModelsUncheckedCreateWithoutTransformationsInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutTransformationsInput
    connect?: ModelsWhereUniqueInput
  }

  export type TransformationsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsersUpdateOneRequiredWithoutTransformationsNestedInput = {
    create?: XOR<UsersCreateWithoutTransformationsInput, UsersUncheckedCreateWithoutTransformationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransformationsInput
    upsert?: UsersUpsertWithoutTransformationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTransformationsInput, UsersUpdateWithoutTransformationsInput>, UsersUncheckedUpdateWithoutTransformationsInput>
  }

  export type ModelsUpdateOneRequiredWithoutTransformationsNestedInput = {
    create?: XOR<ModelsCreateWithoutTransformationsInput, ModelsUncheckedCreateWithoutTransformationsInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutTransformationsInput
    upsert?: ModelsUpsertWithoutTransformationsInput
    connect?: ModelsWhereUniqueInput
    update?: XOR<XOR<ModelsUpdateToOneWithWhereWithoutTransformationsInput, ModelsUpdateWithoutTransformationsInput>, ModelsUncheckedUpdateWithoutTransformationsInput>
  }

  export type TransformationsCreateNestedManyWithoutModelInput = {
    create?: XOR<TransformationsCreateWithoutModelInput, TransformationsUncheckedCreateWithoutModelInput> | TransformationsCreateWithoutModelInput[] | TransformationsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutModelInput | TransformationsCreateOrConnectWithoutModelInput[]
    createMany?: TransformationsCreateManyModelInputEnvelope
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
  }

  export type TransformationsUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<TransformationsCreateWithoutModelInput, TransformationsUncheckedCreateWithoutModelInput> | TransformationsCreateWithoutModelInput[] | TransformationsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutModelInput | TransformationsCreateOrConnectWithoutModelInput[]
    createMany?: TransformationsCreateManyModelInputEnvelope
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
  }

  export type EnumPERFORMANCEFieldUpdateOperationsInput = {
    set?: $Enums.PERFORMANCE
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransformationsUpdateManyWithoutModelNestedInput = {
    create?: XOR<TransformationsCreateWithoutModelInput, TransformationsUncheckedCreateWithoutModelInput> | TransformationsCreateWithoutModelInput[] | TransformationsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutModelInput | TransformationsCreateOrConnectWithoutModelInput[]
    upsert?: TransformationsUpsertWithWhereUniqueWithoutModelInput | TransformationsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: TransformationsCreateManyModelInputEnvelope
    set?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    disconnect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    delete?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    update?: TransformationsUpdateWithWhereUniqueWithoutModelInput | TransformationsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: TransformationsUpdateManyWithWhereWithoutModelInput | TransformationsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: TransformationsScalarWhereInput | TransformationsScalarWhereInput[]
  }

  export type TransformationsUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<TransformationsCreateWithoutModelInput, TransformationsUncheckedCreateWithoutModelInput> | TransformationsCreateWithoutModelInput[] | TransformationsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: TransformationsCreateOrConnectWithoutModelInput | TransformationsCreateOrConnectWithoutModelInput[]
    upsert?: TransformationsUpsertWithWhereUniqueWithoutModelInput | TransformationsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: TransformationsCreateManyModelInputEnvelope
    set?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    disconnect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    delete?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    connect?: TransformationsWhereUniqueInput | TransformationsWhereUniqueInput[]
    update?: TransformationsUpdateWithWhereUniqueWithoutModelInput | TransformationsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: TransformationsUpdateManyWithWhereWithoutModelInput | TransformationsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: TransformationsScalarWhereInput | TransformationsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedEnumTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEFilter<$PrismaModel> | $Enums.TYPE
  }

  export type NestedEnumTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEWithAggregatesFilter<$PrismaModel> | $Enums.TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTYPEFilter<$PrismaModel>
    _max?: NestedEnumTYPEFilter<$PrismaModel>
  }

  export type NestedEnumPERFORMANCEFilter<$PrismaModel = never> = {
    equals?: $Enums.PERFORMANCE | EnumPERFORMANCEFieldRefInput<$PrismaModel>
    in?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumPERFORMANCEFilter<$PrismaModel> | $Enums.PERFORMANCE
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPERFORMANCEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PERFORMANCE | EnumPERFORMANCEFieldRefInput<$PrismaModel>
    in?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    notIn?: $Enums.PERFORMANCE[] | ListEnumPERFORMANCEFieldRefInput<$PrismaModel>
    not?: NestedEnumPERFORMANCEWithAggregatesFilter<$PrismaModel> | $Enums.PERFORMANCE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPERFORMANCEFilter<$PrismaModel>
    _max?: NestedEnumPERFORMANCEFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TransformationsCreateWithoutAuthorInput = {
    id?: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    model: ModelsCreateNestedOneWithoutTransformationsInput
  }

  export type TransformationsUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    modelId: string
  }

  export type TransformationsCreateOrConnectWithoutAuthorInput = {
    where: TransformationsWhereUniqueInput
    create: XOR<TransformationsCreateWithoutAuthorInput, TransformationsUncheckedCreateWithoutAuthorInput>
  }

  export type TransformationsCreateManyAuthorInputEnvelope = {
    data: TransformationsCreateManyAuthorInput | TransformationsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type KeysCreateWithoutAuthorInput = {
    id?: string
    apiKey: string
    type: $Enums.TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeysUncheckedCreateWithoutAuthorInput = {
    id?: string
    apiKey: string
    type: $Enums.TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeysCreateOrConnectWithoutAuthorInput = {
    where: KeysWhereUniqueInput
    create: XOR<KeysCreateWithoutAuthorInput, KeysUncheckedCreateWithoutAuthorInput>
  }

  export type KeysCreateManyAuthorInputEnvelope = {
    data: KeysCreateManyAuthorInput | KeysCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TagsCreateWithoutAuthorInput = {
    id?: string
    name: string
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsCreateOrConnectWithoutAuthorInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutAuthorInput, TagsUncheckedCreateWithoutAuthorInput>
  }

  export type TagsCreateManyAuthorInputEnvelope = {
    data: TagsCreateManyAuthorInput | TagsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TransformationsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TransformationsWhereUniqueInput
    update: XOR<TransformationsUpdateWithoutAuthorInput, TransformationsUncheckedUpdateWithoutAuthorInput>
    create: XOR<TransformationsCreateWithoutAuthorInput, TransformationsUncheckedCreateWithoutAuthorInput>
  }

  export type TransformationsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TransformationsWhereUniqueInput
    data: XOR<TransformationsUpdateWithoutAuthorInput, TransformationsUncheckedUpdateWithoutAuthorInput>
  }

  export type TransformationsUpdateManyWithWhereWithoutAuthorInput = {
    where: TransformationsScalarWhereInput
    data: XOR<TransformationsUpdateManyMutationInput, TransformationsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TransformationsScalarWhereInput = {
    AND?: TransformationsScalarWhereInput | TransformationsScalarWhereInput[]
    OR?: TransformationsScalarWhereInput[]
    NOT?: TransformationsScalarWhereInput | TransformationsScalarWhereInput[]
    id?: UuidFilter<"Transformations"> | string
    authorId?: UuidFilter<"Transformations"> | string
    content?: StringFilter<"Transformations"> | string
    input?: StringFilter<"Transformations"> | string
    createdAt?: DateTimeFilter<"Transformations"> | Date | string
    updatedAt?: DateTimeFilter<"Transformations"> | Date | string
    tags?: StringNullableListFilter<"Transformations">
    modelName?: StringFilter<"Transformations"> | string
    modelId?: UuidFilter<"Transformations"> | string
  }

  export type KeysUpsertWithWhereUniqueWithoutAuthorInput = {
    where: KeysWhereUniqueInput
    update: XOR<KeysUpdateWithoutAuthorInput, KeysUncheckedUpdateWithoutAuthorInput>
    create: XOR<KeysCreateWithoutAuthorInput, KeysUncheckedCreateWithoutAuthorInput>
  }

  export type KeysUpdateWithWhereUniqueWithoutAuthorInput = {
    where: KeysWhereUniqueInput
    data: XOR<KeysUpdateWithoutAuthorInput, KeysUncheckedUpdateWithoutAuthorInput>
  }

  export type KeysUpdateManyWithWhereWithoutAuthorInput = {
    where: KeysScalarWhereInput
    data: XOR<KeysUpdateManyMutationInput, KeysUncheckedUpdateManyWithoutAuthorInput>
  }

  export type KeysScalarWhereInput = {
    AND?: KeysScalarWhereInput | KeysScalarWhereInput[]
    OR?: KeysScalarWhereInput[]
    NOT?: KeysScalarWhereInput | KeysScalarWhereInput[]
    id?: UuidFilter<"Keys"> | string
    apiKey?: StringFilter<"Keys"> | string
    authorId?: UuidFilter<"Keys"> | string
    type?: EnumTYPEFilter<"Keys"> | $Enums.TYPE
    createdAt?: DateTimeFilter<"Keys"> | Date | string
    updatedAt?: DateTimeFilter<"Keys"> | Date | string
  }

  export type TagsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TagsWhereUniqueInput
    update: XOR<TagsUpdateWithoutAuthorInput, TagsUncheckedUpdateWithoutAuthorInput>
    create: XOR<TagsCreateWithoutAuthorInput, TagsUncheckedCreateWithoutAuthorInput>
  }

  export type TagsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TagsWhereUniqueInput
    data: XOR<TagsUpdateWithoutAuthorInput, TagsUncheckedUpdateWithoutAuthorInput>
  }

  export type TagsUpdateManyWithWhereWithoutAuthorInput = {
    where: TagsScalarWhereInput
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TagsScalarWhereInput = {
    AND?: TagsScalarWhereInput | TagsScalarWhereInput[]
    OR?: TagsScalarWhereInput[]
    NOT?: TagsScalarWhereInput | TagsScalarWhereInput[]
    id?: UuidFilter<"Tags"> | string
    name?: StringFilter<"Tags"> | string
    prompt?: StringFilter<"Tags"> | string
    authorId?: UuidFilter<"Tags"> | string
    createdAt?: DateTimeFilter<"Tags"> | Date | string
    updatedAt?: DateTimeFilter<"Tags"> | Date | string
  }

  export type UsersCreateWithoutTagsInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    transformations?: TransformationsCreateNestedManyWithoutAuthorInput
    apiKeys?: KeysCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutTagsInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    transformations?: TransformationsUncheckedCreateNestedManyWithoutAuthorInput
    apiKeys?: KeysUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutTagsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTagsInput, UsersUncheckedCreateWithoutTagsInput>
  }

  export type UsersUpsertWithoutTagsInput = {
    update: XOR<UsersUpdateWithoutTagsInput, UsersUncheckedUpdateWithoutTagsInput>
    create: XOR<UsersCreateWithoutTagsInput, UsersUncheckedCreateWithoutTagsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTagsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTagsInput, UsersUncheckedUpdateWithoutTagsInput>
  }

  export type UsersUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    transformations?: TransformationsUpdateManyWithoutAuthorNestedInput
    apiKeys?: KeysUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    transformations?: TransformationsUncheckedUpdateManyWithoutAuthorNestedInput
    apiKeys?: KeysUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateWithoutApiKeysInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    transformations?: TransformationsCreateNestedManyWithoutAuthorInput
    Tags?: TagsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutApiKeysInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    transformations?: TransformationsUncheckedCreateNestedManyWithoutAuthorInput
    Tags?: TagsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutApiKeysInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApiKeysInput, UsersUncheckedCreateWithoutApiKeysInput>
  }

  export type UsersUpsertWithoutApiKeysInput = {
    update: XOR<UsersUpdateWithoutApiKeysInput, UsersUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UsersCreateWithoutApiKeysInput, UsersUncheckedCreateWithoutApiKeysInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApiKeysInput, UsersUncheckedUpdateWithoutApiKeysInput>
  }

  export type UsersUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    transformations?: TransformationsUpdateManyWithoutAuthorNestedInput
    Tags?: TagsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    transformations?: TransformationsUncheckedUpdateManyWithoutAuthorNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateWithoutTransformationsInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    apiKeys?: KeysCreateNestedManyWithoutAuthorInput
    Tags?: TagsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutTransformationsInput = {
    id?: string
    username: string
    email: string
    fullName: string
    clerkId: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.ROLE
    apiKeys?: KeysUncheckedCreateNestedManyWithoutAuthorInput
    Tags?: TagsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutTransformationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTransformationsInput, UsersUncheckedCreateWithoutTransformationsInput>
  }

  export type ModelsCreateWithoutTransformationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performance: $Enums.PERFORMANCE
    type: $Enums.TYPE
    pro?: boolean
    speed?: number
    accuracy?: number
  }

  export type ModelsUncheckedCreateWithoutTransformationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    performance: $Enums.PERFORMANCE
    type: $Enums.TYPE
    pro?: boolean
    speed?: number
    accuracy?: number
  }

  export type ModelsCreateOrConnectWithoutTransformationsInput = {
    where: ModelsWhereUniqueInput
    create: XOR<ModelsCreateWithoutTransformationsInput, ModelsUncheckedCreateWithoutTransformationsInput>
  }

  export type UsersUpsertWithoutTransformationsInput = {
    update: XOR<UsersUpdateWithoutTransformationsInput, UsersUncheckedUpdateWithoutTransformationsInput>
    create: XOR<UsersCreateWithoutTransformationsInput, UsersUncheckedCreateWithoutTransformationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTransformationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTransformationsInput, UsersUncheckedUpdateWithoutTransformationsInput>
  }

  export type UsersUpdateWithoutTransformationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    apiKeys?: KeysUpdateManyWithoutAuthorNestedInput
    Tags?: TagsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutTransformationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    apiKeys?: KeysUncheckedUpdateManyWithoutAuthorNestedInput
    Tags?: TagsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ModelsUpsertWithoutTransformationsInput = {
    update: XOR<ModelsUpdateWithoutTransformationsInput, ModelsUncheckedUpdateWithoutTransformationsInput>
    create: XOR<ModelsCreateWithoutTransformationsInput, ModelsUncheckedCreateWithoutTransformationsInput>
    where?: ModelsWhereInput
  }

  export type ModelsUpdateToOneWithWhereWithoutTransformationsInput = {
    where?: ModelsWhereInput
    data: XOR<ModelsUpdateWithoutTransformationsInput, ModelsUncheckedUpdateWithoutTransformationsInput>
  }

  export type ModelsUpdateWithoutTransformationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: EnumPERFORMANCEFieldUpdateOperationsInput | $Enums.PERFORMANCE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    pro?: BoolFieldUpdateOperationsInput | boolean
    speed?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
  }

  export type ModelsUncheckedUpdateWithoutTransformationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: EnumPERFORMANCEFieldUpdateOperationsInput | $Enums.PERFORMANCE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    pro?: BoolFieldUpdateOperationsInput | boolean
    speed?: FloatFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
  }

  export type TransformationsCreateWithoutModelInput = {
    id?: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    author: UsersCreateNestedOneWithoutTransformationsInput
  }

  export type TransformationsUncheckedCreateWithoutModelInput = {
    id?: string
    authorId: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
  }

  export type TransformationsCreateOrConnectWithoutModelInput = {
    where: TransformationsWhereUniqueInput
    create: XOR<TransformationsCreateWithoutModelInput, TransformationsUncheckedCreateWithoutModelInput>
  }

  export type TransformationsCreateManyModelInputEnvelope = {
    data: TransformationsCreateManyModelInput | TransformationsCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type TransformationsUpsertWithWhereUniqueWithoutModelInput = {
    where: TransformationsWhereUniqueInput
    update: XOR<TransformationsUpdateWithoutModelInput, TransformationsUncheckedUpdateWithoutModelInput>
    create: XOR<TransformationsCreateWithoutModelInput, TransformationsUncheckedCreateWithoutModelInput>
  }

  export type TransformationsUpdateWithWhereUniqueWithoutModelInput = {
    where: TransformationsWhereUniqueInput
    data: XOR<TransformationsUpdateWithoutModelInput, TransformationsUncheckedUpdateWithoutModelInput>
  }

  export type TransformationsUpdateManyWithWhereWithoutModelInput = {
    where: TransformationsScalarWhereInput
    data: XOR<TransformationsUpdateManyMutationInput, TransformationsUncheckedUpdateManyWithoutModelInput>
  }

  export type TransformationsCreateManyAuthorInput = {
    id?: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
    modelId: string
  }

  export type KeysCreateManyAuthorInput = {
    id?: string
    apiKey: string
    type: $Enums.TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagsCreateManyAuthorInput = {
    id?: string
    name: string
    prompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransformationsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    model?: ModelsUpdateOneRequiredWithoutTransformationsNestedInput
  }

  export type TransformationsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type TransformationsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
  }

  export type KeysUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeysUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeysUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransformationsCreateManyModelInput = {
    id?: string
    authorId: string
    content: string
    input: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TransformationsCreatetagsInput | string[]
    modelName: string
  }

  export type TransformationsUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
    author?: UsersUpdateOneRequiredWithoutTransformationsNestedInput
  }

  export type TransformationsUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
  }

  export type TransformationsUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TransformationsUpdatetagsInput | string[]
    modelName?: StringFieldUpdateOperationsInput | string
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