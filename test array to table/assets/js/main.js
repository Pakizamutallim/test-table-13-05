var array = [
    {
        ad: "eli",
        soyad: "eliyev",
        yash: "26"
    },
    {
        ad: "agasi",
        soyad: "babayev",
        yash: "40"
    },
    {
        ad: "ulu",
        soyad: "memedov",
        yash: "21"
    },
    {
        ad: "veli",
        soyad: "veliyev",
        yash: "23"
    },
    {
        ad: "hesen",
        soyad: "guliyev",
        yash: "56"
    }
]

for (let i = 0; i < array.length; i++) {
    tbody.inner.HTML += `
    <td>${i+1}</td>
    <td>${array[i].ad}</td>
    <td>${array[i].soyad}</td>
    <td>${array[i].yash}</td>`
}