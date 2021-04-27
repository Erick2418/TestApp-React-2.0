export const getGifs=async(category)=>{
        // endodeURI reemplaza los espacios por % u otras cosas...
        const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=13EO7hsC5VDKZ6AU4rWId9SysAk3t1cR`
        const resp= await fetch(url);
        const {data}= await resp.json();
        const gifs= data.map( img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        }

        )

 
        return gifs;
    }