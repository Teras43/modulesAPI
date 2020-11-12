export function apiGet() {
  let dealsResponse;
  let dealsAPI =
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
  const gameDealsBody = document.getElementById("dealsBody");
  const dealLink = "https://www.cheapshark.com/redirect?dealID={";

  let xmlhttps = new XMLHttpRequest();
  xmlhttps.onreadystatechange = () => {
    if (xmlhttps.readyState === 4 && xmlhttps.status === 200) {
      dealsResponse = JSON.parse(xmlhttps.responseText);
      gameDealsBody.insertAdjacentHTML(
        "beforeend",
        `
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[0].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[0].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[0].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[0].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[0].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[1].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[1].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[1].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[1].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[1].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[2].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[2].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[2].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[2].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[2].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[3].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[3].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[3].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[3].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[3].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[4].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[4].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[4].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[4].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[4].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[5].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[5].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[5].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[5].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[5].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
        `
      );
    }
  };
  xmlhttps.open("GET", dealsAPI, true);
  xmlhttps.send();
}

export function loadMore() {
  let dealsResponse;
  let dealsAPI =
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
  const gameDealsBody2 = document.getElementById("dealsBodyNext");
  const dealLink = "https://www.cheapshark.com/redirect?dealID={";
  const loadMoreBtn = document.getElementById("moreBtn");

  let xmlhttps = new XMLHttpRequest();
  xmlhttps.onreadystatechange = () => {
    if (xmlhttps.readyState === 4 && xmlhttps.status === 200) {
      dealsResponse = JSON.parse(xmlhttps.responseText);
      gameDealsBody2.className = 'dealsBodyNextLoad';
      gameDealsBody2.insertAdjacentHTML(
        "beforeend",
        `
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[6].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[6].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[6].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[6].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[6].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[7].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[7].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[7].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[7].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[7].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[8].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[8].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[8].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[8].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[8].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[9].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[9].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[9].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[9].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[9].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[10].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[10].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[10].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[10].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[10].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
            <div class="gameArea">
                <div class="gameImgContainer">
                    <img class="gameImg" src="${dealsResponse[11].thumb}"/>
                </div>
                <div class="gameInfo">
                    <div class="gameName"><span class="italic">Title:</span> ${
                      dealsResponse[11].title
                    }</div>
                    <div class="gamePrice"><span class="italic">Normal Price:</span> $${
                      dealsResponse[11].normalPrice
                    }</div>
                    <div class="salePrice"><span class="italic">On Sale Now:</span> $${
                      dealsResponse[11].salePrice
                    }</div>
                    <a href="${
                      dealLink + dealsResponse[11].dealID + "}"
                    }" class="dealLink" target="_blank">Buy Game Here!</a>
                </div>
            </div>
    `
      );
    }
  };
  loadMoreBtn.style.margin = 0;
  loadMoreBtn.style.display = "none";
  xmlhttps.open("GET", dealsAPI, true);
  xmlhttps.send();
}
