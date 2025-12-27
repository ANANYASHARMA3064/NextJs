export default async function ProductList({ params, }:{
    params: Promise<{productID:string;reviewID:string}>;
}){
    const {productID,reviewID} = (await params);
    return <h1>Review {reviewID} for product {productID} </h1>
}