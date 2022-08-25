export class UserDto {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  createAt: Date;
  updateAt: Date;
  authCode: String;
}
