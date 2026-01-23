let c = 0
let media = 0
let voto

do{
    voto = stdin("voto "+(c+1)+"? ")
    media += voto
    c++
}while(c<5)

media = media/c

console.log(media)