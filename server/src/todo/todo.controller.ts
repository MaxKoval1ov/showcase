import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ToDo } from 'src/schemas/todo.schema';
import { TodoService } from './todo.service';
import { createToDoDto, updateToDoDto } from './toDoDto';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  // @Get()
  // getAll(): Promise<ToDo[]> {
  //   return this.appService.getAll();
  // }

  @Get(':id')
  getById(@Param('id') id: string): Promise<ToDo> {
    return this.appService.getById(id);
  }

  @Get('user/:id')
  getTodosById(@Param('id') id: string): Promise<ToDo[]> {
    return this.appService.getByUserId(id);
  }

  @Get()
  getPage(@Query('page') page, @Query('limit') limit): Promise<ToDo[]> {
    return this.appService.getPage(page, limit);
  }

  @Get()
  getAll(): Promise<ToDo[]> {
    return this.appService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createToDo: createToDoDto): Promise<ToDo> {
    return this.appService.create(createToDo);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string): Promise<ToDo> {
    return this.appService.remove(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Body() updateToDo: updateToDoDto,
    @Param('id') id: string,
  ): Promise<ToDo> {
    return this.appService.update(id, updateToDo);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  patch(@Body() post: updateToDoDto, @Param('id') id: string): Promise<ToDo> {
    return this.appService.update(id, post);
  }
}
