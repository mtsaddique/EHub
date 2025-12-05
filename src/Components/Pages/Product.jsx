import { useEffect, useRef, useState } from 'react';
import { d } from '../../CommonFunction/Data.js';
import { Review } from './Home.jsx';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';

function Product() {
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState('');

    const handleCategoryCheck = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setCategory([...category, name]);
        } else {
            setCategory(category.filter((item) => item !== name));
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase().trim());
    };

    const getFilteredData = (data = [], type) => {
        if (category.length > 0 && !category.includes(type)) return [];
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(search) ||
                (item.description && item.description.toLowerCase().includes(search)) ||
                (item.location && item.location.toLowerCase().includes(search))
        );
    };

    const filteredSchools = getFilteredData(d.School, 'School');
    const filteredUniversities = getFilteredData(d.University, 'University');
    const filteredFreelancers = getFilteredData(d.FreelancePlatforms, 'FreelancePlatforms');

    return (
        <>
            <div className="filter-ui-root">
                <header className="topbar">
                    <div className="topbar-left">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search by name, subject, skill or city"
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="topbar-right">
                        <div className="result-meta">
                            Showing <strong>{filteredSchools.length + filteredUniversities.length + filteredFreelancers.length}</strong> results
                        </div>
                        <select className="sort-select">
                            <option>Relevance</option>
                            <option>Newest</option>
                            <option>Price: Low → High</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </header>

                <main className="main-layout">
                    <aside className="filter-rail">
                        <form className="filters-form" onSubmit={(e) => e.preventDefault()}>
                            <section className="filter-section">
                                <h4>Product type</h4>
                                <div className="chips">
                                    <label><input type="checkbox" name="School" onChange={handleCategoryCheck} /> Schools</label>
                                    <label><input type="checkbox" name="University" onChange={handleCategoryCheck} /> Universities</label>
                                    <label><input type="checkbox" name="FreelancePlatforms" onChange={handleCategoryCheck} /> Freelancers</label>
                                </div>
                            </section>
                        </form>
                    </aside>

                    <section className="results-area" aria-live="polite">
                        <div className="results-grid">
                            <div className="product-page-wrapper">
                                {filteredSchools.length > 0 && (
                                    <div className="forschool">
                                        <h1 className="product-page-title">🏫 Schools</h1>
                                        <Slider data={filteredSchools} type="School" />
                                    </div>
                                )}

                                {filteredUniversities.length > 0 && (
                                    <div className="forUniversity">
                                        <h1 className="product-page-title">🎓 Universities</h1>
                                        <Slider data={filteredUniversities} type="University" />
                                    </div>
                                )}

                                {filteredFreelancers.length > 0 && (
                                    <div className="forCollege">
                                        <h1 className="product-page-title">🏢 Freelancers</h1>
                                        <Slider data={filteredFreelancers} type="FreelancePlatforms" />
                                    </div>
                                )}

                                {filteredSchools.length === 0 && filteredUniversities.length === 0 && filteredFreelancers.length === 0 && (
                                    <h4 style={{ color: 'purple', marginLeft: '10px' }}>No Results Found</h4>
                                )}
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <div className="revi">
                <Review />
            </div>
        </>
    );
}

export default Product;



export function Slider({ data, type }) {
    const [cardLength, setCardLength] = useState(3);
    const disCard = useRef();
    const handleCard = () =>{
        setCardLength(cardLength + 3);
    }
    useEffect(() => {
        if(cardLength >= data.length){
            disCard.current.style.display = 'none';
        }
    }, [cardLength , data.length])

    return (
        <div className="slider-wrapper">
            <div className="parentCard" >
                {data.slice(0 , cardLength).map((item) => (
                    <div className="card-product" key={item.id}>
                        <div className="imgOne">
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="detailSec">
                            <span>{item.country} | {item.city}</span>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>

                            

                            <NavLink to={`/viewdetail/${type}/${item.id}`} className="btn-product">
                                Learn More
                            </NavLink>
                        </div>

                        <div className="rankThre">
                            <span className='ratePad'>⭐ {item.rating}</span>
                            <span>💲 {item.fee}</span>
                        </div>
                    </div>
                ))}

                <button className='btn-pr' onClick={handleCard} ref={disCard}>View More</button>
            </div>
        </div>
    );
}
