from PIL import Image

# Abrir a imagem em alta resolução para apresentar ao usuário
image_path = './image.png'
image = Image.open(image_path)

# Exibir a imagem
image.show()