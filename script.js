var result = [
    {
        "name": "rajiv",
        "marks": {
            "Maths": "18",
            "English": "21",
            "Science": "45"
        },
        "rollNumber": "KV2017-5A2"
    },
    {
        "name": "abhishek",
        "marks": {
            "Maths": "43",
            "English": "30",
            "Science": "37"
        },
        "rollNumber": "KV2017-5A1"
    },
    {
        "name": "zoya",
        "marks": {
            "Maths": "42",
            "English": "31",
            "Science": "50"
        },
        "rollNumber": "KV2017-5A3"
    },
];
var highMarks = 0;

(function myJson() {
    
    if(result.length !== 0){
        for(var i = 0; i < result.length; i++) {
            result[i].marks.totalMarks = Number(result[i].marks.Maths) + Number(result[i].marks.English) + Number(result[i].marks.Science);
            if(result[i].marks.totalMarks > highMarks) {
                highMarks = result[i].marks.totalMarks;
            }

            if(result[i].marks.totalMarks < 20) {
                result[i].status = "Fail";
            }
            if(result[i].marks.totalMarks > 20) {
                result[i].status = "Pass";
            }
            
        }
    }

    function compare(a, b) {
        const bandA = a.name.toUpperCase();
        const bandB = b.name.toUpperCase();
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
      result.sort(compare);

    
})();


(function studentResultBoard() {
    if(result.length !== 0){
        for(var i = 0; i < result.length; i++) {
            var newTr = document.createElement("tr");
            var  connectingTr = document.getElementsByClassName("board")[0];
            connectingTr.appendChild(newTr);
            var newTd = document.createElement("td");
            newTr.appendChild(newTd);
            result[i].name = result[i].name.toLowerCase();
            result[i].name = result[i].name[0].toUpperCase() + result[i].name.slice(1);
            newTd.innerHTML = result[i].name;
            for(var j = 0; j < 3; j++) {
                var newTd = document.createElement("td");
                newTr.appendChild(newTd);
                if( j === 0) {
                    newTd.innerHTML = result[i].rollNumber;
                }
                if( j === 1) {
                    newTd.innerHTML = result[i].marks.totalMarks;
                    newTd.style.textAlign = 'right';
                }
                if( j === 2) {
                    if (result[i].marks.totalMarks === highMarks) {
                        result[i].status = "Topper"
                        newTd.innerHTML = "Topper";
                    } else {
                        newTd.innerHTML = result[i].status;
                    }
                }
            }
            if(result[i].status === "Fail") {
                newTr.className = "fail"
            }
            if(result[i].status === "Topper") {
                newTr.className = "topper"
            }
        }
    }
})();







