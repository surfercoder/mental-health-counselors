
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
 * Model CounselingTranscript
 * 
 */
export type CounselingTranscript = $Result.DefaultSelection<Prisma.$CounselingTranscriptPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CounselingTranscripts
 * const counselingTranscripts = await prisma.counselingTranscript.findMany()
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
   * // Fetch zero or more CounselingTranscripts
   * const counselingTranscripts = await prisma.counselingTranscript.findMany()
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
   * `prisma.counselingTranscript`: Exposes CRUD operations for the **CounselingTranscript** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CounselingTranscripts
    * const counselingTranscripts = await prisma.counselingTranscript.findMany()
    * ```
    */
  get counselingTranscript(): Prisma.CounselingTranscriptDelegate<ExtArgs, ClientOptions>;
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
    CounselingTranscript: 'CounselingTranscript'
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
      modelProps: "counselingTranscript"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CounselingTranscript: {
        payload: Prisma.$CounselingTranscriptPayload<ExtArgs>
        fields: Prisma.CounselingTranscriptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounselingTranscriptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounselingTranscriptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>
          }
          findFirst: {
            args: Prisma.CounselingTranscriptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounselingTranscriptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>
          }
          findMany: {
            args: Prisma.CounselingTranscriptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>[]
          }
          create: {
            args: Prisma.CounselingTranscriptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>
          }
          createMany: {
            args: Prisma.CounselingTranscriptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CounselingTranscriptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>[]
          }
          delete: {
            args: Prisma.CounselingTranscriptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>
          }
          update: {
            args: Prisma.CounselingTranscriptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>
          }
          deleteMany: {
            args: Prisma.CounselingTranscriptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounselingTranscriptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CounselingTranscriptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>[]
          }
          upsert: {
            args: Prisma.CounselingTranscriptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselingTranscriptPayload>
          }
          aggregate: {
            args: Prisma.CounselingTranscriptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounselingTranscript>
          }
          groupBy: {
            args: Prisma.CounselingTranscriptGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounselingTranscriptGroupByOutputType>[]
          }
          count: {
            args: Prisma.CounselingTranscriptCountArgs<ExtArgs>
            result: $Utils.Optional<CounselingTranscriptCountAggregateOutputType> | number
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
    counselingTranscript?: CounselingTranscriptOmit
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
   * Models
   */

  /**
   * Model CounselingTranscript
   */

  export type AggregateCounselingTranscript = {
    _count: CounselingTranscriptCountAggregateOutputType | null
    _avg: CounselingTranscriptAvgAggregateOutputType | null
    _sum: CounselingTranscriptSumAggregateOutputType | null
    _min: CounselingTranscriptMinAggregateOutputType | null
    _max: CounselingTranscriptMaxAggregateOutputType | null
  }

  export type CounselingTranscriptAvgAggregateOutputType = {
    patientAge: number | null
    sentimentScore: number | null
  }

  export type CounselingTranscriptSumAggregateOutputType = {
    patientAge: number | null
    sentimentScore: number | null
  }

  export type CounselingTranscriptMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    patientText: string | null
    counselorText: string | null
    patientAge: number | null
    patientGender: string | null
    sessionType: string | null
    mainIssue: string | null
    sentimentScore: number | null
    responseType: string | null
  }

  export type CounselingTranscriptMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    patientText: string | null
    counselorText: string | null
    patientAge: number | null
    patientGender: string | null
    sessionType: string | null
    mainIssue: string | null
    sentimentScore: number | null
    responseType: string | null
  }

  export type CounselingTranscriptCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    patientText: number
    counselorText: number
    patientAge: number
    patientGender: number
    sessionType: number
    mainIssue: number
    sentimentScore: number
    responseType: number
    _all: number
  }


  export type CounselingTranscriptAvgAggregateInputType = {
    patientAge?: true
    sentimentScore?: true
  }

  export type CounselingTranscriptSumAggregateInputType = {
    patientAge?: true
    sentimentScore?: true
  }

  export type CounselingTranscriptMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    patientText?: true
    counselorText?: true
    patientAge?: true
    patientGender?: true
    sessionType?: true
    mainIssue?: true
    sentimentScore?: true
    responseType?: true
  }

  export type CounselingTranscriptMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    patientText?: true
    counselorText?: true
    patientAge?: true
    patientGender?: true
    sessionType?: true
    mainIssue?: true
    sentimentScore?: true
    responseType?: true
  }

  export type CounselingTranscriptCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    patientText?: true
    counselorText?: true
    patientAge?: true
    patientGender?: true
    sessionType?: true
    mainIssue?: true
    sentimentScore?: true
    responseType?: true
    _all?: true
  }

  export type CounselingTranscriptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounselingTranscript to aggregate.
     */
    where?: CounselingTranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselingTranscripts to fetch.
     */
    orderBy?: CounselingTranscriptOrderByWithRelationInput | CounselingTranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounselingTranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselingTranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselingTranscripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CounselingTranscripts
    **/
    _count?: true | CounselingTranscriptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounselingTranscriptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounselingTranscriptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounselingTranscriptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounselingTranscriptMaxAggregateInputType
  }

  export type GetCounselingTranscriptAggregateType<T extends CounselingTranscriptAggregateArgs> = {
        [P in keyof T & keyof AggregateCounselingTranscript]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounselingTranscript[P]>
      : GetScalarType<T[P], AggregateCounselingTranscript[P]>
  }




  export type CounselingTranscriptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounselingTranscriptWhereInput
    orderBy?: CounselingTranscriptOrderByWithAggregationInput | CounselingTranscriptOrderByWithAggregationInput[]
    by: CounselingTranscriptScalarFieldEnum[] | CounselingTranscriptScalarFieldEnum
    having?: CounselingTranscriptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounselingTranscriptCountAggregateInputType | true
    _avg?: CounselingTranscriptAvgAggregateInputType
    _sum?: CounselingTranscriptSumAggregateInputType
    _min?: CounselingTranscriptMinAggregateInputType
    _max?: CounselingTranscriptMaxAggregateInputType
  }

  export type CounselingTranscriptGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    patientText: string
    counselorText: string
    patientAge: number | null
    patientGender: string | null
    sessionType: string | null
    mainIssue: string | null
    sentimentScore: number | null
    responseType: string | null
    _count: CounselingTranscriptCountAggregateOutputType | null
    _avg: CounselingTranscriptAvgAggregateOutputType | null
    _sum: CounselingTranscriptSumAggregateOutputType | null
    _min: CounselingTranscriptMinAggregateOutputType | null
    _max: CounselingTranscriptMaxAggregateOutputType | null
  }

  type GetCounselingTranscriptGroupByPayload<T extends CounselingTranscriptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounselingTranscriptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounselingTranscriptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounselingTranscriptGroupByOutputType[P]>
            : GetScalarType<T[P], CounselingTranscriptGroupByOutputType[P]>
        }
      >
    >


  export type CounselingTranscriptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientText?: boolean
    counselorText?: boolean
    patientAge?: boolean
    patientGender?: boolean
    sessionType?: boolean
    mainIssue?: boolean
    sentimentScore?: boolean
    responseType?: boolean
  }, ExtArgs["result"]["counselingTranscript"]>

  export type CounselingTranscriptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientText?: boolean
    counselorText?: boolean
    patientAge?: boolean
    patientGender?: boolean
    sessionType?: boolean
    mainIssue?: boolean
    sentimentScore?: boolean
    responseType?: boolean
  }, ExtArgs["result"]["counselingTranscript"]>

  export type CounselingTranscriptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientText?: boolean
    counselorText?: boolean
    patientAge?: boolean
    patientGender?: boolean
    sessionType?: boolean
    mainIssue?: boolean
    sentimentScore?: boolean
    responseType?: boolean
  }, ExtArgs["result"]["counselingTranscript"]>

  export type CounselingTranscriptSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientText?: boolean
    counselorText?: boolean
    patientAge?: boolean
    patientGender?: boolean
    sessionType?: boolean
    mainIssue?: boolean
    sentimentScore?: boolean
    responseType?: boolean
  }

  export type CounselingTranscriptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "patientText" | "counselorText" | "patientAge" | "patientGender" | "sessionType" | "mainIssue" | "sentimentScore" | "responseType", ExtArgs["result"]["counselingTranscript"]>

  export type $CounselingTranscriptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CounselingTranscript"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      patientText: string
      counselorText: string
      patientAge: number | null
      patientGender: string | null
      sessionType: string | null
      mainIssue: string | null
      sentimentScore: number | null
      responseType: string | null
    }, ExtArgs["result"]["counselingTranscript"]>
    composites: {}
  }

  type CounselingTranscriptGetPayload<S extends boolean | null | undefined | CounselingTranscriptDefaultArgs> = $Result.GetResult<Prisma.$CounselingTranscriptPayload, S>

  type CounselingTranscriptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CounselingTranscriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CounselingTranscriptCountAggregateInputType | true
    }

  export interface CounselingTranscriptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CounselingTranscript'], meta: { name: 'CounselingTranscript' } }
    /**
     * Find zero or one CounselingTranscript that matches the filter.
     * @param {CounselingTranscriptFindUniqueArgs} args - Arguments to find a CounselingTranscript
     * @example
     * // Get one CounselingTranscript
     * const counselingTranscript = await prisma.counselingTranscript.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounselingTranscriptFindUniqueArgs>(args: SelectSubset<T, CounselingTranscriptFindUniqueArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CounselingTranscript that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounselingTranscriptFindUniqueOrThrowArgs} args - Arguments to find a CounselingTranscript
     * @example
     * // Get one CounselingTranscript
     * const counselingTranscript = await prisma.counselingTranscript.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounselingTranscriptFindUniqueOrThrowArgs>(args: SelectSubset<T, CounselingTranscriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CounselingTranscript that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptFindFirstArgs} args - Arguments to find a CounselingTranscript
     * @example
     * // Get one CounselingTranscript
     * const counselingTranscript = await prisma.counselingTranscript.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounselingTranscriptFindFirstArgs>(args?: SelectSubset<T, CounselingTranscriptFindFirstArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CounselingTranscript that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptFindFirstOrThrowArgs} args - Arguments to find a CounselingTranscript
     * @example
     * // Get one CounselingTranscript
     * const counselingTranscript = await prisma.counselingTranscript.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounselingTranscriptFindFirstOrThrowArgs>(args?: SelectSubset<T, CounselingTranscriptFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CounselingTranscripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CounselingTranscripts
     * const counselingTranscripts = await prisma.counselingTranscript.findMany()
     * 
     * // Get first 10 CounselingTranscripts
     * const counselingTranscripts = await prisma.counselingTranscript.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counselingTranscriptWithIdOnly = await prisma.counselingTranscript.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounselingTranscriptFindManyArgs>(args?: SelectSubset<T, CounselingTranscriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CounselingTranscript.
     * @param {CounselingTranscriptCreateArgs} args - Arguments to create a CounselingTranscript.
     * @example
     * // Create one CounselingTranscript
     * const CounselingTranscript = await prisma.counselingTranscript.create({
     *   data: {
     *     // ... data to create a CounselingTranscript
     *   }
     * })
     * 
     */
    create<T extends CounselingTranscriptCreateArgs>(args: SelectSubset<T, CounselingTranscriptCreateArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CounselingTranscripts.
     * @param {CounselingTranscriptCreateManyArgs} args - Arguments to create many CounselingTranscripts.
     * @example
     * // Create many CounselingTranscripts
     * const counselingTranscript = await prisma.counselingTranscript.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounselingTranscriptCreateManyArgs>(args?: SelectSubset<T, CounselingTranscriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CounselingTranscripts and returns the data saved in the database.
     * @param {CounselingTranscriptCreateManyAndReturnArgs} args - Arguments to create many CounselingTranscripts.
     * @example
     * // Create many CounselingTranscripts
     * const counselingTranscript = await prisma.counselingTranscript.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CounselingTranscripts and only return the `id`
     * const counselingTranscriptWithIdOnly = await prisma.counselingTranscript.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CounselingTranscriptCreateManyAndReturnArgs>(args?: SelectSubset<T, CounselingTranscriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CounselingTranscript.
     * @param {CounselingTranscriptDeleteArgs} args - Arguments to delete one CounselingTranscript.
     * @example
     * // Delete one CounselingTranscript
     * const CounselingTranscript = await prisma.counselingTranscript.delete({
     *   where: {
     *     // ... filter to delete one CounselingTranscript
     *   }
     * })
     * 
     */
    delete<T extends CounselingTranscriptDeleteArgs>(args: SelectSubset<T, CounselingTranscriptDeleteArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CounselingTranscript.
     * @param {CounselingTranscriptUpdateArgs} args - Arguments to update one CounselingTranscript.
     * @example
     * // Update one CounselingTranscript
     * const counselingTranscript = await prisma.counselingTranscript.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounselingTranscriptUpdateArgs>(args: SelectSubset<T, CounselingTranscriptUpdateArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CounselingTranscripts.
     * @param {CounselingTranscriptDeleteManyArgs} args - Arguments to filter CounselingTranscripts to delete.
     * @example
     * // Delete a few CounselingTranscripts
     * const { count } = await prisma.counselingTranscript.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounselingTranscriptDeleteManyArgs>(args?: SelectSubset<T, CounselingTranscriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CounselingTranscripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CounselingTranscripts
     * const counselingTranscript = await prisma.counselingTranscript.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounselingTranscriptUpdateManyArgs>(args: SelectSubset<T, CounselingTranscriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CounselingTranscripts and returns the data updated in the database.
     * @param {CounselingTranscriptUpdateManyAndReturnArgs} args - Arguments to update many CounselingTranscripts.
     * @example
     * // Update many CounselingTranscripts
     * const counselingTranscript = await prisma.counselingTranscript.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CounselingTranscripts and only return the `id`
     * const counselingTranscriptWithIdOnly = await prisma.counselingTranscript.updateManyAndReturn({
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
    updateManyAndReturn<T extends CounselingTranscriptUpdateManyAndReturnArgs>(args: SelectSubset<T, CounselingTranscriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CounselingTranscript.
     * @param {CounselingTranscriptUpsertArgs} args - Arguments to update or create a CounselingTranscript.
     * @example
     * // Update or create a CounselingTranscript
     * const counselingTranscript = await prisma.counselingTranscript.upsert({
     *   create: {
     *     // ... data to create a CounselingTranscript
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CounselingTranscript we want to update
     *   }
     * })
     */
    upsert<T extends CounselingTranscriptUpsertArgs>(args: SelectSubset<T, CounselingTranscriptUpsertArgs<ExtArgs>>): Prisma__CounselingTranscriptClient<$Result.GetResult<Prisma.$CounselingTranscriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CounselingTranscripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptCountArgs} args - Arguments to filter CounselingTranscripts to count.
     * @example
     * // Count the number of CounselingTranscripts
     * const count = await prisma.counselingTranscript.count({
     *   where: {
     *     // ... the filter for the CounselingTranscripts we want to count
     *   }
     * })
    **/
    count<T extends CounselingTranscriptCountArgs>(
      args?: Subset<T, CounselingTranscriptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounselingTranscriptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CounselingTranscript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CounselingTranscriptAggregateArgs>(args: Subset<T, CounselingTranscriptAggregateArgs>): Prisma.PrismaPromise<GetCounselingTranscriptAggregateType<T>>

    /**
     * Group by CounselingTranscript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselingTranscriptGroupByArgs} args - Group by arguments.
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
      T extends CounselingTranscriptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounselingTranscriptGroupByArgs['orderBy'] }
        : { orderBy?: CounselingTranscriptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CounselingTranscriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounselingTranscriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CounselingTranscript model
   */
  readonly fields: CounselingTranscriptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CounselingTranscript.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounselingTranscriptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CounselingTranscript model
   */
  interface CounselingTranscriptFieldRefs {
    readonly id: FieldRef<"CounselingTranscript", 'String'>
    readonly createdAt: FieldRef<"CounselingTranscript", 'DateTime'>
    readonly updatedAt: FieldRef<"CounselingTranscript", 'DateTime'>
    readonly patientText: FieldRef<"CounselingTranscript", 'String'>
    readonly counselorText: FieldRef<"CounselingTranscript", 'String'>
    readonly patientAge: FieldRef<"CounselingTranscript", 'Int'>
    readonly patientGender: FieldRef<"CounselingTranscript", 'String'>
    readonly sessionType: FieldRef<"CounselingTranscript", 'String'>
    readonly mainIssue: FieldRef<"CounselingTranscript", 'String'>
    readonly sentimentScore: FieldRef<"CounselingTranscript", 'Float'>
    readonly responseType: FieldRef<"CounselingTranscript", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CounselingTranscript findUnique
   */
  export type CounselingTranscriptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * Filter, which CounselingTranscript to fetch.
     */
    where: CounselingTranscriptWhereUniqueInput
  }

  /**
   * CounselingTranscript findUniqueOrThrow
   */
  export type CounselingTranscriptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * Filter, which CounselingTranscript to fetch.
     */
    where: CounselingTranscriptWhereUniqueInput
  }

  /**
   * CounselingTranscript findFirst
   */
  export type CounselingTranscriptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * Filter, which CounselingTranscript to fetch.
     */
    where?: CounselingTranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselingTranscripts to fetch.
     */
    orderBy?: CounselingTranscriptOrderByWithRelationInput | CounselingTranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounselingTranscripts.
     */
    cursor?: CounselingTranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselingTranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselingTranscripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounselingTranscripts.
     */
    distinct?: CounselingTranscriptScalarFieldEnum | CounselingTranscriptScalarFieldEnum[]
  }

  /**
   * CounselingTranscript findFirstOrThrow
   */
  export type CounselingTranscriptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * Filter, which CounselingTranscript to fetch.
     */
    where?: CounselingTranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselingTranscripts to fetch.
     */
    orderBy?: CounselingTranscriptOrderByWithRelationInput | CounselingTranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounselingTranscripts.
     */
    cursor?: CounselingTranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselingTranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselingTranscripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounselingTranscripts.
     */
    distinct?: CounselingTranscriptScalarFieldEnum | CounselingTranscriptScalarFieldEnum[]
  }

  /**
   * CounselingTranscript findMany
   */
  export type CounselingTranscriptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * Filter, which CounselingTranscripts to fetch.
     */
    where?: CounselingTranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselingTranscripts to fetch.
     */
    orderBy?: CounselingTranscriptOrderByWithRelationInput | CounselingTranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CounselingTranscripts.
     */
    cursor?: CounselingTranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselingTranscripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselingTranscripts.
     */
    skip?: number
    distinct?: CounselingTranscriptScalarFieldEnum | CounselingTranscriptScalarFieldEnum[]
  }

  /**
   * CounselingTranscript create
   */
  export type CounselingTranscriptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * The data needed to create a CounselingTranscript.
     */
    data: XOR<CounselingTranscriptCreateInput, CounselingTranscriptUncheckedCreateInput>
  }

  /**
   * CounselingTranscript createMany
   */
  export type CounselingTranscriptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CounselingTranscripts.
     */
    data: CounselingTranscriptCreateManyInput | CounselingTranscriptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounselingTranscript createManyAndReturn
   */
  export type CounselingTranscriptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * The data used to create many CounselingTranscripts.
     */
    data: CounselingTranscriptCreateManyInput | CounselingTranscriptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounselingTranscript update
   */
  export type CounselingTranscriptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * The data needed to update a CounselingTranscript.
     */
    data: XOR<CounselingTranscriptUpdateInput, CounselingTranscriptUncheckedUpdateInput>
    /**
     * Choose, which CounselingTranscript to update.
     */
    where: CounselingTranscriptWhereUniqueInput
  }

  /**
   * CounselingTranscript updateMany
   */
  export type CounselingTranscriptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CounselingTranscripts.
     */
    data: XOR<CounselingTranscriptUpdateManyMutationInput, CounselingTranscriptUncheckedUpdateManyInput>
    /**
     * Filter which CounselingTranscripts to update
     */
    where?: CounselingTranscriptWhereInput
    /**
     * Limit how many CounselingTranscripts to update.
     */
    limit?: number
  }

  /**
   * CounselingTranscript updateManyAndReturn
   */
  export type CounselingTranscriptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * The data used to update CounselingTranscripts.
     */
    data: XOR<CounselingTranscriptUpdateManyMutationInput, CounselingTranscriptUncheckedUpdateManyInput>
    /**
     * Filter which CounselingTranscripts to update
     */
    where?: CounselingTranscriptWhereInput
    /**
     * Limit how many CounselingTranscripts to update.
     */
    limit?: number
  }

  /**
   * CounselingTranscript upsert
   */
  export type CounselingTranscriptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * The filter to search for the CounselingTranscript to update in case it exists.
     */
    where: CounselingTranscriptWhereUniqueInput
    /**
     * In case the CounselingTranscript found by the `where` argument doesn't exist, create a new CounselingTranscript with this data.
     */
    create: XOR<CounselingTranscriptCreateInput, CounselingTranscriptUncheckedCreateInput>
    /**
     * In case the CounselingTranscript was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounselingTranscriptUpdateInput, CounselingTranscriptUncheckedUpdateInput>
  }

  /**
   * CounselingTranscript delete
   */
  export type CounselingTranscriptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
    /**
     * Filter which CounselingTranscript to delete.
     */
    where: CounselingTranscriptWhereUniqueInput
  }

  /**
   * CounselingTranscript deleteMany
   */
  export type CounselingTranscriptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounselingTranscripts to delete
     */
    where?: CounselingTranscriptWhereInput
    /**
     * Limit how many CounselingTranscripts to delete.
     */
    limit?: number
  }

  /**
   * CounselingTranscript without action
   */
  export type CounselingTranscriptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselingTranscript
     */
    select?: CounselingTranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselingTranscript
     */
    omit?: CounselingTranscriptOmit<ExtArgs> | null
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


  export const CounselingTranscriptScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    patientText: 'patientText',
    counselorText: 'counselorText',
    patientAge: 'patientAge',
    patientGender: 'patientGender',
    sessionType: 'sessionType',
    mainIssue: 'mainIssue',
    sentimentScore: 'sentimentScore',
    responseType: 'responseType'
  };

  export type CounselingTranscriptScalarFieldEnum = (typeof CounselingTranscriptScalarFieldEnum)[keyof typeof CounselingTranscriptScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CounselingTranscriptWhereInput = {
    AND?: CounselingTranscriptWhereInput | CounselingTranscriptWhereInput[]
    OR?: CounselingTranscriptWhereInput[]
    NOT?: CounselingTranscriptWhereInput | CounselingTranscriptWhereInput[]
    id?: StringFilter<"CounselingTranscript"> | string
    createdAt?: DateTimeFilter<"CounselingTranscript"> | Date | string
    updatedAt?: DateTimeFilter<"CounselingTranscript"> | Date | string
    patientText?: StringFilter<"CounselingTranscript"> | string
    counselorText?: StringFilter<"CounselingTranscript"> | string
    patientAge?: IntNullableFilter<"CounselingTranscript"> | number | null
    patientGender?: StringNullableFilter<"CounselingTranscript"> | string | null
    sessionType?: StringNullableFilter<"CounselingTranscript"> | string | null
    mainIssue?: StringNullableFilter<"CounselingTranscript"> | string | null
    sentimentScore?: FloatNullableFilter<"CounselingTranscript"> | number | null
    responseType?: StringNullableFilter<"CounselingTranscript"> | string | null
  }

  export type CounselingTranscriptOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientText?: SortOrder
    counselorText?: SortOrder
    patientAge?: SortOrderInput | SortOrder
    patientGender?: SortOrderInput | SortOrder
    sessionType?: SortOrderInput | SortOrder
    mainIssue?: SortOrderInput | SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    responseType?: SortOrderInput | SortOrder
  }

  export type CounselingTranscriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CounselingTranscriptWhereInput | CounselingTranscriptWhereInput[]
    OR?: CounselingTranscriptWhereInput[]
    NOT?: CounselingTranscriptWhereInput | CounselingTranscriptWhereInput[]
    createdAt?: DateTimeFilter<"CounselingTranscript"> | Date | string
    updatedAt?: DateTimeFilter<"CounselingTranscript"> | Date | string
    patientText?: StringFilter<"CounselingTranscript"> | string
    counselorText?: StringFilter<"CounselingTranscript"> | string
    patientAge?: IntNullableFilter<"CounselingTranscript"> | number | null
    patientGender?: StringNullableFilter<"CounselingTranscript"> | string | null
    sessionType?: StringNullableFilter<"CounselingTranscript"> | string | null
    mainIssue?: StringNullableFilter<"CounselingTranscript"> | string | null
    sentimentScore?: FloatNullableFilter<"CounselingTranscript"> | number | null
    responseType?: StringNullableFilter<"CounselingTranscript"> | string | null
  }, "id">

  export type CounselingTranscriptOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientText?: SortOrder
    counselorText?: SortOrder
    patientAge?: SortOrderInput | SortOrder
    patientGender?: SortOrderInput | SortOrder
    sessionType?: SortOrderInput | SortOrder
    mainIssue?: SortOrderInput | SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    responseType?: SortOrderInput | SortOrder
    _count?: CounselingTranscriptCountOrderByAggregateInput
    _avg?: CounselingTranscriptAvgOrderByAggregateInput
    _max?: CounselingTranscriptMaxOrderByAggregateInput
    _min?: CounselingTranscriptMinOrderByAggregateInput
    _sum?: CounselingTranscriptSumOrderByAggregateInput
  }

  export type CounselingTranscriptScalarWhereWithAggregatesInput = {
    AND?: CounselingTranscriptScalarWhereWithAggregatesInput | CounselingTranscriptScalarWhereWithAggregatesInput[]
    OR?: CounselingTranscriptScalarWhereWithAggregatesInput[]
    NOT?: CounselingTranscriptScalarWhereWithAggregatesInput | CounselingTranscriptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CounselingTranscript"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CounselingTranscript"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CounselingTranscript"> | Date | string
    patientText?: StringWithAggregatesFilter<"CounselingTranscript"> | string
    counselorText?: StringWithAggregatesFilter<"CounselingTranscript"> | string
    patientAge?: IntNullableWithAggregatesFilter<"CounselingTranscript"> | number | null
    patientGender?: StringNullableWithAggregatesFilter<"CounselingTranscript"> | string | null
    sessionType?: StringNullableWithAggregatesFilter<"CounselingTranscript"> | string | null
    mainIssue?: StringNullableWithAggregatesFilter<"CounselingTranscript"> | string | null
    sentimentScore?: FloatNullableWithAggregatesFilter<"CounselingTranscript"> | number | null
    responseType?: StringNullableWithAggregatesFilter<"CounselingTranscript"> | string | null
  }

  export type CounselingTranscriptCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patientText: string
    counselorText: string
    patientAge?: number | null
    patientGender?: string | null
    sessionType?: string | null
    mainIssue?: string | null
    sentimentScore?: number | null
    responseType?: string | null
  }

  export type CounselingTranscriptUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patientText: string
    counselorText: string
    patientAge?: number | null
    patientGender?: string | null
    sessionType?: string | null
    mainIssue?: string | null
    sentimentScore?: number | null
    responseType?: string | null
  }

  export type CounselingTranscriptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientText?: StringFieldUpdateOperationsInput | string
    counselorText?: StringFieldUpdateOperationsInput | string
    patientAge?: NullableIntFieldUpdateOperationsInput | number | null
    patientGender?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    mainIssue?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CounselingTranscriptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientText?: StringFieldUpdateOperationsInput | string
    counselorText?: StringFieldUpdateOperationsInput | string
    patientAge?: NullableIntFieldUpdateOperationsInput | number | null
    patientGender?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    mainIssue?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CounselingTranscriptCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patientText: string
    counselorText: string
    patientAge?: number | null
    patientGender?: string | null
    sessionType?: string | null
    mainIssue?: string | null
    sentimentScore?: number | null
    responseType?: string | null
  }

  export type CounselingTranscriptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientText?: StringFieldUpdateOperationsInput | string
    counselorText?: StringFieldUpdateOperationsInput | string
    patientAge?: NullableIntFieldUpdateOperationsInput | number | null
    patientGender?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    mainIssue?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CounselingTranscriptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientText?: StringFieldUpdateOperationsInput | string
    counselorText?: StringFieldUpdateOperationsInput | string
    patientAge?: NullableIntFieldUpdateOperationsInput | number | null
    patientGender?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    mainIssue?: NullableStringFieldUpdateOperationsInput | string | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CounselingTranscriptCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientText?: SortOrder
    counselorText?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    sessionType?: SortOrder
    mainIssue?: SortOrder
    sentimentScore?: SortOrder
    responseType?: SortOrder
  }

  export type CounselingTranscriptAvgOrderByAggregateInput = {
    patientAge?: SortOrder
    sentimentScore?: SortOrder
  }

  export type CounselingTranscriptMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientText?: SortOrder
    counselorText?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    sessionType?: SortOrder
    mainIssue?: SortOrder
    sentimentScore?: SortOrder
    responseType?: SortOrder
  }

  export type CounselingTranscriptMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientText?: SortOrder
    counselorText?: SortOrder
    patientAge?: SortOrder
    patientGender?: SortOrder
    sessionType?: SortOrder
    mainIssue?: SortOrder
    sentimentScore?: SortOrder
    responseType?: SortOrder
  }

  export type CounselingTranscriptSumOrderByAggregateInput = {
    patientAge?: SortOrder
    sentimentScore?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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