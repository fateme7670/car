import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchApi } from "@/utils";
import Image from "next/image";
export default async function Home({ searchParams }: HomeProps) {
  const allcar=await fetchApi({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })
 const isEmpty=!Array.isArray(allcar) || allcar.length<1 || !allcar
  return (
<main className="overflow-hidden">
  <Hero />
  <div className="mt-12 max-width padding-x padding-y" id="discover">
    <div className="home__text-container">
    <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
    </div>
    <div className='home__filters'>
    <SearchBar />
<div className="home__filter-container">
  <CustomFilter title='fuel' options={fuels}/>
  <CustomFilter title='year' options={yearsOfProduction}/>

</div>
</div>
  </div>
  {!isEmpty ? (
    <section className="padding-x">
<div className='home__cars-wrapper'>
              {allcar?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore 
             pageNumber={(searchParams.limit || 10)/10}
            isNext={(searchParams.limit || 10)>allcar.length}
            
            />
    </section>
  ):(
    <div className='home__error-container'>
    <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
    <p>{allcar.message}</p>
  </div>
  )}
</main>
  );
}
