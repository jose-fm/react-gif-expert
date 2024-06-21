export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rNGdCevUh33qmJ5GcvvdGJonZHPFQeTi&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();    // "data = []" es para asegurar que siempre trabajaremos con un array

    const gifs = data.map( img => ({            // es la forma corta de un cuerpo de función que sólo devulve una estructura
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
}
