import axios from 'axios'
import  {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

function Form() {
    const Navigate = useNavigate()
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

    function HandleChange(event) {
        setForm({...form, [event.target.name]:event.target.value})
        console.log(form)
    }

    function HandleSubmit(event) {
        for (let key in form) {
            if (!form[key]){
                window.alert(`Preencher o campo ${key}`);
                return;
            }
        }
        event.preventDefault()

        try {
            const result = axios.post('https://ironrest.herokuapp.com/kols', form)
            console.log(form)
            //Navigate('/products')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="nome">nome</label>
                <input 
                    id="nome"
                    onChange={HandleChange}
                    name='name'
                    value={form.name}
                />
                <label htmlFor="descrição">descrição</label>
                <input 
                    id="descrição"
                    onChange={HandleChange}
                    name='description'
                    value={form.description}
                />
                <label htmlFor="quantidade">quantidade</label>
                <input 
                    id="quantidade"
                    onChange={HandleChange}
                    name='quantity'
                    value={form.quantity}
                    type='number'
                />

                <label htmlFor="">purchase_price</label>
                <input 
                    id="purchase_price"
                    onChange={HandleChange}
                    name='purchase_price'
                    value={form.purchase_price}
                    type='number'
                />

                <label htmlFor="">sale_value</label>
                <input 
                    id="sale_value"
                    onChange={HandleChange}
                    name='sale_value'
                    value={form.sale_value}
                    type='number'
                />
                
                <label htmlFor="">part_number</label>
                <input 
                    id="part_number"
                    onChange={HandleChange}
                    name='part_number'
                    value={form.part_number}
                />
                
                <label htmlFor="">supplier</label>
                <input 
                    id="supplier"
                    onChange={HandleChange}
                    name='supplier'
                    value={form.supplier}
                />
                
                <label htmlFor="">resupply_point</label>
                <input 
                    id="resupply_point"
                    onChange={HandleChange}
                    name='resupply_point'
                    value={form.resupply_point}
                    type='number'
                />

                <label htmlFor="category">category</label>
                <select 
                    onChange={HandleChange} 
                    id="category"
                    name='category'>
    
                    <option value='celular'>celular</option>
                    <option value='livros'>livros</option>
                    <option value='roupas'>roupas</option>
                </select> 

                <label htmlFor="image">image</label>
                <input 
                    id="image"
                    name='image'
                    onChange={HandleChange}
                />

                <button type='submit'>Salvar</button>
                
            </form>
        </div>
    )
}

export default Form