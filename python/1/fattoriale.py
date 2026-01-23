x = int(input("inserisci il numero di cui calcolare il fattoriale: "))

while(x<0):
    print("il numero è negativo, non è possibile calcolare il fattoriale")
    x = int(input("inserisci il numero di cui calcolare il fattoriale: "))

num = x
fat = 1

for cont in range(x, 0, -1):
    fat = fat*x
    x -= 1

print("il fattoriale di ", num , "è " , fat)