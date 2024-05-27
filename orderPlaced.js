document.cookie = "orderId=0; counter=0";

let httpRequest = new XMLHttpRequest(),
    jsonArray,
    method = "GET",
    jsonRequestURL = "https://5d76bf96515d1a0014085cf9.mockapi.io/order";

httpRequest.open(method, jsonRequestURL, true);
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        // Convert JSON into JavaScript object
        jsonArray = JSON.parse(httpRequest.responseText);
        console.log(jsonArray);

        // Append new item to jsonArray
        jsonArray.push({
            "amount": 200,
            "product": ["userOrder"]
        });

        // Convert jsonArray to JSON string
        let jsonData = JSON.stringify(jsonArray);

        // Send updated JSON data to the server
        updateData(jsonData);
    }
}
httpRequest.send(null);

function updateData(data) {
    let updateRequest = new XMLHttpRequest();
    updateRequest.open("POST", jsonRequestURL, true);
    updateRequest.setRequestHeader("Content-Type", "application/json");
    updateRequest.send(data);
}
