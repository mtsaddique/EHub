import { useState } from 'react'
import { d } from '../../CommonFunction/Data.js'
import { Review } from './Home.jsx'

const originalSchools = [...d.School];
function Product() {
    let [category, setCategory] = useState([]);


    const handleCategoryCheck = (e) => {

        const { name, checked } = e.target;
        if (checked) {
            setCategory([...category, name]);
        }
        else if (!checked) {
            setCategory(category.filter((item) => item !== name));
        }

    }

    // Handle category checkboxes




    let [schools, setSchools] = useState(originalSchools);

    const filterData = (e) => {
        let val = e.target.value.toLowerCase().trim();

        if (val === "") {
            setSchools(originalSchools);
            return;
        }
        let fil = originalSchools.filter((item) => {
            return (
                item.name.toLowerCase().includes(val) || item.location.toLowerCase().includes(val)
            )
        }


        );

        setSchools(fil);
    }


    return (
        <>
            <div className="filter-ui-root">
                {/* Top global header */}
                <header className="topbar">
                    <div className="topbar-left">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search by name, subject, skill or city"
                            aria-label="Search"
                            onChange={filterData}
                        />
                        <nav className="product-tabs" aria-label="Product type">
                            <button className="tab active" aria-pressed="true">All</button>
                            <button className="tab" >Schools</button>
                            <button className="tab" >Colleges</button>
                            <button className="tab">Freelancers</button>
                        </nav>
                    </div>

                    <div className="topbar-right">
                        <div className="result-meta">Showing <strong>24</strong> results</div>
                        <select className="sort-select" aria-label="Sort">
                            <option>Relevance</option>
                            <option>Newest</option>
                            <option>Price: Low → High</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </header>

                <main className="main-layout">
                    {/* Filter rail (desktop) */}
                    <aside className="filter-rail" aria-label="Filters">
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

                            <section className="filter-section">
                                <h4>Location</h4>
                                <select aria-label="Country" defaultValue="">
                                    <option value="">Select country</option>
                                    <option>Pakistan</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                </select>
                                <select aria-label="City" defaultValue="">
                                    <option value="">Select city</option>
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                </select>
                                <label className="near-me">
                                    <input type="checkbox" /> Near me
                                </label>
                            </section>

                            <section className="filter-section">
                                <h4>Price / Fee / Rate</h4>
                                <div className="range-row">
                                    <input className="text-sm" type="text" placeholder="Min" readOnly />
                                    <span className="dash">—</span>
                                    <input className="text-sm" type="text" placeholder="Max" readOnly />
                                </div>
                                <div className="presets">
                                    <button type="button" className="preset">Under 50,000</button>
                                    <button type="button" className="preset">50k–150k</button>
                                    <button type="button" className="preset">Above 150k</button>
                                </div>
                            </section>

                            <section className="filter-section">
                                <h4>Rating</h4>
                                <div className="rating-buttons">
                                    <button type="button" className="rating">⭐ 5</button>
                                    <button type="button" className="rating">⭐ 4+</button>
                                    <button type="button" className="rating">⭐ 3+</button>
                                </div>
                            </section>

                            <section className="filter-section">
                                <h4>Features / Tags</h4>
                                <label className="check"><input type="checkbox" /> Scholarship</label>
                                <label className="check"><input type="checkbox" /> Hostel</label>
                                <label className="check"><input type="checkbox" /> Online Classes</label>
                                <label className="check"><input type="checkbox" /> Verified</label>
                                <label className="check"><input type="checkbox" /> Portfolio</label>
                            </section>

                            <section className="filter-section">
                                <h4>Programs / Skills</h4>
                                <input type="text" placeholder="Type to search (React, FSc, etc.)" readOnly />
                            </section>

                            <section className="filter-section">
                                <h4>Experience / Level</h4>
                                <div className="level-chips">
                                    <label className="chip"><input type="radio" name="level" /> Beginner</label>
                                    <label className="chip"><input type="radio" name="level" /> Intermediate</label>
                                    <label className="chip"><input type="radio" name="level" /> Expert</label>
                                </div>
                            </section>

                            <div className="rail-actions">
                                <button className="btn reset" type="reset">Reset</button>
                                <button className="btn apply" type="button">Apply</button>
                            </div>
                        </form>
                    </aside>

                    {/* Results area */}
                    <section className="results-area" aria-live="polite">
                        {/* active filters chips */}
                        <div className="active-chips">
                            <span className="active">Scholarship <button aria-label="remove">×</button></span>
                            <span className="active">Karachi <button aria-label="remove">×</button></span>
                            <span className="active">Under 50,000 <button aria-label="remove">×</button></span>
                        </div>

                        {/* results grid */}
                        <div className="results-grid">
                            <div className="product-page-wrapper">



                                <div className="product-page-wrapper">

                                    {(category.length === 0 || category.includes("School")) && (
                                        <div className="forschool">
                                            <h1 className="product-page-title">🏫 Schools</h1>
                                            <Schools data={d.School} />
                                        </div>
                                    )}

                                    {(category.length === 0 || category.includes("University")) && (
                                        <div className="forUniversity">
                                            <h1 className="product-page-title">🎓 Universities</h1>
                                            <University data={d.University} />
                                        </div>
                                    )}

                                    {(category.length === 0 || category.includes("FreelancePlatforms")) && (
                                        <div className="forCollege">
                                            <h1 className="product-page-title">🏢 Freelancers</h1>
                                            <FreeLancer data={d.FreelancePlatforms} />
                                        </div>
                                    )}


                                </div>


                            </div>
                        </div>

                        {/* no-results example (hidden by default) */}
                        <div className="no-results" hidden>
                            <h3>No results found</h3>
                            <p>Try clearing some filters or widening your location.</p>
                            <button className="btn apply">Show similar</button>
                        </div>
                    </section>
                </main>

                {/* Mobile floating filter button */}
                <button className="fab" aria-label="Open filters" title="Open filters">Filters</button>



            </div>


            <div className="revi">

                <Review />
            </div>

        </>
    )
}

export default Product

export function Schools(props) {
    return (
        <>
            <div className="parentCard">
                {props.data.length === 0 ? <h4 style={{ color: 'purple', marginLeft: '10px' }}>No Results Found</h4> : null}
                {props.data.map((item) => {
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

