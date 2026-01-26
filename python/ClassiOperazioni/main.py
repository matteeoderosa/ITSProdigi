class operazioni:
    def addizione(self, a, b):
        result = a + b
        print(result)
    
    def sottrazione(self, a, b):
        result = a - b
        print(result)

r = int(input("1 o 2?\n"))
a = int(input("numero 1: "))
b = int(input("numero 2: "))

s = operazioni()

if(r == 1):
    s.addizione(a, b)
elif(r == 2):
    s.sottrazione(a ,b)
else:
    print("numero non nel range [1,2]")