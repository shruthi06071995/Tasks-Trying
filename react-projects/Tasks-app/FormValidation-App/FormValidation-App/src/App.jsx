import { useState } from 'react';
import './App.css'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    phone: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{3,32}$/,
        message: "Phone number must have at least 10 digits"
      }
    },
    password: {
      required: "Password is required",
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}$/,
        message: "Password must have at least 8 characters, include uppercase, lowercase, number and special character"
      }
    },
    country: { required: "Please select a Country" },
    course: { required: "Please select a courses" },
    skills: { required: "Select at least one skill" }
  };

  return (
    <>
      <div className='container mt-5' >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Form.Group>
              <Form.Label>*Name</Form.Label>
              <Form.Control {...register('name', registerOptions.name)} />
              <Form.Text>
                <small className='text-danger'>
                  {errors?.name && errors.name.message}
                </small>
              </Form.Text>
            </Form.Group>
          </div> <br />
          <div>
            <Form.Group>
              <Form.Label>*Phone Number</Form.Label>
              <Form.Control {...register('phone', registerOptions.phone)} />
              <Form.Text>
                <small className='text-danger'>
                  {errors?.phone && errors.phone.message}
                </small>
              </Form.Text>
            </Form.Group>
          </div> <br />
          <div>
            <Form.Group className='mb-3' controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' {...register('email', registerOptions.email)} />
              <Form.Text id='emailHelpBlock'>
                <small className='text-danger'>
                  {errors?.email && errors.email.message}
                </small>
              </Form.Text>
            </Form.Group>
          </div> <br />
          <div>
            <Form.Label htmlFor='inputPassword5'>*Password</Form.Label>
            <Form.Control type='password' id='inputPassword5' aria-describedby='passwordHelpBlock' {...register('password', registerOptions.password)} />
            <Form.Text id='passwordHelpBlock' muted>
              <small className='text-danger'>
                {errors?.password && errors.password.message}
              </small>
            </Form.Text>
          </div> <br />
          <div>
            <Form.Group>
              <Form.Label>Select Country</Form.Label>
              <Form.Select {...register('country', registerOptions.countries)}>
                <option>Countries</option>
                <option value="1">India</option>
                <option value="2">Afganisthan</option>
                <option value="3">Pakisthan</option>
              </Form.Select>
              <Form.Text>
                <small className='text-danger'>
                  {errors?.country && errors.country.message}
                </small>
              </Form.Text>
            </Form.Group>
          </div> <br />
          <div>
            <Form>
              <Form.Check
                type='radio'
                label="REACT"
                name="course"
                {...register("course", registerOptions.course)}
              />
              <Form.Check
                type='radio'
                label="Angular"
                name="course"
                {...register("course", registerOptions.course)}
              />
              <small className='text-danger'>
                {errors?.course && errors.course.message}
              </small>
            </Form>

          </div> <br />
          <div>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="HTML"
                    name="course"
                    type={type}
                    id={`inline-${type}-HTML`}
                  />
                  <Form.Check
                    inline
                    label="CSS"
                    name="course"
                    type={type}
                    id={`inline-${type}-CSS`}
                  />
                  <Form.Check
                    inline
                    label="JavaScript"
                    name="course"
                    type={type}
                    id={`inline-${type}-JavaScript`}
                  />
                </div>
              ))}
            </Form>
          </div> <br />
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </form >
      </div >
    </>
  )
}

export default App
