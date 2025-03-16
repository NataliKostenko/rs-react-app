import './forma.css'
export default function Forma() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" /><br />
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" /><br />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" /><br />
      <label htmlFor="password1">Password:</label>
      <input type="" id="password1" name="password1" /><br />
      <label htmlFor="password2">Password:</label>
      <input type="" id="password2" name="password2" /><br />

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

    </form>
  )
}