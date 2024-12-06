        while (true) {
            let user = prompt("Son kiriting (yoki bekor qilish uchun Cancel-ni bosing):");
        
            if (user === null) {
                alert("Amal bajarilmadi.");
                break; 
            }
        
            let raqam = Number(user);
        
            if (isNaN(raqam) || user === "") {
                alert("Bu son emas, iltimos son kiriting.");
            } else if (raqam % 2 === 0) {
                alert(`${raqam} - Juft son.`);
                break; 
            } else {
                alert(`${raqam} - Toq son.`);
                break; 
            }
        }
        