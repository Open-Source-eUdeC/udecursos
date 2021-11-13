import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  font-color: #10162F;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: relative;
  margin-top: 5px;
  background-color: transparent;
  border-radius: 15px;
  width: 110px;

`;
const Title = styled.h3`
  padding: 8px;
  user-select: none;
`;
const Credits = styled.h4`
  font-family: "Suisse Int\'l Mono", monospace;
  font-color: #633FE5;
  font-size: 12px;
  user-select: none;

  margin-top: 0px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? '#10162F' : 'inherit'};
  border-radius: 9px;

  flex-grow: 1;
  min-height: 100px;

`;

export default class Column extends React.Component {
    render() {
      return (
        <Container>
          <Title>{this.props.column.title}</Title>
          {/* Get the sum of the credits of all tasks in the column, converting each credit to an integer */}
          <Credits>{this.props.tasks.reduce((acc, task) => acc + parseInt(task.credits), 0)}</Credits>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      );
    }
  }
  