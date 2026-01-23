import random

def shifta(array):
    temp = array[0]

    for i in range (dim-1):
        array[i] = array[i+1]

    array[dim-1] = temp

def stampa(array, x):
    if(x == 0):
        print("\narray normale:")
    else:
        print("\narray shiftato:")
    print(array, sep=", ")

dim = int(input("dimensione vettore? (tra 1 e 20) "))
while (dim < 1 or dim > 20):
    print("dimensione non compresa tra 1 e 20!")
    dim = int(input("dimensione vettore? (tra 1 e 20) "))

array = []
for i in range (dim):
    array.append(random.randint(0,1000))

stampa(array, 0)

shifta(array)

stampa(array, 1)

array2 = []


for i in range(dim):
    if(array[i]%2 == 0):
        array2.append(array[i])
for i in range(dim):
    if(array[i]%2 != 0):
        array2.append(array[i])

print("\narray pari-dispari:")

print(array2, sep=", ")