import React, {Component} from 'react';

class Signin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	};

	onEmailChange = (event)=> {
		this.setState({signInEmail:event.target.value})
	}

	onPasswordChange = (event)=>{
		this.setState({signInPassword:event.target.value})
	}

	onSubmitSignIn = () =>{
		fetch('https://smart-brain-backend-ymes.onrender.com/signin', {
			method: 'post',
			headers: {
			'Content-Type' : 'application/json',
		    // "Accept": "application/json; odata=verbose"
			},
			body : JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response=>response.json())
		// .then (data =>{
		// 	if (data === 'success'){
		.then(user => {
			//Nokte:id baraye in ast k karbare jadid register nakarde natavanad signin konad
        if(user.id){
          this.props.loadUser(user);
		  this.props.onRouteChange('home');
			}
		})
		//this.props.onRouteChange('home');
	}

	render(){
		const{onRouteChange} = this.props;
		return(
	  <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-5">
		<main className="pa4 black-80">
		  <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" value="Sign in" onClick={this.onSubmitSignIn} />
		    </div>
		    <div className="lh-copy mt3">
		      <p onClick={onRouteChange} className="f6 link dim black db pointer">Register</p>
		    </div>
		  </div>
		</main>
	  </article>
		);
	}
	
}

export default Signin;


//in ham javab midahad
// import React, {Component} from 'react';

// class Signin extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			signInEmail: '',
// 			signInPassword: ''
// 		}
// 	};

// 	onEmailChange = (event)=> {
// 		this.setState({signInEmail:event.target.value})
// 	}

// 	onPasswordChange = (event)=>{
// 		this.setState({signInPassword:event.target.value})
// 	}

// 	onSubmitSignIn = (event) =>{
// 		//console.log(this.state);
// 		fetch('http://localhost:3003/signin', {
// 			method: 'post',
// 			headers: {'Content-Type' : 'application/json'},
// 			body : JSON.stringify({
// 				email: this.state.signInEmail,
// 				password: this.state.signInPassword
// 			})
// 		})
// 		.then(response=>response.json())
// 		// .then (data =>{
// 		// 	if (data === 'success'){
// 		.then(user => {
//         if(user.id){
//           this.props.loadUser(user);
// 		  this.props.onRouteChange('home');
// 			}
// 		})
// 		//this.props.onRouteChange('home');
// 	}

// 	render(){
		
// 		return(
// 	  <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-5">
// 		<main className="pa4 black-80">
// 		  <div className="measure">
// 		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
// 		      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
// 		      <div className="mt3">
// 		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
// 		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 		        type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
// 		      </div>
// 		      <div className="mv3">
// 		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
// 		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 		        type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
// 		      </div>
// 		    </fieldset>
// 		    <div className="">
// 		      <input 
// 		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
// 		      type="submit" value="Sign in" onClick={this.onSubmitSignIn} />
// 		    </div>
// 		    <div className="lh-copy mt3">
// 		      <p onClick={this.onRouteChange} className="f6 link dim black db pointer">Register</p>
// 		    </div>
// 		  </div>
// 		</main>
// 	  </article>
// 		);
// 	}
	
// }

// export default Signin;


//ghadimi (dorost ast)
// import React, {Component} from 'react';

// const Signin =({onRouteChange})=>{
// 	return(
// 	  <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw5 center shadow-5">
// 		<main className="pa4 black-80">
// 		  <div className="measure">
// 		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
// 		      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
// 		      <div className="mt3">
// 		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
// 		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 		        type="email" name="email-address"  id="email-address"/>
// 		      </div>
// 		      <div className="mv3">
// 		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
// 		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 		        type="password" name="password"  id="password"/>
// 		      </div>
// 		    </fieldset>
// 		    <div className="">
// 		      <input onClick={()=>onRouteChange('home')} 
// 		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
// 		      type="submit" value="Sign in"/>
// 		    </div>
// 		    <div className="lh-copy mt3">
// 		      <p onClick={()=>onRouteChange('home')} className="f6 link dim black db pointer">Register</p>
// 		    </div>
// 		  </div>
// 		</main>
// 	  </article>
// 		);
// }

// export default Signin;