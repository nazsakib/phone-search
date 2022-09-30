// console.log("hello");

// search area

const searchArea = () => {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value;
    // console.log(searchText);

    // clearing the input value after search
    searchInput.value = "";

    // api taking
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.data));
};

// display phone area

const displaySearchResults = datas => {
    const searchResult = document.getElementById("display-area");
    searchResult.textContent = "";
    datas.forEach(data => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div
            class="drop-shadow-2xl border border-amber-700 p-8 rounded-md text-center bg-white">
            <img class="pb-2 ml-4" src="${data.image}" alt="" />
            <h2 class="font-bold capitalize">${data.phone_name}</h2>
            <p>${data.brand}</p>
            <button onclick="loadDetails(${data.slug})"
                class="py-2 px-12 rounded-md text-white bg-teal-700 hover:bg-teal-900 hover:text-white mt-4">
                Details
            </button>
        </div> 
        `;
        searchResult.appendChild(div);
    });
};

// details show

const loadDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data));
};

const showPhoneDetails = phone => {
    console.log(phone);
    const phoneDetail = document.getElementById("phone-detail");
    const div = document.createElement("div");
    div.innerHTML = `
        <div
            class="drop-shadow-2xl border border-amber-700 p-8 rounded-md text-center bg-white">
            <img class="pb-2 ml-4" src="${phone.image}" alt="" />
            <h2 class="font-bold capitalize">${phone.name}</h2>
            <p>${phone.others}</p>
        </div>
        `;
    phoneDetail.appendChild(div);
};
