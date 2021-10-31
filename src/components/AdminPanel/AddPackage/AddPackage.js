import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-crag-22043.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
                console.log(res);
            })
    }
    return (
        <div className="add-service">
            <h2>Please Add a Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("id", { required: true, maxLength: 20 })} placeholder="id" />
                <textarea {...register("description")} placeholder="Description" />


                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;