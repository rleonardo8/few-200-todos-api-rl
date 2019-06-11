import { Injectable } from '@nestjs/common';
import { TodoItem, TodoCreate } from './models';
import * as cuid from 'cuid';
@Injectable()
export class TodosService {
    data: TodoItem[] = [
        { id: '1', description: 'Fix Tires', completed: false },
        { id: '2', description: 'Paint Shed', completed: true },
        { id: '3', description: 'Edge Lawn', completed: false },
    ];
    async getAll() {
        return new Promise(res => {
            res(this.data);
        });
    }

    async add(item: TodoCreate) {
        const newItem = {
            id: cuid(),
            description: item.description, completed: false,
        };
        this.data.unshift(newItem);
        return new Promise(res => res(newItem));

    }

    async markComplete(item: TodoItem) {
        const stored = this.data.filter(d => d.id === item.id)[0];

        stored.completed = true;
        return new Promise(res => res(stored));
    }
}
