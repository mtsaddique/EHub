import React from 'react'
import { d } from '../../CommonFunction/Data.js'

function Product() {
    return (
        <>
            <div className="product-page-wrapper">
                <div className="forschool">
                    <h1 className="product-page-title">🏫 Schools</h1>
                    <Schools />
                </div>
                <div className="forCollege">
                    <h1 className="product-page-title">🏢 Freelancers</h1>
                    <FreeLancer />
                </div>
                <div className="forUniversity">
                    <h1 className="product-page-title">🎓 Universities</h1>
                    <University />
                </div>

            </div>

        </>
    )
}

export default Product

export function Schools() {
    return (
        <>
            <div className="parentCard">
                {d.School.map((item) => {
                    return (
                        <div className="card-product" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="location-product">📍 {item.location}</span>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-product">Learn More</a>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export function FreeLancer() {
    return (
        <>
            <div className="parentCard">
                {d.FreelancePlatforms.map((item) => {
                    return (
                        <div className="card-product" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="location-product">📍 {item.location}</span>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-product">Learn More</a>
                        </div>
                    )
                })}
            </div>
           
        </>
    )
}


export function University() {
    return (
        <>
            <div className="parentCard">
                {d.University.map((item) => {
                    return (
                        <div className="card-product" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="location-product">📍 {item.location}</span>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-product">Learn More</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
