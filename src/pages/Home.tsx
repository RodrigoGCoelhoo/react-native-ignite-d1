import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const nTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks([...tasks, nTask])
  }

  function handleToggleTaskDone(id: number) {
    setTasks(tasks.map((task) => {
      if (task.id === id){
        task.done = !task.done
        return task
      }
      return task
    }))
  }

  function handleRemoveTask(id: number) {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})