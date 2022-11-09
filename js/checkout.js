// Exercise 6

function validate() {
	event.preventDefault()
	
	let error = 0
	let i =0
	const letters = /^[A-Za-z]+$/
	const nineNumbers = /^[0-9]{9}$/
	const letterNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/
	const mail = /^\S+@\S+\.\S+$/
	const any = ""
	
	const fields = { Name:"", Email:"", Address:"", LastN:"", Password:"", Phone:""	}
	const regex = [letters, mail, any, letters, letterNumber, nineNumbers]


	Object.keys(fields).map((f) => { 
		// Get the input fields
		fields[f] = document.getElementById(`f${f}`)
		fields[f].classList.remove('is-invalid');
		
		// Validate fields for lenght, emptyness and specific constraints
		if (fields[f].value == "" || fields[f].value.length < 3 || !fields[f].value.match(regex[i])){
			fields[f].classList.add('is-invalid');
			error++
		}
		i++ 
	})

	if(error == 0){
		var form = document.querySelector('.needs-validation')
		form.classList.add('was-validated')
	}
}