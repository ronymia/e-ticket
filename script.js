// Js Functionality Start Here 

const seat = document.getElementsByClassName('seat')
let totalAmount = 0;
let count = 0;

for(let item of seat){
    item.addEventListener('click',function(){
            count = count + 1
            if(count <= 4){
                      
            item.style.backgroundColor ="#1DD100" 
            item.style.color ="white"
            
            // decriment seat value 
            const seatCount = document.getElementById('seat-count');
            const seatText = seatCount.innerText;
            const seatNumber = parseInt(seatText);
            seatCount.innerText = seatNumber - 1;
            // if(count <=)
            // incriment set selected
            const seatincriment = document.getElementById('seatinc')
            const seatIncText = seatincriment.innerText;
            const seatincNum = parseInt(seatIncText);
            const count = seatincNum + 1;
            seatincriment.innerText = count;
        
            // Append Seat Information
            const daynamicSeat = document.getElementById('daynamicSeat');
            const seatName = item.innerText;
            const seatClass = 'Economy'
            const seatPrice = 550;
            const div = document.createElement('div')
            const p = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
            p.innerText = seatName;
            p2.innerText = seatClass;
            p3.innerText = seatPrice
            div.appendChild(p)
            div.appendChild(p2)
            div.appendChild(p3)
            div.setAttribute('class','flex')
            daynamicSeat.appendChild(div)
    
            //Total Price Calulation//
    
            const totalPrice =document.getElementById('totalPrice')
    
            totalAmount = totalAmount + seatPrice;
            console.log(totalAmount);
            totalPrice.innerText =totalAmount;
            }
            if(count >= 1){
                const nextButton =document.getElementById('modal-btn')
                nextButton.removeAttribute('disabled')
                nextButton.classList.add('bg-green-400')
            }
    })
}



const btn = document.getElementById('applyBtn');
console.log(btn.innerText);

btn.addEventListener('click',function(){
    const inputFeild = document.getElementById('input-feild').value;
    const inputFeildConvert = inputFeild.split(' ').join('').toUpperCase()
    if(inputFeildConvert == 'NEW15'){
       
        const grandPrice = document.getElementById('grandPrice')
        const discountvalue = totalAmount *15/100;
        const mainGrandPrice = totalAmount - discountvalue;
        grandPrice.innerText = mainGrandPrice;
        inputFeild.value = ' '

    }
    if(inputFeildConvert =='COUPLECODE'){
        const grandPrice = document.getElementById('grandPrice')
        const discount = totalAmount * 20/100;
        const mainGrandPrice = totalAmount -discount;
        grandPrice.innerText =mainGrandPrice;
    }
    else{
        console.log('wrong');
    }


})


const modalBtn = document.getElementById('modal-btn');
modalBtn.addEventListener('click',function(){
const body = document.getElementById('body');
body.classList.add('hidden')

const modal = document.getElementById('modal');
modal.classList.remove('hidden')

})


    








// Js Functionality End Here 














































































// const daynamicSeat = document.getElementById('daynamicSeat')
        // 
        // 
        // const p = document.createElement('p')
        // p.innerText = seatName;
        // const p2 = document.createElement('p')
        // p2.innerText = seatClass;
        // 
        // const p3= document.createElement('p')
        // p3.innerText = seatPrice;
        // daynamicSeat.appendChild(p)
        // daynamicSeat.appendChild(p2)
        // daynamicSeat.appendChild(p3)












        // My First Code 






        // const seat = document.getElementsByClassName('seat')
        // let totalAmount = 0;
        // let count = 0;
        
        // for(let item of seat){
        //     item.addEventListener('click',function(){
        
              
        //             item.style.backgroundColor ="#1DD100" 
        //             item.style.color ="white"
                    
        //             // decriment seat value 
        //             const seatCount = document.getElementById('seat-count');
        //             const seatText = seatCount.innerText;
        //             const seatNumber = parseInt(seatText);
        //             seatCount.innerText = seatNumber - 1;
        //             // if(count <=)
        //             // incriment set selected
        //             const seatincriment = document.getElementById('seatinc')
        //             const seatIncText = seatincriment.innerText;
        //             const seatincNum = parseInt(seatIncText);
        //             const count = seatincNum + 1;
        //             seatincriment.innerText = count;
                
        //             // Append Seat Information
        //             const daynamicSeat = document.getElementById('daynamicSeat');
        //             const seatName = item.innerText;
        //             const seatClass = 'Economy'
        //             const seatPrice = 550;
        //             const div = document.createElement('div')
        //             const p = document.createElement('p')
        //             const p2 = document.createElement('p')
        //             const p3 = document.createElement('p')
        //             p.innerText = seatName;
        //             p2.innerText = seatClass;
        //             p3.innerText = seatPrice
        //             div.appendChild(p)
        //             div.appendChild(p2)
        //             div.appendChild(p3)
        //             div.setAttribute('class','flex')
        //             daynamicSeat.appendChild(div)
            
        //             //Total Price Calulation//
            
        //             const totalPrice =document.getElementById('totalPrice')
            
        //             totalAmount = totalAmount + seatPrice;
        //             console.log(totalAmount);
        //             totalPrice.innerText =totalAmount;
            
              
        //         // Set Color on Seat        
             
        
                 
        //     })
        // }
        
        
        
        // const btn = document.getElementById('applyBtn');
        // console.log(btn.innerText);
        
        // btn.addEventListener('click',function(){
        //     const inputFeild = document.getElementById('input-feild').value;
        //     const inputFeildConvert = inputFeild.split(' ').join('').toUpperCase()
        //     if(inputFeild == 'KHUBAIB2020'){
        //         console.log('You Cand Do It');
        //     }
        //     else{
        //         console.log('wrong');
        //     }
        
        
        // })
        
        
        
        
        
        // const modalBtn = document.getElementById('modal-btn');
        // modalBtn.addEventListener('click',function(){
        
        // const ticketBuySection = document.getElementById('ticket-buy');
        // ticketBuySection.classList.add('hidden')
        
        
            
        // })
        
        
        
        
        // if(totalAmount > 1500 ){
        //     const discountPriceElement = document.getElementById('discount');
        //     const discountPrice = totalAmount - (totalAmount*15/100);
        //     discountPriceElement.innerText = discountPrice;
        //     totalPrice.innerText = discountPrice;
        //     const str = 'Grand Total'
        //     const div = document.createElement('div');
        //     const p = Document.createElement('p');
        //     const span = document.createElement('span');
        //     p.innerText = str;
        //     span.innerText = discountPrice;
        //     div.appendChild(p)
        //     div.appendChild(span)
        //     discountPriceElement.appendChild(div)
          
        
        // }
        
        
        
        
        
        
        
        
        
        
        
        
        
        // const daynamicSeat = document.getElementById('daynamicSeat')
                // 
                // 
                // const p = document.createElement('p')
                // p.innerText = seatName;
                // const p2 = document.createElement('p')
                // p2.innerText = seatClass;
                // 
                // const p3= document.createElement('p')
                // p3.innerText = seatPrice;
                // daynamicSeat.appendChild(p)
                // daynamicSeat.appendChild(p2)
                // daynamicSeat.appendChild(p3)        