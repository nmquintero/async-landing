const content = document.getElementById('content');

const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8ec98c0b03msha0d5e093143b350p1847b8jsne1268b1c13fe',
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
};


async function fetchData(url){
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try{
        const response = await fetchData(url);
        let  view = `
        ${response.data.map(item=>`
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${item.image}" alt="${item.title}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${item.title}
                </h3>
            </div>
            <div class="mt-4 flex justify-between">
                <a href="${item.link}">Accede acá</a>
            </div>
        </div>
        `).join('')}
        `;
        content.innerHTML = view;
    }catch (e) {
        console.log(e)
    }
})();