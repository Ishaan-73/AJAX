function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        email: document.getElementById('email').value,

        
    };
    checkRecordExists(formData);
}

function checkRecordExists(formData){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4 && xhr.status===200){
                const response = JSON.parse(xhr.responseText);

                if(response.exists){
                    alert('Record already exists');
                }
                else{
                    saveRecord(formData);
                }
            }
        };
        xhr.open('POST','check_record.php',true);
        xhr.send(JSON.stringify({name:formData.name}));
}

function saveRecord(formData){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            alert("Record Saved successfully!");
        }
    };
    xhr.open('POST','save_record.php',true);
    xhr.send(JSON.stringify(formData));
}

    // const jsonData = JSON.stringify(formData, null, 2);


    // const d = new Date();
    // d.setTime(d.getTime() + (86400 * 30 * 1000)); 
    // const expires = "expires=" + d.toUTCString();

    // const encodedData = encodeURIComponent(jsonData);

    // document.cookie = formData.name+"=" + encodedData + ";" + expires + ";path=/";


