import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from "./components/menu"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import style from "./contact.module.css"

export const Contact = () => {
    const position = [-25.4249717, -49.2748809,17]
    return(
        <>
        <Menu/>
        <div className= {style.sectionContact}>
            <h1>contato</h1>
            <div>
                <h2>mapa</h2>
                <div>
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