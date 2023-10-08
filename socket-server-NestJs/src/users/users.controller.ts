import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializeLogginDto } from './dto/serialize.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { LogginDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './guards/auth-guard';
import { User } from './entities/user.entity';

@Controller('users')
@ApiBearerAuth()
// @ApiTags('User')
@Serialize(SerializeLogginDto)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @ApiTags('auth')
  // @ApiCreatedResponse({ type: User })
  // @ApiBadRequestResponse()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  // @ApiTags('auth')
  // @ApiCreatedResponse({ type: LogginDto })
  // @ApiBadRequestResponse()
  @Post('loggin')
  loggin(@Body() logginDto: LogginDto) {
    return this.authService.login(logginDto);
  }

  @Get()
  //@UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: User, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  // @ApiOkResponse({ type: User, description: 'Get a user with id' })
  // @ApiNotFoundResponse()
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  // @ApiOkResponse({ type: User, description: 'update a user with id' })
  // @ApiNotFoundResponse()
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  // @ApiOkResponse({ type: User, description: 'delete a user with id' })
  // @ApiNotFoundResponse()
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
