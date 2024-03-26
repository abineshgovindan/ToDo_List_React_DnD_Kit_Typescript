export interface taskProp {
    id : number;
    task: string;
    status: boolean;
    toggleStatus?: (id: number) => void;

}
export const taskList = [
    { id: 1, task: "Complete project proposal", status: false },
    { id: 2, task: "Prepare presentation slides", status: true },
    { id: 3, task: "Review project requirements", status: false },
    { id: 4, task: "Attend team meeting", status: true },
    { id: 5, task: "Research new technologies", status: false },
    { id: 6, task: "Write code documentation", status: true },
    { id: 7, task: "Test software functionality", status: false },
    { id: 8, task: "Create UI mockups", status: true },
    { id: 9, task: "Schedule client meeting", status: false },
    { id: 10, task: "Deploy application to server", status: true }
];




