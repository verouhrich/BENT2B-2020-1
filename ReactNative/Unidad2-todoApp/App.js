import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
// Recuerda instalar expo-constants: `expo install expo-constants`
import Constants from 'expo-constants'
let id = 0

const styles = StyleSheet.create({
  tareaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: '20',
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight
  },
  fill: {
    flex: 1,
  }
})

const Tarea = props => (
  <View style={styles.tareaContainer}>
    <Switch value={props.tarea.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title="Borrar" />
    <Text style={styles.text}>{props.tarea.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tareas: [],
    }
    console.log(Constants);
  }

  agregarTarea() {
    id++
    const titulo_tarea = `Tarea numero ${id}`

    let nueva_tarea = {
      id: id,
      text: titulo_tarea,
      checked: false
    }
    this.setState({
      tareas: [
        ...this.state.tareas,
        nueva_tarea
      ], 
    });

  }

  removerTarea(id_tarea) {
    this.setState({
      // Con array filter recorro el array de tareas con la condicion de que el id del 
      //elemento evaluado NO SEA el id pasado por parametro
      tareas: this.state.tareas.filter(tarea => tarea.id !== id_tarea)
    })
  }


  toggleTarea(id) {
    this.setState({
      tareas: this.state.tareas.map(tarea => {
        if (tarea.id !== id) return tarea
        return {
          id: tarea.id,
          text: tarea.text,
          // Cambio el valor booleano del check.
          checked: !tarea.checked,
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Total de Tareas: {this.state.tareas.length}</Text>
        <Text>Tareas por hacer: {this.state.tareas.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.agregarTarea()} title="Añadir Tarea" />
        <ScrollView style={styles.fill}>
          {this.state.tareas.map(tarea => (
            <Tarea
              key={tarea.id.toString()}
              onToggle={() => this.toggleTarea(tarea.id)}
              onDelete={() => this.removerTarea(tarea.id)}
              tarea={tarea}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

