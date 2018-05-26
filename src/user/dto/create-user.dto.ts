import { UserRole, UserStatus } from '@app/user/user.entity';

import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from '@app/user/interface/user.interface';

export class CreateUserDto implements IUser {
  constructor(data: IUser) {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
  }
  @ApiModelProperty() email: string;
  @ApiModelProperty() firstname: string;
  @ApiModelProperty() lastname: string;
}
