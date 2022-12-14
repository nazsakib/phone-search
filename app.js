// console.log("hello");

// spinner
const toggleSpinner = displaySpinner => {
    document.getElementById("spinner").style.display = displaySpinner;
};
// search area

const searchArea = () => {
    const searchInput = document.getElementById("search-input");
    toggleSpinner("block");
    const searchText = searchInput.value;
    // console.log(searchText);
    // api taking
    if (searchText === "") {
        // using sweet alert, a replacement for js default alert system

        toggleSpinner("none");
        swal({
            title: "Error",
            text: "Kindly enter the phone name!",
            icon: "warning",
            buttons: ["Cancel", "Search Again"],
        });
    } else {
        // clearing the input value after search
        searchInput.value = "";
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResults(data.data));
    }
};

// display phone area

const displaySearchResults = datas => {
    const searchResult = document.getElementById("display-area");
    searchResult.textContent = "";

    toggleSpinner("none");

    datas?.forEach(data => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div
            class="drop-shadow-2xl border border-amber-700 p-8 rounded-md text-center bg-white">
            <img class="pb-2 ml-4" src="${data.image}" alt="" />
            <h2 class="font-bold capitalize">${data.phone_name}</h2>
            <p>${data.brand}</p>
            <button onclick="loadDetails('${data.slug}')"
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
        .then(data => showPhoneDetails(data.data));
};

const showPhoneDetails = phone => {
    // console.log(phone);
    const phoneDetail = document.getElementById("phone-detail");

    // sweet alert
    swal({
        title: `${phone.name ? phone.name : "Info not available!"}`,
        text: `${phone.releaseDate ? phone.releaseDate : "Info not available!"}
               ${
                   phone.mainFeatures.storage
                       ? phone.mainFeatures.storage
                       : "Info not available!"
               }, 
               ${phone.others.WLAN ? phone.others.WLAN : "Info not available!"},
               ${
                   phone.mainFeatures.memory
                       ? phone.mainFeatures.memory
                       : "Info not available!"
               },
               ${
                   phone.mainFeatures.sensors
                       ? phone.mainFeatures.sensors
                       : "Info not available!"
               },
                ${phone.others.USB ? phone.others.USB : "Info not available!"}`,
        icon: "info",
        dangerMode: false,
        buttons: "Ok",
    });
    // const div = document.createElement("div");
    // phoneDetail.textContent = "";
    // div.innerHTML = `
    //     <div
    //         class="drop-shadow-2xl border border-amber-700 p-8 rounded-md text-center bg-white font-bold">
    //         <img class="pb-2 mx-auto" src="${phone.image}" alt="" />
    //         <h2 class="font-bold capitalize">${phone.name}</h2>
    //         <p>${phone.releaseDate}</p>
    //         <p>${phone.mainFeatures.storage}</p>
    //         <p>${phone.others.WLAN}</p>
    //         <p>${phone.mainFeatures.memory}</p>
    //         <p>${phone.mainFeatures.sensors}</p>
    //     </div>
    //     `;
    // phoneDetail.appendChild(div);
};
