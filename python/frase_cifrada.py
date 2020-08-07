

frase = input("Escribe una frase: ? \n")
frase = frase.lower()
# print(frase)

cifrado = {
    'O': 0,
    'I': 1,
    'Z': 2,
    'E': 3,
    'A': 4,
    'S': 5,
    'G': 6,
    'B': 8
}

lista = list(frase)
for i in range(len(lista)):
    print(lista[i])

    for key, value in cifrado.items():
        if(str(lista[i]) == str(key)):
            print("hi")