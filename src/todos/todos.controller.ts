import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoItem } from 'dist/todos/models';
import { TodoCreate } from './models';

@Controller('todos')
export class TodosController {

    /**
     *
     */
    constructor(private service: TodosService) {

    }
    @Get()
    async getAll() {
        return {
            data: await this.service.getAll(),
        };
    }

    @Post()
    async add(@Body() entity: TodoCreate) {
        return await this.service.add(entity);
    }

    @Post('/completed')
    async markComplete(@Body() entity: TodoItem) {
        return await this.service.markComplete(entity);
    }
}
