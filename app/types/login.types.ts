export type LoginTypes = {
  mail: string;
  password: string;
};


type tokenType = {token: string};
type errorType = {error: string};

export type LoginResponseType = tokenType | errorType