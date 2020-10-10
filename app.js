const addform=document.querySelector('.add-form');   //tapping the form ie listen
const list=document.querySelector('.list-group'); //tapping the lists

const search=document.querySelector('.search input');   //tapping the search bar

const generateTemplate = (todo) =>
{
        const html=`
        <li class="list-group-item d-flex justify-content-between ">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>        
        </li>
        `;
        list.innerHTML += html;
};

 
addform.addEventListener('submit',i=>
{
        i.preventDefault();
        const todo= addform.add.value.trim();  //in todo get addfrom->name of form & then value
                                                //trim to remove spaces.


        //check if string in not null
        if(todo.length)     
        {generateTemplate(todo);//passing todo to gentemptlate 
         addform.reset();   //to clear the from
        } 

        

});



//delete todos

list.addEventListener('click',i =>
{
        if(i.target.classList.contains('delete'))    //i.targer gets targer element,classlist of that element and contains a sepcific class
           {
               i.target.parentElement.remove();   //cause parent of targer element ie delete is li and which we want to remove
           } 
    });


search.addEventListener('keyup', () => {

        const term = search.value.trim().toLowerCase(); //get the term from search everytime user types a new key. and ofcourse trim it
        filtertodos(term);
}
);


const filtertodos = (term)  =>
{
                //convert list.children ie li elements from a collection which they are by default to array and then we can use array methods on it
                Array.from(list.children)      //filter method chaining it will go from all the items in array list and give new array it will return
                .filter( (i) => !i.textContent.toLowerCase().includes(term) )   //here i is referring to each li item and filter returs truw or false 
                               //filter out which do have a match 
                .forEach( (i) => i.classList.add('filtered')) ;   //here we apply filter class to each li        

                                                          //here textcontent will look inside the li tag
                                                        //include will check if term matches
                           //and we negate cause we want array that dont contain the terms so that we will hide those



                           //this is for array which do contains the terms
                           //just remove ! and remove the filtered class 
                Array.from(list.children)    
                .filter( (i) => i.textContent.toLowerCase().includes(term) )  
                .forEach( (i) => i.classList.remove('filtered')) ;   
      
};


