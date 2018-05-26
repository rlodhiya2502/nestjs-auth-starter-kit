import { UserRole, UserStatus } from '../user.entity';

import { ApiModelProperty } from '@nestjs/swagger';

export interface IChangePasswordCmd {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export class ChangePasswordCmd {
  constructor(data: IChangePasswordCmd) {
    this.email = data.email;
    this.oldPassword = data.oldPassword;
    this.newPassword = data.newPassword;
  }
  @ApiModelProperty() email: string;
  @ApiModelProperty() oldPassword: string;
  @ApiModelProperty() newPassword: string;
}
