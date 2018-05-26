import { UserRole, UserStatus } from '../user.entity';

import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from '../interface/user.interface';

export class UpdateUserCmd {
  constructor(data: IUser) {
    this.id = data.id;
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.password = data.password;
    this.role = data.role;
    this.status = data.status;
  }
  @ApiModelProperty() id: string;
  @ApiModelProperty() email: string;
  @ApiModelProperty() firstname: string;
  @ApiModelProperty() lastname: string;
  @ApiModelProperty() password: string;
  @ApiModelProperty() role: UserRole;
  @ApiModelProperty() status: UserStatus;
}
