import { Employee } from './employee.model'

export interface IEmployeePage {
  content: Employee[]
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

export class EmployeePage implements IEmployeePage {
  constructor(
    public content: Employee[] = null,
    public first: boolean = false,
    public last: boolean = false,
    public number: number = NaN,
    public numberOfElements: number = 0,
    public pageable: any = null,
    public size: number = 0,
    public sort: any = null,
    public totalElements: number = 0,
    public totalPages: number = 0
  ) {}

  fromJSON(json: any): any {
    this.content = json.content ? [] : null
    json.content.forEach(item => this.content.push(new Employee().fromJSON(item)))
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
