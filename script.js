var myData=document.getElementById("APIData");
 async function getallData()
    {
          try {
             var myFetch=await  fetch("https://anapioficeandfire.com/api/books");
            var data=await myFetch.json();console.log(data);
            for(var i=0;i<data.length;i++)
             {
                 //Declaring a Variable Card and creating a Element DIV
                var card=document.createElement("div");
                card.innerHTML=('Book Name : '+data[i].name);//+'\n'+'isbn : '+data[i].isbn+'No Of Pages : '+data[i].numberOfPages+"Author Name: "+data[i].authors+"Publisher Name: "+ data[i].publisher+'\n'+ "Released On: "+ data[i].released
                card.style.textAlign="left";
                card.style.backgroundColor="pink"; card.style.border="2px solid white";card.style.width="270px";card.style.height="200px";
                // Displaying isbn info in html Page
                 var myisbn=document.createElement("li");
                myisbn.innerHTML=('isbn : '+data[i].isbn);card.appendChild(myisbn);
                //Displaying the Number of pages 
                var myPages=document.createElement("li")
                myPages.innerHTML=('No Of Pages : '+data[i].numberOfPages);card.appendChild(myPages);
                 //Displaying the Author Name
               var myauthors=document.createElement("li");
                myauthors.innerHTML=("Author Name: "+data[i].authors);card.appendChild(myauthors);
                //Displaying the PUblishers 
                var myPublish=document.createElement("li");
                myPublish.innerHTML=("Publisher Name: "+ data[i].publisher);card.appendChild(myPublish);
                //Displaying the Released Date
                var myRelease=document.createElement("li");
                myRelease.innerHTML=("Released On: "+ data[i].released);card.appendChild(myRelease);
                //Displaying the five characters 
                // var mychar=document.createElement("div");
                // mychar.innerText=(data[i].characters);card.appendChild(mychar);
               myData.appendChild(card);
             }
          } catch (error) {
              console.log(error);
          }
    }
    getallData()//Calling the Async Function 