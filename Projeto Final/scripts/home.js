document.addEventListener('DOMContentLoaded', () => {
    const token = 'BQCZiZuhG5yLZaQRizALyC6wyPf5rmh_BuI--5ar0iZ_4SkX_bsJxFS1w_D4L3b4oRtM1NFbzqQRM4me1H2v3pQtVlW1yKwCV1QxdQMsbymziKA2kcadQ76HoBf9tsaV459TcClM8t14ocC4Sl1wfBWuF3GVg5hS6D-UIT_-kDNYKDeG1tRAesg3ZUYpAvWFvuD6q01utmo9ISJZCEZ5YpgyCA8'; // Substitua com seu token de acesso do Spotify

    const momentMusicContainer = document.getElementById('moment-music');
    const top50Container = document.getElementById('top-50');

    // Função para fazer requisição e exibir as músicas
    const fetchMusic = async (url, container) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar músicas');
            }

            const data = await response.json();
            displayMusic(data, container);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    const displayMusic = (data, container) => {
        container.innerHTML = ''; 
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

            container.appendChild(musicCard);
        });
    };

    const top50Url = 'https://api.spotify.com/v1/playlists/1ctvFPKwGHqxo40CQnaILl/tracks'; 
    fetchMusic(top50Url, top50Container);

    // URL para buscar músicas do momento
    const momentMusicUrl = 'https://api.spotify.com/v1/browse/featured-playlists'; 
    fetchMusic(momentMusicUrl, momentMusicContainer);
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery) {
        // Redireciona para a página de resultados de pesquisa
        window.location.href = `search-results.html?query=${encodeURIComponent(searchQuery)}`;
    }
});

