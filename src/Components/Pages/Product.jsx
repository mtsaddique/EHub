import { useEffect, useRef, useState } from 'react';
import { d } from '../../CommonFunction/Data.js';
import { Review } from './Home.jsx';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

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
                                        <Slider data={filteredSchools} />
                                    </div>
                                )}

                                {filteredUniversities.length > 0 && (
                                    <div className="forUniversity">
                                        <h1 className="product-page-title">🎓 Universities</h1>
                                        <Slider data={filteredUniversities} />
                                    </div>
                                )}

                                {filteredFreelancers.length > 0 && (
                                    <div className="forCollege">
                                        <h1 className="product-page-title">🏢 Freelancers</h1>
                                        <Slider data={filteredFreelancers} />
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



export function Slider({ data }) {
    const slidebar = useRef(null);
    const [visibleCards, setVisibleCards] = useState(5);
    const setVis = useRef(null);

    const moveLeft = () => {
        slidebar.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const moveRight = () => {
        slidebar.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    const handleCard = () => {
        setVisibleCards(visibleCards + 5);
    };

    useEffect(() => {
        if (visibleCards >= data.length || data.length <= 5 || window.innerWidth > 768) {
            if (setVis.current) setVis.current.style.display = 'none';
        } else {
            if (setVis.current) setVis.current.style.display = 'block';
        }
    }, [visibleCards, data.length]);

    return (
        <div className="slider-wrapper">
            <button className="slider-btn left" onClick={moveLeft}><GoChevronLeft size={24} /></button>
            <button className="slider-btn right" onClick={moveRight}><GoChevronRight size={24} /></button>

            <div className="parentCard" ref={slidebar}>
                {(window.innerWidth < 768 ? data.slice(0, visibleCards) : data).map((item) => (
                    <div className="card-product" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span className="location-product">📍 {item.location}</span>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-product">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="viewMore" onClick={handleCard} ref={setVis}>view more</button>
            </div>
        </div>
    );
}
