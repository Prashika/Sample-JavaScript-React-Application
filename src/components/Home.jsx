import React,{Component} from 'react'

class Search extends React.Component{
 
    constructor(){
        super()
 
        this.state={
 
          firstName: '',
          lastName : '',
          fName_Error: '',
          lName_Error:''
        }
    }
 
    handleFirstName= event=>{
        this.setState({
            firstName: event.target.value
        })
    }
 
    handleLastName= event=>{
        this.setState({
            lastName : event.target.value
        })
    }
 
    validate= ()=>{
        let fName_Error= '';
        let lName_Error= ''
 
        if(!this.state.firstName){
            fName_Error= 'First Name is Missing'
        }
       
 
        if(!this.state.lastName){
            lName_Error= 'Last Name is Missing'
        }
        
 
        if(fName_Error, lName_Error){
            this.setState({fName_Error, lName_Error})
            return false
        }
 
        return true
    }
    
    handleSubmit = event=>{
 
        event.preventDefault()
        const isValid= this.validate();
 
        if(isValid){
           
            this.setState({
 
                firstName: '',
                lastName : '',
                fName_Error: '',
                lName_Error:''                
            })
            console.log(this.state)
        }
    }
 
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
             <h2>
                     Search:
                   </h2>
                <div>
                    <label>FirstName</label>
                    <input class ='firstName' type='text' value={this.state.firstName} onChange={this.handleFirstName}/>
                    {/* {this.state.fName_Error?( */}
                    <div style={{color:'red', fontSize: 12}}>{this.state.fName_Error}</div>
                        {/* ):null} */}
                </div>&nbsp;
                <div>
                    <label>LastName</label>
                    <input class ='lastName' type='text' value={this.state.lastName} onChange={this.handleLastName}/>
                    <div style={{color:'red', fontSize: 12}}>{this.state.lName_Error}</div>
                </div>               
                
                <button class='submitSearch' type='submit'>Search</button>
            </form>
        )
    }
}
export default Search
