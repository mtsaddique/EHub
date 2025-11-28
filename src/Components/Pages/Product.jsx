import { useEffect, useRef, useState } from 'react';
import { d } from '../../CommonFunction/Data.js';
import { Review } from './Home.jsx';
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

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
        // Category filter
        if (category.length > 0 && !category.includes(type)) return [];

        // Search filter
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
                {/* TOP BAR */}
                <header className="topbar">
                    <div className="topbar-left">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search by name, subject, skill or city"
                            aria-label="Search"
                            onChange={handleSearch}
                        />

                        <nav className="product-tabs" aria-label="Product type">
                            <button className="tab active">All</button>
                            <button className="tab">Schools</button>
                            <button className="tab">Colleges</button>
                            <button className="tab">Freelancers</button>
                        </nav>
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

                {/* MAIN CONTENT */}
                <main className="main-layout">
                    {/* SIDE FILTERS */}
                    <aside className="filter-rail">
                        <form className="filters-form" onSubmit={(e) => e.preventDefault()}>
                            <section className="filter-section">
                                <h4>Product type</h4>
                                <div className="chips">
                                    <label>
                                        <input type="checkbox" name="School" onChange={handleCategoryCheck} /> Schools
                                    </label>
                                    <label>
                                        <input type="checkbox" name="University" onChange={handleCategoryCheck} /> Universities
                                    </label>
                                    <label>
                                        <input type="checkbox" name="FreelancePlatforms" onChange={handleCategoryCheck} /> Freelancers
                                    </label>
                                </div>
                            </section>
                        </form>
                    </aside>

                    {/* RESULTS */}
                    <section className="results-area" aria-live="polite">
                        <div className="results-grid">
                            <div className="product-page-wrapper">
                                {filteredSchools.length > 0 && (
                                    <div className="forschool">
                                        <h1 className="product-page-title">🏫 Schools</h1>
                                        <Schools data={filteredSchools} />
                                    </div>
                                )}

                                {filteredUniversities.length > 0 && (
                                    <div className="forUniversity">
                                        <h1 className="product-page-title">🎓 Universities</h1>
                                        <University data={filteredUniversities} />
                                    </div>
                                )}

                                {filteredFreelancers.length > 0 && (
                                    <div className="forCollege">
                                        <h1 className="product-page-title">🏢 Freelancers</h1>
                                        <FreeLancer data={filteredFreelancers} />
                                    </div>
                                )}

                                {/* No results */}
                                {filteredSchools.length === 0 &&
                                    filteredUniversities.length === 0 &&
                                    filteredFreelancers.length === 0 && (
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

// ------------------- COMPONENTS -------------------------

export function Schools({ data }) {
    const slidebar = useRef(null);

    const moveLeft = () => {
        slidebar.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const moveRight = () => {
        slidebar.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="slider-wrapper">
            <button className="slider-btn left" onClick={moveLeft}>
                <GoChevronLeft size={24} />
            </button>
            <button className="slider-btn right" onClick={moveRight}>
                <GoChevronRight size={24} />
            </button>

            <div className="parentCard" ref={slidebar}>
                {data.map((item) => (
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
        </div>
    );
}

export function University({ data }) {
    const slidebar = useRef(null);

    const moveLeft = () => {
        slidebar.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const moveRight = () => {
        slidebar.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="slider-wrapper">
            <button className="slider-btn left" onClick={moveLeft}>
                <GoChevronLeft size={24} />
            </button>
            <button className="slider-btn right" onClick={moveRight}>
                <GoChevronRight size={24} />
            </button>

            <div className="parentCard" ref={slidebar}>
                {data.map((item) => (
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
        </div>
    );
}

export function FreeLancer({ data }) {
    const slidebar = useRef(null);
    const [cardWidth, setCardWidth] = useState(300); // default width

    // Calculate width AFTER render
    useEffect(() => {
        if (slidebar.current) {
            const card = slidebar.current.querySelector(".card-product");
            if (card) {
                setCardWidth(card.offsetWidth + 16);
            }
        }
    }, [data]);

    const moveLeft = () => {
        slidebar.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    };

    const moveRight = () => {
        slidebar.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    };

    return (
        <div className="slider-wrapper">
            <button className="slider-btn left" onClick={moveLeft}>
                <GoChevronLeft size={24} />
            </button>
            <button className="slider-btn right" onClick={moveRight}>
                <GoChevronRight size={24} />
            </button>

            <div className="parentCard" ref={slidebar}>
                {data.map((item) => (
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
        </div>
    );
}
