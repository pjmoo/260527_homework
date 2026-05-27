function renderAnime(category) {
    const grid = document.getElementById('grid');
    grid.innerHTML = ""; // 기존 내용 비우기
    
    animeData[category].forEach(item => {
        grid.innerHTML += `
            <div class="card p-6 bg-slate-800 rounded-3xl hover:bg-slate-700 transition">
                <h3 class="text-white font-bold text-lg">${item.title}</h3>
                <p class="text-slate-400 text-sm mt-2">${item.desc}</p>
            </div>
        `;
    });
}