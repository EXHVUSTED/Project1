import React from "react"
import s from './PriceList.css'

export default function PriceList() {
    return (
        <div className="preislist1">
            <div className="frame2">
                <h2 className="text1">1. gold</h2> 
                <p className="text1">- 3-stuffen-Politur (effektive kratzenentfernyng und Lack Aufbereitung)</p>
                <p className="text1">- Scheiben wischen </p>
                <p className="text1">Flugrostentfernen</p>
                <strong className="preis">Preis-140€</strong>
            </div>
            <div className="frame2">
                <h2 className="text1">2. silber </h2>
                <p className="text1">- 1 Stufen Politur (passt Effekt für Lacken ohne tiefen Kratzen)</p>
                <p className="text1">- Flugrostentfernen</p>
                <strong className="preis">Preis-100€</strong>
            </div>
            <div className="frame2">
                <h2 className="text1">3. bronze</h2> 
                <p  className="text1">- 1 Stufen Politur </p>
                <p className="text1">- 1 Scheinwerfer Politur-30€</p>
                <strong className="preis">Preis-60€</strong>
            </div>
        </div>
    )
}