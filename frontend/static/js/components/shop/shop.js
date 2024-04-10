export const Html = `
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row">
        <div style="width: 30%">
            <div style="height: 60%; padding: 1%; display: flex; flex-direction: column; background-color: green">
                <div>
                    <label>Product name</label>
                    <input type="text" value="" id="" placeholder="Product name" style="width: 50%"></input>
                    <button id="shop_product_submit_btn">submit</button>
                </div>
                <div style="max-width: fit-content;display: flex; flex-direction: column; margin-top: 1%; padding: 1% 1% 1% 1%; border: 1px solid black; border-radius: 5px">
                <div style="display: flex">
                    <label>Price</label>
                    <input type="range" value="5" id="inputRangeAmount" list="markers" min="1" max="100" step="1"></input>
                    <p>Value: <output id="inputRangeAmountOutput">5</output></p>
                </div>
                <div>
                    <label>Discount</label>
                    <input type="checkbox" value="" id=""></input>
                </div>
                <div>
                    <label>New stuff</label>
                    <input type="checkbox" value="" id=""></input>
                </div>
                <div>
                <label>Delivery option</label>
                    <select id="">
                        <option value="s">Standard</option>
                        <option value="e">Express (+ x.xx€)</option>
                    </select>
                </div>
                </div>
            </div>
            <div style="height: 40%; background-color: lightgreen">
                premium content
            </div>
        </div>
        <div id="" style="width: 70%; background-color: yellow">
        </div>
    <div>
`;