import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);

    
    
    return (
        <>
            <h1>Rick And Morty API</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote data={data} />
            }


            {
                counter !== 1 && 
                <button onClick={ () => decrement() } className='btn btn-primary'>Previous Character</button>
            }
            
            <button onClick={ () => increment() } className='btn btn-primary'>Next Character</button>
        </>
    )
}
