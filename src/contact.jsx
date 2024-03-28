import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from "./components/menu"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import style from "./contact.module.css"
import { useState } from 'react';

export const Contact = () => {
    const position = [-25.4249717, -49.2748809,17]
    const deafPhoneNum = "5541999999999"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleZap = () => {
        const {name, email, message} = formData

        const urlZap = `https://api.whatsapp.com/send?phone=${deafPhoneNum}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Message:%20${message}%0D%0A`

        window.open(urlZap, '_blank')

    }

    return(
        <>
        <Menu/>
        <div className= {style.sectionContact}>
            <h1>contato</h1>
            <div>
                <div>
                    <h2>contatos</h2>
                    <div>
                    <label htmlFor="name">nome</label>
                    <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div>
                    <label htmlFor="email">email</label>
                    <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} required/>  
                    </div>
                    <div>
                    <label htmlFor="message">mensagem</label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} required cols="30" rows="10"></textarea>                        
                    </div>
                    <button onClick={handleZap}>enviar msg</button>
                </div>

                <div>
                <h2>mapa</h2>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "700px"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        <a target={'_blank'} href="https://www.google.com/maps/place/Sistema+Fiep+-+Unidade+Centro/@-25.4249717,-49.272306,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu">Google maps</a> <br />
                        <p>R. Paula Gomes, 270 - São Francisco, Curitiba - PR, 80510-070</p>
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>
        </>
    )
}