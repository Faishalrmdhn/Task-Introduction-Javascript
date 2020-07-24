function rataRataUN (bIndo, bInggris,mtk,ipa){
    var rata2 = (bIndo + bInggris + mtk + ipa)/4;
    console.log(`Rata-rata =  ${rata2}`);
    if (rata2 >=90 && rata2 <=100){
        return "Grade = A";
    } else if (rata2 >= 80 && rata2 < 90){
        return "Grade = B";
    } else if (rata2 >= 70 && rata2 < 80){
        return "Grade = C";
    }else if (rata2 >= 60 && rata2 < 70){
        return "Grade = D";
    }else if (rata2 >= 0 && rata2 < 60){
        return "Grade = E";
    } else {
        return "Nilai anda tidak ada";
    }
}

console.log(rataRataUN(80,70,75,69));

// jawabanAlternative
// const mtk= 80;
// const bahasaIndonesia = 90;
// const bahasaInggris= 89;
// const ipa= 69;

// let rata2 = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
// console.log(`Rata-rata =  ${rata2}`);
// if (rata2 >=90 && rata2 <=100){
//             return "Grade = A";
//         } else if (rata2 >= 80 && rata2 < 90){
//             console.log("Grade = B");
//         } else if (rata2 >= 70 && rata2 < 80){
//             console.log("Grade = C");
//         }else if (rata2 >= 60 && rata2 < 70){
//             console.log("Grade = D");
//         }else if (rata2 >= 0 && rata2 < 60){
//             console.log("Grade = E");
//         } else {
//             console.log("Nilai anda tidak ada");
//         }

    