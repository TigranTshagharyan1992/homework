import React from "react";
import TodoList from './../todoList';
import Input from './../elements/input';
import Button from './../elements/button';
import './index.css';

class TodoListBlock extends React.Component{

    constructor() {
        super();
        this.state = {
            todo: {id:'',name:'',status:''},
            todoList :[],
            searchTodoList: false,
            search: ''
        }
    }
    setTodo(value){
        this.setState({todo: {id:this.state.todoList.length+1,name:value,status:''}});
    };

    updateTodoList =()=>{
        let newArray = this.state.todoList;
        newArray.push(this.state.todo);
        this.setState({todoList : newArray});
        this.setState({todo: {id:'',name:'',status:''}});
    };

    searchTodo=(value)=>{
        this.setState({search: value});
    };
    searchTodoList =()=>{
        if(this.state.search){
            this.setState({
                searchTodoList :  this.state.todoList.filter((item)=>{
                    return  item.name == this.state.search;
                })
            });
        }else{
            this.setState({
                searchTodoList :  this.state.todoList
            });
        }

    };

    getTodoList = () =>{
        let list =[];
      if(this.state.searchTodoList){
          list = this.state.searchTodoList;
      }else{
          list = this.state.todoList;
      }
      return list;
    };

    onChangeSelectBox = (value) =>{
        if(value != 'default'){
            this.setState({
                searchTodoList :  this.state.todoList.filter((item)=>{
                    return  item.status == value;
                })
            });
        }else{
            this.setState({
                searchTodoList :  this.state.todoList
            });
        }
    };

    onChange = (selected, id) =>{
        let todoArray = this.state.todoList;
        switch (selected) {
            case 'hide':
            case 'check':
                this.setState({
                    todoList :  todoArray.filter((item)=>{
                        if(item.id == id){
                            item.status = selected;
                        }
                        return true;
                    })
                });
                break;
            case 'delete':
                this.setState({
                    todoList :  todoArray.filter((item)=>{
                                    return  item.id != id;
                                })
                });
                break;
            case 'edith':
                todoArray.map((item)=>{
                    if(item.id == id){
                        this.setState({todo: item});
                        this.setState({
                            todoList :  todoArray.filter((item)=>{
                                return  item.id != id;
                            })
                        });

                    }
                });
                break;
        }
    };

    render() {
        return (
            <div className='block'>
                <div className='header'>
                    <Input type='text' value={this.state.todo.name} onChange={(e)=>{this.setTodo(e.target.value)}}> Name of row</Input>
                    <Button onClick={this.updateTodoList} className='add-button'> Add row</Button>
                </div>
                <Input type='text'  onChange={(e)=>{this.searchTodo(e.target.value)}}> Search field</Input>
                <Button onClick={this.searchTodoList} className='search-button'> Search </Button>
                <div className="select-box">
                    <select onChange={(e) => {this.onChangeSelectBox(e.target.value)} }>
                        <option>default</option>
                        <option>check</option>
                        <option>hide</option>
                    </select>
                </div>
                <TodoList todoList ={this.getTodoList()} onChange={this.onChange}/>




            </div>
        )
    }

}

export default TodoListBlock;