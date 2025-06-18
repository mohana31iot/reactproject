import React from 'react'

const Apirequest = async({url ='',optionsObj=null,errMsg=null}) => {
 try{
    const response = await fetch(url,optionsObj);
    if(!response.ok) throw Error("Data not received")
 }
catch(error){
    errMsg =errMsg.message
}
finally{
    return errMsg
}
}

export default Apirequest
