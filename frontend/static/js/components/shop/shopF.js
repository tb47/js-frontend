export const Js = () => {
    document.querySelector("#inputRangeAmount").addEventListener("input", e => {
        document.querySelector("#inputRangeAmountOutput").textContent = e.target.value;
    });
    document.querySelector('#shop_product_submit_btn').addEventListener("click", e => {
        e.preventDefault();
        // provider.sdk.db.search() ...
        console.log('...');
    });
};