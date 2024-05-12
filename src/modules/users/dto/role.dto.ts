import { ApiProperty } from '@nestjs/swagger'
import { BaseDto } from 'src/models/dto/base.dto'

export class RoleDto extends BaseDto {
    @ApiProperty()
    id!: number

    @ApiProperty()
    name!: string
}
