// ! Task -> 1

// let body=prompt(`Zəhmət olmasa verilmiş göy cisimlərindən birini daxil edin: Ay, Günəş, Yupiter, Mars, Saturn`);
// console.log(body);


// switch (body){
//     case "Ay":
//         console.log(` 
//             Yerdən Aya qədər məsafə orta hesabla 384 401 kilometrdir. Siz avtomobillə ora 
//             dayanmadan yarım ildən artıq bir müddətə çata bilərsiniz. Təbii ki yalnız qalaktik yol
//             hərəkəti qaydalarını pozmaqla :)
//         `);
//         break;
//     case "Günəş":
//         console.log(`"
//             Günəş sistemi ilə birlikdə Bizim qalaktikanın mərkəzi ətrafında hərəkət edir 
//             və ondan təqribən 25-28 min işıq ili uzaqlıqda yerləşir. Siz Günəşə çata bilərsiz amma sadəcə ölü şəkildə :)
//         "`) ;
//         break; 
//     case "Yupiter":
//         console.log(`"
//             Yupiter Yerdən ən yaxın məsafədə sadəcə 365 milyon mil(588 milyon km) uzaqdadır.
//             Ən uzaq nöqtəsində isə Yerdən 601 milyon mil (968 milyon km) məsafədə olur.
//             Siz bir kosmik gəmi ilə bu nəhəng planetə çatmaq üçün minimum 3 il uçmalısınız.
//         "`) ;
//         break; 
//     case "Mars":
//         console.log(`
//             "Mars Yerdən təxminən 300 milyon mil (480 milyon kilometr) aralıda yerləşir.
//             Marsa səyahət təxminən yeddi ay çəkir."
//         `) ;
//         break; 
//     case "Saturn":
//         console.log(`"
//             Saturn Yerdən təxminən 1,2 milyard kilometr uzaqlıqdadır ki, siz Marsa 
//             getmək üçün 8 illik səyahətə çıxmalısınız.
//         "`) ;
//         break; 
//     default:
//        console.log("Adı Düzgün daxil etmədiniz :(");
// }



// ! Task -> 2


// const en=prompt("Zəhmət olmasa otağın enini daxil edin (10metri aşmasin)");
// const uzunluq=prompt("Zəhmət olmasa otağın uzunluğunu daxil edin (10metri aşmasin)");
// const pəncərəSayi=prompt("Zəhmət olmasa otaqdakı pəncərə sayını daxil edin(3 dən çox pəncərə mümkün deyil)");

// if(en>=3 & en<=10 || uzunluq>=3 & uzunluq<=10)
// function calcBoya(){
//     let boya=0.3;                 // ? bir kvadrat metrə 0.3 litr boya istifadə olunur
//     let pəncərə=1;                // ? bir pəncərə 1 kvadrat metrdir
//     let qapi=2;                    // ? bir qapi 2 kvadrat metrdir
//     let calc=(en*uzunluq*boya)-(pəncərə*pəncərəSayi*boya)-(qapi*boya);
//     console.log(`Sizin təklif etdiyiniz ölçülərə uyğun otağa  ${calc} litr boya lazımdır`);
// }
// calcBoya();



// ! Task -> 3

let month=prompt(`Zəhmət olmasa hər hansı bir fəsil daxil edin (məs: Yanvar) `);
console.log(month);


// switch (month) {
//     case "Yanvar":
//         console.log("Siz qış fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     case "Fevral":
//         console.log("Siz qış fəslində olan bir ay daxil etmisiz və bu ay 28-29 gündən ibarətdir");
//         break;
//     case "Mart":
//         console.log("Siz yaz fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     case "Aprel":
//         console.log("Siz yaz fəslində olan bir ay daxil etmisiz və bu ay 30 gündən ibarətdir");
//         break;
//     case "May":
//         console.log("Siz yaz fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     case "Iyun":
//         console.log("Siz yay fəslində olan bir ay daxil etmisiz və bu ay 30 gündən ibarətdir");
//         break;
//     case "Iyul":
//         console.log("Siz yay fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     case "Avqust":
//         console.log("Siz yay fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     case "Sentyabr":
//         console.log("Siz payız fəslində olan bir ay daxil etmisiz və bu ay 30 gündən ibarətdir");
//         break;
//     case "Oktyabr":
//         console.log("Siz payız fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     case "Noyabr":
//         console.log("Siz payız fəslində olan bir ay daxil etmisiz və bu ay 30 gündən ibarətdir");
//         break;
//     case "Dekabr":
//         console.log("Siz qış fəslində olan bir ay daxil etmisiz və bu ay 31 gündən ibarətdir");
//         break;
//     default:
//         console.log("Adı Düzgün daxil etmədiniz :(");
// }


// ? Bir başqa üsul...



// if(month=="Dekabr"|| month=="Yanvar"|| month=="Fevral"){
//     if(month=="Fevral"){
//         console.log("Siz qış fəslində olan bir ay daxil etmisiz və bu ay 28-29 gündən ibarətdir");
//     }
//     else{
//         console.log("Siz qış fəslində olan bir ay daxil etmisiz və bu ay 30-31 gündən ibarətdir");
//     }
// }
// else if(month=="Mart"|| month=="Aprel"|| month=="May"){
//     console.log("Siz yaz fəslində olan bir ay daxil etmisiz və bu ay 30-31 gündən ibarətdir");
// }
// else if(month=="Iyun"|| month=="Iyul"|| month=="Avqust"){
//     console.log("Siz yay fəslində olan bir ay daxil etmisiz və bu ay 30-31 gündən ibarətdir");
// }
// else if(month=="Sentyabr"|| month=="Oktyabr"|| month=="Noyabr"){
//     console.log("Siz payız fəslində olan bir ay daxil etmisiz və bu ay 30-31 gündən ibarətdir");
// }
// else{
//     console.log("Adı Düzgün daxil etmədiniz :(");
// }