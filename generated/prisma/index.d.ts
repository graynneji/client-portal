
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Lead
 * Mirrors the main app's Lead model — only the fields this portal reads.
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Payment
 * Mirrors the main app's Payment model — only the fields this portal reads.
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model ClientAccount
 * 
 */
export type ClientAccount = $Result.DefaultSelection<Prisma.$ClientAccountPayload>
/**
 * Model ClientLoginToken
 * 
 */
export type ClientLoginToken = $Result.DefaultSelection<Prisma.$ClientLoginTokenPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model ScheduledSession
 * 
 */
export type ScheduledSession = $Result.DefaultSelection<Prisma.$ScheduledSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Leads
 * const leads = await prisma.lead.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Leads
   * const leads = await prisma.lead.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientAccount`: Exposes CRUD operations for the **ClientAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientAccounts
    * const clientAccounts = await prisma.clientAccount.findMany()
    * ```
    */
  get clientAccount(): Prisma.ClientAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientLoginToken`: Exposes CRUD operations for the **ClientLoginToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientLoginTokens
    * const clientLoginTokens = await prisma.clientLoginToken.findMany()
    * ```
    */
  get clientLoginToken(): Prisma.ClientLoginTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledSession`: Exposes CRUD operations for the **ScheduledSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledSessions
    * const scheduledSessions = await prisma.scheduledSession.findMany()
    * ```
    */
  get scheduledSession(): Prisma.ScheduledSessionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Lead: 'Lead',
    Payment: 'Payment',
    ClientAccount: 'ClientAccount',
    ClientLoginToken: 'ClientLoginToken',
    Package: 'Package',
    ScheduledSession: 'ScheduledSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "lead" | "payment" | "clientAccount" | "clientLoginToken" | "package" | "scheduledSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      ClientAccount: {
        payload: Prisma.$ClientAccountPayload<ExtArgs>
        fields: Prisma.ClientAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>
          }
          findFirst: {
            args: Prisma.ClientAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>
          }
          findMany: {
            args: Prisma.ClientAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>[]
          }
          create: {
            args: Prisma.ClientAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>
          }
          createMany: {
            args: Prisma.ClientAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>[]
          }
          delete: {
            args: Prisma.ClientAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>
          }
          update: {
            args: Prisma.ClientAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>
          }
          deleteMany: {
            args: Prisma.ClientAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>[]
          }
          upsert: {
            args: Prisma.ClientAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientAccountPayload>
          }
          aggregate: {
            args: Prisma.ClientAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientAccount>
          }
          groupBy: {
            args: Prisma.ClientAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ClientAccountCountAggregateOutputType> | number
          }
        }
      }
      ClientLoginToken: {
        payload: Prisma.$ClientLoginTokenPayload<ExtArgs>
        fields: Prisma.ClientLoginTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientLoginTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientLoginTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>
          }
          findFirst: {
            args: Prisma.ClientLoginTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientLoginTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>
          }
          findMany: {
            args: Prisma.ClientLoginTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>[]
          }
          create: {
            args: Prisma.ClientLoginTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>
          }
          createMany: {
            args: Prisma.ClientLoginTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientLoginTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>[]
          }
          delete: {
            args: Prisma.ClientLoginTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>
          }
          update: {
            args: Prisma.ClientLoginTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>
          }
          deleteMany: {
            args: Prisma.ClientLoginTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientLoginTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientLoginTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>[]
          }
          upsert: {
            args: Prisma.ClientLoginTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientLoginTokenPayload>
          }
          aggregate: {
            args: Prisma.ClientLoginTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientLoginToken>
          }
          groupBy: {
            args: Prisma.ClientLoginTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientLoginTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientLoginTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ClientLoginTokenCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      ScheduledSession: {
        payload: Prisma.$ScheduledSessionPayload<ExtArgs>
        fields: Prisma.ScheduledSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>
          }
          findFirst: {
            args: Prisma.ScheduledSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>
          }
          findMany: {
            args: Prisma.ScheduledSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>[]
          }
          create: {
            args: Prisma.ScheduledSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>
          }
          createMany: {
            args: Prisma.ScheduledSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>[]
          }
          delete: {
            args: Prisma.ScheduledSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>
          }
          update: {
            args: Prisma.ScheduledSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>[]
          }
          upsert: {
            args: Prisma.ScheduledSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledSessionPayload>
          }
          aggregate: {
            args: Prisma.ScheduledSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledSession>
          }
          groupBy: {
            args: Prisma.ScheduledSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledSessionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    lead?: LeadOmit
    payment?: PaymentOmit
    clientAccount?: ClientAccountOmit
    clientLoginToken?: ClientLoginTokenOmit
    package?: PackageOmit
    scheduledSession?: ScheduledSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    packages: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | LeadCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    scheduledSessions: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledSessions?: boolean | PackageCountOutputTypeCountScheduledSessionsArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountScheduledSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    clientAccount?: boolean | Lead$clientAccountArgs<ExtArgs>
    packages?: boolean | Lead$packagesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientAccount?: boolean | Lead$clientAccountArgs<ExtArgs>
    packages?: boolean | Lead$packagesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      clientAccount: Prisma.$ClientAccountPayload<ExtArgs> | null
      packages: Prisma.$PackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientAccount<T extends Lead$clientAccountArgs<ExtArgs> = {}>(args?: Subset<T, Lead$clientAccountArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    packages<T extends Lead$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.clientAccount
   */
  export type Lead$clientAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    where?: ClientAccountWhereInput
  }

  /**
   * Lead.packages
   */
  export type Lead$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amountKobo: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amountKobo: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    leadId: string | null
    amountKobo: number | null
    currency: string | null
    status: string | null
    method: string | null
    reference: string | null
    paidAt: Date | null
    notes: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    leadId: string | null
    amountKobo: number | null
    currency: string | null
    status: string | null
    method: string | null
    reference: string | null
    paidAt: Date | null
    notes: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    createdAt: number
    leadId: number
    amountKobo: number
    currency: number
    status: number
    method: number
    reference: number
    paidAt: number
    notes: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amountKobo?: true
  }

  export type PaymentSumAggregateInputType = {
    amountKobo?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    createdAt?: true
    leadId?: true
    amountKobo?: true
    currency?: true
    status?: true
    method?: true
    reference?: true
    paidAt?: true
    notes?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    leadId?: true
    amountKobo?: true
    currency?: true
    status?: true
    method?: true
    reference?: true
    paidAt?: true
    notes?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    createdAt?: true
    leadId?: true
    amountKobo?: true
    currency?: true
    status?: true
    method?: true
    reference?: true
    paidAt?: true
    notes?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    createdAt: Date
    leadId: string
    amountKobo: number
    currency: string
    status: string
    method: string
    reference: string | null
    paidAt: Date | null
    notes: string | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    paidAt?: boolean
    notes?: boolean
    package?: boolean | Payment$packageArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    paidAt?: boolean
    notes?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    paidAt?: boolean
    notes?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    amountKobo?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    paidAt?: boolean
    notes?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "leadId" | "amountKobo" | "currency" | "status" | "method" | "reference" | "paidAt" | "notes", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | Payment$packageArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      leadId: string
      amountKobo: number
      currency: string
      status: string
      method: string
      reference: string | null
      paidAt: Date | null
      notes: string | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends Payment$packageArgs<ExtArgs> = {}>(args?: Subset<T, Payment$packageArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly leadId: FieldRef<"Payment", 'String'>
    readonly amountKobo: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly notes: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.package
   */
  export type Payment$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model ClientAccount
   */

  export type AggregateClientAccount = {
    _count: ClientAccountCountAggregateOutputType | null
    _min: ClientAccountMinAggregateOutputType | null
    _max: ClientAccountMaxAggregateOutputType | null
  }

  export type ClientAccountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    leadId: string | null
    email: string | null
  }

  export type ClientAccountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    leadId: string | null
    email: string | null
  }

  export type ClientAccountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    leadId: number
    email: number
    _all: number
  }


  export type ClientAccountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    leadId?: true
    email?: true
  }

  export type ClientAccountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    leadId?: true
    email?: true
  }

  export type ClientAccountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    leadId?: true
    email?: true
    _all?: true
  }

  export type ClientAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientAccount to aggregate.
     */
    where?: ClientAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientAccounts to fetch.
     */
    orderBy?: ClientAccountOrderByWithRelationInput | ClientAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientAccounts
    **/
    _count?: true | ClientAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientAccountMaxAggregateInputType
  }

  export type GetClientAccountAggregateType<T extends ClientAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateClientAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientAccount[P]>
      : GetScalarType<T[P], AggregateClientAccount[P]>
  }




  export type ClientAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientAccountWhereInput
    orderBy?: ClientAccountOrderByWithAggregationInput | ClientAccountOrderByWithAggregationInput[]
    by: ClientAccountScalarFieldEnum[] | ClientAccountScalarFieldEnum
    having?: ClientAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientAccountCountAggregateInputType | true
    _min?: ClientAccountMinAggregateInputType
    _max?: ClientAccountMaxAggregateInputType
  }

  export type ClientAccountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    leadId: string
    email: string
    _count: ClientAccountCountAggregateOutputType | null
    _min: ClientAccountMinAggregateOutputType | null
    _max: ClientAccountMaxAggregateOutputType | null
  }

  type GetClientAccountGroupByPayload<T extends ClientAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ClientAccountGroupByOutputType[P]>
        }
      >
    >


  export type ClientAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leadId?: boolean
    email?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientAccount"]>

  export type ClientAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leadId?: boolean
    email?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientAccount"]>

  export type ClientAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leadId?: boolean
    email?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientAccount"]>

  export type ClientAccountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leadId?: boolean
    email?: boolean
  }

  export type ClientAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "leadId" | "email", ExtArgs["result"]["clientAccount"]>
  export type ClientAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type ClientAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type ClientAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $ClientAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientAccount"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      leadId: string
      email: string
    }, ExtArgs["result"]["clientAccount"]>
    composites: {}
  }

  type ClientAccountGetPayload<S extends boolean | null | undefined | ClientAccountDefaultArgs> = $Result.GetResult<Prisma.$ClientAccountPayload, S>

  type ClientAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientAccountCountAggregateInputType | true
    }

  export interface ClientAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientAccount'], meta: { name: 'ClientAccount' } }
    /**
     * Find zero or one ClientAccount that matches the filter.
     * @param {ClientAccountFindUniqueArgs} args - Arguments to find a ClientAccount
     * @example
     * // Get one ClientAccount
     * const clientAccount = await prisma.clientAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientAccountFindUniqueArgs>(args: SelectSubset<T, ClientAccountFindUniqueArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientAccountFindUniqueOrThrowArgs} args - Arguments to find a ClientAccount
     * @example
     * // Get one ClientAccount
     * const clientAccount = await prisma.clientAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountFindFirstArgs} args - Arguments to find a ClientAccount
     * @example
     * // Get one ClientAccount
     * const clientAccount = await prisma.clientAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientAccountFindFirstArgs>(args?: SelectSubset<T, ClientAccountFindFirstArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountFindFirstOrThrowArgs} args - Arguments to find a ClientAccount
     * @example
     * // Get one ClientAccount
     * const clientAccount = await prisma.clientAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientAccounts
     * const clientAccounts = await prisma.clientAccount.findMany()
     * 
     * // Get first 10 ClientAccounts
     * const clientAccounts = await prisma.clientAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientAccountWithIdOnly = await prisma.clientAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientAccountFindManyArgs>(args?: SelectSubset<T, ClientAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientAccount.
     * @param {ClientAccountCreateArgs} args - Arguments to create a ClientAccount.
     * @example
     * // Create one ClientAccount
     * const ClientAccount = await prisma.clientAccount.create({
     *   data: {
     *     // ... data to create a ClientAccount
     *   }
     * })
     * 
     */
    create<T extends ClientAccountCreateArgs>(args: SelectSubset<T, ClientAccountCreateArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientAccounts.
     * @param {ClientAccountCreateManyArgs} args - Arguments to create many ClientAccounts.
     * @example
     * // Create many ClientAccounts
     * const clientAccount = await prisma.clientAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientAccountCreateManyArgs>(args?: SelectSubset<T, ClientAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientAccounts and returns the data saved in the database.
     * @param {ClientAccountCreateManyAndReturnArgs} args - Arguments to create many ClientAccounts.
     * @example
     * // Create many ClientAccounts
     * const clientAccount = await prisma.clientAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientAccounts and only return the `id`
     * const clientAccountWithIdOnly = await prisma.clientAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientAccount.
     * @param {ClientAccountDeleteArgs} args - Arguments to delete one ClientAccount.
     * @example
     * // Delete one ClientAccount
     * const ClientAccount = await prisma.clientAccount.delete({
     *   where: {
     *     // ... filter to delete one ClientAccount
     *   }
     * })
     * 
     */
    delete<T extends ClientAccountDeleteArgs>(args: SelectSubset<T, ClientAccountDeleteArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientAccount.
     * @param {ClientAccountUpdateArgs} args - Arguments to update one ClientAccount.
     * @example
     * // Update one ClientAccount
     * const clientAccount = await prisma.clientAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientAccountUpdateArgs>(args: SelectSubset<T, ClientAccountUpdateArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientAccounts.
     * @param {ClientAccountDeleteManyArgs} args - Arguments to filter ClientAccounts to delete.
     * @example
     * // Delete a few ClientAccounts
     * const { count } = await prisma.clientAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientAccountDeleteManyArgs>(args?: SelectSubset<T, ClientAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientAccounts
     * const clientAccount = await prisma.clientAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientAccountUpdateManyArgs>(args: SelectSubset<T, ClientAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientAccounts and returns the data updated in the database.
     * @param {ClientAccountUpdateManyAndReturnArgs} args - Arguments to update many ClientAccounts.
     * @example
     * // Update many ClientAccounts
     * const clientAccount = await prisma.clientAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientAccounts and only return the `id`
     * const clientAccountWithIdOnly = await prisma.clientAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientAccount.
     * @param {ClientAccountUpsertArgs} args - Arguments to update or create a ClientAccount.
     * @example
     * // Update or create a ClientAccount
     * const clientAccount = await prisma.clientAccount.upsert({
     *   create: {
     *     // ... data to create a ClientAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientAccount we want to update
     *   }
     * })
     */
    upsert<T extends ClientAccountUpsertArgs>(args: SelectSubset<T, ClientAccountUpsertArgs<ExtArgs>>): Prisma__ClientAccountClient<$Result.GetResult<Prisma.$ClientAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountCountArgs} args - Arguments to filter ClientAccounts to count.
     * @example
     * // Count the number of ClientAccounts
     * const count = await prisma.clientAccount.count({
     *   where: {
     *     // ... the filter for the ClientAccounts we want to count
     *   }
     * })
    **/
    count<T extends ClientAccountCountArgs>(
      args?: Subset<T, ClientAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAccountAggregateArgs>(args: Subset<T, ClientAccountAggregateArgs>): Prisma.PrismaPromise<GetClientAccountAggregateType<T>>

    /**
     * Group by ClientAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAccountGroupByArgs} args - Group by arguments.
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
      T extends ClientAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientAccountGroupByArgs['orderBy'] }
        : { orderBy?: ClientAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientAccount model
   */
  readonly fields: ClientAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClientAccount model
   */
  interface ClientAccountFieldRefs {
    readonly id: FieldRef<"ClientAccount", 'String'>
    readonly createdAt: FieldRef<"ClientAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientAccount", 'DateTime'>
    readonly leadId: FieldRef<"ClientAccount", 'String'>
    readonly email: FieldRef<"ClientAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientAccount findUnique
   */
  export type ClientAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * Filter, which ClientAccount to fetch.
     */
    where: ClientAccountWhereUniqueInput
  }

  /**
   * ClientAccount findUniqueOrThrow
   */
  export type ClientAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * Filter, which ClientAccount to fetch.
     */
    where: ClientAccountWhereUniqueInput
  }

  /**
   * ClientAccount findFirst
   */
  export type ClientAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * Filter, which ClientAccount to fetch.
     */
    where?: ClientAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientAccounts to fetch.
     */
    orderBy?: ClientAccountOrderByWithRelationInput | ClientAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientAccounts.
     */
    cursor?: ClientAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientAccounts.
     */
    distinct?: ClientAccountScalarFieldEnum | ClientAccountScalarFieldEnum[]
  }

  /**
   * ClientAccount findFirstOrThrow
   */
  export type ClientAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * Filter, which ClientAccount to fetch.
     */
    where?: ClientAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientAccounts to fetch.
     */
    orderBy?: ClientAccountOrderByWithRelationInput | ClientAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientAccounts.
     */
    cursor?: ClientAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientAccounts.
     */
    distinct?: ClientAccountScalarFieldEnum | ClientAccountScalarFieldEnum[]
  }

  /**
   * ClientAccount findMany
   */
  export type ClientAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * Filter, which ClientAccounts to fetch.
     */
    where?: ClientAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientAccounts to fetch.
     */
    orderBy?: ClientAccountOrderByWithRelationInput | ClientAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientAccounts.
     */
    cursor?: ClientAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientAccounts.
     */
    distinct?: ClientAccountScalarFieldEnum | ClientAccountScalarFieldEnum[]
  }

  /**
   * ClientAccount create
   */
  export type ClientAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientAccount.
     */
    data: XOR<ClientAccountCreateInput, ClientAccountUncheckedCreateInput>
  }

  /**
   * ClientAccount createMany
   */
  export type ClientAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientAccounts.
     */
    data: ClientAccountCreateManyInput | ClientAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientAccount createManyAndReturn
   */
  export type ClientAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * The data used to create many ClientAccounts.
     */
    data: ClientAccountCreateManyInput | ClientAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientAccount update
   */
  export type ClientAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientAccount.
     */
    data: XOR<ClientAccountUpdateInput, ClientAccountUncheckedUpdateInput>
    /**
     * Choose, which ClientAccount to update.
     */
    where: ClientAccountWhereUniqueInput
  }

  /**
   * ClientAccount updateMany
   */
  export type ClientAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientAccounts.
     */
    data: XOR<ClientAccountUpdateManyMutationInput, ClientAccountUncheckedUpdateManyInput>
    /**
     * Filter which ClientAccounts to update
     */
    where?: ClientAccountWhereInput
    /**
     * Limit how many ClientAccounts to update.
     */
    limit?: number
  }

  /**
   * ClientAccount updateManyAndReturn
   */
  export type ClientAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * The data used to update ClientAccounts.
     */
    data: XOR<ClientAccountUpdateManyMutationInput, ClientAccountUncheckedUpdateManyInput>
    /**
     * Filter which ClientAccounts to update
     */
    where?: ClientAccountWhereInput
    /**
     * Limit how many ClientAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientAccount upsert
   */
  export type ClientAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientAccount to update in case it exists.
     */
    where: ClientAccountWhereUniqueInput
    /**
     * In case the ClientAccount found by the `where` argument doesn't exist, create a new ClientAccount with this data.
     */
    create: XOR<ClientAccountCreateInput, ClientAccountUncheckedCreateInput>
    /**
     * In case the ClientAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientAccountUpdateInput, ClientAccountUncheckedUpdateInput>
  }

  /**
   * ClientAccount delete
   */
  export type ClientAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
    /**
     * Filter which ClientAccount to delete.
     */
    where: ClientAccountWhereUniqueInput
  }

  /**
   * ClientAccount deleteMany
   */
  export type ClientAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientAccounts to delete
     */
    where?: ClientAccountWhereInput
    /**
     * Limit how many ClientAccounts to delete.
     */
    limit?: number
  }

  /**
   * ClientAccount without action
   */
  export type ClientAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientAccount
     */
    select?: ClientAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientAccount
     */
    omit?: ClientAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientAccountInclude<ExtArgs> | null
  }


  /**
   * Model ClientLoginToken
   */

  export type AggregateClientLoginToken = {
    _count: ClientLoginTokenCountAggregateOutputType | null
    _min: ClientLoginTokenMinAggregateOutputType | null
    _max: ClientLoginTokenMaxAggregateOutputType | null
  }

  export type ClientLoginTokenMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    clientAccountId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
  }

  export type ClientLoginTokenMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    clientAccountId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
  }

  export type ClientLoginTokenCountAggregateOutputType = {
    id: number
    createdAt: number
    clientAccountId: number
    token: number
    expiresAt: number
    usedAt: number
    _all: number
  }


  export type ClientLoginTokenMinAggregateInputType = {
    id?: true
    createdAt?: true
    clientAccountId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
  }

  export type ClientLoginTokenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    clientAccountId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
  }

  export type ClientLoginTokenCountAggregateInputType = {
    id?: true
    createdAt?: true
    clientAccountId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    _all?: true
  }

  export type ClientLoginTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientLoginToken to aggregate.
     */
    where?: ClientLoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLoginTokens to fetch.
     */
    orderBy?: ClientLoginTokenOrderByWithRelationInput | ClientLoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientLoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientLoginTokens
    **/
    _count?: true | ClientLoginTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientLoginTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientLoginTokenMaxAggregateInputType
  }

  export type GetClientLoginTokenAggregateType<T extends ClientLoginTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateClientLoginToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientLoginToken[P]>
      : GetScalarType<T[P], AggregateClientLoginToken[P]>
  }




  export type ClientLoginTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientLoginTokenWhereInput
    orderBy?: ClientLoginTokenOrderByWithAggregationInput | ClientLoginTokenOrderByWithAggregationInput[]
    by: ClientLoginTokenScalarFieldEnum[] | ClientLoginTokenScalarFieldEnum
    having?: ClientLoginTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientLoginTokenCountAggregateInputType | true
    _min?: ClientLoginTokenMinAggregateInputType
    _max?: ClientLoginTokenMaxAggregateInputType
  }

  export type ClientLoginTokenGroupByOutputType = {
    id: string
    createdAt: Date
    clientAccountId: string
    token: string
    expiresAt: Date
    usedAt: Date | null
    _count: ClientLoginTokenCountAggregateOutputType | null
    _min: ClientLoginTokenMinAggregateOutputType | null
    _max: ClientLoginTokenMaxAggregateOutputType | null
  }

  type GetClientLoginTokenGroupByPayload<T extends ClientLoginTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientLoginTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientLoginTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientLoginTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ClientLoginTokenGroupByOutputType[P]>
        }
      >
    >


  export type ClientLoginTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    clientAccountId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["clientLoginToken"]>

  export type ClientLoginTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    clientAccountId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["clientLoginToken"]>

  export type ClientLoginTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    clientAccountId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["clientLoginToken"]>

  export type ClientLoginTokenSelectScalar = {
    id?: boolean
    createdAt?: boolean
    clientAccountId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
  }

  export type ClientLoginTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "clientAccountId" | "token" | "expiresAt" | "usedAt", ExtArgs["result"]["clientLoginToken"]>

  export type $ClientLoginTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientLoginToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      clientAccountId: string
      token: string
      expiresAt: Date
      usedAt: Date | null
    }, ExtArgs["result"]["clientLoginToken"]>
    composites: {}
  }

  type ClientLoginTokenGetPayload<S extends boolean | null | undefined | ClientLoginTokenDefaultArgs> = $Result.GetResult<Prisma.$ClientLoginTokenPayload, S>

  type ClientLoginTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientLoginTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientLoginTokenCountAggregateInputType | true
    }

  export interface ClientLoginTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientLoginToken'], meta: { name: 'ClientLoginToken' } }
    /**
     * Find zero or one ClientLoginToken that matches the filter.
     * @param {ClientLoginTokenFindUniqueArgs} args - Arguments to find a ClientLoginToken
     * @example
     * // Get one ClientLoginToken
     * const clientLoginToken = await prisma.clientLoginToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientLoginTokenFindUniqueArgs>(args: SelectSubset<T, ClientLoginTokenFindUniqueArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientLoginToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientLoginTokenFindUniqueOrThrowArgs} args - Arguments to find a ClientLoginToken
     * @example
     * // Get one ClientLoginToken
     * const clientLoginToken = await prisma.clientLoginToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientLoginTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientLoginTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientLoginToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenFindFirstArgs} args - Arguments to find a ClientLoginToken
     * @example
     * // Get one ClientLoginToken
     * const clientLoginToken = await prisma.clientLoginToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientLoginTokenFindFirstArgs>(args?: SelectSubset<T, ClientLoginTokenFindFirstArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientLoginToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenFindFirstOrThrowArgs} args - Arguments to find a ClientLoginToken
     * @example
     * // Get one ClientLoginToken
     * const clientLoginToken = await prisma.clientLoginToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientLoginTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientLoginTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientLoginTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientLoginTokens
     * const clientLoginTokens = await prisma.clientLoginToken.findMany()
     * 
     * // Get first 10 ClientLoginTokens
     * const clientLoginTokens = await prisma.clientLoginToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientLoginTokenWithIdOnly = await prisma.clientLoginToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientLoginTokenFindManyArgs>(args?: SelectSubset<T, ClientLoginTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientLoginToken.
     * @param {ClientLoginTokenCreateArgs} args - Arguments to create a ClientLoginToken.
     * @example
     * // Create one ClientLoginToken
     * const ClientLoginToken = await prisma.clientLoginToken.create({
     *   data: {
     *     // ... data to create a ClientLoginToken
     *   }
     * })
     * 
     */
    create<T extends ClientLoginTokenCreateArgs>(args: SelectSubset<T, ClientLoginTokenCreateArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientLoginTokens.
     * @param {ClientLoginTokenCreateManyArgs} args - Arguments to create many ClientLoginTokens.
     * @example
     * // Create many ClientLoginTokens
     * const clientLoginToken = await prisma.clientLoginToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientLoginTokenCreateManyArgs>(args?: SelectSubset<T, ClientLoginTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientLoginTokens and returns the data saved in the database.
     * @param {ClientLoginTokenCreateManyAndReturnArgs} args - Arguments to create many ClientLoginTokens.
     * @example
     * // Create many ClientLoginTokens
     * const clientLoginToken = await prisma.clientLoginToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientLoginTokens and only return the `id`
     * const clientLoginTokenWithIdOnly = await prisma.clientLoginToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientLoginTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientLoginTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientLoginToken.
     * @param {ClientLoginTokenDeleteArgs} args - Arguments to delete one ClientLoginToken.
     * @example
     * // Delete one ClientLoginToken
     * const ClientLoginToken = await prisma.clientLoginToken.delete({
     *   where: {
     *     // ... filter to delete one ClientLoginToken
     *   }
     * })
     * 
     */
    delete<T extends ClientLoginTokenDeleteArgs>(args: SelectSubset<T, ClientLoginTokenDeleteArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientLoginToken.
     * @param {ClientLoginTokenUpdateArgs} args - Arguments to update one ClientLoginToken.
     * @example
     * // Update one ClientLoginToken
     * const clientLoginToken = await prisma.clientLoginToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientLoginTokenUpdateArgs>(args: SelectSubset<T, ClientLoginTokenUpdateArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientLoginTokens.
     * @param {ClientLoginTokenDeleteManyArgs} args - Arguments to filter ClientLoginTokens to delete.
     * @example
     * // Delete a few ClientLoginTokens
     * const { count } = await prisma.clientLoginToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientLoginTokenDeleteManyArgs>(args?: SelectSubset<T, ClientLoginTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientLoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientLoginTokens
     * const clientLoginToken = await prisma.clientLoginToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientLoginTokenUpdateManyArgs>(args: SelectSubset<T, ClientLoginTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientLoginTokens and returns the data updated in the database.
     * @param {ClientLoginTokenUpdateManyAndReturnArgs} args - Arguments to update many ClientLoginTokens.
     * @example
     * // Update many ClientLoginTokens
     * const clientLoginToken = await prisma.clientLoginToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientLoginTokens and only return the `id`
     * const clientLoginTokenWithIdOnly = await prisma.clientLoginToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientLoginTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientLoginTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientLoginToken.
     * @param {ClientLoginTokenUpsertArgs} args - Arguments to update or create a ClientLoginToken.
     * @example
     * // Update or create a ClientLoginToken
     * const clientLoginToken = await prisma.clientLoginToken.upsert({
     *   create: {
     *     // ... data to create a ClientLoginToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientLoginToken we want to update
     *   }
     * })
     */
    upsert<T extends ClientLoginTokenUpsertArgs>(args: SelectSubset<T, ClientLoginTokenUpsertArgs<ExtArgs>>): Prisma__ClientLoginTokenClient<$Result.GetResult<Prisma.$ClientLoginTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientLoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenCountArgs} args - Arguments to filter ClientLoginTokens to count.
     * @example
     * // Count the number of ClientLoginTokens
     * const count = await prisma.clientLoginToken.count({
     *   where: {
     *     // ... the filter for the ClientLoginTokens we want to count
     *   }
     * })
    **/
    count<T extends ClientLoginTokenCountArgs>(
      args?: Subset<T, ClientLoginTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientLoginTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientLoginToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientLoginTokenAggregateArgs>(args: Subset<T, ClientLoginTokenAggregateArgs>): Prisma.PrismaPromise<GetClientLoginTokenAggregateType<T>>

    /**
     * Group by ClientLoginToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientLoginTokenGroupByArgs} args - Group by arguments.
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
      T extends ClientLoginTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientLoginTokenGroupByArgs['orderBy'] }
        : { orderBy?: ClientLoginTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientLoginTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientLoginTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientLoginToken model
   */
  readonly fields: ClientLoginTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientLoginToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientLoginTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ClientLoginToken model
   */
  interface ClientLoginTokenFieldRefs {
    readonly id: FieldRef<"ClientLoginToken", 'String'>
    readonly createdAt: FieldRef<"ClientLoginToken", 'DateTime'>
    readonly clientAccountId: FieldRef<"ClientLoginToken", 'String'>
    readonly token: FieldRef<"ClientLoginToken", 'String'>
    readonly expiresAt: FieldRef<"ClientLoginToken", 'DateTime'>
    readonly usedAt: FieldRef<"ClientLoginToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientLoginToken findUnique
   */
  export type ClientLoginTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * Filter, which ClientLoginToken to fetch.
     */
    where: ClientLoginTokenWhereUniqueInput
  }

  /**
   * ClientLoginToken findUniqueOrThrow
   */
  export type ClientLoginTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * Filter, which ClientLoginToken to fetch.
     */
    where: ClientLoginTokenWhereUniqueInput
  }

  /**
   * ClientLoginToken findFirst
   */
  export type ClientLoginTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * Filter, which ClientLoginToken to fetch.
     */
    where?: ClientLoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLoginTokens to fetch.
     */
    orderBy?: ClientLoginTokenOrderByWithRelationInput | ClientLoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientLoginTokens.
     */
    cursor?: ClientLoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientLoginTokens.
     */
    distinct?: ClientLoginTokenScalarFieldEnum | ClientLoginTokenScalarFieldEnum[]
  }

  /**
   * ClientLoginToken findFirstOrThrow
   */
  export type ClientLoginTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * Filter, which ClientLoginToken to fetch.
     */
    where?: ClientLoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLoginTokens to fetch.
     */
    orderBy?: ClientLoginTokenOrderByWithRelationInput | ClientLoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientLoginTokens.
     */
    cursor?: ClientLoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientLoginTokens.
     */
    distinct?: ClientLoginTokenScalarFieldEnum | ClientLoginTokenScalarFieldEnum[]
  }

  /**
   * ClientLoginToken findMany
   */
  export type ClientLoginTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * Filter, which ClientLoginTokens to fetch.
     */
    where?: ClientLoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientLoginTokens to fetch.
     */
    orderBy?: ClientLoginTokenOrderByWithRelationInput | ClientLoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientLoginTokens.
     */
    cursor?: ClientLoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientLoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientLoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientLoginTokens.
     */
    distinct?: ClientLoginTokenScalarFieldEnum | ClientLoginTokenScalarFieldEnum[]
  }

  /**
   * ClientLoginToken create
   */
  export type ClientLoginTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a ClientLoginToken.
     */
    data: XOR<ClientLoginTokenCreateInput, ClientLoginTokenUncheckedCreateInput>
  }

  /**
   * ClientLoginToken createMany
   */
  export type ClientLoginTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientLoginTokens.
     */
    data: ClientLoginTokenCreateManyInput | ClientLoginTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientLoginToken createManyAndReturn
   */
  export type ClientLoginTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ClientLoginTokens.
     */
    data: ClientLoginTokenCreateManyInput | ClientLoginTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientLoginToken update
   */
  export type ClientLoginTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a ClientLoginToken.
     */
    data: XOR<ClientLoginTokenUpdateInput, ClientLoginTokenUncheckedUpdateInput>
    /**
     * Choose, which ClientLoginToken to update.
     */
    where: ClientLoginTokenWhereUniqueInput
  }

  /**
   * ClientLoginToken updateMany
   */
  export type ClientLoginTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientLoginTokens.
     */
    data: XOR<ClientLoginTokenUpdateManyMutationInput, ClientLoginTokenUncheckedUpdateManyInput>
    /**
     * Filter which ClientLoginTokens to update
     */
    where?: ClientLoginTokenWhereInput
    /**
     * Limit how many ClientLoginTokens to update.
     */
    limit?: number
  }

  /**
   * ClientLoginToken updateManyAndReturn
   */
  export type ClientLoginTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * The data used to update ClientLoginTokens.
     */
    data: XOR<ClientLoginTokenUpdateManyMutationInput, ClientLoginTokenUncheckedUpdateManyInput>
    /**
     * Filter which ClientLoginTokens to update
     */
    where?: ClientLoginTokenWhereInput
    /**
     * Limit how many ClientLoginTokens to update.
     */
    limit?: number
  }

  /**
   * ClientLoginToken upsert
   */
  export type ClientLoginTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the ClientLoginToken to update in case it exists.
     */
    where: ClientLoginTokenWhereUniqueInput
    /**
     * In case the ClientLoginToken found by the `where` argument doesn't exist, create a new ClientLoginToken with this data.
     */
    create: XOR<ClientLoginTokenCreateInput, ClientLoginTokenUncheckedCreateInput>
    /**
     * In case the ClientLoginToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientLoginTokenUpdateInput, ClientLoginTokenUncheckedUpdateInput>
  }

  /**
   * ClientLoginToken delete
   */
  export type ClientLoginTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
    /**
     * Filter which ClientLoginToken to delete.
     */
    where: ClientLoginTokenWhereUniqueInput
  }

  /**
   * ClientLoginToken deleteMany
   */
  export type ClientLoginTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientLoginTokens to delete
     */
    where?: ClientLoginTokenWhereInput
    /**
     * Limit how many ClientLoginTokens to delete.
     */
    limit?: number
  }

  /**
   * ClientLoginToken without action
   */
  export type ClientLoginTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientLoginToken
     */
    select?: ClientLoginTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientLoginToken
     */
    omit?: ClientLoginTokenOmit<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    totalSessions: number | null
    usedSessions: number | null
  }

  export type PackageSumAggregateOutputType = {
    totalSessions: number | null
    usedSessions: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    leadId: string | null
    paymentId: string | null
    planType: string | null
    totalSessions: number | null
    usedSessions: number | null
    periodStart: Date | null
    periodEnd: Date | null
    status: string | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    leadId: string | null
    paymentId: string | null
    planType: string | null
    totalSessions: number | null
    usedSessions: number | null
    periodStart: Date | null
    periodEnd: Date | null
    status: string | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    createdAt: number
    leadId: number
    paymentId: number
    planType: number
    totalSessions: number
    usedSessions: number
    periodStart: number
    periodEnd: number
    status: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    totalSessions?: true
    usedSessions?: true
  }

  export type PackageSumAggregateInputType = {
    totalSessions?: true
    usedSessions?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    createdAt?: true
    leadId?: true
    paymentId?: true
    planType?: true
    totalSessions?: true
    usedSessions?: true
    periodStart?: true
    periodEnd?: true
    status?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    leadId?: true
    paymentId?: true
    planType?: true
    totalSessions?: true
    usedSessions?: true
    periodStart?: true
    periodEnd?: true
    status?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    createdAt?: true
    leadId?: true
    paymentId?: true
    planType?: true
    totalSessions?: true
    usedSessions?: true
    periodStart?: true
    periodEnd?: true
    status?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    createdAt: Date
    leadId: string
    paymentId: string
    planType: string
    totalSessions: number
    usedSessions: number
    periodStart: Date
    periodEnd: Date
    status: string
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    paymentId?: boolean
    planType?: boolean
    totalSessions?: boolean
    usedSessions?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    scheduledSessions?: boolean | Package$scheduledSessionsArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    paymentId?: boolean
    planType?: boolean
    totalSessions?: boolean
    usedSessions?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    paymentId?: boolean
    planType?: boolean
    totalSessions?: boolean
    usedSessions?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    leadId?: boolean
    paymentId?: boolean
    planType?: boolean
    totalSessions?: boolean
    usedSessions?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    status?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "leadId" | "paymentId" | "planType" | "totalSessions" | "usedSessions" | "periodStart" | "periodEnd" | "status", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    scheduledSessions?: boolean | Package$scheduledSessionsArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>
      scheduledSessions: Prisma.$ScheduledSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      leadId: string
      paymentId: string
      planType: string
      totalSessions: number
      usedSessions: number
      periodStart: Date
      periodEnd: Date
      status: string
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduledSessions<T extends Package$scheduledSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Package$scheduledSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly leadId: FieldRef<"Package", 'String'>
    readonly paymentId: FieldRef<"Package", 'String'>
    readonly planType: FieldRef<"Package", 'String'>
    readonly totalSessions: FieldRef<"Package", 'Int'>
    readonly usedSessions: FieldRef<"Package", 'Int'>
    readonly periodStart: FieldRef<"Package", 'DateTime'>
    readonly periodEnd: FieldRef<"Package", 'DateTime'>
    readonly status: FieldRef<"Package", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.scheduledSessions
   */
  export type Package$scheduledSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    where?: ScheduledSessionWhereInput
    orderBy?: ScheduledSessionOrderByWithRelationInput | ScheduledSessionOrderByWithRelationInput[]
    cursor?: ScheduledSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledSessionScalarFieldEnum | ScheduledSessionScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledSession
   */

  export type AggregateScheduledSession = {
    _count: ScheduledSessionCountAggregateOutputType | null
    _min: ScheduledSessionMinAggregateOutputType | null
    _max: ScheduledSessionMaxAggregateOutputType | null
  }

  export type ScheduledSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    packageId: string | null
    scheduledAt: Date | null
    status: string | null
    therapist: string | null
    notes: string | null
    calBookingUid: string | null
  }

  export type ScheduledSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    packageId: string | null
    scheduledAt: Date | null
    status: string | null
    therapist: string | null
    notes: string | null
    calBookingUid: string | null
  }

  export type ScheduledSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    packageId: number
    scheduledAt: number
    status: number
    therapist: number
    notes: number
    calBookingUid: number
    _all: number
  }


  export type ScheduledSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    packageId?: true
    scheduledAt?: true
    status?: true
    therapist?: true
    notes?: true
    calBookingUid?: true
  }

  export type ScheduledSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    packageId?: true
    scheduledAt?: true
    status?: true
    therapist?: true
    notes?: true
    calBookingUid?: true
  }

  export type ScheduledSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    packageId?: true
    scheduledAt?: true
    status?: true
    therapist?: true
    notes?: true
    calBookingUid?: true
    _all?: true
  }

  export type ScheduledSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledSession to aggregate.
     */
    where?: ScheduledSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledSessions to fetch.
     */
    orderBy?: ScheduledSessionOrderByWithRelationInput | ScheduledSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledSessions
    **/
    _count?: true | ScheduledSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledSessionMaxAggregateInputType
  }

  export type GetScheduledSessionAggregateType<T extends ScheduledSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledSession[P]>
      : GetScalarType<T[P], AggregateScheduledSession[P]>
  }




  export type ScheduledSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledSessionWhereInput
    orderBy?: ScheduledSessionOrderByWithAggregationInput | ScheduledSessionOrderByWithAggregationInput[]
    by: ScheduledSessionScalarFieldEnum[] | ScheduledSessionScalarFieldEnum
    having?: ScheduledSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledSessionCountAggregateInputType | true
    _min?: ScheduledSessionMinAggregateInputType
    _max?: ScheduledSessionMaxAggregateInputType
  }

  export type ScheduledSessionGroupByOutputType = {
    id: string
    createdAt: Date
    packageId: string
    scheduledAt: Date
    status: string
    therapist: string | null
    notes: string | null
    calBookingUid: string | null
    _count: ScheduledSessionCountAggregateOutputType | null
    _min: ScheduledSessionMinAggregateOutputType | null
    _max: ScheduledSessionMaxAggregateOutputType | null
  }

  type GetScheduledSessionGroupByPayload<T extends ScheduledSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledSessionGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    packageId?: boolean
    scheduledAt?: boolean
    status?: boolean
    therapist?: boolean
    notes?: boolean
    calBookingUid?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledSession"]>

  export type ScheduledSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    packageId?: boolean
    scheduledAt?: boolean
    status?: boolean
    therapist?: boolean
    notes?: boolean
    calBookingUid?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledSession"]>

  export type ScheduledSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    packageId?: boolean
    scheduledAt?: boolean
    status?: boolean
    therapist?: boolean
    notes?: boolean
    calBookingUid?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledSession"]>

  export type ScheduledSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    packageId?: boolean
    scheduledAt?: boolean
    status?: boolean
    therapist?: boolean
    notes?: boolean
    calBookingUid?: boolean
  }

  export type ScheduledSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "packageId" | "scheduledAt" | "status" | "therapist" | "notes" | "calBookingUid", ExtArgs["result"]["scheduledSession"]>
  export type ScheduledSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type ScheduledSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type ScheduledSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $ScheduledSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledSession"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      packageId: string
      scheduledAt: Date
      status: string
      therapist: string | null
      notes: string | null
      calBookingUid: string | null
    }, ExtArgs["result"]["scheduledSession"]>
    composites: {}
  }

  type ScheduledSessionGetPayload<S extends boolean | null | undefined | ScheduledSessionDefaultArgs> = $Result.GetResult<Prisma.$ScheduledSessionPayload, S>

  type ScheduledSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledSessionCountAggregateInputType | true
    }

  export interface ScheduledSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledSession'], meta: { name: 'ScheduledSession' } }
    /**
     * Find zero or one ScheduledSession that matches the filter.
     * @param {ScheduledSessionFindUniqueArgs} args - Arguments to find a ScheduledSession
     * @example
     * // Get one ScheduledSession
     * const scheduledSession = await prisma.scheduledSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledSessionFindUniqueArgs>(args: SelectSubset<T, ScheduledSessionFindUniqueArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledSessionFindUniqueOrThrowArgs} args - Arguments to find a ScheduledSession
     * @example
     * // Get one ScheduledSession
     * const scheduledSession = await prisma.scheduledSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionFindFirstArgs} args - Arguments to find a ScheduledSession
     * @example
     * // Get one ScheduledSession
     * const scheduledSession = await prisma.scheduledSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledSessionFindFirstArgs>(args?: SelectSubset<T, ScheduledSessionFindFirstArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionFindFirstOrThrowArgs} args - Arguments to find a ScheduledSession
     * @example
     * // Get one ScheduledSession
     * const scheduledSession = await prisma.scheduledSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledSessions
     * const scheduledSessions = await prisma.scheduledSession.findMany()
     * 
     * // Get first 10 ScheduledSessions
     * const scheduledSessions = await prisma.scheduledSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledSessionWithIdOnly = await prisma.scheduledSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledSessionFindManyArgs>(args?: SelectSubset<T, ScheduledSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledSession.
     * @param {ScheduledSessionCreateArgs} args - Arguments to create a ScheduledSession.
     * @example
     * // Create one ScheduledSession
     * const ScheduledSession = await prisma.scheduledSession.create({
     *   data: {
     *     // ... data to create a ScheduledSession
     *   }
     * })
     * 
     */
    create<T extends ScheduledSessionCreateArgs>(args: SelectSubset<T, ScheduledSessionCreateArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledSessions.
     * @param {ScheduledSessionCreateManyArgs} args - Arguments to create many ScheduledSessions.
     * @example
     * // Create many ScheduledSessions
     * const scheduledSession = await prisma.scheduledSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledSessionCreateManyArgs>(args?: SelectSubset<T, ScheduledSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledSessions and returns the data saved in the database.
     * @param {ScheduledSessionCreateManyAndReturnArgs} args - Arguments to create many ScheduledSessions.
     * @example
     * // Create many ScheduledSessions
     * const scheduledSession = await prisma.scheduledSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledSessions and only return the `id`
     * const scheduledSessionWithIdOnly = await prisma.scheduledSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledSession.
     * @param {ScheduledSessionDeleteArgs} args - Arguments to delete one ScheduledSession.
     * @example
     * // Delete one ScheduledSession
     * const ScheduledSession = await prisma.scheduledSession.delete({
     *   where: {
     *     // ... filter to delete one ScheduledSession
     *   }
     * })
     * 
     */
    delete<T extends ScheduledSessionDeleteArgs>(args: SelectSubset<T, ScheduledSessionDeleteArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledSession.
     * @param {ScheduledSessionUpdateArgs} args - Arguments to update one ScheduledSession.
     * @example
     * // Update one ScheduledSession
     * const scheduledSession = await prisma.scheduledSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledSessionUpdateArgs>(args: SelectSubset<T, ScheduledSessionUpdateArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledSessions.
     * @param {ScheduledSessionDeleteManyArgs} args - Arguments to filter ScheduledSessions to delete.
     * @example
     * // Delete a few ScheduledSessions
     * const { count } = await prisma.scheduledSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledSessionDeleteManyArgs>(args?: SelectSubset<T, ScheduledSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledSessions
     * const scheduledSession = await prisma.scheduledSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledSessionUpdateManyArgs>(args: SelectSubset<T, ScheduledSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledSessions and returns the data updated in the database.
     * @param {ScheduledSessionUpdateManyAndReturnArgs} args - Arguments to update many ScheduledSessions.
     * @example
     * // Update many ScheduledSessions
     * const scheduledSession = await prisma.scheduledSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledSessions and only return the `id`
     * const scheduledSessionWithIdOnly = await prisma.scheduledSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduledSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledSession.
     * @param {ScheduledSessionUpsertArgs} args - Arguments to update or create a ScheduledSession.
     * @example
     * // Update or create a ScheduledSession
     * const scheduledSession = await prisma.scheduledSession.upsert({
     *   create: {
     *     // ... data to create a ScheduledSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledSession we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledSessionUpsertArgs>(args: SelectSubset<T, ScheduledSessionUpsertArgs<ExtArgs>>): Prisma__ScheduledSessionClient<$Result.GetResult<Prisma.$ScheduledSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionCountArgs} args - Arguments to filter ScheduledSessions to count.
     * @example
     * // Count the number of ScheduledSessions
     * const count = await prisma.scheduledSession.count({
     *   where: {
     *     // ... the filter for the ScheduledSessions we want to count
     *   }
     * })
    **/
    count<T extends ScheduledSessionCountArgs>(
      args?: Subset<T, ScheduledSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduledSessionAggregateArgs>(args: Subset<T, ScheduledSessionAggregateArgs>): Prisma.PrismaPromise<GetScheduledSessionAggregateType<T>>

    /**
     * Group by ScheduledSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledSessionGroupByArgs} args - Group by arguments.
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
      T extends ScheduledSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledSessionGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduledSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledSession model
   */
  readonly fields: ScheduledSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScheduledSession model
   */
  interface ScheduledSessionFieldRefs {
    readonly id: FieldRef<"ScheduledSession", 'String'>
    readonly createdAt: FieldRef<"ScheduledSession", 'DateTime'>
    readonly packageId: FieldRef<"ScheduledSession", 'String'>
    readonly scheduledAt: FieldRef<"ScheduledSession", 'DateTime'>
    readonly status: FieldRef<"ScheduledSession", 'String'>
    readonly therapist: FieldRef<"ScheduledSession", 'String'>
    readonly notes: FieldRef<"ScheduledSession", 'String'>
    readonly calBookingUid: FieldRef<"ScheduledSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledSession findUnique
   */
  export type ScheduledSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledSession to fetch.
     */
    where: ScheduledSessionWhereUniqueInput
  }

  /**
   * ScheduledSession findUniqueOrThrow
   */
  export type ScheduledSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledSession to fetch.
     */
    where: ScheduledSessionWhereUniqueInput
  }

  /**
   * ScheduledSession findFirst
   */
  export type ScheduledSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledSession to fetch.
     */
    where?: ScheduledSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledSessions to fetch.
     */
    orderBy?: ScheduledSessionOrderByWithRelationInput | ScheduledSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledSessions.
     */
    cursor?: ScheduledSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledSessions.
     */
    distinct?: ScheduledSessionScalarFieldEnum | ScheduledSessionScalarFieldEnum[]
  }

  /**
   * ScheduledSession findFirstOrThrow
   */
  export type ScheduledSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledSession to fetch.
     */
    where?: ScheduledSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledSessions to fetch.
     */
    orderBy?: ScheduledSessionOrderByWithRelationInput | ScheduledSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledSessions.
     */
    cursor?: ScheduledSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledSessions.
     */
    distinct?: ScheduledSessionScalarFieldEnum | ScheduledSessionScalarFieldEnum[]
  }

  /**
   * ScheduledSession findMany
   */
  export type ScheduledSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledSessions to fetch.
     */
    where?: ScheduledSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledSessions to fetch.
     */
    orderBy?: ScheduledSessionOrderByWithRelationInput | ScheduledSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledSessions.
     */
    cursor?: ScheduledSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledSessions.
     */
    distinct?: ScheduledSessionScalarFieldEnum | ScheduledSessionScalarFieldEnum[]
  }

  /**
   * ScheduledSession create
   */
  export type ScheduledSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledSession.
     */
    data: XOR<ScheduledSessionCreateInput, ScheduledSessionUncheckedCreateInput>
  }

  /**
   * ScheduledSession createMany
   */
  export type ScheduledSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledSessions.
     */
    data: ScheduledSessionCreateManyInput | ScheduledSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduledSession createManyAndReturn
   */
  export type ScheduledSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledSessions.
     */
    data: ScheduledSessionCreateManyInput | ScheduledSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledSession update
   */
  export type ScheduledSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledSession.
     */
    data: XOR<ScheduledSessionUpdateInput, ScheduledSessionUncheckedUpdateInput>
    /**
     * Choose, which ScheduledSession to update.
     */
    where: ScheduledSessionWhereUniqueInput
  }

  /**
   * ScheduledSession updateMany
   */
  export type ScheduledSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledSessions.
     */
    data: XOR<ScheduledSessionUpdateManyMutationInput, ScheduledSessionUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledSessions to update
     */
    where?: ScheduledSessionWhereInput
    /**
     * Limit how many ScheduledSessions to update.
     */
    limit?: number
  }

  /**
   * ScheduledSession updateManyAndReturn
   */
  export type ScheduledSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledSessions.
     */
    data: XOR<ScheduledSessionUpdateManyMutationInput, ScheduledSessionUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledSessions to update
     */
    where?: ScheduledSessionWhereInput
    /**
     * Limit how many ScheduledSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledSession upsert
   */
  export type ScheduledSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledSession to update in case it exists.
     */
    where: ScheduledSessionWhereUniqueInput
    /**
     * In case the ScheduledSession found by the `where` argument doesn't exist, create a new ScheduledSession with this data.
     */
    create: XOR<ScheduledSessionCreateInput, ScheduledSessionUncheckedCreateInput>
    /**
     * In case the ScheduledSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledSessionUpdateInput, ScheduledSessionUncheckedUpdateInput>
  }

  /**
   * ScheduledSession delete
   */
  export type ScheduledSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
    /**
     * Filter which ScheduledSession to delete.
     */
    where: ScheduledSessionWhereUniqueInput
  }

  /**
   * ScheduledSession deleteMany
   */
  export type ScheduledSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledSessions to delete
     */
    where?: ScheduledSessionWhereInput
    /**
     * Limit how many ScheduledSessions to delete.
     */
    limit?: number
  }

  /**
   * ScheduledSession without action
   */
  export type ScheduledSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledSession
     */
    select?: ScheduledSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledSession
     */
    omit?: ScheduledSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledSessionInclude<ExtArgs> | null
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


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    leadId: 'leadId',
    amountKobo: 'amountKobo',
    currency: 'currency',
    status: 'status',
    method: 'method',
    reference: 'reference',
    paidAt: 'paidAt',
    notes: 'notes'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ClientAccountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    leadId: 'leadId',
    email: 'email'
  };

  export type ClientAccountScalarFieldEnum = (typeof ClientAccountScalarFieldEnum)[keyof typeof ClientAccountScalarFieldEnum]


  export const ClientLoginTokenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    clientAccountId: 'clientAccountId',
    token: 'token',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt'
  };

  export type ClientLoginTokenScalarFieldEnum = (typeof ClientLoginTokenScalarFieldEnum)[keyof typeof ClientLoginTokenScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    leadId: 'leadId',
    paymentId: 'paymentId',
    planType: 'planType',
    totalSessions: 'totalSessions',
    usedSessions: 'usedSessions',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    status: 'status'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const ScheduledSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    packageId: 'packageId',
    scheduledAt: 'scheduledAt',
    status: 'status',
    therapist: 'therapist',
    notes: 'notes',
    calBookingUid: 'calBookingUid'
  };

  export type ScheduledSessionScalarFieldEnum = (typeof ScheduledSessionScalarFieldEnum)[keyof typeof ScheduledSessionScalarFieldEnum]


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


  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    clientAccount?: XOR<ClientAccountNullableScalarRelationFilter, ClientAccountWhereInput> | null
    packages?: PackageListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    clientAccount?: ClientAccountOrderByWithRelationInput
    packages?: PackageOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    clientAccount?: XOR<ClientAccountNullableScalarRelationFilter, ClientAccountWhereInput> | null
    packages?: PackageListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    leadId?: StringFilter<"Payment"> | string
    amountKobo?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    package?: PackageOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    leadId?: StringFilter<"Payment"> | string
    amountKobo?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
  }, "id" | "reference">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    leadId?: StringWithAggregatesFilter<"Payment"> | string
    amountKobo?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringWithAggregatesFilter<"Payment"> | string
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type ClientAccountWhereInput = {
    AND?: ClientAccountWhereInput | ClientAccountWhereInput[]
    OR?: ClientAccountWhereInput[]
    NOT?: ClientAccountWhereInput | ClientAccountWhereInput[]
    id?: StringFilter<"ClientAccount"> | string
    createdAt?: DateTimeFilter<"ClientAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ClientAccount"> | Date | string
    leadId?: StringFilter<"ClientAccount"> | string
    email?: StringFilter<"ClientAccount"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type ClientAccountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leadId?: SortOrder
    email?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type ClientAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leadId?: string
    email?: string
    AND?: ClientAccountWhereInput | ClientAccountWhereInput[]
    OR?: ClientAccountWhereInput[]
    NOT?: ClientAccountWhereInput | ClientAccountWhereInput[]
    createdAt?: DateTimeFilter<"ClientAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ClientAccount"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id" | "leadId" | "email">

  export type ClientAccountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leadId?: SortOrder
    email?: SortOrder
    _count?: ClientAccountCountOrderByAggregateInput
    _max?: ClientAccountMaxOrderByAggregateInput
    _min?: ClientAccountMinOrderByAggregateInput
  }

  export type ClientAccountScalarWhereWithAggregatesInput = {
    AND?: ClientAccountScalarWhereWithAggregatesInput | ClientAccountScalarWhereWithAggregatesInput[]
    OR?: ClientAccountScalarWhereWithAggregatesInput[]
    NOT?: ClientAccountScalarWhereWithAggregatesInput | ClientAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClientAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientAccount"> | Date | string
    leadId?: StringWithAggregatesFilter<"ClientAccount"> | string
    email?: StringWithAggregatesFilter<"ClientAccount"> | string
  }

  export type ClientLoginTokenWhereInput = {
    AND?: ClientLoginTokenWhereInput | ClientLoginTokenWhereInput[]
    OR?: ClientLoginTokenWhereInput[]
    NOT?: ClientLoginTokenWhereInput | ClientLoginTokenWhereInput[]
    id?: StringFilter<"ClientLoginToken"> | string
    createdAt?: DateTimeFilter<"ClientLoginToken"> | Date | string
    clientAccountId?: StringFilter<"ClientLoginToken"> | string
    token?: StringFilter<"ClientLoginToken"> | string
    expiresAt?: DateTimeFilter<"ClientLoginToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"ClientLoginToken"> | Date | string | null
  }

  export type ClientLoginTokenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clientAccountId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
  }

  export type ClientLoginTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ClientLoginTokenWhereInput | ClientLoginTokenWhereInput[]
    OR?: ClientLoginTokenWhereInput[]
    NOT?: ClientLoginTokenWhereInput | ClientLoginTokenWhereInput[]
    createdAt?: DateTimeFilter<"ClientLoginToken"> | Date | string
    clientAccountId?: StringFilter<"ClientLoginToken"> | string
    expiresAt?: DateTimeFilter<"ClientLoginToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"ClientLoginToken"> | Date | string | null
  }, "id" | "token">

  export type ClientLoginTokenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clientAccountId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    _count?: ClientLoginTokenCountOrderByAggregateInput
    _max?: ClientLoginTokenMaxOrderByAggregateInput
    _min?: ClientLoginTokenMinOrderByAggregateInput
  }

  export type ClientLoginTokenScalarWhereWithAggregatesInput = {
    AND?: ClientLoginTokenScalarWhereWithAggregatesInput | ClientLoginTokenScalarWhereWithAggregatesInput[]
    OR?: ClientLoginTokenScalarWhereWithAggregatesInput[]
    NOT?: ClientLoginTokenScalarWhereWithAggregatesInput | ClientLoginTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientLoginToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClientLoginToken"> | Date | string
    clientAccountId?: StringWithAggregatesFilter<"ClientLoginToken"> | string
    token?: StringWithAggregatesFilter<"ClientLoginToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ClientLoginToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"ClientLoginToken"> | Date | string | null
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    createdAt?: DateTimeFilter<"Package"> | Date | string
    leadId?: StringFilter<"Package"> | string
    paymentId?: StringFilter<"Package"> | string
    planType?: StringFilter<"Package"> | string
    totalSessions?: IntFilter<"Package"> | number
    usedSessions?: IntFilter<"Package"> | number
    periodStart?: DateTimeFilter<"Package"> | Date | string
    periodEnd?: DateTimeFilter<"Package"> | Date | string
    status?: StringFilter<"Package"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    scheduledSessions?: ScheduledSessionListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    paymentId?: SortOrder
    planType?: SortOrder
    totalSessions?: SortOrder
    usedSessions?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
    lead?: LeadOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    scheduledSessions?: ScheduledSessionOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    createdAt?: DateTimeFilter<"Package"> | Date | string
    leadId?: StringFilter<"Package"> | string
    planType?: StringFilter<"Package"> | string
    totalSessions?: IntFilter<"Package"> | number
    usedSessions?: IntFilter<"Package"> | number
    periodStart?: DateTimeFilter<"Package"> | Date | string
    periodEnd?: DateTimeFilter<"Package"> | Date | string
    status?: StringFilter<"Package"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    scheduledSessions?: ScheduledSessionListRelationFilter
  }, "id" | "paymentId">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    paymentId?: SortOrder
    planType?: SortOrder
    totalSessions?: SortOrder
    usedSessions?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    leadId?: StringWithAggregatesFilter<"Package"> | string
    paymentId?: StringWithAggregatesFilter<"Package"> | string
    planType?: StringWithAggregatesFilter<"Package"> | string
    totalSessions?: IntWithAggregatesFilter<"Package"> | number
    usedSessions?: IntWithAggregatesFilter<"Package"> | number
    periodStart?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    status?: StringWithAggregatesFilter<"Package"> | string
  }

  export type ScheduledSessionWhereInput = {
    AND?: ScheduledSessionWhereInput | ScheduledSessionWhereInput[]
    OR?: ScheduledSessionWhereInput[]
    NOT?: ScheduledSessionWhereInput | ScheduledSessionWhereInput[]
    id?: StringFilter<"ScheduledSession"> | string
    createdAt?: DateTimeFilter<"ScheduledSession"> | Date | string
    packageId?: StringFilter<"ScheduledSession"> | string
    scheduledAt?: DateTimeFilter<"ScheduledSession"> | Date | string
    status?: StringFilter<"ScheduledSession"> | string
    therapist?: StringNullableFilter<"ScheduledSession"> | string | null
    notes?: StringNullableFilter<"ScheduledSession"> | string | null
    calBookingUid?: StringNullableFilter<"ScheduledSession"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type ScheduledSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packageId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    therapist?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    calBookingUid?: SortOrderInput | SortOrder
    package?: PackageOrderByWithRelationInput
  }

  export type ScheduledSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledSessionWhereInput | ScheduledSessionWhereInput[]
    OR?: ScheduledSessionWhereInput[]
    NOT?: ScheduledSessionWhereInput | ScheduledSessionWhereInput[]
    createdAt?: DateTimeFilter<"ScheduledSession"> | Date | string
    packageId?: StringFilter<"ScheduledSession"> | string
    scheduledAt?: DateTimeFilter<"ScheduledSession"> | Date | string
    status?: StringFilter<"ScheduledSession"> | string
    therapist?: StringNullableFilter<"ScheduledSession"> | string | null
    notes?: StringNullableFilter<"ScheduledSession"> | string | null
    calBookingUid?: StringNullableFilter<"ScheduledSession"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type ScheduledSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packageId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    therapist?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    calBookingUid?: SortOrderInput | SortOrder
    _count?: ScheduledSessionCountOrderByAggregateInput
    _max?: ScheduledSessionMaxOrderByAggregateInput
    _min?: ScheduledSessionMinOrderByAggregateInput
  }

  export type ScheduledSessionScalarWhereWithAggregatesInput = {
    AND?: ScheduledSessionScalarWhereWithAggregatesInput | ScheduledSessionScalarWhereWithAggregatesInput[]
    OR?: ScheduledSessionScalarWhereWithAggregatesInput[]
    NOT?: ScheduledSessionScalarWhereWithAggregatesInput | ScheduledSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledSession"> | Date | string
    packageId?: StringWithAggregatesFilter<"ScheduledSession"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"ScheduledSession"> | Date | string
    status?: StringWithAggregatesFilter<"ScheduledSession"> | string
    therapist?: StringNullableWithAggregatesFilter<"ScheduledSession"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ScheduledSession"> | string | null
    calBookingUid?: StringNullableWithAggregatesFilter<"ScheduledSession"> | string | null
  }

  export type LeadCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    clientAccount?: ClientAccountCreateNestedOneWithoutLeadInput
    packages?: PackageCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    clientAccount?: ClientAccountUncheckedCreateNestedOneWithoutLeadInput
    packages?: PackageUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    clientAccount?: ClientAccountUpdateOneWithoutLeadNestedInput
    packages?: PackageUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    clientAccount?: ClientAccountUncheckedUpdateOneWithoutLeadNestedInput
    packages?: PackageUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    amountKobo: number
    currency?: string
    status?: string
    method?: string
    reference?: string | null
    paidAt?: Date | string | null
    notes?: string | null
    package?: PackageCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    amountKobo: number
    currency?: string
    status?: string
    method?: string
    reference?: string | null
    paidAt?: Date | string | null
    notes?: string | null
    package?: PackageUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    amountKobo: number
    currency?: string
    status?: string
    method?: string
    reference?: string | null
    paidAt?: Date | string | null
    notes?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientAccountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    lead: LeadCreateNestedOneWithoutClientAccountInput
  }

  export type ClientAccountUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leadId: string
    email: string
  }

  export type ClientAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutClientAccountNestedInput
  }

  export type ClientAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientAccountCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leadId: string
    email: string
  }

  export type ClientAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientLoginTokenCreateInput = {
    id?: string
    createdAt?: Date | string
    clientAccountId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type ClientLoginTokenUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    clientAccountId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type ClientLoginTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientAccountId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientLoginTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientAccountId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientLoginTokenCreateManyInput = {
    id?: string
    createdAt?: Date | string
    clientAccountId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type ClientLoginTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientAccountId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientLoginTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientAccountId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackageCreateInput = {
    id?: string
    createdAt?: Date | string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    lead: LeadCreateNestedOneWithoutPackagesInput
    payment: PaymentCreateNestedOneWithoutPackageInput
    scheduledSessions?: ScheduledSessionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    paymentId: string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    scheduledSessions?: ScheduledSessionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutPackagesNestedInput
    payment?: PaymentUpdateOneRequiredWithoutPackageNestedInput
    scheduledSessions?: ScheduledSessionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledSessions?: ScheduledSessionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    paymentId: string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    scheduledAt: Date | string
    status?: string
    therapist?: string | null
    notes?: string | null
    calBookingUid?: string | null
    package: PackageCreateNestedOneWithoutScheduledSessionsInput
  }

  export type ScheduledSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    packageId: string
    scheduledAt: Date | string
    status?: string
    therapist?: string | null
    notes?: string | null
    calBookingUid?: string | null
  }

  export type ScheduledSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUpdateOneRequiredWithoutScheduledSessionsNestedInput
  }

  export type ScheduledSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    packageId: string
    scheduledAt: Date | string
    status?: string
    therapist?: string | null
    notes?: string | null
    calBookingUid?: string | null
  }

  export type ScheduledSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ClientAccountNullableScalarRelationFilter = {
    is?: ClientAccountWhereInput | null
    isNot?: ClientAccountWhereInput | null
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PackageNullableScalarRelationFilter = {
    is?: PackageWhereInput | null
    isNot?: PackageWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amountKobo?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    amountKobo?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amountKobo?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type ClientAccountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leadId?: SortOrder
    email?: SortOrder
  }

  export type ClientAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leadId?: SortOrder
    email?: SortOrder
  }

  export type ClientAccountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leadId?: SortOrder
    email?: SortOrder
  }

  export type ClientLoginTokenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clientAccountId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type ClientLoginTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clientAccountId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type ClientLoginTokenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clientAccountId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type ScheduledSessionListRelationFilter = {
    every?: ScheduledSessionWhereInput
    some?: ScheduledSessionWhereInput
    none?: ScheduledSessionWhereInput
  }

  export type ScheduledSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    paymentId?: SortOrder
    planType?: SortOrder
    totalSessions?: SortOrder
    usedSessions?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    totalSessions?: SortOrder
    usedSessions?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    paymentId?: SortOrder
    planType?: SortOrder
    totalSessions?: SortOrder
    usedSessions?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    leadId?: SortOrder
    paymentId?: SortOrder
    planType?: SortOrder
    totalSessions?: SortOrder
    usedSessions?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    status?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    totalSessions?: SortOrder
    usedSessions?: SortOrder
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type ScheduledSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packageId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    therapist?: SortOrder
    notes?: SortOrder
    calBookingUid?: SortOrder
  }

  export type ScheduledSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packageId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    therapist?: SortOrder
    notes?: SortOrder
    calBookingUid?: SortOrder
  }

  export type ScheduledSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packageId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    therapist?: SortOrder
    notes?: SortOrder
    calBookingUid?: SortOrder
  }

  export type ClientAccountCreateNestedOneWithoutLeadInput = {
    create?: XOR<ClientAccountCreateWithoutLeadInput, ClientAccountUncheckedCreateWithoutLeadInput>
    connectOrCreate?: ClientAccountCreateOrConnectWithoutLeadInput
    connect?: ClientAccountWhereUniqueInput
  }

  export type PackageCreateNestedManyWithoutLeadInput = {
    create?: XOR<PackageCreateWithoutLeadInput, PackageUncheckedCreateWithoutLeadInput> | PackageCreateWithoutLeadInput[] | PackageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutLeadInput | PackageCreateOrConnectWithoutLeadInput[]
    createMany?: PackageCreateManyLeadInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type ClientAccountUncheckedCreateNestedOneWithoutLeadInput = {
    create?: XOR<ClientAccountCreateWithoutLeadInput, ClientAccountUncheckedCreateWithoutLeadInput>
    connectOrCreate?: ClientAccountCreateOrConnectWithoutLeadInput
    connect?: ClientAccountWhereUniqueInput
  }

  export type PackageUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<PackageCreateWithoutLeadInput, PackageUncheckedCreateWithoutLeadInput> | PackageCreateWithoutLeadInput[] | PackageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutLeadInput | PackageCreateOrConnectWithoutLeadInput[]
    createMany?: PackageCreateManyLeadInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientAccountUpdateOneWithoutLeadNestedInput = {
    create?: XOR<ClientAccountCreateWithoutLeadInput, ClientAccountUncheckedCreateWithoutLeadInput>
    connectOrCreate?: ClientAccountCreateOrConnectWithoutLeadInput
    upsert?: ClientAccountUpsertWithoutLeadInput
    disconnect?: ClientAccountWhereInput | boolean
    delete?: ClientAccountWhereInput | boolean
    connect?: ClientAccountWhereUniqueInput
    update?: XOR<XOR<ClientAccountUpdateToOneWithWhereWithoutLeadInput, ClientAccountUpdateWithoutLeadInput>, ClientAccountUncheckedUpdateWithoutLeadInput>
  }

  export type PackageUpdateManyWithoutLeadNestedInput = {
    create?: XOR<PackageCreateWithoutLeadInput, PackageUncheckedCreateWithoutLeadInput> | PackageCreateWithoutLeadInput[] | PackageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutLeadInput | PackageCreateOrConnectWithoutLeadInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutLeadInput | PackageUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: PackageCreateManyLeadInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutLeadInput | PackageUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutLeadInput | PackageUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type ClientAccountUncheckedUpdateOneWithoutLeadNestedInput = {
    create?: XOR<ClientAccountCreateWithoutLeadInput, ClientAccountUncheckedCreateWithoutLeadInput>
    connectOrCreate?: ClientAccountCreateOrConnectWithoutLeadInput
    upsert?: ClientAccountUpsertWithoutLeadInput
    disconnect?: ClientAccountWhereInput | boolean
    delete?: ClientAccountWhereInput | boolean
    connect?: ClientAccountWhereUniqueInput
    update?: XOR<XOR<ClientAccountUpdateToOneWithWhereWithoutLeadInput, ClientAccountUpdateWithoutLeadInput>, ClientAccountUncheckedUpdateWithoutLeadInput>
  }

  export type PackageUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<PackageCreateWithoutLeadInput, PackageUncheckedCreateWithoutLeadInput> | PackageCreateWithoutLeadInput[] | PackageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutLeadInput | PackageCreateOrConnectWithoutLeadInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutLeadInput | PackageUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: PackageCreateManyLeadInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutLeadInput | PackageUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutLeadInput | PackageUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PackageCreateWithoutPaymentInput, PackageUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPaymentInput
    connect?: PackageWhereUniqueInput
  }

  export type PackageUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PackageCreateWithoutPaymentInput, PackageUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPaymentInput
    connect?: PackageWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PackageUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PackageCreateWithoutPaymentInput, PackageUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPaymentInput
    upsert?: PackageUpsertWithoutPaymentInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutPaymentInput, PackageUpdateWithoutPaymentInput>, PackageUncheckedUpdateWithoutPaymentInput>
  }

  export type PackageUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PackageCreateWithoutPaymentInput, PackageUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPaymentInput
    upsert?: PackageUpsertWithoutPaymentInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutPaymentInput, PackageUpdateWithoutPaymentInput>, PackageUncheckedUpdateWithoutPaymentInput>
  }

  export type LeadCreateNestedOneWithoutClientAccountInput = {
    create?: XOR<LeadCreateWithoutClientAccountInput, LeadUncheckedCreateWithoutClientAccountInput>
    connectOrCreate?: LeadCreateOrConnectWithoutClientAccountInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutClientAccountNestedInput = {
    create?: XOR<LeadCreateWithoutClientAccountInput, LeadUncheckedCreateWithoutClientAccountInput>
    connectOrCreate?: LeadCreateOrConnectWithoutClientAccountInput
    upsert?: LeadUpsertWithoutClientAccountInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutClientAccountInput, LeadUpdateWithoutClientAccountInput>, LeadUncheckedUpdateWithoutClientAccountInput>
  }

  export type LeadCreateNestedOneWithoutPackagesInput = {
    create?: XOR<LeadCreateWithoutPackagesInput, LeadUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutPackagesInput
    connect?: LeadWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutPackageInput = {
    create?: XOR<PaymentCreateWithoutPackageInput, PaymentUncheckedCreateWithoutPackageInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPackageInput
    connect?: PaymentWhereUniqueInput
  }

  export type ScheduledSessionCreateNestedManyWithoutPackageInput = {
    create?: XOR<ScheduledSessionCreateWithoutPackageInput, ScheduledSessionUncheckedCreateWithoutPackageInput> | ScheduledSessionCreateWithoutPackageInput[] | ScheduledSessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ScheduledSessionCreateOrConnectWithoutPackageInput | ScheduledSessionCreateOrConnectWithoutPackageInput[]
    createMany?: ScheduledSessionCreateManyPackageInputEnvelope
    connect?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
  }

  export type ScheduledSessionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<ScheduledSessionCreateWithoutPackageInput, ScheduledSessionUncheckedCreateWithoutPackageInput> | ScheduledSessionCreateWithoutPackageInput[] | ScheduledSessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ScheduledSessionCreateOrConnectWithoutPackageInput | ScheduledSessionCreateOrConnectWithoutPackageInput[]
    createMany?: ScheduledSessionCreateManyPackageInputEnvelope
    connect?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
  }

  export type LeadUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<LeadCreateWithoutPackagesInput, LeadUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutPackagesInput
    upsert?: LeadUpsertWithoutPackagesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutPackagesInput, LeadUpdateWithoutPackagesInput>, LeadUncheckedUpdateWithoutPackagesInput>
  }

  export type PaymentUpdateOneRequiredWithoutPackageNestedInput = {
    create?: XOR<PaymentCreateWithoutPackageInput, PaymentUncheckedCreateWithoutPackageInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPackageInput
    upsert?: PaymentUpsertWithoutPackageInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPackageInput, PaymentUpdateWithoutPackageInput>, PaymentUncheckedUpdateWithoutPackageInput>
  }

  export type ScheduledSessionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<ScheduledSessionCreateWithoutPackageInput, ScheduledSessionUncheckedCreateWithoutPackageInput> | ScheduledSessionCreateWithoutPackageInput[] | ScheduledSessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ScheduledSessionCreateOrConnectWithoutPackageInput | ScheduledSessionCreateOrConnectWithoutPackageInput[]
    upsert?: ScheduledSessionUpsertWithWhereUniqueWithoutPackageInput | ScheduledSessionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: ScheduledSessionCreateManyPackageInputEnvelope
    set?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    disconnect?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    delete?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    connect?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    update?: ScheduledSessionUpdateWithWhereUniqueWithoutPackageInput | ScheduledSessionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: ScheduledSessionUpdateManyWithWhereWithoutPackageInput | ScheduledSessionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: ScheduledSessionScalarWhereInput | ScheduledSessionScalarWhereInput[]
  }

  export type ScheduledSessionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<ScheduledSessionCreateWithoutPackageInput, ScheduledSessionUncheckedCreateWithoutPackageInput> | ScheduledSessionCreateWithoutPackageInput[] | ScheduledSessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ScheduledSessionCreateOrConnectWithoutPackageInput | ScheduledSessionCreateOrConnectWithoutPackageInput[]
    upsert?: ScheduledSessionUpsertWithWhereUniqueWithoutPackageInput | ScheduledSessionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: ScheduledSessionCreateManyPackageInputEnvelope
    set?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    disconnect?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    delete?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    connect?: ScheduledSessionWhereUniqueInput | ScheduledSessionWhereUniqueInput[]
    update?: ScheduledSessionUpdateWithWhereUniqueWithoutPackageInput | ScheduledSessionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: ScheduledSessionUpdateManyWithWhereWithoutPackageInput | ScheduledSessionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: ScheduledSessionScalarWhereInput | ScheduledSessionScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutScheduledSessionsInput = {
    create?: XOR<PackageCreateWithoutScheduledSessionsInput, PackageUncheckedCreateWithoutScheduledSessionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutScheduledSessionsInput
    connect?: PackageWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutScheduledSessionsNestedInput = {
    create?: XOR<PackageCreateWithoutScheduledSessionsInput, PackageUncheckedCreateWithoutScheduledSessionsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutScheduledSessionsInput
    upsert?: PackageUpsertWithoutScheduledSessionsInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutScheduledSessionsInput, PackageUpdateWithoutScheduledSessionsInput>, PackageUncheckedUpdateWithoutScheduledSessionsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClientAccountCreateWithoutLeadInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
  }

  export type ClientAccountUncheckedCreateWithoutLeadInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
  }

  export type ClientAccountCreateOrConnectWithoutLeadInput = {
    where: ClientAccountWhereUniqueInput
    create: XOR<ClientAccountCreateWithoutLeadInput, ClientAccountUncheckedCreateWithoutLeadInput>
  }

  export type PackageCreateWithoutLeadInput = {
    id?: string
    createdAt?: Date | string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    payment: PaymentCreateNestedOneWithoutPackageInput
    scheduledSessions?: ScheduledSessionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutLeadInput = {
    id?: string
    createdAt?: Date | string
    paymentId: string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    scheduledSessions?: ScheduledSessionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutLeadInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutLeadInput, PackageUncheckedCreateWithoutLeadInput>
  }

  export type PackageCreateManyLeadInputEnvelope = {
    data: PackageCreateManyLeadInput | PackageCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type ClientAccountUpsertWithoutLeadInput = {
    update: XOR<ClientAccountUpdateWithoutLeadInput, ClientAccountUncheckedUpdateWithoutLeadInput>
    create: XOR<ClientAccountCreateWithoutLeadInput, ClientAccountUncheckedCreateWithoutLeadInput>
    where?: ClientAccountWhereInput
  }

  export type ClientAccountUpdateToOneWithWhereWithoutLeadInput = {
    where?: ClientAccountWhereInput
    data: XOR<ClientAccountUpdateWithoutLeadInput, ClientAccountUncheckedUpdateWithoutLeadInput>
  }

  export type ClientAccountUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientAccountUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PackageUpsertWithWhereUniqueWithoutLeadInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutLeadInput, PackageUncheckedUpdateWithoutLeadInput>
    create: XOR<PackageCreateWithoutLeadInput, PackageUncheckedCreateWithoutLeadInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutLeadInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutLeadInput, PackageUncheckedUpdateWithoutLeadInput>
  }

  export type PackageUpdateManyWithWhereWithoutLeadInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutLeadInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: StringFilter<"Package"> | string
    createdAt?: DateTimeFilter<"Package"> | Date | string
    leadId?: StringFilter<"Package"> | string
    paymentId?: StringFilter<"Package"> | string
    planType?: StringFilter<"Package"> | string
    totalSessions?: IntFilter<"Package"> | number
    usedSessions?: IntFilter<"Package"> | number
    periodStart?: DateTimeFilter<"Package"> | Date | string
    periodEnd?: DateTimeFilter<"Package"> | Date | string
    status?: StringFilter<"Package"> | string
  }

  export type PackageCreateWithoutPaymentInput = {
    id?: string
    createdAt?: Date | string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    lead: LeadCreateNestedOneWithoutPackagesInput
    scheduledSessions?: ScheduledSessionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutPaymentInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    scheduledSessions?: ScheduledSessionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutPaymentInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutPaymentInput, PackageUncheckedCreateWithoutPaymentInput>
  }

  export type PackageUpsertWithoutPaymentInput = {
    update: XOR<PackageUpdateWithoutPaymentInput, PackageUncheckedUpdateWithoutPaymentInput>
    create: XOR<PackageCreateWithoutPaymentInput, PackageUncheckedCreateWithoutPaymentInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutPaymentInput, PackageUncheckedUpdateWithoutPaymentInput>
  }

  export type PackageUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutPackagesNestedInput
    scheduledSessions?: ScheduledSessionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledSessions?: ScheduledSessionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type LeadCreateWithoutClientAccountInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    packages?: PackageCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutClientAccountInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    packages?: PackageUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutClientAccountInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutClientAccountInput, LeadUncheckedCreateWithoutClientAccountInput>
  }

  export type LeadUpsertWithoutClientAccountInput = {
    update: XOR<LeadUpdateWithoutClientAccountInput, LeadUncheckedUpdateWithoutClientAccountInput>
    create: XOR<LeadCreateWithoutClientAccountInput, LeadUncheckedCreateWithoutClientAccountInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutClientAccountInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutClientAccountInput, LeadUncheckedUpdateWithoutClientAccountInput>
  }

  export type LeadUpdateWithoutClientAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    packages?: PackageUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutClientAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    packages?: PackageUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutPackagesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    clientAccount?: ClientAccountCreateNestedOneWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutPackagesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    clientAccount?: ClientAccountUncheckedCreateNestedOneWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutPackagesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutPackagesInput, LeadUncheckedCreateWithoutPackagesInput>
  }

  export type PaymentCreateWithoutPackageInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    amountKobo: number
    currency?: string
    status?: string
    method?: string
    reference?: string | null
    paidAt?: Date | string | null
    notes?: string | null
  }

  export type PaymentUncheckedCreateWithoutPackageInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    amountKobo: number
    currency?: string
    status?: string
    method?: string
    reference?: string | null
    paidAt?: Date | string | null
    notes?: string | null
  }

  export type PaymentCreateOrConnectWithoutPackageInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPackageInput, PaymentUncheckedCreateWithoutPackageInput>
  }

  export type ScheduledSessionCreateWithoutPackageInput = {
    id?: string
    createdAt?: Date | string
    scheduledAt: Date | string
    status?: string
    therapist?: string | null
    notes?: string | null
    calBookingUid?: string | null
  }

  export type ScheduledSessionUncheckedCreateWithoutPackageInput = {
    id?: string
    createdAt?: Date | string
    scheduledAt: Date | string
    status?: string
    therapist?: string | null
    notes?: string | null
    calBookingUid?: string | null
  }

  export type ScheduledSessionCreateOrConnectWithoutPackageInput = {
    where: ScheduledSessionWhereUniqueInput
    create: XOR<ScheduledSessionCreateWithoutPackageInput, ScheduledSessionUncheckedCreateWithoutPackageInput>
  }

  export type ScheduledSessionCreateManyPackageInputEnvelope = {
    data: ScheduledSessionCreateManyPackageInput | ScheduledSessionCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithoutPackagesInput = {
    update: XOR<LeadUpdateWithoutPackagesInput, LeadUncheckedUpdateWithoutPackagesInput>
    create: XOR<LeadCreateWithoutPackagesInput, LeadUncheckedCreateWithoutPackagesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutPackagesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutPackagesInput, LeadUncheckedUpdateWithoutPackagesInput>
  }

  export type LeadUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    clientAccount?: ClientAccountUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    clientAccount?: ClientAccountUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type PaymentUpsertWithoutPackageInput = {
    update: XOR<PaymentUpdateWithoutPackageInput, PaymentUncheckedUpdateWithoutPackageInput>
    create: XOR<PaymentCreateWithoutPackageInput, PaymentUncheckedCreateWithoutPackageInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutPackageInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutPackageInput, PaymentUncheckedUpdateWithoutPackageInput>
  }

  export type PaymentUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    amountKobo?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledSessionUpsertWithWhereUniqueWithoutPackageInput = {
    where: ScheduledSessionWhereUniqueInput
    update: XOR<ScheduledSessionUpdateWithoutPackageInput, ScheduledSessionUncheckedUpdateWithoutPackageInput>
    create: XOR<ScheduledSessionCreateWithoutPackageInput, ScheduledSessionUncheckedCreateWithoutPackageInput>
  }

  export type ScheduledSessionUpdateWithWhereUniqueWithoutPackageInput = {
    where: ScheduledSessionWhereUniqueInput
    data: XOR<ScheduledSessionUpdateWithoutPackageInput, ScheduledSessionUncheckedUpdateWithoutPackageInput>
  }

  export type ScheduledSessionUpdateManyWithWhereWithoutPackageInput = {
    where: ScheduledSessionScalarWhereInput
    data: XOR<ScheduledSessionUpdateManyMutationInput, ScheduledSessionUncheckedUpdateManyWithoutPackageInput>
  }

  export type ScheduledSessionScalarWhereInput = {
    AND?: ScheduledSessionScalarWhereInput | ScheduledSessionScalarWhereInput[]
    OR?: ScheduledSessionScalarWhereInput[]
    NOT?: ScheduledSessionScalarWhereInput | ScheduledSessionScalarWhereInput[]
    id?: StringFilter<"ScheduledSession"> | string
    createdAt?: DateTimeFilter<"ScheduledSession"> | Date | string
    packageId?: StringFilter<"ScheduledSession"> | string
    scheduledAt?: DateTimeFilter<"ScheduledSession"> | Date | string
    status?: StringFilter<"ScheduledSession"> | string
    therapist?: StringNullableFilter<"ScheduledSession"> | string | null
    notes?: StringNullableFilter<"ScheduledSession"> | string | null
    calBookingUid?: StringNullableFilter<"ScheduledSession"> | string | null
  }

  export type PackageCreateWithoutScheduledSessionsInput = {
    id?: string
    createdAt?: Date | string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
    lead: LeadCreateNestedOneWithoutPackagesInput
    payment: PaymentCreateNestedOneWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutScheduledSessionsInput = {
    id?: string
    createdAt?: Date | string
    leadId: string
    paymentId: string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
  }

  export type PackageCreateOrConnectWithoutScheduledSessionsInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutScheduledSessionsInput, PackageUncheckedCreateWithoutScheduledSessionsInput>
  }

  export type PackageUpsertWithoutScheduledSessionsInput = {
    update: XOR<PackageUpdateWithoutScheduledSessionsInput, PackageUncheckedUpdateWithoutScheduledSessionsInput>
    create: XOR<PackageCreateWithoutScheduledSessionsInput, PackageUncheckedCreateWithoutScheduledSessionsInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutScheduledSessionsInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutScheduledSessionsInput, PackageUncheckedUpdateWithoutScheduledSessionsInput>
  }

  export type PackageUpdateWithoutScheduledSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutPackagesNestedInput
    payment?: PaymentUpdateOneRequiredWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutScheduledSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PackageCreateManyLeadInput = {
    id?: string
    createdAt?: Date | string
    paymentId: string
    planType: string
    totalSessions: number
    usedSessions?: number
    periodStart: Date | string
    periodEnd: Date | string
    status?: string
  }

  export type PackageUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUpdateOneRequiredWithoutPackageNestedInput
    scheduledSessions?: ScheduledSessionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledSessions?: ScheduledSessionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    totalSessions?: IntFieldUpdateOperationsInput | number
    usedSessions?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledSessionCreateManyPackageInput = {
    id?: string
    createdAt?: Date | string
    scheduledAt: Date | string
    status?: string
    therapist?: string | null
    notes?: string | null
    calBookingUid?: string | null
  }

  export type ScheduledSessionUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledSessionUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledSessionUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    therapist?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    calBookingUid?: NullableStringFieldUpdateOperationsInput | string | null
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