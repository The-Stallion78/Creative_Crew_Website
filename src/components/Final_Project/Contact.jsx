import React, { useState } from 'react'

export default function Contact() {
  const  [data, setData] = useState ( {
    fullName: '',
    email: '',
    phone: '',
    orderPlace: '',
    requirements: '',
    deadline : ''

  } );

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData ( (preVal)=> {
      return {
        ...preVal,
        [name]: value,
      }

    } )
  }

  const formSubmit = (e) => {
     e.preventDefault(); // stops forms from refreshing 
     alert (`Form Submitted Successfully! Thank You for Contacting Us!`);
  }


  return (
    <>
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>


            {/* Starting the code from here HEADING SECTION*/}
            <div className='text-center'>
              <h1> Contact US </h1>
            </div>

            {/* FORM SECTION */}
            <div className='container contact_div my-5'>
              <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                  <form action="" onSubmit={formSubmit} >
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label" required>Enter Full Name</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"
                        name='fullName'
                        value={data.fullName}
                        onChange={InputEvent}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label" required>Enter Your Phone Number</label>
                      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+92 12345678"
                        name='phone'
                        value={ data.phone}
                        onChange={InputEvent}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label" required>Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"
                        name='email'
                        value={data.email}
                        onChange={InputEvent}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Place Your Order</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Creative Crew Company Website"
                        name='orderPlace'
                        value={data.orderPlace}
                        onChange={InputEvent}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label" required>Briefly Enlist Your Project Requirements</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                        name='requirements'
                        value={ data.requirements}
                        onChange={InputEvent}
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Enter Project Deadline</label>
                      <input type="date" class="form-control" id="exampleFormControlInput1"
                        name='deadline'
                        value={data.deadline }
                        onChange={InputEvent}
                      />
                    </div>

                    <div class="col-10 mt-4">
                      <button class="btn btn-primary" type="submit" required>Submit form</button>
                    </div>
                  </form>


                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}
