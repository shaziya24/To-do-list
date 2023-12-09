
exports.getDate= function(){
    const today = new Date();
    //how to fomat a date in javascript
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString("en-US", options);
      

};


module.exports.getDay = getDay;
function getDay(){
    let today = new Date();
   
    let options = { weekday: 'long' };
    let day = today.toLocaleDateString("en-US", options);
     return day;

};
