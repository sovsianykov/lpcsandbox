

export const items = [
    { id : '1', title : "Capital Account Management" ,
        foo : (id:string)=> {
            console.log(id)
            return id
        } },
    { id : '2' , title : "Schedule of Investments " , foo : (id:string)=> {
            console.log(id)
            return id
        } },
    { id : '3' , title : "Cash Flow Activity" , foo : (id:string)=> {
            console.log(id)
            return id
        }  },

];
export const tabItems = [
    { id : '1', title : "Your Interests" , foo : ()=>console.log('callback  1' ) },
    { id : '2' , title : "Carlyle Group" , foo : ()=>console.log('message 2' ) },
    { id : '3' , title : "Total Fund" , foo : ()=>console.log('message 3' )  },
];

export const repHeaderItem = {title : "Carlyle Amphora Partners", numberOfAccounts: 5, date: new Date(2021,0,3) }