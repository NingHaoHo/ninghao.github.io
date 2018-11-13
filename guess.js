const tags = ['drama', 'japan', 'food', 'movie', 'malaysia','bottle']; 
const asnwerList = document.getElementById('choices'); 
const list = document.getElementById('list-data'); 
let answer = ''; 

//ramdon color for buttons 
function randomColor(){
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

// get tagneme from tags                                              
 asnwerList.innerHTML = ""; 
  answer = tags[Math.floor(Math.random() * tags.length)]; 
  getPhotos(answer); 

// random select answer from tags 
  let choices = []; 
    choices.push(answer); 

  for(let i = 0; i < choices.length; i++){
    const random = tags[Math.floor(Math.random() * tags.length)]; 
    if (choices.indexOf(random) == -1){
      choices.push(random);  
    }
    // sort answers
      choices.sort(function(){
      return Math.random() * 2 - 1; 
    }) 
      //answer link to button 
   const btn = document.createElement('button');
    btn.innerHTML = choices[i]; 
    btn.style.backgroundColor= randomColor(); 
    asnwerList.appendChild(btn); 
    
    btn.onclick = function(){
      if (btn.innerHTML == answer){
        window.alert('You are right!')
      }
      else {
        window.alert('Sorry the answer is ' + answer); 
      }
     location.reload()
   }
  }

// API function
function getPhotos(tagName){
  fetch ('https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=ocVLBTAPieCT6onVS9tRgL5r5zcWyr2aFRgGuvi32DBKAOlN8d')
  .then(function(response){ 
    
    if (!response.ok){
      window.alert('It seem like something went wrong, please contact administrator')
      return;
    }
    return response.json(); 
  })
  .then(function(result){
    if (!result){
      return; 
    }
      // clear list
      list.innerHTML = ""; 

      const items = result.response;
      
      for(let i = 0; i < items.length; i++){
        const item = items[i]; 

        if (item.photos != undefined){
        const altSizes = item.photos[0].alt_sizes
        const imgSrc = altSizes[altSizes.length
        - 3].url;
        const img = document.createElement('img');
        img.src = imgSrc;  
      
        const li = document.createElement('li');
        li.appendChild(img); 
        list.appendChild(li);
          }
      }
  })
  .catch(function(err){
    window.alret('It seem like the API Tumblr system down, please try again later on.')
  })
}