export default function Sales({discount}){
    return(
    <div className="sales"> 
        <h3>Today's Sales</h3>
<li>Buy 4 Tops and get {discount*4} off the price</li>
<li>Buy 2 Dresses and get {discount*2} off the price</li>
<li>Buy 2 Jeans and get {discount*3} off the price</li>
<li>Buy 3 Skirts and get {discount} off the price</li>
</div>
    )
}