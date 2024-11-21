import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../../redux/action';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

export default function TodoList() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const data = useSelector((state)=>state.todoList)
  console.log(data);

  const addListTodo = ()=>{
    dispatch(addTodo({
      id: uuidv4(),
      name: name,
      priority: priority,
      completed: false,
    }))
  }

  const handleChange = (val) => {
    setName(val.target.value);
  }
  const handleChangePr = (val) => {
    setPriority(val)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />
        {
          !!data ?
            data.map((item)=>{
              console.log("ITem, ", item, item.priority);
              return <Todo name={item.name} prioriry={item.priority} />
            })
          : null
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={(val)=>handleChange(val)}/>
          <Select defaultValue="Medium" onChange={handleChangePr}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={addListTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
