import './form.css'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

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
		})
})

type SchemaProps = z.infer<typeof userSchema>;

export default function Form2() {
	{
		const {
			handleSubmit,
			formState: { errors },
		} = useForm<SchemaProps>({
			resolver: zodResolver(userSchema),
		});

		function submitForm() {
			console.log('submit');
		}

		return (<><h1>React Hook Form</h1><form onSubmit={handleSubmit(submitForm)}>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" name="name" /><br />
			{errors?.name && <span>{errors.name.message}</span>}

			<label htmlFor="age">Age:</label>
			<input type="number" id="age" name="age" /><br />
			{errors?.age && <span>{errors.age.message}</span>}

			<label htmlFor="email">Email:</label>
			<input type="text" id="email" name="email" /><br />
			{errors?.email && <span>{errors.email.message}</span>}

			<label htmlFor="password">Password:</label>
			<input type="" id="password" name="password" /><br />
			{errors?.password && <span>{errors.password.message}</span>}

			<label htmlFor="confirm">Password:</label>
			<input type="" id="confirm" name="confirm" /><br />
			{errors?.confirm && <span>{errors.confirm.message}</span>}

			<label htmlFor="gender">Gender:</label>
			<select name="gender" id="gender">
				<option value="men">Men</option>
				<option value="woman">Woman</option>
			</select><br />


			<div className='accept'>
				<input type="checkbox" id="T&C" name="T&C" />
				<label htmlFor="T"> accept Terms and Conditions agreement</label>
			</div>


			<div>
				<label htmlFor="picture ">Choose file to upload</label>
				<input
					type="file"
					id="picture "
					name="picture "
					accept=".jpg, .jpeg, .png" />
			</div>

			<label htmlFor="country ">Country:</label>
			<select name="country " id="country ">
				<option value="usa">USA</option>
				<option value="canada">Canada</option>
			</select><br />

			<button type='submit'>Submit</button>

		</form></>
		)
	}
}