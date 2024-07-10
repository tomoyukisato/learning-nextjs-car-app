import { FilterProps } from "@/types";

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;
    return newPathname;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
export async function fetchCars(filters: FilterProps) {
    const url =
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
    console.log(process.env.NEXT_PUBLIC_RAPID_API_KEY);
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
            "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        // const result = await response.text();
        console.log("response");
        console.log(response);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
