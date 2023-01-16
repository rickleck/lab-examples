import { Task } from '@/data/DataTypes';

/**
 *
 */
function getListByName(listName: string, tasks: Task[]): Task[] {
    return tasks ? tasks.filter((task: Task) => task.list === listName) : [];
}

/**
 *
 */
function getListNames(tasks: Task[]): string[] {
    return tasks
        ? tasks
              .reduce((result: string[], task: Task) => {
                  if (!result.includes(task.list)) result.push(task.list);
                  return result;
              }, [])
              .sort()
        : [];
}

/**
 *
 */
function getTaskFromId(id: string, tasks: Task[]): Task | undefined {
    return tasks.find((item: Task) => item.id === id);
}

/**
 *
 */
function getTaskIdList(tasks: Task[]): string[] {
    return tasks.map((task: Task): string => task.id);
}

export { getListByName, getListNames, getTaskFromId, getTaskIdList };
