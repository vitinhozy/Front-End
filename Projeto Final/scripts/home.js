document.addEventListener('DOMContentLoaded', () => {
    const token = 'BQB3TYCnbaX1CREBjV8ezob80IYXCqnlpyYYB9pjjgV8fmLnS9mKxrCbQKQH0-bulIbtprGv3mj8HeBBUPP0eNCwMxZZHSUrrXb2rPYkU4-IOovKUWsj5w6F9tDWm90xGaCV1pasGLdxtBpwsyluwW4_tAn-uaVJLWn_EJFVOuoPPsUKS0--Zb4JWiSLmnCs6uyckt1FYiyOmCed6gRcjEwrrkc'; // Substitua com seu token de acesso do Spotify

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
            container.innerHTML = '<p>Erro ao carregar as músicas. Tente novamente mais tarde.</p>';
        }
    };

    const displayMusic = (data, container) => {
        container.innerHTML = ''; // Limpar o conteúdo antes de adicionar novas músicas

        if (!data.items || data.items.length === 0) {
            container.innerHTML = '<p>Nenhuma música encontrada.</p>';
            return;
        }

        data.items.forEach(item => {
            const track = item.track || item; // Caso o item seja uma playlist, pegamos o track dentro
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

    // URL para "Top 50 Músicas"
    const top50Url = 'https://api.spotify.com/v1/playlists/1ctvFPKwGHqxo40CQnaILl/tracks'; 
    fetchMusic(top50Url, top50Container);

    // URL para buscar "Músicas do Momento" (substitua com um ID real)
    const momentMusicUrl = 'https://api.spotify.com/v1/playlists/2amY8IJKCKQ1v5kI3VOEzO/tracks'; // Substitua {playlist_id} pelo ID correto
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
