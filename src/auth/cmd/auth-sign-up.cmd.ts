import { UserRole, UserStatus } from '@app/user/user.entity';

import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from '@app/user/interface/user.interface';

export class AuthSignUpCmd implements IUser {
  constructor(data: IUser) {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.password = data.password;
  }
  @ApiModelProperty() email: string;
  @ApiModelProperty() firstname: string;
  @ApiModelProperty() lastname: string;
  @ApiModelProperty() password: string;
}
