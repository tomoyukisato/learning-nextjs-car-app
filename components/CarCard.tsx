import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import React from "react";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div>
            <div>
                <h2>
                    {make}
                    {model}
                </h2>
            </div>

            <p>
                <span>$</span>
                {carRent}
                <span>/day</span>
            </p>
        </div>
    );
};

export default CarCard;
