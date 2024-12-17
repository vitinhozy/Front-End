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
auth_code = "AQA9-cYdzs59yyl24mQ3j9SS45Cdqdq0tCv6tYTu9SpJFsRBcW_TKTG0Bsuekcu9Is6SThD4TdReHwxcm1nkiCSJk9eQGbTrQiyVeBS8iH8BOT6eI6zFkXGtv6ZJXtVoQP2WYVKrAB8ku1meMZhDNeYETxm1Cb_dMxAmOhTLlUQI2m-8tSSOjIjZqhI"

# Troca o código de autorização por um token de acesso
token_info = sp.auth_manager.get_access_token(auth_code)

# Pega o token de acesso da resposta
access_token = token_info['access_token']

# Imprime o token de acesso
print(f"Token de acesso: {access_token}")
