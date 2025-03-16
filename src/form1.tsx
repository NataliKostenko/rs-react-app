import { useRef } from 'react';
import './form.css'
import { z } from 'zod';


export default function Form1() {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmRef = useRef<HTMLInputElement>(null);
	const genderRef = useRef<HTMLInputElement>(null);
	const acceptRef = useRef<HTMLInputElement>(null);
	const pictureRef = useRef<HTMLInputElement>(null);
	const countryRef = useRef<HTMLInputElement>(null);
	const nameValidation = new RegExp(/^ [А - ЯA - Z]/);
	const passwordValidation = new RegExp(
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
	);


	const userSchema = z.object({
		name: z.string()
			.regex(nameValidation, {
				message: 'Your password is not valid',
			}),
		age: z.number().refine(n => n > 0),
		email: z.string().email('Invalid email'),
		password: z.string().min(4, { message: 'Must have at least 1 character' })
			.regex(passwordValidation, {
				message: 'Your password is not valid',
			}),
		confirm: z.string().min(4, { message: 'Must have at least 1 character' })
			.regex(passwordValidation, {
				message: 'Your password is not valid',
			}),
	})



	function handleSubmit(event: { preventDefault: () => void; }) {
		event.preventDefault();

		const validUser = userSchema.parse({
			name: nameRef.current?.value,
			age: ageRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			confirm: confirmRef.current?.value,
			gender: genderRef.current?.value,
			accept: acceptRef.current?.checked,
			picture: pictureRef.current?.value,
			country: countryRef.current?.value
		})


		try {
			userSchema.parse({
				name: nameRef.current?.value,
				age: ageRef.current?.value,
				email: emailRef.current?.value,
				password: passwordRef.current?.value,
				confirm: confirmRef.current?.value,
				gender: genderRef.current?.value,
				accept: acceptRef.current?.checked,
				picture: pictureRef.current?.value,
				country: countryRef.current?.value

			});
		} catch (error) {
			console.error('Validation error:', error.message);
		}
	}

	return (<><h1>uncontrolled components</h1><form onSubmit={handleSubmit}>
		<label htmlFor="name">Name:</label>
		<input type="text" id="name" name="name" ref={nameRef} defaultValue='' /><br />

		<label htmlFor="age">Age:</label>
		<input type="number" id="age" name="age" ref={ageRef} defaultValue='0' /><br />

		<label htmlFor="email">Email:</label>
		<input type="text" id="email" name="email" ref={emailRef} defaultValue='' /><br />

		<label htmlFor="password">Password:</label>
		<input type="" id="password" name="password" ref={passwordRef} defaultValue='' /><br />

		<label htmlFor="confirm">Password:</label>
		<input type="" id="confirm" name="confirm" ref={confirmRef} defaultValue='' /><br />

		<label htmlFor="gender">Gender:</label>
		<select name="gender" id="gender" ref={genderRef}>
			<option value="men">Men</option>
			<option value="woman">Woman</option>
		</select><br />

		<div className='accept'>
			<input type="checkbox" id="T&C" name="T&C" ref={acceptRef} />
			<label htmlFor="T&C"> accept Terms and Conditions agreement</label>
		</div>

		<div>
			<label htmlFor="picture ">Choose file to upload</label>
			<input
				type="file"
				id="picture "
				name="picture "
				accept=".jpg, .jpeg, .png"
				ref={pictureRef} />
		</div>

		<label htmlFor="country ">Country:</label>
		<select name="country " id="country " ref={countryRef}>
			<option value="usa">USA</option>
			<option value="canada">Canada</option>
		</select><br />

		<button type='submit'>Submit</button>

	</form></>
	)
}
