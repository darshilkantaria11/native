// /app/TodoApp.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function todo() {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [task, setTask] = useState(""); // Current input for a new task
  const [editingTask, setEditingTask] = useState(null); // Tracks if a task is being edited

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask("");
    }
  };

  // Update an existing task
  const updateTask = () => {
    setTasks(tasks.map(t => (t.id === editingTask.id ? { ...t, text: task } : t)));
    setTask("");
    setEditingTask(null);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  // Edit a task
  const editTask = (task) => {
    setEditingTask(task);
    setTask(task.text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do App</Text>

      {/* Input field for adding/updating tasks */}
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />

      {/* Add/Update button */}
      <Button
        title={editingTask ? "Update Task" : "Add Task"}
        onPress={editingTask ? updateTask : addTask}
        color="#3B1E54"
      />

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => editTask(item)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EEEEEE",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3B1E54",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#9B7EBD",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
  },
  taskItem: {
    padding: 15,
    backgroundColor: "#D4BEE4",
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    color: "#3B1E54",
    fontSize: 18,
  },
  taskActions: {
    flexDirection: "row",
  },
  editText: {
    color: "#3B1E54",
    marginRight: 15,
    fontWeight: "bold",
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
  },
});
