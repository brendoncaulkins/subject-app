import { Address, IAddress } from './address.model'
import { Storable } from './base.model'

export interface IEmployee {
  firstName: string
  lastName: string
  address: IAddress
}

export class Employee implements IEmployee, Storable<IEmployee> {
  constructor(
    public firstName: string = null,
    public lastName: string = null,
    public address: Address = new Address()
  ) {}

  fromJSON(json: any): Employee {
    this.firstName = json.firstName ? json.firstName : null
    this.lastName = json.lastName ? json.lastName : null
    this.address = json.address ? new Address().fromJSON(json.address) : null

    return this
  }

  toJSON(): IEmployee {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address ? this.address.toJSON() : null,
    }
  }
}
