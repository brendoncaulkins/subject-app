export interface IPage<T> {
  content: T[]
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: any
  size: number
  sort: any
  totalElements: number
  totalPages: number
}

export class Page<T> implements IPage<T> {
  constructor(
    public entityType: new () => T,
    public content: T[] = null,
    public first: boolean = false,
    public last: boolean = false,
    public number: number = NaN,
    public numberOfElements: number = NaN,
    public pageable: any = null,
    public size: number = NaN,
    public sort: any = null,
    public totalElements: number = NaN,
    public totalPages: number = NaN
  ) {}

  fromJSON(json: any): any {
    this.content = json.content ? [] : null
    json.content.forEach(item => this.content.push(new this.entityType().fromJSON(item)))
    this.first = json.first ? json.first : false
    this.last = json.last ? json.last : false
    this.number = json.number ? json.number : 0
    this.numberOfElements = json.numberOfElements ? json.numberOfElements : 0
    this.pageable = json.pageable
    this.size = json.size ? json.size : 0
    this.sort = json.sort
    this.totalElements = json.totalElements ? json.totalElements : 0
    this.totalPages = json.totalPages ? json.totalPages : 0

    return this
  }
}
