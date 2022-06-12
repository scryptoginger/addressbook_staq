export interface Contact {
  name: ContactName;
  emailAddress: Email; //need to build this custom Type
  phoneNumber: string; //was going to use type number, but thought it would be best in case people add + or - symbols
  physAddress: PhysicalAddress;
  cryptoWalletAddress: string;
  cryptoWalletNickName: string;
  notes: string;
}

export interface ContactName {
  firstName: string;
  lastName: string;
}

export interface Email {
// email validation logic?
//email = new RexExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
)
  email: string;
}

export interface PhysicalAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: number;
}

/* Notes
* Could consider combining the cryptoWallet Address and Nickname into a Tuple or something
*/