export type loginRequest = {
  username: string;
  password: string;
};

export type JwtPayload = {
  sub: string;
  username: string;
  exp: number;
};

export type AuthUser = {
  id: string;
  name: string;
  profilePic: string;
};
