import React from "react";
import Row from './../elements/Row'

class TodoList extends React.Component{

    constructor() {
        super();
    }



    render() {
        return (
            <div>
                {
                    this.props.todoList.map((item,index)=>{

                        if(index<5){
                            return <Row item={item} onChange={this.props.onChange} key={item.id}/>
                        }

                    })
                }
            </div>
        )
    }

}

export default TodoList;