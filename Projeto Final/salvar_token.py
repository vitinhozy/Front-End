import spotipy
from spotipy.oauth2 import SpotifyOAuth

# Substitua com as suas credenciais
CLIENT_ID = 'da223b3d05cc4175981aff1ffd792d16'  # Substitua pelo seu Client ID
CLIENT_SECRET = '2c3998a8735a40cab387591f7cb169fb'  # Substitua pelo seu Client Secret
REDIRECT_URI = 'http://127.0.0.1:5500'  # URL de redirecionamento
SCOPE = 'user-library-read'  # Permissões que você precisa

# Inicializa o cliente Spotify com autenticação
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=CLIENT_ID,
                                               client_secret=CLIENT_SECRET,
                                               redirect_uri=REDIRECT_URI,
                                               scope=SCOPE))

# Substitua com o código de autorização que você obteve na URL
auth_code = "AQBEUCxKOeF5qm45se3wkMvphggBYQepocJ3ItuLtkc_s2LoRVxLvXGYDdrNx1LT1lB5_9dOO-IgGscl4kukhxRduy396sYswz-Lbndrm1p2Sdp4A6qZa4-owVm1FXGw8bSaYdv_tg_FpUjK6M3NXPO4t0BeI1nQE4teTjEP66ui_GYIXiwbSxoP_tc"

# Troca o código de autorização por um token de acesso
token_info = sp.auth_manager.get_access_token(auth_code)

# Pega o token de acesso da resposta
access_token = token_info['access_token']

# Imprime o token de acesso
print(f"Token de acesso: {access_token}")
