let api = `https://hp-api.onrender.com/api/characters/students`;

const parent = document.querySelector(".parent");

getcharacters();

async function getcharacters(){
   try{ 
    var data = await fetch(api);
    var result = await data.json();

    console.log("Fetched Data", result);
    
rendercharacters(result);

   }catch(err){
    console.log("err", err);
   }

}

async function rendercharacters(result){
    
    try{

      for(var i=0; i<result.length; i++){
     
        var box = document.createElement("div");
        box.classList.add("box");

        var charimage = document.createElement("img");
        charimage.classList.add('charimage');
        if(result[i].image){ 
                charimage.setAttribute('src', result[i].image);
                box.append(charimage); 
        }else{
            var no = Math.floor(Math.random() * 10);
            //charimage.innerHTML = `<img class="char-image" src='hp${no}.jpg'>`
            //console.log('n', no)
            //charimage.setAttribute('src', `Images/hp${no}.jpg`);
            charimage.setAttribute('src', `hp${no}.jpg`);
            box.append(charimage); 
        }

        var charname = document.createElement('p');
                charname.innerHTML = `<b>Character Name:</b> ${result[i].name}`;
                charname.classList.add('details');
                box.append(charname);

        var actorname = document.createElement('p');
        actorname.classList.add('details');
        if(result[i].actor){        
                actorname.innerHTML = `<b>Actor: </b> ${result[i].actor}`;
                box.append(actorname);
        }else{
                actorname.innerHTML = `<b>Actor: </b> Harry Potter Comic Character`;
                box.append(actorname);
        }

        var profession = document.createElement('p');
        profession.classList.add('details');
        profession.innerHTML = `<span> Hogwarts Student</span>`;
        box.append(profession);

        var house = document.createElement('p');
        house.classList.add('details');
        house.innerHTML = `<b>House: </b>${result[i].house}`;
        box.append(house);

        var dob = document.createElement('p');
        dob.classList.add('details');
        dob.innerHTML = `<b>DOB:</b> ${result[i].dateOfBirth}`;
        box.append(dob);

        var gender = document.createElement('p');
        gender.classList.add('details');
        gender.innerHTML = `<b>Gender:</b> ${result[i].gender}`;
        box.append(gender);

        parent.append(box);
      
    }//for j loop end

    }catch(err){
        console.log("Error", err);
    }

}


function charSearch(){
  let userInput = document.getElementById("searchbar").value;
  userInput = userInput.toLowerCase();

  let search = document.getElementsByClassName("box");
  
  for(var i=0; i<search.length; i++){
      if(!search[i].innerHTML.toLowerCase().includes(userInput)){
          search[i].style.display = "none";
      }else{
          search[i].style.display = "list-item";
      }
  }
}
