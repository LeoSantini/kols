import {useParams, Link, useNavigate} from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from "axios"

function Edit({ setRerender}){
    const params = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        "name": "",
		"description": "",
		"quantity": 0,
		"purchase_price": 0,
		"sale_value": 0,
		"part_number": "",
		"supplier": "",
		"resupply_point": 0,
		"category": "",
		"image": ""
    })

    useEffect(() => {
        async function fetchProduct() {
          try {
            const response = await axios.get(`https://ironrest.herokuapp.com/kols/${params._id}`);
            setForm({...response.data});
          } catch (error) {
            console.log(error);
          } 
        }
        fetchProduct();
      }, [params._id]);

      function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
      }


      function handleSubmit(event) {
        event.preventDefault();

        delete form._id;
        
        axios
        .put(`https://ironrest.herokuapp.com/kols/${params._id}`, form)
        .then((result) => navigate(`/products`))
        .catch((error) => {
            console.error(error);
        });

      }
      delete form._id;
        axios
        .put(`https://ironrest.herokuapp.com/kols/${params._id}`, form)
        .then((result) => navigate(`/products`))
        .catch((error) => {
            console.error(error);
        });




    return (
        <div>

        </div>
    )
}

export default Edit