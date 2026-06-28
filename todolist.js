let a=[];
let n=1;
alert("enter all activities and enter 0 to stop adding");
for(let i=0;i<100;i++)
    {let num=prompt("enter elment");
        a.push(num);
        if (num==0)
            break;
    }
a.pop();
while(n!=0){
let ch=prompt("enter 1 for adding ; enter 2 for deleting;3 for showing all ;4 for exit");
    ch=parseInt(ch)
switch(ch){ 
    case 3:
    {//show all activities
    for(i=0;i<a.length;i++)
    {console.log(a[i]);}
        break;}
    
    case 1:
    {
    //add activity
    let addn=prompt("how many activities you want to add");
    for(i=0;i<addn;i++){
    num=prompt("enter what you want to add");
    a.push(num);} 
    break;  }

        case 2:
{   
    //delete activity
let deln=prompt("enter which activity you want to delete");
for (i=0;i<a.length;i++)
{
    if(a[i]===deln)
    {numd=i;
        break;
    }
}
a.splice(numd,1);
    break;}

        case 4:
            {
                n=0;
                alert("thank you");
                break;
            }
        
default:
    alert("wrong input");
        } }