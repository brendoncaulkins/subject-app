import { Address, IAddress } from './address.model'
import { Storable } from './base.model'

export interface IEmployee {
  id: string
  firstName: string
  lastName: string
  address: IAddress
}

export class Employee extends Storable<IEmployee> implements IEmployee {
  constructor(
    public id: string = null,
    public firstName: string = null,
    public lastName: string = null,
    public address: Address = new Address()
  ) {
    super()
  }

  fromJSON(json: any): Employee {
    this.id = json.id ? json.id : null
    this.firstName = json.firstName ? json.firstName : null
    this.lastName = json.lastName ? json.lastName : null
    this.address = json.address ? new Address().fromJSON(json.address) : null

    return this
  }

  toJSON(): IEmployee {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address ? this.address.toJSON() : null,
    }
  }
}
