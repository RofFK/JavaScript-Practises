const myInformation = {
    idInfo: {
        name: 'Faruk',
        surname: 'KÖYSÜREN',
        dateOfBirth: '20.02.1995',
        age: 24,
    },
    educationInfo: {
        university: 'Kocaeli Üniversitesi',
        faculty: 'Mühendislik Fakültesi',
        department: 'Metalurji ve Malzeme Mühendisliği',
        graduationGrade: '2.4/4'
    },
    skills: {
        skills1: 'AutoCAD',
        skills2: 'MS Office',
        skills3: 'JavaScript'
    }

}

console.log(myInformation.educationInfo.department)
myInformation.skills.skills4 = 'kaybetmek (her zaman)'
console.log(myInformation.skills)
myInformation.idInfo = {//objenin bütün property lerini değiştirme
    name: 'Fatih',
    surname: 'Taşdemir',
    dateOfBirth: '23.03.1993',
    age: 26
}

console.log(myInformation.idInfo)