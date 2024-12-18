import spotipy
from spotipy.oauth2 import SpotifyOAuth

CLIENT_ID = 'da223b3d05cc4175981aff1ffd792d16'  # Substitua pelo seu Client ID
CLIENT_SECRET = '2c3998a8735a40cab387591f7cb169fb'  # Substitua pelo seu Client Secret
REDIRECT_URI = 'http://127.0.0.1:5500'  # URL de redirecionamento
SCOPE = 'user-library-read'  # Permissões que você precisa

# Iniciando o processo de autenticação
print("Iniciando o processo de autenticação...")

# Inicializa o cliente Spotify com autenticação
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=CLIENT_ID,
                                               client_secret=CLIENT_SECRET,
                                               redirect_uri=REDIRECT_URI,
                                               scope=SCOPE))

# Gerando o URL de autenticação
auth_url = sp.auth_manager.get_authorize_url()
print(f"Acesse esse URL para autenticação: {auth_url}")

# Após acessar o URL e autorizar o aplicativo, cole o código de autorização aqui
auth_code = input("AQBhImC2bb0mLrmf_ZBq6CWVQLXChsgl3k6eXdKf-fzYInoJsaAYySdBLR_Uu3qafEe9_-XutlXW8jM2LLGP6lidrRonqqIMMyOFRNlqka75Shn7pAzQuX_eCKF2cCww0TN0gdlBzCd_rqluCwFWAdFCDrmicb9jIxxTjItaU7PQy18kki9GSUYwcZ0")

# Troca o código de autorização por um token de acesso
token_info = sp.auth_manager.get_access_token(auth_code)
access_token = token_info['access_token']

print(f"Token de acesso: {access_token}")
