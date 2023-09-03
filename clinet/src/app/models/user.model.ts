export interface User {
  id: number,
  login: string,
  admin: false,
  firstname: string,
  lastname: string,
  mail: string,
  created_on?: Date
  updated_on?: Date,
  last_login_on?: Date,
  passwd_changed_on?: Date,
  twofa_scheme: null,
  api_key?: string,
  status: number,
}
