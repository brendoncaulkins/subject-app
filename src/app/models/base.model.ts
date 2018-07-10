export abstract class Storable<T> {
  abstract toJSON(): T
  abstract fromJSON(json: any): T
}
