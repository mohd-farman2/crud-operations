import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import Employees from './Employees';
function Edit() {
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();
    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);
    const handleSubmit = (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        history('/')
    }
    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[])
    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <FormControl  type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}>

                    </FormControl>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                    <FormControl type='text' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}>

                    </FormControl>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit