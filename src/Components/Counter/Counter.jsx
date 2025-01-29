import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]); 
    const targets = [36, 645, 100, 35];
    const durations = [8, 20, 1, 1]; 

    useEffect(() => {
        const intervals = targets.map((target, i) => {
            const interval = setInterval(() => {
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    if (newCounts[i] < target) newCounts[i] += 1;
                    else clearInterval(interval); 
                    return newCounts;
                });
            }, durations[i] * 100);
            return interval;
        });

        return () => {
            intervals.forEach(clearInterval);
        };
    }, []); 

    const labels = ["YEARS' EXPERIENCE", "CYBER SECURITY EXPERTS", "CUSTOMER SATISFACTION", "CUSTOMER SERVED GLOBALLY"];

    return (
        <React.Fragment>
            <section className="counter-section">
            <div className="srcn_container">
                <div className="counter-container row">
                    {counts.map((count, i) => (
                        <div key={i} className="col-md-6 col-lg-3 col-6 mb-4">
                            <div className="counter-box ">
                               <div className='counter-box_heading'>
                               <h2>{count}</h2>
                               <span>{(i === 0 || i === 1) ? "+" : (i === 2 ? "%" : "M")}</span>
                               </div>
                                <p>{labels[i]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Counter;
