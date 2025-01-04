
const options=[
            {id:"option1",text:"Javascript",votes:0},
            {id:"option2",text:"Python",votes:0} ,
            {id:"option3",text:"Java",votes:0},
            {id:"option4",text:"C++",votes:0},   
            ];

$("button").click(function (){
    const selectedoption=$('input[name="poll"]:checked').val();
    // console.log(selectedoption);
    if(!selectedoption)
    {
        alert("please select at least one option!");
    }

    const valueId=selectedoption;

    // console.log(valueId);
   const selectedObject=options.find((option)=>option.id===valueId);
//    console.log(selectedObject);
     if(selectedObject)
     {
    selectedObject.votes++;
     }
    
     displayResult();

});

function displayResult()
{
      const result=document.getElementById("result");
      result.innerHTML=" ";

      options.forEach((option)=>{
        const percentage=((option.votes/getTotalVote())*100).toFixed(2)||0;
        const barWidth=percentage>0 ? percentage+"%":"0%";

        const optionResult=document.createElement("div");
        optionResult.className="option-result";

        optionResult.innerHTML=`
        <span class="option-text">${option.text}</span>
        <div class="bar-container">
        <div class="bar" style="width: ${barWidth};"></div>
        </div>
        <span class="percentage">${percentage}%</div>
        `; 
    
   result.appendChild(optionResult);    
    });
}

function getTotalVote()
{
    return options.reduce((total,option)=>total+option.votes,0);
}
displayResult();