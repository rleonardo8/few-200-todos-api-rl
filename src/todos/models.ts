export interface TodoItem {
    id: string;
    description: string;
    completed: boolean;
}

export class TodoCreate {
    description: string;
}
