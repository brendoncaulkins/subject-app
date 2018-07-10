import { Storable } from './base.model'

export interface IAddress {
  addressLine1: string
  addressLine2?: string
  city?: string
  state?: string
  zipCode: string
}

export class Address implements IAddress, Storable<IAddress> {
  constructor(
    public addressLine1: string = null,
    public addressLine2: string = null,
    public city: string = null,
    public state: string = null,
    public zipCode: string = null
  ) {}

  fromJSON(json: any): Address {
    this.addressLine1 = json.addressLine1 ? json.addressLine1 : null
    this.addressLine2 = json.addressLine2 ? json.addressLine2 : null
    this.city = json.city ? json.city : null
    this.state = json.state ? json.state : null
    this.zipCode = json.zipCode ? json.zipCode : null

    return this
  }

  toJSON(): IAddress {
    return {
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
    }
  }

  isEmpty(): boolean {
    return (
      !this.addressLine1 &&
      !this.addressLine2 &&
      !this.city &&
      !this.state &&
      !this.zipCode
    )
  }
}
