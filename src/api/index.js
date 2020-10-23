import ajax from "./ajax";

export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)

export const reqFootTypes=()=>ajax(`/index_category`)

export const reqShops=(longitude,latitude)=>ajax(`/shops`,{longitude,latitude})

export const reqAddress=()=>ajax()
