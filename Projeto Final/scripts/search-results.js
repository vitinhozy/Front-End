document.addEventListener('DOMContentLoaded', () => {
    const token = 'BQCZiZuhG5yLZaQRizALyC6wyPf5rmh_BuI--5ar0iZ_4SkX_bsJxFS1w_D4L3b4oRtM1NFbzqQRM4me1H2v3pQtVlW1yKwCV1QxdQMsbymziKA2kcadQ76HoBf9tsaV459TcClM8t14ocC4Sl1wfBWuF3GVg5hS6D-UIT_-kDNYKDeG1tRAesg3ZUYpAvWFvuD6q01utmo9ISJZCEZ5YpgyCA8'; // Substitua com seu token de acesso do Spotify

    // Recupera o termo de pesquisa da URL
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('query');

    // Atualiza o título com o termo de pesquisa
    document.getElementById('search-title').textContent = `Resultados para: "${searchQuery}"`;

    const searchResultsContainer = document.getElementById('search-results');

    // Função para fazer requisição e exibir os resultados
    const fetchSearchResults = async (query) => {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar músicas');
            }

            const data = await response.json();
            displaySearchResults(data);
        } catch (error) {
            console.error('Erro:', error);
            searchResultsContainer.innerHTML = '<p>Erro ao carregar os resultados. Tente novamente mais tarde.</p>';
        }
    };

    const displaySearchResults = (data) => {
        if (data.tracks.items.length === 0) {
            searchResultsContainer.innerHTML = '<p>Nenhuma música encontrada.</p>';
        } else {
            data.tracks.items.forEach(track => {
                const musicCard = document.createElement('div');
                musicCard.classList.add('music-card');

                const musicImage = document.createElement('img');
                musicImage.src = track.album.images[0].url;
                musicImage.alt = track.name;

                const musicInfo = document.createElement('div');
                musicInfo.classList.add('music-info');
                
                const musicTitle = document.createElement('h3');
                musicTitle.textContent = track.name;

                const musicArtist = document.createElement('p');
                musicArtist.textContent = track.artists.map(artist => artist.name).join(', ');

                musicInfo.appendChild(musicTitle);
                musicInfo.appendChild(musicArtist);

                musicCard.appendChild(musicImage);
                musicCard.appendChild(musicInfo);

                searchResultsContainer.appendChild(musicCard);
            });
        }
    };

    // Inicia a busca
    if (searchQuery) {
        fetchSearchResults(searchQuery);
    }
});
