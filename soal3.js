let arrManusia = [
    
    {nama: 'Alex', umur: 22, kelamin: 'Pria', job: 'Dev'},
    {nama: 'Charlee', umur: 32, kelamin: 'Pria', job: 'CTO'},
    {nama: 'Alicia', umur: 26, kelamin: 'Wanita', job: 'Dev'},
    {nama: 'Batios', umur: 33,  kelamin: 'Pria', job: 'CEO'},
    {nama: 'Alona', umur: 38,  kelamin: 'Wanita',job: 'Dev'},
    {nama: 'Bakhti', umur: 27,  kelamin: 'Pria', job: 'PM'}

]

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
]


var funShow = () => {
    var listManusia = arrManusia.map((val) => {
        return `<tr>
        <td>${val.nama}</td>  
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })

    var listJob = arrJob.map((val) => { 
        return `<option>${val}</option>`
    })

    document.getElementById('here').innerHTML = listManusia.join('')
    document.getElementById('job').innerHTML = listJob.join('')

}


var funInputData = () => {
    var NAMA = document.getElementById('nama').value
    var UMUR = document.getElementById('umur').value
    var KELAMIN = document.getElementById('kelamin').value
    var JOB = document.getElementById('jobInput').value.toUpperCase()
    

    arrManusia.push({
        nama: NAMA,
        umur: UMUR,
        kelamin: KELAMIN,
        job: JOB
    })


    if(arrJob.includes(JOB) == false){
        arrJob.push(JOB)
    }
    funShow()
}


funShow ()



var funFilterName = () => {
    var filter = document.getElementById('search').value

    var test = []




    for (var i = 0; i < arrManusia.length; i++){
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()

        if(name.includes(input)){
            test.push(arrManusia[i])
        } 
    }

    list = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}

var funFilterUmur = () => {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

if(!(num1 == '' || num2 == '')){ 

var list = arrManusia.filter(val => {
        return (val.umur >= num1 && val.umur <= num2)
    })

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>
        `
    })

    document.getElementById('here').innerHTML = list.join('')

    }
}


funFilterJob = () => {
    var selectedJob = document.getElementById('job').value
    
    if(!(selectedJob == 'All')){
    var list = arrManusia.filter ( val => {
        return (val.job.includes(selectedJob))
    })
    }  else {
        var list = arrManusia
    }

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })
    
    document.getElementById('here').innerHTML = list.join('')   

    }


var funSortName = () => {
    var sortName = document.getElementById('sortnama').value.sort()


    list = sortName.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}


var funSortUmur = () => {
    var sortUmur = document.getElementById('sortumur').sort()


    list = sortUmur.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}

var funSortPekerjaan = () => {
    var sortPekerjaan = document.getElementById('sortumur').sort()


    list = sortPekerjaan.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}

var funSortKelamin = () => {
    var sortKelamin = document.getElementById('sortumur').sort()


    list = sortKelamin.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}