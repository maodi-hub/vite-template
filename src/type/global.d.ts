
type MetaGlobTypeWithDefault<T extends unknown> = Record<
string,
{ default: T }
>;