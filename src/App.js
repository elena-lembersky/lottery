import React from 'react';
import './style.scss';
import { useEffect, useState } from 'react';
import CaruseLotolItem from './components/carusel-loto-item/caruseLotoItem';
import _ from 'lodash';
import Button from "./components/button";
import CustomCarousel from "./components/custom-carousel/custom-carousel";

function App() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('desc');
    const [sortField, setSortField] = useState('jackpot');
    const [carouselFromStep, setCarouselFromStep] = useState(0);
    const [carouselToStep, setCarouselToStep] = useState(6);
    const [isAllData, setIsAllData] = useState(false);

    useEffect(() => {
        fetchMyAPI(sortType,6);
    }, []);

    async function fetchMyAPI (sortType,step=carouselToStep) {
        if (isAllData) return false;
        const nextStep = step + carouselFromStep;
        const result = await fetch(`http://localhost:4200/lottery?_start=${carouselFromStep}&_end=${nextStep}`);
        const jsonResult = await result.json();
        if (jsonResult.length) {
            setData(_.orderBy([...data,...jsonResult],sortField,sortType));
            setCarouselFromStep(nextStep);
            setCarouselToStep(nextStep + step);
        }
        else {
            setIsAllData(true);
        }
    }

    const onSort = sortField => {
        const clonedData = data.concat();
        const sortType = sortField === 'jackpot' ? 'desc' : 'asc';
        setSortType(sortType);
        const orderedData = _.orderBy(clonedData,sortField,sortType);
        setData(orderedData);
        setSortField(sortField);
    }

    const onNext = () => {
        if (isAllData) return false;
        fetchMyAPI(sortType, 3);
    }

    return (
        <div className="App">
          <div className="container">
              <div className="carousel__container">
                  <CustomCarousel data={data} onNext={onNext}>
                      <CaruseLotolItem />
                  </CustomCarousel>
              </div>
              <div className="sort__wrapper">
                  <Button dataActive={sortField==='jackpot'} text="Sort By Jackpot" typeSort="jackpot" onSort={onSort}/>
                  <Button dataActive={sortField==='end_date'} text="Sort By Date" typeSort="end_date" onSort={onSort}/>
              </div>
          </div>
        </div>
    );
}

export default App;
