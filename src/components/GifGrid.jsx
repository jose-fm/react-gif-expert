// import { useState, useEffect } from "react";
import { GrifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );
    console.log({ images, isLoading });

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GrifItem
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
