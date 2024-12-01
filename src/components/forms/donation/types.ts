export interface Donor {
  name: {
    given_name: string;
    surname: string;
  };
  email_address: string;
}

export interface OrderResponse {
  id: string;
  status: string;
  payer: Donor;
}
